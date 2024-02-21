function getConvertedValue(id){
    const string = document.getElementById(id).innerText;
    const convertedInt = parseInt(string);
    return convertedInt;
    //console.log(convertedInt);
}

const totalSeat = getConvertedValue('seats-available');


const allSeat = document.getElementsByClassName('kbd');
//console.log(allSeat);
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-500');
}
for(const seat of allSeat){
    //console.log(seat);
    seat.addEventListener("click", function(event){
       // console.log(event.target.innerText); 
        const seat = event.target.innerText;
        const selectedContainer = document.getElementById('selected-seat-container');
        const div = document.createElement("div");
        div.classList.add("selected-seats");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seat;
        p2.innerText = "Economy";
        p3.innerText = 550;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div);
    })
}