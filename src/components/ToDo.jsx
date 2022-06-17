import { useState, useEffect, useRef } from 'react';

function ToDo() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setTodo(data);
          setLoading(false);
        }, 3000);
      });
    //   .catch((err) => console.log(err));
  }, []);

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>;
}

export default ToDo;
