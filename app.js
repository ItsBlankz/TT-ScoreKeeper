const resetButton = document.querySelector("#reset");

const player_1 = {
    score: 0,
    button: document.querySelector("#p1-button"),
    text: document.querySelector("#p1-score"),
};

const player_2 = {
    score: 0,
    button: document.querySelector("#p2-button"),
    text: document.querySelector("#p2-score"),
};

let maxPoint = document.querySelector("#max-points").value;

document.querySelector("#max-points").addEventListener("input", (e) => {
    maxPoint = document.querySelector("#max-points").value;
    player_1.score = 0;
    player_2.score = 0;
    player_1.text.innerText = 0;
    player_2.text.innerText = 0;
});

let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.text.innerText = player.score;
        opponent.text.innerText = opponent.score;
        if (player.score === parseInt(maxPoint)) {
            isGameOver = true;
            player.text.classList.add("won");
            opponent.text.classList.add("lost");
            player.score = 0;
            opponent.score = 0;
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

player_1.button.addEventListener("click", () => {
    if (
        player_1.score === parseInt(maxPoint) - 1 &&
        player_2.score === parseInt(maxPoint) - 1
    ) {
        maxPoint = (parseInt(maxPoint) + 1).toString();
    }
    updateScore(player_1, player_2);
});

player_2.button.addEventListener("click", () => {
    if (
        player_1.score === parseInt(maxPoint) - 1 &&
        player_2.score === parseInt(maxPoint) - 1
    ) {
        maxPoint = (parseInt(maxPoint) + 1).toString();
    }
    updateScore(player_2, player_1);
});

resetButton.addEventListener("click", () => {
    isGameOver = false;
    for (p of [player_1, player_2]) {
        p.score = 0;
        p.text.classList = [];
        p.text.innerText = p.score;
        p.button.disabled = false;
    }
});
