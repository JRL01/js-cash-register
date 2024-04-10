let price = 1.87;
let cid = [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]];
let denominations = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

const cash = document.getElementById("cash");
const change = Number(cash.value) - price;
const screenText = document.getElementById("cash-register-screen");
const changeText = document.getElementById("change-due");

const registerCheck = (cash, change, changeText) => {
    if (Number(cash.value) < price) {
        changeText.innerText = "Customer does not have enough money to purchase the item";
    } else if (Number(cash.value) === price) {
        changeText.innerText = "No change due - customer payed with exact cash";
    } else {
        let cidSum = 0;
        for (let i = cid.length; i > 0; i--) {
            cidSum += cid[i][1];
        }
        if (change > cidSum) {
            changeText.innerText = "INSUFFICIENT_FUNDS";
        } else {
            cashToDrawer();
        }
    }
};
