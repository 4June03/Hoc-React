//Class component - giai đoạn đầu
//function component - giai đoạn sau khi học react hook

import React, { useState } from "react"; //import react
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor2";

//Muốn sử dụng component này thì phải export
//môi lần gọi file MyComponent.js thì sẽ hiểu muốn sử dụng MyComponet

//Chuyển đổi MyComponent từ Class componet sang functional Component
const MyComponent = () => {
  let listUsers = [
    { id: 1, name: "Huu Nghia", age: 21 },
    { id: 2, name: "Huu Nghia2", age: 21 },
    { id: 3, name: "Huu Nghia3", age: 21 },
    { id: 4, name: "Huu Nghia4", age: 21 },
  ];
  const [users, setUsers] = useState(listUsers);

  const handleAddNewUser = (object) => {
    setUsers([object, ...users]);
  };

  return (
    <>
      <div className="a">
        <UserInfor handleAddNewUser={handleAddNewUser} />
        <DisplayInfor
          name="Huu nghia"
          age="21"
          users={users}
          setUsers={setUsers}
        ></DisplayInfor>
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
