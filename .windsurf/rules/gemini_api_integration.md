---
trigger: always_on
---

# Gemini API Integration

- All Gemini calls go through a single service file: `services/gemini.py`
- Views/templates must not directly call Gemini
- Use mocks/stubs in development unless told otherwise
