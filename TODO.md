# TODO.md for FrenchTeacher

This file outlines the implementation steps based on PRD.md. Tasks are grouped by phase and ordered for efficient development.

---

## Project Setup

- [x] Initialize Django project (`django-admin startproject`)
- [x] Create core app (e.g., `app`, `main`, or `conversation`)
- [ ] Setup PostgreSQL and connect via `settings.py`
- [ ] Install and configure Tailwind CSS with Django
- [ ] Add Flowbite and verify UI components work
- [ ] Create base template with navigation bar and layout blocks

---

## Authentication + Topics

- [ ] Implement user registration view and form
- [ ] Implement login/logout with Django auth views
- [ ] Protect views with login-required decorator
- [ ] Create model for `ConversationTopic`
- [ ] Seed database with beginner topics
- [ ] Display topics on homepage using Flowbite cards

---

## AI Chat Interface (Initial)

- [ ] Create view and form for conversation input
- [ ] Build Django template-based chat UI (message loop)
- [ ] Connect to Gemini API (mock first)
- [ ] Display AI responses under user inputs
- [ ] Add loading state / basic spinner

---

## Real-Time Feedback

- [ ] Modify message handling to return inline corrections
- [ ] Highlight mistakes (e.g., use color or tooltip)
- [ ] Display grammar/vocab suggestions after each reply
- [ ] Create utility to parse Gemini response structure

---

## Session History & Reports

- [ ] Create `Session` and `Message` models
- [ ] Save conversation data after each session
- [ ] Build report generation logic (from saved session)
- [ ] Create view to list past sessions by date/topic
- [ ] Display full report per session

---

## Final Polish + Deployment

- [ ] Finalize all templates and styling
- [ ] Add basic 404 and error pages
- [ ] Test all flows: login, chat, report, history
- [ ] Create GCP project and deploy via App Engine or Compute Engine
- [ ] Verify database and API keys work in production
