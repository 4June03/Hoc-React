import React from "react";
import logo from "./../logo.svg"; //Import ảnh

// class DisplayInfor extends React.Component {
//   render() {
//     //Sử dụng destructuring array/object để lấy ra các thuộc tính của props -> tối ưu code nếu truyền nhiều
//     const { users } = this.props; //Lấy ra users đã truyền từ lớp cha
//     console.table(users);
//     return (
//       //props => viet tat cua properties
//       //truyen du lieu tu component cha sang con
//       <div>
//         {true && (
//           <div>
//             {
//               //dùng vòng lặp hiển thị ra list user
//               users.map((user) => {
//                 return (
//                   <div key={user.id}>
//                     <div>My name is {user.name}</div>
//                     <div>My age is {user.age}</div>
//                   </div>
//                 );
//               })
//             }
//           </div>
//         )}
//       </div>
//     );
//   }
// }

//Viết displayinfor dưới dạng functional component
//Không còn hàm render()
//không còn this
//React tự động truyền props
//ĐƯợc gọi là Stateless vì không có state như class componet
const DisplayInfor = (props) => {
  const { users } = props;
  console.table(users);
  return (
    <div>
      {true && (
        <div>
          {
            //dùng vòng lặp hiển thị ra list user
            users.map((user) => {
              return (
                <div key={user.id}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
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
