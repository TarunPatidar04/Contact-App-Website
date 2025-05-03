# Contact App with MongoDB

A simple contact management application built with Node.js, Express, MongoDB, and EJS for templating.

## Features

- Add new contacts
- View a list of all contacts
- View details of a specific contact
- Update contact information
- Delete contacts

## Project Structure

```
.env
.gitignore
index.js
package.json
models/
    contacts.models.js
public/
    bootstrap.min.css
    custom.css
views/
    add-contact.ejs
    home.ejs
    show-contact.ejs
    update-contact.ejs
    partials/
        footer.ejs
        header.ejs
```

## Prerequisites

- Node.js installed on your system
- MongoDB instance running locally or in the cloud
- A `.env` file with the following content:
  ```
  MONGODB_URL=<your-mongodb-connection-string>
  ```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Contact-App-MongoDB-1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your `.env` file with your MongoDB connection string.

4. Start the application:
   ```bash
   node index.js
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Endpoints

### GET `/`
- Displays a list of all contacts.

### GET `/add-contact`
- Renders a form to add a new contact.

### POST `/add-contact`
- Adds a new contact to the database.

### GET `/show-contact/:id`
- Displays details of a specific contact.

### GET `/update-contact/:id`
- Renders a form to update a contact.

### POST `/update-contact/:id`
- Updates the contact information in the database.

### GET `/delete-contact/:id`
- Deletes a contact from the database.

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Templating Engine**: EJS
- **Frontend**: HTML, CSS (Bootstrap and custom styles)
