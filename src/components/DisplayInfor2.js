import React from "react";
import logo from "./../logo.svg"; //Import ảnh

class DisplayInfor extends React.Component {
  state = {
    isShowList: true,
  };

  handleHideShow = () => {
    this.setState({
      isShowList: !this.state.isShowList,
    });
  };

  render() {
    //Sử dụng destructuring array/object để lấy ra các thuộc tính của props -> tối ưu code nếu truyền nhiều
    const { users } = this.props; //Lấy ra users đã truyền từ lớp cha
    console.table(users);
    return (
      //props => viet tat cua properties
      //truyen du lieu tu component cha sang con
      <div>
        <div>
          <img src={logo} height="100px" width="100px"></img>
          <button onClick={() => this.handleHideShow()}>
            {this.state.isShowList === true ? "Hide list" : "Show list"}
          </button>
        </div>

        {this.state.isShowList && (
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
        )}
      </div>
    );
  }
}

export default DisplayInfor;
