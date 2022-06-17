import React, { useState, useCallback } from 'react';

//! Only use when having performance issues
// Wrapping Button Component in React.Memo allows memoization of full component AND allows the use of useCallback() function

function UseCallbackExample() {
  const [tasks, setTasks] = useState([]);

  // useCallback prevents Button component from being re-rendered along with the callback function within
  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task']);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log('Button rendered');
  return (
    <div>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
});

export default UseCallbackExample;
