let dimension = 16;

function createSquares(dimension){
    const container = document.querySelector(".container");
    console.log(container)
    const containerWidth = container.clientWidth;
    console.log(containerWidth );
    const containerHeight = container.clientHeight;
    for (let i = 0; i < dimension*dimension; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.minWidth = containerWidth/dimension + "px";
        div.style.minHeight = containerHeight/dimension + "px";
        container.appendChild(div);
    }
}

createSquares(dimension);