import React, { useState } from "react";

//Viết dưới dạng functional compone

const UserInfor = ({ handleAddNewUser }) => {
  const [name, setName] = useState("nghia");
  const [age, setAge] = useState(20);
  const [address, setAddress] = useState("Lang Son");

  const handleOnchangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnchangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    handleAddNewUser({
      id: Math.random() * 100 + 1,
      name: name,
      age: age,
    });
  };

  return (
    <>
      My name is {name} and I'm from {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnchangeName(event)}
        ></input>

        <input
          value={age}
          type="text"
          onChange={(event) => handleOnchangeAge(event)}
        ></input>

        <button>Submit</button>
      </form>
    </>
  );
};

export default UserInfor;
