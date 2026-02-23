import React from "react";

const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onComplete(task.id)}
        aria-label={`Mark "${task.text}" as ${task.completed ? "incomplete" : "complete"}`}
      />
      <span className="task-text">{task.text}</span>
      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete "${task.text}"`}
      >
        ✕
      </button>
    </li>
  );
};

export default TaskItem;