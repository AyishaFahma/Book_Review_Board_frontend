# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



<!-- project Information -->


# Book Review Board

A MERN stack application where users can post books they've read and leave short reviews.

Repositories

Frontend: https://github.com/AyishaFahma/Book_Review_Board_frontend

Backend: https://github.com/AyishaFahma/Book_Review_Board_backend


# Features
User authentication (Register/Login)

Add , view books

Add reviews to books

Responsive UI with React.js

RESTful API backend with Express.js & MongoDB

##  Setup Instructions

Prerequisites

-Node.js 
-npm or yarn
-MongoDB (local or Atlas cloud)
-Git


Clone Repositories

# Frontend
git clone https://github.com/AyishaFahma/Book_Review_Board_frontend.git
cd Book_Review_Board_frontend
npm install

# Backend
git clone https://github.com/AyishaFahma/Book_Review_Board_backend.git
cd Book_Review_Board_backend
npm install

Run the Application

# Backend
cd backend
nodemon index.js

# Frontend
cd frontend
npm run dev


## API routes


-- POST	/register	Register a new user 	        { "name": "max", "email": "max@gmail.com", "password": "max123" }

-- POST	/login	 Login a user and get JWT token	    { "email": "max@gmail.com", "password": "max123" }

-- POST	/add-book	Add a new book (requires login)	{ "title": "Book Name", "author": "Author Name", "description": "Short summary" , "image":"url image"}	     { Authorization: "Bearer <token>" }

-- GET	/view-allBooks	Get all books

-- GET	/view-Book/:id	Get details of a single book by ID

-- POST	/add-review/:id	  Add a review to a book (requires login)	  { "rating": 4, "comment": "Great book!" }	  { Authorization: "Bearer <token>" }

-- GET	/view-review/:id	Get all reviews for a specific book by ID



## Sample .env config

-- PORT = 4000

-- DATABASE = mongodb+srv://<username>:<password>@cluster0.mongodb.net/book_review_board

-- JWT_SECRETKEY= SECRETKEY

## Screenshots

Home page

Auth Page

Add Book Page

viewBook Page

Add Review Page

