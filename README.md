# FrenchTeacher

## 🧠 Overview

**FrenchTeacher** is an AI-powered web app for complete French beginners to practice conversational skills with real-time guidance and personalized session feedback. The app allows users to chat with an AI tutor (powered by Google Gemini API), receive inline corrections, and view session summaries — all in a simple, secure, and private environment.

---

## ✨ Features

- Beginner-friendly conversation topics
- AI-powered chat experience using Google Gemini
- Inline grammar and vocabulary correction
- Personalized feedback report after each session
- Session history with full report viewing

---

## 🧱 Tech Stack

| Layer     | Technology              |
| --------- | ----------------------- |
| Backend   | Django (Python)         |
| Frontend  | Django Templates (SSR)  |
| Styling   | Tailwind CSS + Flowbite |
| Database  | PostgreSQL              |
| AI Engine | Google Gemini API       |
| Hosting   | Google Cloud Platform   |

---

## 🗂 Project Structure (Simplified)

```
frenchteacher/
├── app/                 # Main Django app (models, views, templates)
├── templates/           # HTML templates (SSR)
├── static/              # CSS/JS assets
├── services/            # Gemini API wrapper and utils
├── utils/               # Feedback and parsing logic
├── requirements.txt     # Python dependencies
├── manage.py            # Django CLI
├── README.md            # Project description
└── RULES.md             # Project-specific rules
```

---

## 🚧 Development Notes

- SSR only: no frontend frameworks
- Use `.env` for secrets (API keys, DB info)
- Session data is private per user
- Deployment target: GCP (App Engine or Compute Engine)
- Keep files small (<200 lines) and reusable

---

## 📌 Roadmap

See [`TODO.md`](./TODO.md) for milestone-based development plan.

## 📖 Rules

All project-specific rules are in [`RULES.md`](./RULES.md). Windsurf follows these strictly.
