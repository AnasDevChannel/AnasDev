const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const item6 = document.getElementById("item6");
const item7 = document.getElementById("item7");
const item8 = document.getElementById("item8");
const item9 = document.getElementById("item9");

const items = document.getElementsByClassName("square");

var currentPlayer = "X";

const labelT = document.getElementById("LabelT");

const winn = document.getElementById("win")
// ... existing code ...

Array.from(items).forEach((item) => {
    item.addEventListener("click", function() {
        if (!item.textContent) {
            item.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            labelT.textContent = `${currentPlayer} Turn`;
            labelT.style.fontFamily = "Impact";
            labelT.style.fontSize = "30px";
            labelT.style.color = currentPlayer === "X" ? "blue" : "red";
        }
    });
});

function checkWinner() {
    const item1 = document.getElementById("item1").textContent;
    const item2 = document.getElementById("item2").textContent;
    const item3 = document.getElementById("item3").textContent;
    const item4 = document.getElementById("item4").textContent;
    const item5 = document.getElementById("item5").textContent;
    const item6 = document.getElementById("item6").textContent;
    const item7 = document.getElementById("item7").textContent;
    const item8 = document.getElementById("item8").textContent;
    const item9 = document.getElementById("item9").textContent;

    const winningCombinations = [
        [item1, item2, item3], [item4, item5, item6], [item7, item8, item9],
        [item1, item4, item7], [item2, item5, item8], [item3, item6, item9],
        [item1, item5, item9], [item3, item5, item7]
    ];

    for (let combination of winningCombinations) {
        if (combination[0] && combination[0] === combination[1] && combination[1] === combination[2]) {
            console.log("Winner: " + combination[0]);
            labelT.textContent = `${combination[0]} Wins!`;
            disableAllSquares();
            setTimeout(() => {
                location.reload();
            }, 2000);
            return;
        }
    }
}

function disableAllSquares() {
    Array.from(items).forEach(item => {
        item.style.pointerEvents = 'none';
    });
    winn.style.display = "flex"
}