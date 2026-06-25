# Realtime Chat App

A full-stack real-time chat application built with **React, Node.js, Express.js, MongoDB, and Socket.IO**. The application features **JWT-based authentication**, **real-time messaging**, **user search**, and **online user status tracking** for seamless communication.

## 🚀 Features

* **User Authentication:** Secure sign-up, login, and session management using JWT.
* **Real-time Messaging:** Instant one-to-one messaging powered by Socket.IO.
* **Online User Tracking:** View the online/offline status of users in real time.
* **User Search:** Search for users and conversations quickly.
* **Secure Data Storage:** User and chat data are securely stored in MongoDB.

## 🛠 Tech Stack

### Frontend

* React.js
* Context API (State Management)
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Socket.IO
* JSON Web Token (JWT)

## 📂 Project Structure

```text
Realtime-Chat-App/
│── frontend/      # React application
│── backend/       # Express server
│── .env           # Environment variables
│── package.json   # Project dependencies
│── README.md      # Project documentation
```

## 📡 API Endpoints

| Method | Endpoint                 | Description                    |
| ------ | ------------------------ | ------------------------------ |
| POST   | `/api/auth/signup`       | Register a new user            |
| POST   | `/api/auth/login`        | Authenticate a user            |
| POST   | `/api/auth/logout`       | Logout the current user        |
| POST   | `/api/messages/send/:id` | Send a message                 |
| GET    | `/api/messages/:id`      | Retrieve conversation messages |
| GET    | `/api/users`             | Fetch all users                |

## 🎯 Future Enhancements

* Group chat support
* File and image sharing
* Voice messaging
* Audio and video calling
* Push notifications
