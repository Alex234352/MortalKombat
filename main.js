const createPlayer = (className, player) => {

   const playerDiv = document.createElement("div");
   playerDiv.classList.add(className);
   playerDiv.style.paddingLeft = "50px"
   const progressBar = document.createElement("div");
   progressBar.classList.add("progressBar");
   const character = document.createElement("div");
   character.classList.add("character");
   playerDiv.appendChild(progressBar);
   playerDiv.appendChild(character);

   const live = document.createElement("div");
   live.classList.add("live")
   live.innerHTML = player.hp
   live.style.width = "100%"
   const name = document.createElement("div");
   name.classList.add("name")
   name.innerHTML = player.name
   progressBar.appendChild(live)
   progressBar.appendChild(name)

   const imgTag = document.createElement("img");
   imgTag.src = player.img
   character.appendChild(imgTag)
   document.body.appendChild(playerDiv)

}

const PlayerOne = {
   name: "SCORPION",
   hp: 50,
   weapon: ["bazuka", "gun"],
   img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
   attack: function () {
      alert(this.name + " Fight ...")
   }
}


const PlayerTwo = {
   name: "SUB-ZERO",
   hp: 80,
   weapon: ["bazuka", "gun"],
   img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
   attack: function () {
      alert(this.name + " Fight ...")
   }
}

createPlayer('player1', PlayerOne);
createPlayer('player2', PlayerTwo);

