<<<<<<< HEAD

# Simple E-Commerce API Web Application

This is a full-stack web application built as part of the AdaptNxt assignment. It simulates a simple e-commerce system with user authentication, product listing, cart management, and admin controls.

---

## 🔧 Features Implemented

### 👤 User Module
- Registration and Login with JWT-based authentication
- Role-based access for **Customer** and **Admin**
- Logout option available at the bottom of the interface

### 🛒 Customer Module
- Browse products with search and pagination
- Add items to cart, update quantity using `+ / -` buttons, and remove items
- Place orders and receive a detailed bill

### 🛠️ Admin Module
- Add new products
- Update and delete existing products
- View all products with editing options

---

## 📁 Project Structure

```
ecommerce-api/
├── controllers/
├── models/
├── routes/
├── middleware/
├── server.js
├── .env
└── package.json
└── ecommerce-ui-final-updated.html
```

---

## 🚀 How to Run the Project

### 1. Clone or Download the Repository

```
git clone <your_repo_link>
cd ecommerce-api
```

### 2. Install Dependencies

```
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory with the following content:

```
PORT=5000
MONGO_URL=<your_mongodb_connection_url>
JWT_SECRET=yourSecretKey
```

### 4. Start Backend Server

```
npm start
```

> Make sure MongoDB is running locally or via MongoDB Atlas.

### 5. Open the Frontend

Open the file `ecommerce-ui-final-updated.html` in your browser and use the application.

---

## ✅ Test Credentials

### Admin:
- Email: vivek9494@gmail.com
- Password: vivek

### Customer:
- Email: vivek94947@gmail.com
- Password: vivek

---

## 🎯 Notes

- The application interface is kept simple and functional.
- The layout and styling have been improved to give a clean and user-friendly experience.
- Pagination, search, cart functions, and admin features have been tested thoroughly.

---

## 👨‍💻 Author

Developed as part of the AdaptNxt assignment.

=======
# adaptnxt-ecommerce
>>>>>>> b9a97368a9871e6bf2dd3ddecabb0ebad46db9da
