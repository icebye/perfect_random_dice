let click_button = document.querySelector("#click-btt");
let dice1 = document.querySelector("#box1");
let dice2 = document.querySelector("#box2");
let dice3 = document.querySelector("#box3");
let result_play = document.querySelector("#result-play");
let result_win_lose = document.querySelector("#win-lose");
let result_win_count = document.querySelector("#win-count");
let count = 0;
let win_count = 0;
let win_lose = false;
function random_dice() {
    random_num = Math.floor(Math.random() * 6) + 1;
    return random_num;
}
function win_lose_check(num_of_3) {
    if ((num_of_3[0] == num_of_3[1]) && (num_of_3[1] == num_of_3[2])) {
        return true;
    }
    else { return false; }
}
function set_path_dice() {
    name_path = [];
    num_of_3 = [];
    for (i = 0; i < 3; i++) {
        random_num = random_dice();
        name_path[i] = `./images/dice${random_num}.png`
        num_of_3[i] = random_num;
    }
    win_lose = win_lose_check(num_of_3);
    return name_path;
}

function change_dice() {
    let array_dice_path = set_path_dice();
    dice1.setAttribute('src', array_dice_path[0]);
    dice2.setAttribute('src', array_dice_path[1]);
    dice3.setAttribute('src', array_dice_path[2]);
}
function change_win_lose() {
    if (win_lose == true) {
        result_win_lose.innerText = `ผลลัพธ์ : ชนะ!!`;
        win_count += 1;
    } 
    else { result_win_lose.innerText = `ผลลัพธ์ : แพ้` }
}
function count_result() {
    change_dice();
    count += 1;
    change_win_lose();
    result_play.innerText = `จำนวนครั้งที่เล่น : ${count} รอบ`;
    result_win_count.innerText = `จำนวนครั้งที่เล่น : ${win_count} รอบ`;
}
click_button.addEventListener('click', count_result);