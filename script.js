let dimension = 16;

function resize(){
    let size = +prompt("What dimension you'd like to have? (max: 100)");
    if (size > 100){
        return alert ("The number you chose is too high");
    }
    removeSquares();
    createSquares(size);
}

function addHover(div){
    div.addEventListener("mouseover", () =>{
        div.style.background = "green";
    });
}

function removeSquares(){
    const container = document.querySelector(".container");
    const divs = document.querySelectorAll(".container div");

    divs.forEach(div => {
        container.removeChild(div);
    });
}

function createSquares(dimension){
    const container = document.querySelector(".container");
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    for (let i = 0; i < dimension*dimension; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.minWidth = containerWidth/dimension + "px";
        div.style.minHeight = containerHeight/dimension + "px";
        container.appendChild(div);
        addHover(div);
    }
}

window.addEventListener("resize", () =>{
    location.reload();
});

const button = document.querySelector("button");
button.addEventListener("click", resize);

createSquares(dimension);