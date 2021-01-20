let manage = loadData();
function display() {
    let str = `<tr>
            <th>#</th>
            <th>Tên</th>
            <th>Điểm</th>
            <th>Tỉ Lệ Tốp 1</th>
            <th>Tổng Số Trận</th>
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
                            <td><image src="${manage[i][4]}" style="width: 100px"></td>
                            <td><button  class="update" onclick="editPlayer(${i})">Update</button></td>
                            <td><button class="delete" onclick="deletePlayer(${i})">Delete</button></td>
</tr>`;
    }
    document.getElementById("manage").innerHTML = str;
    saveData();
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
        resetBXh();
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
function deletePlayer(index){
   let check=confirm('Bạn có muốn Xoá không');
    if(check){
        manage.splice(index,1);
        display()
    }
}
function resetBXh(){
    document.getElementById('gamer-game').value="";
    document.getElementById('gamer-number').value="";
    document.getElementById('gamer-point').value="";
    document.getElementById('gamer-ratio').value="";
    document.getElementById('gamer-img').value="";
}
function saveData(){
    localStorage.setItem('gamer',JSON.stringify(manage));
}
function loadData(){
    if (localStorage.hasOwnProperty('gamer')){
        let data=JSON.parse(localStorage.getItem('gamer'));
        return data;
    }else {
        return [];
    }

}
