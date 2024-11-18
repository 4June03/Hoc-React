//Class component - giai đoạn đầu
//function component - giai đoạn sau khi học react hook

import React from "react"; //import react



class MyComponent extends React.Component{ //Kế thừa lại tất cả tính năng của React component
    //JSX: cho phép viết code js bên trong html
    render(){ //Hàm render quy định nội dung component trả ra
        return ( //Trả ra 1 khối Html
            //hạn chế của JSX: chỉ trả về được 1 phần tử html
            <div>My first component
                {/* sử dụng dấu {} ctrinh hiểu rằng đang muốn sử dụng viết logic */}
                {
                    Math.random()
                }
            </div>

        );
    }
}

//Muốn sử dụng component này thì phải export
//môi lần gọi file MyComponent.js thì sẽ hiểu muốn sử dụng MyComponet
export default MyComponent; 