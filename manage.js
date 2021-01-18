let manage = [['Ncc', '1111', '27%', '222']];

function display() {
    let str = `<tr>
            <th>STT</th>
            <th>Game</th>
            <th>Number</th>
            <th>Point</th>
            <th>Ratio</th>
            <th>Image</th>
            <th colspan='2'>Action</th>
            </tr>`;
    for (let i = 0; i < manage.length; i++) {
        str += `<tr>
                            <td>${i + 1}</td>
                            <td>${manage[i][0]}</td>
                            <td>${manage[i][1]}</td>
                            <td>${manage[i][2]}</td>
                            <td>${manage[i][3]}</td>
                            <td><image src="${manage[i][4]}"></td>
                            <td><button  class="update" onclick="editPlayer(${i})">Update</button></td>
                            <td><button class="delete" onclick="deletePlayer(${i})">Delete</button></td>
</tr>`;
    }
    document.getElementById("manage").innerHTML = str;
}

display();

let current = -1;

function addPlayer() {
    let game = document.getElementById('gamer-game').value;
    let number = document.getElementById('gamer-number').value;
    let point = document.getElementById('gamer-point').value;
    let ratio = document.getElementById('gamer-ratio').value;
    let image = document.getElementById('gamer-img').value;
    if (game != "" && number != "" && point != "" && ratio != "") {
        let player = [game, number, point, ratio, image];
        manage.push(player);
        display();
    } else {
        alert("Please gamer");
    }
}

function updatePlayer() {
    let game = document.getElementById('gamer-game').value;
    let number = document.getElementById('gamer-number').value;
    let point = document.getElementById('gamer-point').value;
    let ratio = document.getElementById('gamer-ratio').value;
    let image = document.getElementById('gamer-img').value;
    if (game != "" && number != "" && point != "" && ratio != "") {
        let player = [game, number, point, ratio, image];
        manage[current] = player;
        display();
    }
}

function editPlayer(index) {
    document.getElementById('gamer-game').value=manage[index][0];
    document.getElementById('gamer-number').value=manage[index][1];
    document.getElementById('gamer-point').value=manage[index][2];
    document.getElementById('gamer-ratio').value=manage[index][3]
    document.getElementById('gamer-img').value=manage[index][4];
    current=index;
}
