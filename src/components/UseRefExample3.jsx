import { useState } from 'react';
import ToDo from './ToDo';

// 3. Memory Leak Error Fix
// ? Update: No warning about setState on unmounted components: Previously, React warned about memory leaks when you call setState on an unmounted component. This warning was added for subscriptions, but people primarily run into it in scenarios where setting state is fine, and workarounds make the code worse. We've removed this warning.

function UseRefExample3() {
  const [showToDo, setShowToDo] = useState(true);

  return (
    <div>
      {showToDo && <ToDo />}
      <button
        onClick={() => setShowToDo(!showToDo)}
        className="btn btn-primary"
      >
        ToggleTodo
      </button>
    </div>
  );
}

export default UseRefExample3;
