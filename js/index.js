console.log("hello javascript!");
let count = 1;
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




