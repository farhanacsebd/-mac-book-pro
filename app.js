const button1 = document.getElementById('first');
const button2 = document.getElementById('second');
const button3 = document.getElementById('third');
const button4 = document.getElementById('fourth');
const button5 = document.getElementById('fifth');
const button6 = document.getElementById('sixth');
const button7 = document.getElementById('seventh');
const memoryCost = document.getElementById('memoryCost');
const storageCost = document.getElementById('storageCost');
const delivaryCost = document.getElementById('delivaryCost');
const mainCost = document.getElementById('mainCost');
const total = document.getElementById('total');

function updateData() {
    const momoryPrice = Number(memoryCost.innerText);
    const mainPrice = Number(mainCost.innerText);
    const storageExtraPrice = Number(storageCost.innerText);
    const delivaryPrice = Number(delivaryCost.innerText);
    const grandTotal = momoryPrice + mainPrice + storageExtraPrice + delivaryPrice;
    total.innerText = grandTotal;
}

button1.addEventListener('click', function () {
    memoryCost.innerText = "0";
    mainCost.innerText = "1299";
    updateData()
})
button2.addEventListener('click', function () {
    memoryCost.innerText = "180";
    mainCost.innerText = "1299";
    updateData()
})
button3.addEventListener('click', function () {
    storageCost.innerText = "0";
    mainCost.innerText = "1299";
    updateData()
})
button4.addEventListener('click', function () {
    storageCost.innerText = "100";
    mainCost.innerText = "1299";
    updateData()
})
button5.addEventListener('click', function () {
    storageCost.innerText = "180";
    updateData()
})
button6.addEventListener('click', function () {
    delivaryCost.innerText = "0";
    updateData()
})
button7.addEventListener('click', function () {
    delivaryCost.innerText = "20";
    updateData()
})
