//Class component - giai đoạn đầu
//function component - giai đoạn sau khi học react hook

import React from "react"; //import react

class MyComponent extends React.Component {
  //Kế thừa lại tất cả tính năng của React component

  //state là một js Object
  //dùng để lưu trữ và qly dữ liệu thay đổi theo thời gian trong một component
  state = {
    name: "Nghĩa",
    address: "Lạng Sơn",
    age: 21,
  };

  handleClick(event) {
    console.log("My name is " + this.state.name);
    console.log("age: " + this.state.age);

    this.setState({
      name: "Hữu Nghĩa", //sử dụng hàm setSate để cập nhật các thuộc tính cúa state
      age: Math.random() * 100,
    });
  }

  handleOnchangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(event.target.value);
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); //Hàm ngăn load lại trang
    console.log(this.state);
  };

  //JSX: cho phép viết code js bên trong html
  render() {
    //Hàm render quy định nội dung component trả ra
    return (
      //Trả ra 1 khối Html
      //hạn chế của JSX: chỉ trả về được 1 phần tử html
      <div>
        My first component
        {/* sử dụng dấu {} ctrinh hiểu rằng đang muốn sử dụng viết logic */}
        My name is {this.state.name} and I'm from {this.state.address}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnchangeInput(event)}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

//Muốn sử dụng component này thì phải export
//môi lần gọi file MyComponent.js thì sẽ hiểu muốn sử dụng MyComponet
export default MyComponent;
