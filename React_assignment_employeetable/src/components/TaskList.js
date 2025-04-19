import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { name: "Task 1", status: "done" },
    { name: "Task 2", status: "not done" },
    { name: "Task 3", status: "done" }
  ]);

  const toggleStatus = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          status: task.status === "done" ? "not done" : "done"
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Employee Task List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Status</th>
            <th>Toggle</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>
                <button onClick={() => toggleStatus(index)}>
                  Mark as {task.status === "done" ? "Not Done" : "Done"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
