import React from "react";

class DisplayInfor extends React.Component {
  render() {
    //Sử dụng destructuring array/object để lấy ra các thuộc tính của props -> tối ưu code nếu truyền nhiều
    const { age, name } = this.props;
    return (
      //props => viet tat cua properties
      //truyen du lieu tu component cha sang con
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
      </div>
    );
  }
}

export default DisplayInfor;
