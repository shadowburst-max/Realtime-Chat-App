# Realtime Chat App

A real-time chat application built with **React, Node.js, Express, MongoDB, and Socket.io**. The app features **JWT authentication, real-time messaging, user search functionality, and online user tracking**.

## 🚀 Features
- **User Authentication**: Sign up, login, and persist sessions using **JWT**.
- **Real-time Messaging**: Instant messaging powered by **Socket.io**.
- **Online Users Tracking**: View currently active users.
- **Search Functionality**: Find users and conversations easily.
- **Secure Communication**: Data is securely stored in **MongoDB**.
## 🛠 Tech Stack
### **Frontend**
- React.js (with Context API for state management)
- Tailwind CSS

### **Backend**
- Node.js & Express.js
- MongoDB (Mongoose ORM)
- Socket.io (for real-time communication)
- JSON Web Token (JWT) for authentication

## 📌 Project Structure
```
ChatApp/
│── frontend/      # React app
│── backend/       # Express server
│── .env           # Environment variables
│── package.json   # Dependencies
│── README.md      # Project documentation
```

## 🛠 API Endpoints
| Method | Endpoint         | Description          |
|--------|----------------|----------------------|
| POST   | /api/auth/signup | Register a new user |
| POST   | /api/auth/login  | Authenticate user   |
| POST   | /api/auth/logout  | Logout user   |
| POST    | /api/messages/send/:id | Send a new message |
| GET  | /api/messages/:id | Fetch messages |
| GET    | /api/users | Get users |

## 🎯 Future Enhancements
- **Group chats**
- **File sharing**
- **Voice messaging**
- **Audio and video calling**
- **Push notifications**


