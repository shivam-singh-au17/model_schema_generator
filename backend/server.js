const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/generate-schema', (req, res) => {
    const { modelName, fields, language } = req.body;
    const schemaContent = generateSchema(modelName, fields, language);

    const filePath = path.join(__dirname, `${modelName}.${language === 'typescript' ? 'ts' : 'js'}`);
    fs.writeFileSync(filePath, schemaContent);

    res.download(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error generating file');
        }
        fs.unlinkSync(filePath); // Clean up the file after sending
    });
});

const generateSchema = (modelName, fields, language) => {
    const generateFieldDefinition = (field) => {
        let fieldDef = `  ${field.name}: { type: ${field.type}`;
        if (field.required) {
            fieldDef += ', required: true';
        }
        fieldDef += ' }';
        return fieldDef;
    };

    const fieldsStr = fields.map(field => generateFieldDefinition(field)).join(',\n');

    if (language === 'typescript') {
        return `
import { Schema, model, Document } from 'mongoose';

export interface I${modelName} extends Document {
${fields.map(field => `  ${field.name}: ${field.type};`).join('\n')}
}

const ${modelName}Schema = new Schema<I${modelName}>({
${fieldsStr}
});

export const ${modelName} = model<I${modelName}>('${modelName}', ${modelName}Schema);
    `;
    } else {
        return `
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ${modelName}Schema = new Schema({
${fieldsStr}
});

module.exports = mongoose.model('${modelName}', ${modelName}Schema);
    `;
    }
};

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
