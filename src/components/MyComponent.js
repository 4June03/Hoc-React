//Class component - giai đoạn đầu
//function component - giai đoạn sau khi học react hook

import React, { useState } from "react"; //import react
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor2";

// class MyComponent extends React.Component {
//   state = {
//     listUser: [
//       { id: 1, name: "Huu Nghia", age: 21 },
//       { id: 2, name: "Huu Nghia2", age: 21 },
//       { id: 3, name: "Huu Nghia3", age: 21 },
//       { id: 4, name: "Huu Nghia4", age: 21 },
//     ],
//   };

//   handleAddNewUser = (object) => {
//     this.setState({
//       listUser: [object, ...this.state.listUser], //Sử dùng spread syntax để copy mảng cũ
//     });
//   };

//   //JSX: cho phép viết code js bên trong html
//   render() {
//     //Hàm render quy định nội dung component trả ra

//     return (
//       //Trả ra 1 khối Html
//       //hạn chế của JSX: chỉ trả về được 1 phần tử html
//       //truyền function từ component cha sang con (khi truyền không có '()' của function)
//       <>
//         <div className="a">
//           <UserInfor handleAddNewUser={this.handleAddNewUser} />
//           <DisplayInfor
//             name="Huu nghia"
//             age="21"
//             users={this.state.listUser}
//           ></DisplayInfor>
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

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
