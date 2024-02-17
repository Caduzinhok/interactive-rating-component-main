
let items = document.querySelectorAll("#list li");
let tab = []
let valueResult;

// populate tab with li value
for (let i = 0; i < items.length; i++) {
    tab.push(items[i].innerHTML);
}

function resetColorSelect(items){
    for (let i = 0; i < items.length; i++) {
        // Set all styles on li to default 
        items[i].style.backgroundColor = null;
        items[i].style.color = null;
    }
}

// get selected li index
for (let i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        resetColorSelect(items);

        valueResult = tab.indexOf(this.innerHTML) + 1; // Get the value of li
        
        // Set the li selected to different style
        items[i].style.backgroundColor = "hsl(217, 12%, 63%)";
        items[i].style.color = "hsl(0, 0%, 100%)";
    };
}


function showThankState(){
    document.getElementById("result-value").innerHTML = valueResult;
    let thankState = document.getElementById("thank-you-state")
    thankState.className += " activated"
    
    let initialState = document.getElementById("initial-state")
    initialState.className += " disabled"
}