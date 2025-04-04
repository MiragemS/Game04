let guerreiros = [["", 0], ["", 0], ["", 0]];
let monstros = [["", 0], ["", 0], ["", 0]];
let area = document.getElementById("content");
let areaGame = document.getElementById("contentGame");

document.getElementById("btn").addEventListener("click", function() {
    guerreiros[0][0] = document.getElementById("hero01Name").value;
    guerreiros[1][0]= document.getElementById("hero02Name").value;
    guerreiros[2][0] = document.getElementById("hero03Name").value;

    area.style.display = "none";
    areaGame.style.display = "block"

    document.getElementById("hero01").innerText = guerreiros[0][0];
    document.getElementById("hero02").innerText = guerreiros[1][0];
    document.getElementById("hero03").innerText = guerreiros[2][0];
    
});

