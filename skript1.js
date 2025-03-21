let obj = {
    name1:"",
    username:"",
    email:"",
    password:"",
}
 function func2() {
    if(+localStorage.getItem("userCount")<6) {
        
        let inp1 = document.getElementById("inp1").value;
        let inp2 = document.getElementById("inp2").value;
        let inp3 = document.getElementById("inp3").value;
        let inp4 = document.getElementById("inp4").value;
        let inp5 = document.getElementById("inp5").value;

        if(localStorage.userCount){
            localStorage.userCount = +localStorage.userCount+1;
        } else {
            localStorage.userCount = 1;
        }
        count = localStorage.getItem("userCount");

        obj.name1 = inp1;
        obj.username = inp2;
        obj.email = inp3;
        obj.password = inp4;
        obj.img = inp5;

        localStorage.setItem(`user $(count)`, JSON.stringify(obj));

        localStorage.setItem("userNew", JSON.stringify(obj));
        window.location.href="index2.html";
    }else {
        alert("вы привысили лимит");
    }
 }