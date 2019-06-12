var colors=generateRandomColor(6);
var h1=document.querySelector("h1");
 var pickedColor=pickcolor();
 var squares=document.querySelectorAll(".square");
 var colorDisplay=document.getElementById("colorDisplay")
 colorDisplay.textContent=pickedColor;
 var messageDisplay=document.querySelector("#message");
 var resetButton=document.querySelector("#reset");
 var easyBtn=document.querySelector("#easyBtn");
 var hardBtn=document.querySelector("#hardBtn");

 easyBtn.addEventListener("click", function(){
 	easyBtn.classList.add("selected");
 	hardBtn.classList.remove("selected");
 	colors=generateRandomColor(3);
 	pickedColor=pickcolor();
 	colorDisplay.textContent=pickedColor;
 	for(var i=0;i<squares.length;i++){
 		if(colors[i]){
 			squares[i].style.background=colors[i];
 		}else{
 			squares[i].style.display="none";
 		}
 	}
 })
 hardBtn.addEventListener("click", function(){
 	easyBtn.classList.remove("selected");
 	hardBtn.classList.add("selected");
 	colors=generateRandomColor(6);
 	pickedColor=pickcolor();
 	colorDisplay.textContent=pickedColor;
 	for(var i=0;i<squares.length;i++){
 		if(colors[i]){
 			squares[i].style.background=colors[i];
 			squares[i].style.display="block";
 		}
 	}
 })

 resetButton.addEventListener("click", function(){
 	colors=generateRandomColor(6);
 	pickedColor=pickcolor();
 	colorDisplay.textContent=pickedColor;
 	for(var i=0;i<squares.length;i++){
 	squares[i].style.backgroundColor=colors[i];}
 	h1.style.backgroundColor="steelblue";
 	messageDisplay.textContent="";
 	this.textContent="new colors";
 });
 
 for(var i=0;i<squares.length;i++){
 	squares[i].style.backgroundColor=colors[i];
 	squares[i].addEventListener("click", function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor){
        	messageDisplay.textContent="Correct"
        	change();
        	h1.style.background=pickedColor;
        	resetButton.textContent="Play Again?";
        }
        else{
           messageDisplay.textContent="Try again";
           this.style.background= "#232323";
        }

 	});

 }
 function change(){
      for(var i=0;i<squares.length;i++){
      	squares[i].style.backgroundColor=pickedColor;
      }
 	
 }
 function pickcolor(){
 	var random=Math.floor(Math.random()*colors.length);
 	return colors[random];
 }
 function generateRandomColor(num){
 	var arr=[];
 	for(i=0;i<num;i++){
 		arr.push(randomColor());
 	}
 	return arr;
 }
 function randomColor(){
 	var r=Math.floor(Math.random()*256);
 	var g=Math.floor(Math.random()*256);
 	var b=Math.floor(Math.random()*256);
 	return "rgb("+ r + ", " + g + ", " + b +")";
 }