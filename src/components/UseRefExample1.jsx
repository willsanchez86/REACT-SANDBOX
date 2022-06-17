import { useRef } from 'react';

// UseRef always returns property that contains one property called "current" --> Within that property, is the actual DOM element

// 1. UseRef can reference any DOM element
// 2. UseRef can get previous state

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current);
    inputRef.current.value = 'Hello';
    paraRef.current.innerText = 'GoodBye';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          ref={inputRef}
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  );
}

export default UseRefExample1;
