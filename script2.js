let p = document.getElementById("p");  
let obj = JSON.parse(localStorage.getItem("userNew"));  
console.log(obj);  

let name1 = obj.name1;  
let username = obj.username;  
let email = obj.email;  
let password = obj.password;  
let img = obj.img;  

p.innerHTML = `Name: ${name1}, <br> Username: ${username}, <br> Email: ${email}, <br> Password: ${password}, <br> <img src="${img}">`;