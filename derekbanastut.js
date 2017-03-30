// Followed along with Derek Banas' Youtube tutorial

<script> 

var yourName = prompt("What is your name?");

if (yourName != null) {
	document.getElementById("sayHello").innerHTML = "Hello" + 
	yourName;
	
}