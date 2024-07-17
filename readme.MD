# Model Schema Generator

This project is a Model Schema Generator application built with Express, Node.js, MongoDB, and JavaScript/TypeScript for the backend, and HTML, CSS, and JavaScript for the frontend. It allows users to dynamically generate Mongoose model schemas by specifying fields, their data types, and whether they are required. Users can also download the generated schema files in either JavaScript or TypeScript format.

## Features

- Dynamic field addition and removal
- Support for various data types
- Required field option
- Generate schema in JavaScript or TypeScript
- Download generated schema files
- Responsive and visually appealing UI

## File Structure

```
model-schema-generator/
├── backend
│   └── server.js
├── frontend
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   ├── index.html
└── README.md
```

## Installation

### Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    node server.js
    ```

The backend server will run on `http://localhost:5000`.

### Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Open `index.html` in your browser to use the frontend interface.

## Usage

1. Open the frontend application by opening `index.html` in your browser.

2. Enter the model name in the "Model Name" field.

3. Select the language (JavaScript or TypeScript) from the dropdown menu.

4. Add fields by clicking the "Add Field" button. For each field, enter the field name, select the data type, and choose if the field is required or not.

5. Click the "Generate Schema" button to create and download the schema file.

## Backend

### `backend/server.js`

Handles the Express server setup, schema generation logic, and file download functionality.

#### Endpoints

- **POST `/api/generate-schema`**: Generates and sends the schema file based on user input.

### Schema Generation Logic

Generates Mongoose schema based on the fields provided by the user. Supports both JavaScript and TypeScript formats.

## Frontend

### `frontend/index.html`

Contains the HTML structure for the user interface.

### `frontend/css/styles.css`

Provides the styling for the application, ensuring a responsive and visually appealing layout.

### `frontend/js/script.js`

Handles the dynamic addition and removal of fields, form submission, and interaction with the backend API.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.


## Contact

For any questions or feedback, please contact [shivamsingh4458@gmail.com].

### Instructions for Usage

1. **Clone the Repository:** Clone the repository to your local machine using the provided Git command.
2. **Install Backend Dependencies:** Navigate to the `backend` directory and install the necessary dependencies using `npm install`.
3. **Start the Backend Server:** Launch the backend server using `node server.js`.
4. **Open the Frontend:** Navigate to the `frontend` directory and open `index.html` in your browser.
5. **Generate Schemas:** Use the interface to input model details, add fields, and generate schema files for download.