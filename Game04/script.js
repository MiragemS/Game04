let guerreiros = [["", 0], ["", 0], ["", 0]];
let monstros = [["", 0], ["", 0], ["", 0]];
let area = document.getElementById("content");
let areaGame = document.getElementById("contentGame");
let gymPoints = 0;
let startPack = true;
let wins = 0;
let heroesStrength = 0;
let enemiesStrength = 0;
let runs = 0;

document.getElementById("btn").addEventListener("click", function() {
    if(startPack){
        guerreiros[0][0] = document.getElementById("hero01Name").value;
        guerreiros[0][1] = Math.floor(Math.random()*19)+1;    
        guerreiros[1][0]= document.getElementById("hero02Name").value;
        guerreiros[1][1] = Math.floor(Math.random()*19)+1;  
        guerreiros[2][0] = document.getElementById("hero03Name").value;
        guerreiros[2][1] = Math.floor(Math.random()*19)+1;  

        startPack = false;
    }
    

    area.style.display = "none";
    areaGame.style.display = "block";

    document.getElementById("hero01").innerText = guerreiros[0][0];
    document.getElementById("heroPower01").innerText = "Poder: " + guerreiros[0][1];
    document.getElementById("hero02").innerText = guerreiros[1][0];
    document.getElementById("heroPower02").innerText = "Poder: " + guerreiros[1][1];
    document.getElementById("hero03").innerText = guerreiros[2][0];
    document.getElementById("heroPower03").innerText = "Poder: " + guerreiros[2][1];
    document.getElementById("gymPoints").innerHTML = "Pontos de treino: " + gymPoints;


    
});

function upHero(btn) {
    const heroId = btn.value; 

    if (gymPoints < 1) {
        alert("Estamos pobres! Precisamos de Gym Points urgente!!");
        return;
    }

    let index = parseInt(heroId);

    let powerUp = Math.floor(Math.random() * 12) + 1;

    guerreiros[index][1] += powerUp;
    gymPoints--;

    document.getElementById(`heroPower0${index + 1}`).innerText = "Poder: " + guerreiros[index][1];
    document.getElementById("gymPoints").innerText = "Pontos de treino: " + gymPoints;
}

function startFight(){
    runs++;
    heroesStrength = 0;
    enemiesStrength = 0;


    switch(wins){
        case 0:
            monstros = [["slime", Math.floor(Math.random()*10)+4], ["slime", Math.floor(Math.random()*10)+4], ["slime", Math.floor(Math.random()*10)+4]];
            break;
        case 1:
            monstros = [["goblin", Math.floor(Math.random()*20)+6], ["goblin", Math.floor(Math.random()*20)+6], ["goblin", Math.floor(Math.random()*20)+6]];
            break;
        case 2:
            monstros = [["esqueleto", Math.floor(Math.random()*30)+8], ["esqueleto", Math.floor(Math.random()*30)+8], ["esqueleto", Math.floor(Math.random()*30)+8]];
            break;
        case 3:
            monstros = [["orc", Math.floor(Math.random()*40)+10], ["orc", Math.floor(Math.random()*40)+10], ["orc", Math.floor(Math.random()*40)+10]];
            break;
        case 4:
            monstros = [["Dragão menor", Math.floor(Math.random()*60)+15], ["Dragão menor", Math.floor(Math.random()*60)+15], ["Dragão menor", Math.floor(Math.random()*60)+15]];
            break;
        default:
            alert("Você venceu todos os inimigos! Parabéns, herói lendário!");
            alert("UAU! foram necessárias: " + runs + " tentativas")
            guerreiros = [["", 0], ["", 0], ["", 0]];
            monstros = [["", 0], ["", 0], ["", 0]];
            document.getElementById("hero01Name").innerText = "";
            document.getElementById("hero02Name").innerText = "";
            document.getElementById("hero03Name").innerText = "";
            wins = 0;
            heroesStrength = 0;
            enemiesStrength = 0;
            startPack = true;
            area.style.display = "block";
            areaGame.style.display = "none";
            return;
    }

    for(let i = 0; i < 3; i++){
        heroesStrength += guerreiros[i][1]; 
        enemiesStrength += monstros[i][1]; 
    }

    console.log("Força dos Heróis:", heroesStrength);
    console.log("Força dos Inimigos:", enemiesStrength);

    if(heroesStrength > enemiesStrength){
        let newPoints = Math.floor(Math.random()*5)+1;
        alert(`Boa! Encontramos ${monstros[0][0]}'s pelo caminho e vencemos!`);
        alert(`Ganhamos ${newPoints} ponto(s) de treino :D`);
        gymPoints += newPoints;
        wins++;  
    } else {
        alert("Nos humilharam, mas na próxima vamos com uma estratégia melhor!");
    }

    
    document.getElementById("gymPoints").innerText = "Pontos de treino: " + gymPoints;
}

document.getElementById("btnFight").addEventListener("click", startFight);