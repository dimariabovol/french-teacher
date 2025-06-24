# Project Requirements Document (PRD)

## Project Name: FrenchTeacher

---

## 1. Overview
FrenchTeacher is an AI-powered web application for complete French beginners to practice conversational French through guided chat sessions with real-time feedback and post-session improvement suggestions. The app offers predefined beginner topics, AI interaction via Google Gemini, and personalized grammar/vocabulary assistance. It includes login functionality and session history.

---

## 2. Goals
- Help beginners practice and gain confidence in French conversation.
- Provide private, topic-driven AI conversations with correction support.
- Learn Django (including auth and models), PostgreSQL, and GCP deployment.
- Gain hands-on fullstack experience via Django Template + SSR approach.

---

## 3. Target Users
- Adults with zero to basic French language experience.
- Self-directed learners preferring private, on-demand practice.
- Users preparing for travel, exams, or casual conversations.

---

## 4. Core Features

### 4.1 Authentication
- User signup/login using Django's auth system.
- Secure password storage.
- Session-based authentication.

### 4.2 Topic Selection
- List of beginner-level conversation topics (e.g., Greetings, Ordering Food).
- Displayed as cards/buttons using Flowbite components.

### 4.3 AI Chat Interface
- Gemini-powered two-way chat.
- SSR-based message display with minimal JS.
- Immediate feedback after each message (inline correction or suggestions).

### 4.4 Post-Session Report
- Auto-generated summary with:
  - Grammar/vocabulary mistakes
  - Suggestions for improvement
  - Vocabulary list

### 4.5 Session History
- Authenticated users can access past session reports.
- Sessions stored in PostgreSQL with timestamp and topic.

---

## 5. Non-Functional Requirements
- Responsive design via Tailwind CSS.
- Accessible, mobile-friendly interface.
- Minimal client-side JS; mostly server-rendered.
- Secure user authentication and session storage.

---

## 6. Tech Stack
- **Backend:** Django
- **Frontend:** Django Templates (SSR)
- **Styling:** Tailwind CSS + Flowbite
- **Database:** PostgreSQL
- **AI Integration:** Google Gemini API
- **Auth:** Django built-in auth
- **Deployment:** Google Cloud Platform (App Engine or Compute Engine)

---

## 7. Setup Approach
- Start with **local environment setup** (no Docker initially).
- Docker can be added post-MVP for deployment or reproducibility.

---

## 8. MVP Milestones

| Week | Tasks |
|------|-------|
| 1 | Scaffold project, setup Django, PostgreSQL, Tailwind, Flowbite |
| 2 | Implement user authentication, create UI for topic selection |
| 3 | Connect Gemini API, build chat interface with dummy feedback |
| 4 | Add real-time feedback and message corrections |
| 5 | Store session results, build report generation, enable session history |
| 6 | Polish UI, test flows, deploy to GCP |

---

## 9. Stretch Goals (Post-MVP)
- Downloadable or emailed PDF reports
- Voice input/output support
- User progress tracking over time
- Localization (UI in other languages)

---

