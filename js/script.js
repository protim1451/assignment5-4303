function getConvertedValue(id) {
    const string = document.getElementById(id).innerText;
    const convertedInt = parseInt(string);
    return convertedInt;
    //console.log(convertedInt);
}

const totalSeat = getConvertedValue('seats-available');


const allSeat = document.getElementsByClassName('kbd');

for (const seat of allSeat) {
    
    seat.addEventListener("click", function (event) {

        const seat = event.target.innerText;
        const selectedContainer = document.getElementById('selected-seat-container');

        event.target.removeEventListener("click", this);

        
        event.target.classList.add('disabled');


        const firstCount = getConvertedValue("selected-seat-number");
        if (firstCount + 1 > 4) {
            alert("You can not select More than 4 seats");
            return;
        }

        event.target.classList.add('bg-green-500');

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

        const totalSeat = getConvertedValue('seats-available');
        document.getElementById("seats-available").innerText = totalSeat - 1;
        const selectedSeats = getConvertedValue("selected-seat-number");

        document.getElementById("selected-seat-number").innerText = selectedSeats + 1;
    })
}

function updateGrandTotal(status) {
    const selectedSeats = getConvertedValue("selected-seat-number") + 1;
    //console.log(selectedSeats);

    const totalCost = getConvertedValue("total");
    if (status === undefined) {
        const totalCost = getConvertedValue("total");
        document.getElementById("grand-total").innerText = totalCost;
    }
    else {
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

function updateTotalCost(value) {
    const totalCost = getConvertedValue("total");
    const sum = totalCost + value;
    document.getElementById("total").innerText = sum;
}