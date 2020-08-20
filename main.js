console.log("content");

let contentArr = document.querySelectorAll(".content")
contentArr = Array.from(contentArr);
console.log(contentArr)

let app = document.getElementById("app");
let el_ol = ``
contentArr.forEach((item,index)=>{
    console.log(item.innerText);
    el_ol+="<li>"+item.innerText+"</li>"
})
console.log(JSON.stringify(el_ol))



