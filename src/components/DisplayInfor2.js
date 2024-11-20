import React, { useEffect, useState } from "react";
import logo from "./../logo.svg"; //Import ảnh

//Viết displayinfor dưới dạng functional component
//Không còn hàm render()
//không còn this
//React tự động truyền props
//ĐƯợc gọi là Stateless vì không có state như class componet
const DisplayInfor = (props) => {
  const [isShowList, setIsShowList] = useState(true);

  const handleHideShowList = () => {
    setIsShowList(!isShowList);
  };

  const handleDeleteUser = (userId) => {
    let cloneList = props.users.filter((item) => item.id !== userId);
    props.setUsers(cloneList);
  };

  //hàm useEffect chạy sau khi component render tương tự như didMount
  //2 tham số, arg1 là callback func, arg2 là dependencies
  //để chạy duy nhất 1 lần thì dependencies = []
  useEffect(() => {
    if (props.users.length === 0) {
      alert("Bạn đã xóa hết user");
    }
    console.log("chạy user effect");
  }, [props.users]); //khi thay đổi users thì sẽ chạy hàm useEffect này

  return (
    <div>
      <div>
        <button onClick={() => handleHideShowList()}>
          {isShowList === true ? "Hide list" : "Show list"}
        </button>
      </div>

      {isShowList && (
        <div>
          {
            //dùng vòng lặp hiển thị ra list user
            props.users.map((user) => {
              return (
                <div key={user.id}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                  <hr />
                </div>
              );
            })
          }
        </div>
      )}
    </div>
  );
};

export default DisplayInfor;
