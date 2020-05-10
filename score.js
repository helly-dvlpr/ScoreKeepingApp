var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var p1display = document.querySelector("#p1s");
var p2display = document.querySelector("#p2s");
var reset = document.querySelector("#reset");
var limit = document.querySelector("#limit");
var numInput=document.querySelector("input");
var winScore= document.querySelector("#winscore");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

player1.addEventListener("click" , function() {
	if(!gameOver){
		p1score++;
		p1display.textContent = p1score;
		if(p1score === winningScore){
			p1display.classList.add("green");
			gameOver = true;
		}
	}
	

});

player2.addEventListener("click" , function(){
	if(!gameOver){
		p2score++;
		p2display.textContent = p2score;
	}
	if(p2score === winningScore){
		p2display.classList.add("green");
		gameOver = true;
	}
})

function resetscore(){

	p1score = 0;
	p2score = 0;
	p1display.textContent = p1score;
	p2display.textContent = p2score;
	p1display.classList.remove("green");
	p2display.classList.remove("green");
	gameOver = false;

}

reset.addEventListener("click",function(){
	resetscore();
})

numInput.addEventListener("change",function(){
	winScore.textContent = numInput.value;
	winningScore = Number(numInput.value);
	resetscore();
})