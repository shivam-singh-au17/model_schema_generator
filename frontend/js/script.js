function addField() {
    const fieldsContainer = document.getElementById('fields');
    const newField = document.createElement('div');
    newField.className = 'field';
    newField.innerHTML = `
    <input type="text" class="field-name" placeholder="Field Name">
    <select class="field-type">
        <option value="String">String</option>
        <option value="Number">Number</option>
        <option value="Date">Date</option>
        <option value="Boolean">Boolean</option>
        <option value="Object">Object</option>
        <option value="Array">Array</option>
    </select>
    <label><input type="checkbox" class="field-required"> Required</label>
    <button class="remove-field" onclick="removeField(this)">Remove</button>
  `;
    fieldsContainer.appendChild(newField);
}

function removeField(button) {
    button.parentElement.remove();
}

async function generateSchema() {
    const modelName = document.getElementById('modelName').value.trim();
    if (!modelName) {
        alert('Please enter a model name.');
        return;
    }

    const language = document.getElementById('language').value;
    const fields = [];
    document.querySelectorAll('.field').forEach(fieldElement => {
        const fieldName = fieldElement.querySelector('.field-name').value.trim();
        const fieldType = fieldElement.querySelector('.field-type').value;
        const fieldRequired = fieldElement.querySelector('.field-required').checked;

        if (fieldName) {
            fields.push({ name: fieldName, type: fieldType, required: fieldRequired });
        }
    });

    if (fields.length === 0) {
        alert('Please add at least one field.');
        return;
    }

    const response = await fetch('http://localhost:5000/api/generate-schema', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ modelName, fields, language }),
    });

    if (response.ok) {
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${modelName}.${language === 'typescript' ? 'ts' : 'js'}`;
        link.click();
    } else {
        alert('Failed to generate schema.');
    }
}
