//VIDEOS ON MAIN MENU PAGE
//Video from Main Menu to Merch Page
var maintomerch = document.getElementById("maintomerchv");

function playvid1(){
	console.log("executing vid 1");
	maintomerch.style.display = "block";
	maintomerch.play();
	maintomerch.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "pages/merch.html"; }, 500);
	}
}

//Video from Main Menu to About Us
var maintoabout = document.getElementById("maintoaboutv");
function playvid2(){
	maintoabout.style.display = "block";
	maintoabout.play();

	maintoabout.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "pages/about.html"; }, 500);
	}
}


//Video from Main Menu to Projects
var maintoprojects = document.getElementById("maintoprojectsv");

function playvid3(){
	maintoprojects.style.display = "block";
	maintoprojects.play();

	maintoprojects.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "pages/project.html"; }, 500);
	}
}

//Video from Main Menu to Contact Us
var maintocontact = document.getElementById("maintocontactv");

function playvid4(){
	maintocontact.style.display = "block";
	maintocontact.play();

	maintocontact.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "pages/contact.html"; }, 500);
	}
}

//VIDEOS ON MERCH PAGE
//Video from Merch Page to Main Menu
var merchtomain = document.getElementById("merchtomainv");

function playvid5(){
	merchtomain.style.display = "block";
	merchtomain.play();

	merchtomain.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "../index.html"; }, 500);
	}
}

//VIDEOS ON ABOUT US PAGE
var abouttomain = document.getElementById("abouttomainv");

function playvid6(){
	abouttomain.style.display = "block";
	abouttomain.play();

	abouttomain.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "../index.html"; }, 500);
	}
}

/*
var abouttomerch = document.getElementById("abouttomainv");
function playvid7(){
	abouttomerch.style.opacity = 1;
	abouttomerch.play();
	abouttomerch.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ abouttomerch.style.opacity = 0; }, 2000);
		setTimeout(function(){ window.location.href = "merch.html"; }, 1000);
	}
}*/

//VIDEOS ON CONTACT US PAGE
//video from contact us to main menu
var contacttomain = document.getElementById("contacttomainv");
function playvid15(){
	contacttomain.style.display = "block";
	contacttomain.play();

	contacttomain.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "../index.html"; }, 500);
	}
}

//VIDEOS ON PROJECT PAGE
//video from projects to project 1
var toproj1 = document.getElementById("toproj1v");
function playvid8(){
	 document.getElementById("proImg1").style.display = "none";
	 document.getElementById("proImg2").style.display = "none";
	 document.getElementById("proImg3").style.display = "none";
	toproj1.style.display = "block";
	toproj1.play();

	toproj1.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "project1.html"; }, 500);
	}
}

//video from projects to project 2
var toproj2 = document.getElementById("toproj2v");
function playvid9(){
	 document.getElementById("proImg1").style.display = "none";
	 document.getElementById("proImg2").style.display = "none";
	 document.getElementById("proImg3").style.display = "none";
	toproj2.style.display = "block";
	toproj2.play();

	toproj2.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "project2.html"; }, 500);
	}
}

//video from projects to project 3
var toproj3 = document.getElementById("toproj3v");
function playvid10(){
	 document.getElementById("proImg1").style.display = "none";
	 document.getElementById("proImg2").style.display = "none";
	 document.getElementById("proImg3").style.display = "none";
	toproj3.style.display = "block";
	toproj3.play();

	toproj3.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "project3.html"; }, 500);
	}
}

//video from projects to main menu
var projtomain = document.getElementById("projtomainv");

function playvid11(){
	 document.getElementById("proImg1").style.display = "none";
	 document.getElementById("proImg2").style.display = "none";
	 document.getElementById("proImg3").style.display = "none";
	projtomain.style.display = "block";
	projtomain.play();

	projtomain.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "../index.html"; }, 500);
	}
}

//VIDEOS ON PROJECT 1 PAGE
var proj1toproj = document.getElementById("proj1toprojv");

function playvid12(){
	proj1toproj.style.display = "block";
	proj1toproj.play();

	proj1toproj.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "project.html"; }, 500);
	}
}

//VIDEOS ON PROJECT 2 PAGE
var proj2toproj = document.getElementById("proj2toprojv");

function playvid13(){
	proj2toproj.style.display = "block";
	proj2toproj.play();

	proj2toproj.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "project.html"; }, 500);
	}
}

//VIDEOS ON PROJECT 3 PAGE
var proj3toproj = document.getElementById("proj3toprojv");

function playvid14(){
	proj3toproj.style.display = "block";
	proj3toproj.play();

	proj3toproj.addEventListener('ended',myHandler,false);
	function myHandler(e){
		setTimeout(function(){ window.location.href = "project.html"; }, 500);
	}
} 
