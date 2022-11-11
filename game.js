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
    const x = ["50", "120", "190", "260", "330", "350", "330", "350"];
    const y = [50, 50, 50, 50, 40, 40, 60, 60];
    const r = ["20","20","20","20","6","6","6","6"];
    for(let k = 0; k < 12; k++) {

    for(let j = 0; j < 8; j++) {
        makeCircle(x[j], "" + (y[j] + k*55), r[j], "c" + k + "a" + j);
    }
    }


}

function makeSVG(){

    let insertionPoint = document.getElementById("insertion");
    let newElement = document.createElementNS(xmlns, "svg");
    newElement.setAttribute("height", "1200"  );
    newElement.setAttribute("width", "400"  );
    newElement.classList.add("actualchoice");
    insertionPoint.append(newElement);
}

function makeCircle(cx, cy, r, id){
    let insertionPoint = document.getElementsByClassName("actualchoice");
    let newElement = document.createElementNS(xmlns, "circle");
    newElement.classList.add("circle");
    newElement.setAttribute("cx", cx  );
    newElement.setAttribute("cy", cy  );
    newElement.setAttribute("r", r  );
    newElement.setAttribute("fill", "blue"  );
    newElement.setAttribute("stroke", "black"  );
    newElement.setAttribute("id", id  );
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