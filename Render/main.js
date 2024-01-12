const ROOT=document.getElementById("root");

function startGameRenderer(data){
    data.forEach((element) => {
        const rowElement = document.createElement("div");
        element.forEach((square) => {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add(square.color);
        });
            
            rowElement.classList.add("squareRow");
            ROOT.appendChild(rowElement);


        

    });
}

export{startGameRenderer}