Personalized Songs Platform
Overview
This project is a full-stack web application enabling users to order personalized songs. Built with a React frontend and Flask backend, the platform integrates seamlessly with a MySQL database and a Stripe-powered payment system to deliver an engaging user experience. It showcases both aesthetic and functional design, emphasizing responsiveness, scalability, and secure data handling.

Features
Dynamic User Interface: A React-based frontend with responsive design for an intuitive user experience across devices.
Customized Ordering Process: Includes a step-by-step form for users to specify song details and preferences.
Secure Payments: Stripe integration ensures seamless and secure transactions.
Robust Backend: Flask-based backend processes and validates user inputs and manages communication with the database.
Persistent Data Storage: MySQL database for efficient and scalable data management.
Automated Deployment: CI/CD pipeline ensures smooth updates and maintenance.
Technologies Used
Frontend:
React.js
CSS (with media queries for responsiveness)
Axios for API communication
Backend:
Flask (Python)
SQLAlchemy
Database:
MySQL
Payment Integration:
Stripe API
Deployment:
Docker
GitHub Actions for CI/CD
Installation & Setup
Clone the repository:

git clone <repository-url>
Navigate to the project directory:

cd personalized-songs-platform
Install dependencies:

Frontend:
cd frontend
npm install
Backend:
cd backend
pip install -r requirements.txt
Set up the MySQL database:

Create a new database.
Configure connection details in the Flask backend.
Start the application:

Frontend:
npm start
Backend:
flask run
Access the app at http://localhost:3000.

Usage
Navigate to the homepage and select a song customization option.
Fill out the form specifying the song’s details and preferences.
Proceed to the payment page to complete the transaction securely.
Receive confirmation of the order, with the song being delivered via email upon completion.
