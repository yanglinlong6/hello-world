function yang(lin) {
    return "yanglinlon" + lin;
}

var s = yang("你好");
console.log(s);

import axios from "axios";

axios.get('http://127.0.0.1:8899/yang/yang?name=yang&yang=linlong01')
    // eslint-disable-next-line no-const-assign
    .then(function (response) {
            // console.log(response);//请求正确时执行的代码
            // eslint-disable-next-line no-unused-vars
            let info = response.data.data.name;
            console.log("info===", info)
            let yang = response.data.data.yang;
            console.log("yang===", yang)
            let list = response.data.data.list;
            console.log("yang===", list)
            // console.log(response.data.data.name);
        }
    )
    .catch(function (error) { // 请求失败处理
        console.log(error);
    });
