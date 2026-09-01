# 📚 Full-Stack CRUD Application


## 🛠️ Technologies Used

### Frontend

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router"/>
</p>

### Backend

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose"/>
</p>

### Tools

<p>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm"/>
</p>




A full-stack Book Management CRUD (Create, Read, Update, Delete) web application built using React, Node.js, Express.js, and MongoDB. This project allows users to add, view, update, and delete book information through a simple and user-friendly interface.

---

## 🚀 Features

* ➕ Add new books
* 📖 View all books
* 📝 Update book information
* ❌ Delete books
* 🔄 Full CRUD functionality
* 🔗 Frontend and Backend API integration
* 💾 MongoDB database integration
* ⚡ Fast and responsive React interface
* 🎨 Clean and simple user interface
* 🌐 REST API based backend

---

## 🛠 Technologies Used

### Frontend

* ⚛️ React.js
* ⚡ Vite
* 🎨 Tailwind CSS
* 🔗 Axios
* 🛣️ React Router DOM
* JavaScript (ES6+)

### Backend

* 🟢 Node.js
* 🚂 Express.js
* 🍃 MongoDB
* 🦫 Mongoose
* 🔗 REST API
* 🌐 CORS
* 🔐 dotenv

---

## 📂 Project Structure

```text
Full-Stack-Crud-App
│
├── backend
│   ├── controllers
│   ├── modules
│   ├── routes
│   ├── db.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── public
│   ├── src
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## 📥 Clone the Repository

Open Terminal / Command Prompt / Git Bash and run:

```bash
git clone https://github.com/Memonul-Islam-Tuhin/Full-Stack-Crud-App.git
```

---

## 📂 Navigate to the Project Folder

After cloning the repository:

```bash
cd Full-Stack-Crud-App
```

---

# 💻 Frontend Setup

Go to the frontend folder:

```bash
cd frontend
```

Install the required dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

# 🖥️ Backend Setup

Open another Terminal / Command Prompt and go to the backend folder:

```bash
cd backend
```

Install the required dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm start
```

The backend API will normally run on:

```text
http://localhost:3000
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder.

Example:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Replace `your_mongodb_connection_string` with your own MongoDB connection string.

> ⚠️ Never upload your `.env` file to GitHub. Make sure `.env` is included in `.gitignore`.

---

## 🔄 CRUD Operations

This application supports the following CRUD operations:

| Operation | Description                     |
| --------- | ------------------------------- |
| ➕ Create  | Add a new book                  |
| 📖 Read   | View all available books        |
| 📝 Update | Edit existing book information  |
| ❌ Delete  | Remove a book from the database |

---

## 📚 Book Information

Each book can contain information such as:

* 📕 Book Name
* ✍️ Book Author
* 💰 Book Price
* 📅 Publish Date
* 🔘 Status

---

## 🔗 API Integration

The React frontend communicates with the Express.js backend using Axios.

Example API endpoint:

```text
GET /api/viewbook
```

The backend handles requests and communicates with the MongoDB database using Mongoose.

---

## ▶️ Run the Full Application

You need to run both frontend and backend servers.

### Terminal 1 — Backend

```bash
cd backend
npm install
npm start
```

### Terminal 2 — Frontend

```bash
cd frontend
npm install
npm run dev
```

After starting both servers, open the frontend URL in your browser.

---

## 📸 Application Overview

The application provides a simple interface for managing books where users can:

1. Add a new book
2. View the complete book list
3. Update book details
4. Delete unwanted books

---

## 👨‍💻 Author

**Memonul Islam Tuhin**

GitHub:
https://github.com/Memonul-Islam-Tuhin

---

## 📜 License

This project is open-source and available under the MIT License.
