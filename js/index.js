console.log("hello javascript!");
let count = 1;
var name = "fd";
const pi = 3.14;
null, undefined
let age;
console.log("age:" + age);
let n = null;
let flag = true;
let arr = [1,2,"hello"];
console.log(arr);
if (flag) {

}else {

}
for(let i = 0; i < 10; i++) {
    console.log(i);
}

let sayHello = (content) => {
    console.log(content)
    return content;
}

sayHello("hello")

let sayHello2 = sayHello;

sayHello2("hello2")

// alert("hello")

setTimeout(() => {
    console.log("after 2 s");
}, 2000)



console.log(count);
let divs = []
function setDiv() {
    const container2 = document.getElementById("container2");
    const item = document.createElement("div");
    const text = document.createTextNode("我是第"+count+"个节点");
    count++;
    item.appendChild(text);
    item.style.background = "#8e44ad";
    item.style.width = "100px";
    item.style.height = "100px";
    item.style.color = "white";
    item.setAttribute("class", "box6");
    
    container2.appendChild(item);
    divs.push(item);
}

function clearDiv() {
    const item = divs.pop();
    const container2 = document.getElementById("container2");
    container2.removeChild(item);
}

const btn = document.getElementById("btn");
btn.onclick = setDiv;

let imgs = []
let index = 1;
for(let i = 1; i <= 5; i++) {
    const img = document.getElementById("img"+i);
    imgs.push(img);
}

const toggleImg = () => {
    for(let i = 0; i < 5; i++) {
        imgs[i].style.zIndex = "0";
    }
    if(index === 5) {
        imgs[index-1].style.zIndex = "2";
        index = 1;
    } else {
        imgs[index-1].style.zIndex = "2";
        index++;
    }
}

// let timer = setInterval(toggleImg, 3000);

const tabLeft = document.getElementById("btn-left");
tabLeft.onclick = () => {
    // clearInterval(timer);
    for(let i = 0; i < 5; i++) {
        imgs[i].style.zIndex = "0";
    }
    if(index === 1) {
        index = 5;
        imgs[index-1].style.zIndex = "2";
    } else {
        index--;
        imgs[index-1].style.zIndex = "2";
    }
    // timer = setInterval(toggleImg, 3000);
}

const tabRight = document.getElementById("btn-right");
tabRight.onclick = () => {
    // clearInterval(timer);
    for(let i = 0; i < 5; i++) {
        imgs[i].style.zIndex = "0";
    }
    if(index === 5) {
        index = 1;
        imgs[index-1].style.zIndex = "2";
    } else {
        index++;
        imgs[index-1].style.zIndex = "2";
    }
    // timer = setInterval(toggleImg, 3000);
}

function setNum() {
    for(let i = 0; i < 5; i++) {
        const num = Math.floor(Math.random()*10);
        document.getElementById("c"+(i+1)).innerText = num;
    }
}

window.onclick = () => {
    console.log("window click");
}

var name = "dds";
console.log(window.name);

let name2 = "dsdd";
console.log(window.name2);

const name3 = "fgfg";
console.log(window.name3);

function eventDemo() {
    console.log("btn click");
}



