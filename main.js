

//generate random color


const randomColor = () => {
    const hex1 = "123456789ABCDEF";
    let color = "#";
    
    for (let i = 0; i < 6; i++) {
        color += hex1[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
const startChangingColor = () => {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
};

const changeBgColor = () => {
    document.body.style.backgroundColor = randomColor();
};

const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;
};

document.getElementById('start').addEventListener('click', startChangingColor);
document.getElementById('stop').addEventListener('click', stopChangingColor);



