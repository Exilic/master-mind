/*
const Colors = {
    Yellow: 'Yellow',
    Red: 'Red',
    Blue: 'Blue',
    Green: 'Green',
    White: 'White',
    Cyan: 'Cyan'
};*/

//const target = Colors[4];
//const trials = Colors[12][4];

// How to store the array of correct colors?

// How to best use the Colors object in the random generator?

// How to mark a try?
// How to choose color for the marking?
// How "hand in" a try?

let xmlns = "http://www.w3.org/2000/svg";

// Generate four divs and set them to colors
function inputPart(){
    let insertionPoint = document.getElementById("insertion");
    for(let i = 0; i < 4; i++){
        let newElement = document.createElement("div");
        newElement.classList.add("choice");
        insertionPoint.append(newElement);
    }
    makeSVG();
    makeCircle("50", "50", "20");
    makeCircle("120", "50", "20");
    makeCircle("190", "50", "20");
    makeCircle("260", "50", "20");
    makeCircle("330", "40", "6");
    makeCircle("350", "40", "6");
    makeCircle("330", "60", "6");
    makeCircle("350", "60", "6");

}

function makeSVG(){

    let insertionPoint = document.getElementById("insertion");
    let newElement = document.createElementNS(xmlns, "svg");
    newElement.setAttribute("height", "100"  );
    newElement.setAttribute("width", "400"  );
    newElement.classList.add("actualchoice");
    insertionPoint.append(newElement);
}

function makeCircle(cx, cy, r){
    let insertionPoint = document.getElementsByClassName("actualchoice");
    let newElement = document.createElementNS(xmlns, "circle");
    newElement.classList.add("circle");
    newElement.setAttribute("cx", cx  );
    newElement.setAttribute("cy", cy  );
    newElement.setAttribute("r", r  );
    newElement.setAttribute("fill", "blue"  );
    newElement.setAttribute("stroke", "black"  );
    insertionPoint[0].append(newElement);
}
/*

function generateTargetSequence(){

}


function evaluateTry(){
    let blacks = determineBlacks();
    let whites = determineWhites();

}

function determineBlacks(){
    return "all the black ones";
}

function determineWhites(){
    return "all the white ones";
}
*/

inputPart();