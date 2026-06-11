# 🚗 CarMatch AI

CarMatch AI is a MERN-based web application that helps car buyers quickly discover the most suitable vehicles based on their preferences. Instead of browsing through hundreds of options, users receive a personalized shortlist of recommended cars along with AI-powered explanations.

## 🌟 Problem Statement

Car buyers often struggle with decision-making because there are too many vehicle options available. CarMatch AI simplifies this process by matching user requirements with suitable cars and explaining the recommendations.

---

## 🚀 Features

### User Preference Form

Users can select:

* Budget
* Family Size
* Usage Type
* Fuel Type
* Priority (Safety, Mileage, Features)

### Smart Recommendation Engine

Generates:

* Top 3 recommended cars
* Match score percentage
* Recommendation reasons

### AI Explanation

For each recommended car:

* Why this car matches
* Pros
* Cons
* Hidden trade-offs
* Final buying advice

---

## 🛠️ Tech Stack

### Frontend

* React.js
* CSS3
* Fetch API

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### AI Integration

* OpenRouter / Gemini API

---

## 📂 Project Structure

```text
carmatch-ai/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── carController.js
│   │   └── aiController.js
│   ├── models/
│   │   └── Car.js
│   ├── routes/
│   │   └── carRoutes.js
│   ├── index.js
│   └── package.json
│
├── README.md
└── .gitignore
```

## ⚙️ Recommendation Logic

Each car receives points based on:

* Budget Match
* Family Size Match
* Usage Match
* Fuel Type Match
* Priority Match

The top-scoring cars are returned as recommendations.

---

## 🔌 API Endpoints

### Get Recommendations

```http
POST /api/recommend
```

### Get AI Explanation

```http
POST /api/explain
```

---

## 🖥️ Local Setup

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Backend `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_api_key
```

Frontend `.env`

```env
VITE_API_URL=https://carmatch-1mtu.onrender.com/api
```

---

## 🌐 Deployment

### Frontend

Deployed on Vercel

### Backend

Deployed on Render

---

## 📈 Future Improvements

* User Authentication
* Save Favorite Cars
* Compare Multiple Cars
* Real-Time Vehicle Data
* Advanced AI Analysis
* Car Image Integration

---

## 👩‍💻 Author

**Srivani Katta**

Built as a Full Stack MERN Take-Home Assignment.
