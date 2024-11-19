//Class component - giai đoạn đầu
//function component - giai đoạn sau khi học react hook

import React from "react"; //import react
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor2";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Huu Nghia", age: 21 },
      { id: 2, name: "Huu Nghia2", age: 21 },
      { id: 3, name: "Huu Nghia3", age: 21 },
      { id: 4, name: "Huu Nghia4", age: 21 },
    ],
  };

  //JSX: cho phép viết code js bên trong html
  render() {
    //Hàm render quy định nội dung component trả ra

    return (
      //Trả ra 1 khối Html
      //hạn chế của JSX: chỉ trả về được 1 phần tử html
      <div>
        <UserInfor />
        {/* truyen du lieu sang Component con */}
        <DisplayInfor
          name="Huu nghia"
          age="21"
          users={this.state.listUser}
        ></DisplayInfor>
      </div>
    );
  }
}

//Muốn sử dụng component này thì phải export
//môi lần gọi file MyComponent.js thì sẽ hiểu muốn sử dụng MyComponet
export default MyComponent;
