# To-Do App — Project Context

## Overview

A minimal, client-side to-do application built with React and Vite. The app allows users to manage a simple task list entirely in the browser with no backend, database, or authentication required.

## Goals

- Provide a clean, functional task management UI
- Keep the implementation simple and easy to understand
- Demonstrate core React patterns (state, props, event handling, component composition)

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI library |
| Vite | Dev server and bundler |
| Plain CSS | Styling (no CSS framework) |
| localStorage | Optional persistence between sessions |

## Features (V1)

- **Add tasks** — Enter a task description and submit via button or Enter key
- **Complete tasks** — Toggle a checkbox to mark a task as done (visually struck through)
- **Delete tasks** — Remove a task permanently from the list

## Out of Scope (V1)

- User authentication
- Backend / API integration
- Database persistence
- Task editing
- Due dates, priorities, or categories
- Drag-and-drop reordering
- Multi-user or sharing features

## Project Structure

```
/
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies and scripts
├── context.md               # This file
└── src/
    ├── main.jsx             # React DOM entry point
    ├── App.jsx              # Root component — owns task state
    ├── styles/
    │   └── app.css          # Global and component styles
    └── components/
        ├── AddTaskForm.jsx  # Controlled form for adding new tasks
        ├── TaskList.jsx     # Renders the list of TaskItem components
        └── TaskItem.jsx     # Single task row with complete/delete controls
```

## State Shape

Task state lives in `App.jsx` and is passed down via props.

```js
// Array of task objects
[
  {
    id: string,        // crypto.randomUUID() or Date.now() string
    text: string,      // task description
    completed: boolean // whether the task is done
  }
]
```

## Key Design Decisions

1. **State owned by App** — All task state lives at the top level to make data flow explicit and predictable.
2. **No external state library** — `useState` is sufficient for V1 scope; Redux/Zustand would be overkill.
3. **No CSS framework** — Plain CSS keeps dependencies minimal and makes styles easy to inspect and modify.
4. **LocalStorage (optional)** — Tasks can be persisted with `useEffect` writing to `localStorage` on every state change, and initialized from `localStorage` on mount.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```