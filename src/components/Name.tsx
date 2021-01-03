import React, { useState } from "react";

type Props = {
  name: string;
};

const Name: React.FC<Props> = (props) => {
  const { name } = props;
  const [age, setAge] = useState(0);
  return (
    <>
      <h1 data-testid="name">my name is {name}</h1>
      <h2>I'm {age} old</h2>
      <button type="button" onClick={() => setAge(age + 1)}>
        how older are you?
      </button>
    </>
  );
};

export default Name;
