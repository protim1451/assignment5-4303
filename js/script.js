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

        updateTotalCost(550);
        updateGrandTotal();
    })
}

function updateGrandTotal(status){
    const totalCost = getConvertedValue("total");
    if(status === undefined){
        const totalCost = getConvertedValue("total");
        document.getElementById("grand-total").innerText = totalCost;
    }
    else{
        const couponCode = document.getElementById("coupon").value;
        if(couponCode === 'NEW15'){
            const discountedPrice = 0.85*totalCost;
            document.getElementById("grand-total").innerText = discountedPrice;
            //console.log(discountedPrice);
        }
        else if(couponCode === "Couple 20"){
            const discountedPrice = 0.80*totalCost;
            document.getElementById("grand-total").innerText = discountedPrice;
            //console.log(discountedPrice);
        }
        else{
            alert("Enter a valid coupon code");
        }
    }
}

function updateTotalCost(value){
     const totalCost = getConvertedValue("total");
     const sum = totalCost + value;
     document.getElementById("total").innerText= sum;
}