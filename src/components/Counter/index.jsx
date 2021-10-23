import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const usersList = [
    { name: "Roman", age: 23 },
    { name: "Oleg", age: 23 },
  ];

  const onIncrementCounter = () => {
    setCounter((prevState) => {
      return ++prevState;
    });
  };

  const onDecrementCounter = () => {
    setCounter((prevState) => {
      return --prevState;
    });
  };
  console.log(counter);
  return (
    <div>
      <button type="button" onClick={onIncrementCounter}>
        {"+"}
      </button>
      <span>{counter}</span>
      <button type="button" onClick={onDecrementCounter}>
        {"-"}
      </button>
      <div>
        {usersList.map((user, index) => {
          return (
            <div key={index}>
              <p>{user.age}</p>
              <p>{user.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Counter;
