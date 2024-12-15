let dimensions = 16;

function resize(){
    let size = +prompt("What dimension you'd like to have? (max: 100)");
    if (size > 100){
        return alert ("The number you chose is too high");
    }
    removeSquares();
    createSquares(size);
}

function addHover(div){
    div.addEventListener("mouseover", (e) =>{
        let opacity = e.target.style.opacity;
        div.style.background = `rgba(${Math.floor(Math.random()*256)}, 
        ${Math.floor(Math.random()*256)}, 
        ${Math.floor(Math.random()*256)})`;
        div.style.opacity  = `${+opacity+0.1}`
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
    dimensions = dimension;
    refreshLabel();
    const container = document.querySelector(".container");
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    for (let i = 0; i < dimension*dimension; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.minWidth = containerWidth/dimension + "px";
        div.style.minHeight = containerHeight/dimension + "px";
        div.style.background = "rgba(0,0,0)";
        div.style.opacity = 0;
        container.appendChild(div);
        addHover(div);
    }
}

function refreshLabel(){
    const body = document.querySelector("body");
    const container = document.querySelector(".container");
    if (body.contains(document.querySelector("h4"))){
        body.removeChild(document.querySelector("h4"));
    }

    const dimensionLabel = document.createElement("h4");
    dimensionLabel.style.marginLeft = "10vw"
    dimensionLabel.textContent = `${dimensions}x${dimensions}`
    body.insertBefore(dimensionLabel, container);
    body.insertBefore
}

window.addEventListener("resize", () =>{
    location.reload();
});

const button = document.querySelector("button");
button.addEventListener("click", resize);

createSquares(dimensions);