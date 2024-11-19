import React from "react";

class UserInfor extends React.Component {
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

  handleOnchangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); //Hàm ngăn load lại trang
    console.log(this.state);
    this.props.handleAddNewUser({
      id: Math.random() * 100 + 1,
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        {/* sử dụng dấu {} ctrinh hiểu rằng đang muốn sử dụng viết logic */}
        My name is {this.state.name} and I'm from {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnchangeInput(event)}
          ></input>

          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnchangeAge(event)}
          ></input>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
