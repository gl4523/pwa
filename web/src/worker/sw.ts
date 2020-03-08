import axios from "axios";

axios.get("https://www.baidu.com").then(data => {
  console.log(data);
});

self.addEventListener("install", function() {
  console.log("install", arguments);
});

self.addEventListener("fetch", function() {
  console.log("fetch", arguments);
});

function getPermission() {
  return new Promise((resolve, reject) => {
    //权限获取
    const permissionPromise = Notification.requestPermission(result => {
      resolve(result);
    });
  }).then(result => {
    //判断条件
    if (result === "granted") {
      console.log(result);
    } else {
      console.log("no permission");
    }
  });
}
