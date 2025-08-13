# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





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
<img width="1920" height="1080" alt="homepage png" src="https://github.com/user-attachments/assets/6a0a4074-2165-412e-b6dd-56149a668b43" />

Auth Page
<img width="1920" height="1080" alt="register png" src="https://github.com/user-attachments/assets/23f3dca4-b85f-4d1d-95f6-53f738cae41a" />
<img width="1920" height="1080" alt="login png" src="https://github.com/user-attachments/assets/b5735eee-933d-4e67-ac43-cc1499738c7e" />
<img width="1920" height="1080" alt="login2 png" src="https://github.com/user-attachments/assets/accceed2-a925-4a83-bd65-26c450ad7f36" />

Add Book Page
<img width="1920" height="1020" alt="addbook png" src="https://github.com/user-attachments/assets/64a9ffef-b960-4c74-aea0-9c015f12b4f5" />

viewBook Page
<img width="1920" height="1080" alt="viewbook png" src="https://github.com/user-attachments/assets/e086d8a3-70bc-496b-b74c-38c5b8b1c9ea" />

<img width="1920" height="1020" alt="viewbookreview png" src="https://github.com/user-attachments/assets/c39a459c-3e29-482b-b281-eda25113de52" />


Add Review Page
<img width="1920" height="1020" alt="addreview png" src="https://github.com/user-attachments/assets/84ed0890-dea0-4ea6-846d-31a90caf5709" />


