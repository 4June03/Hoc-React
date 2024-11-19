import React from "react";

class DisplayInfor extends React.Component {
  render() {
    //Sử dụng destructuring array/object để lấy ra các thuộc tính của props -> tối ưu code nếu truyền nhiều
    const { users } = this.props; //Lấy ra users đã truyền từ lớp cha
    return (
      //props => viet tat cua properties
      //truyen du lieu tu component cha sang con
      <div>
        {
          //dùng vòng lặp hiển thị ra list user
          users.map((user) => {
            return (
              <div key={user.id}>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default DisplayInfor;
