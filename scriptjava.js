import { without } from 'lodash';
console.log(without);

var colors = generateRandomColors(6)
var reset = document.getElementById("reset");
var squares = document.querySelectorAll(".square")
var picked = pickColor()
var colorDisplay = document.getElementById("colordisplay")
var message = document.getElementById("message")
var head = document.querySelector("h1");
var easy = document.getElementById("easy")
var hard = document.getElementById("hard")
easy.classList.remove("selected")
hard.classList.add("selected")

colorDisplay.textContent = picked;



reset.addEventListener("click", function(){
	if(colors.length===3){
	runtime(3)
}	if(colors.length===6){
	runtime(6)
}

})

hard.addEventListener("click", function(){
	easy.classList.remove("selected")
	hard.classList.add("selected")
	runtime(6);
})
easy.addEventListener("click", function(){
	hard.classList.remove("selected")
	easy.classList.add("selected")
	runtime(3);
})


function runtime(num){
	head.style.backgroundColor = "steelblue"
	reset.textContent = "NEW COLORS"
	message.innerHTML = ""
	colors = generateRandomColors(num)
	picked = pickColor(num)
	colorDisplay.textContent = picked


	for(let i = 0; i< squares.length; ++i){
		squares[i].style.display = "block"
		 if(colors[i]){
		 	squares[i].style.backgroundColor=colors[i]
		 } else {
		 	squares[i].style.display = "none";
		 }
		 squares[i].addEventListener("click", function(){
		
		//grab color of square & compare to picked
		// alert(this.style.backgroundColor)
		var clickedColor = this.style.backgroundColor

		if (clickedColor === picked){
			message.innerHTML = "Correct!"
			changeColors(clickedColor);
			reset.textContent = "PLAY AGAIN?"

		}
		else {
			message.textContent = "Try Again"
			this.style.backgroundColor = "#232323"}
	   })
	 }
}





function changeColors(color){

	for(var i = 0; i<squares.length; ++i){
	squares[i].style.backgroundColor = color

	}
	head.style.backgroundColor = color;
}



function pickColor(num){
	return colors[rando(num)]
}


function rando(ceiling){
	return Math.floor(Math.random()*ceiling)
}


function generateRandomColors(num){
	var arr =[];
	while (num>0){
		arr.push("rgb("+rando(256)+", "+rando(256)+", "+rando(256)+")")
		num--;
	}
	return arr;
}


runtime(6)