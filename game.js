
const shadow = [rand(), rand(), rand(), rand()];
let trial = [6, 6, 6, 6];
let xmlns = "http://www.w3.org/2000/svg";
let presentRow = 0;
let choices = ["red", "yellow", "green", "cyan", "blue", "violet", "slategray"];
let pick = 6;

console.log(shadow);
function rand() {
    return Math.floor(Math.random()*6);
}
// Generate four divs and set them to colors
function inputPart(){
    let insertionPoint = document.getElementById("insertion");
    for(let i = 0; i < 4; i++){
        let newElement = document.createElement("div");
        newElement.classList.add("choice");
        insertionPoint.append(newElement);
    }
    makeSVG("1200", "400", "playfield", "insertion");
    makeSVG("100", "500", "colors", "picker");
    const x = ["50", "120", "190", "260", "330", "350", "330", "350"];
    const y = [50, 50, 50, 50, 40, 40, 60, 60];
    const r = ["20","20","20","20","6","6","6","6"];
    for(let k = 0; k < 12; k++) {
        for (let j = 0; j < 8; j++) {
            makeCircle(x[j], "" + (y[j] + k * 55), r[j], "c" + j + "a" + k, "playfield");
        }
    }
    for(let h = 0; h < 6; h++) {
        makeCircle("" + (50 + (h * 70)), "50", "20", "pick" + h, "colors");
    }
}

function makeSVG(height, width, id, target){
    let insertionPoint = document.getElementById(target);
    let newElement = document.createElementNS(xmlns, "svg");
    newElement.setAttribute("height", height  );
    newElement.setAttribute("width", width  );
    newElement.setAttribute("id", id  );
    insertionPoint.append(newElement);
}

function makeCircle(cx, cy, r, id, target){
    let insertionPoint = document.getElementById(target);
    let newElement = document.createElementNS(xmlns, "circle");
    newElement.setAttribute("class", choices[6]);
    newElement.setAttribute("cx", cx  );
    newElement.setAttribute("cy", cy  );
    newElement.setAttribute("r", r  );
    newElement.setAttribute("fill", "blue"  );
    newElement.setAttribute("stroke", "black"  );
    newElement.setAttribute("id", id  );
    insertionPoint.append(newElement);
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

function commit() {
    if(!trial.includes(6)){

    let blacks = 0;
    let whites = 0;
    let potentialTry = [0, 1, 2, 3];
        let potentialShadow = [0, 1, 2, 3];
    for(let g = 0; g < 4; g++){
        if(trial[g] == shadow[g]) {
            blacks++;
            potentialTry[g] = 6;
            potentialShadow[g] = 6;
        }
    }
        for(let n = 0; n < 4; n++){
            if(potentialTry[n] !== 6){
                for(let p = 0; p < 4; p++){
                    if(potentialShadow[p] !== 6){
                        if(trial[n] == shadow[p]){
                            whites++;
                            potentialShadow[p] = 6;
                            break;
                        }
                    }
                }
            }
        }
    for(let l = 0; l < blacks; l++){
        let id = `c${l+4}a${presentRow}`;
        document.getElementById(id).setAttribute("class", "black");
    }
    for(let m = 0; m < whites; m++){
        let id = `c${m + blacks +4}a${presentRow}`;
        document.getElementById(id).setAttribute("class", "white");
    }
    presentRow++;
    trial = [6, 6, 6, 6];
    }
}

function handleClick(e){
   if(e.target.nodeName == "circle"){
       let row = (e.target.getAttribute("cy") - 50) / 55;
       if(row == presentRow){
           e.target.setAttribute("class", choices[pick]);
           trial[parseInt(e.target.getAttribute("id").substring(1, 2))] = pick;
       }
   }
}

function handlePicking(e) {
    if(e.target.nodeName == "circle"){
    pick = e.target.getAttribute("id").substring(4);
    document.getElementsByClassName("picked")[0]?.setAttribute("class", "");
    e.target.setAttribute("class", "picked");
    }
}

inputPart();
document.getElementById("playfield").addEventListener("click", e => handleClick(e));
document.getElementById("colors").addEventListener("click", e => handlePicking(e));