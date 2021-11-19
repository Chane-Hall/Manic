//VIDEOS ON MAIN MENU PAGE
//Video from Main Menu to Merch Page

$(window).on("load", function()
	{
		$(".load-wrapp").fadeOut("slow");
	});
var homepage = document.getElementById("homepage");

var maintomerch = document.getElementById("maintomerchv");
var merchpage = document.getElementById("merchpage");

function playvid1(){
	maintomerch.style.display = "block";
	maintomerch.play();
	maintomerch.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		merchpage.style.display = "block";
		setTimeout(function(){
			maintomerch.style.display = "none";
			maintomerch.currentTime=0;
			maintomerch.load();
			}, 100);
		//setTimeout(function(){ merchpage.style.display = "block";}, );
	}
}

//Video from Main Menu to About Us
var maintoabout = document.getElementById("maintoaboutv");
var aboutpage = document.getElementById("aboutpage");
function playvid2(){
	maintoabout.style.display = "block";
	maintoabout.play();
	maintoabout.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		aboutpage.style.display = "block"
		setTimeout(function(){
			maintoabout.style.display = "none";
			maintoabout.currentTime=0;
			maintoabout.load();
			}, 100);
	}
}

//Video from Main Menu to Projects
var maintoprojects = document.getElementById("maintoprojectsv");
var projectpage = document.getElementById("projectpage");
function playvid3(){
	maintoprojects.style.display = "block";
	maintoprojects.play();
	maintoprojects.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		projectpage.style.display = "block";
		setTimeout(function(){
			maintoprojects.style.display = "none";
			maintoprojects.currentTime=0;
			maintoprojects.load();
			}, 100);
	}
}

//Video from Main Menu to Contact Us
var maintocontact = document.getElementById("maintocontactv");
var contactpage = document.getElementById("contactpage");
function playvid4(){
	maintocontact.style.display = "block";
	maintocontact.play();
	maintocontact.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		contactpage.style.display = "block";
		setTimeout(function(){
			maintocontact.style.display = "none";
			maintocontact.currentTime=0;
			maintocontact.load();
			}, 100);
	}
}

//FROM DIVS TO HOME
//Video from Merch Page to Main Menu
var merchtomain = document.getElementById("merchtomainv");
function playvid5(){
	merchtomain.style.display = "block";
	merchtomain.play();
	merchtomain.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "block";
		merchpage.style.display = "none";
		setTimeout(function(){
			merchtomain.style.display = "none";
			merchtomain.currentTime=0;
			merchtomain.load();
			}, 100);
	}
}

//Video from About to Main Menu
var abouttomain = document.getElementById("abouttomainv");
function playvid6(){
	abouttomain.style.display = "block";
	abouttomain.play();
	abouttomain.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "block";
		aboutpage.style.display = "none";
		setTimeout(function(){
			abouttomain.style.display = "none";
			abouttomain.currentTime=0;
			abouttomain.load();
			}, 100);
	}
}

//Video from Contact to Main Menu
var contacttomain = document.getElementById("contacttomainv");
function playvid7(){
	contacttomain.style.display = "block";
	contacttomain.play();
	contacttomain.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "block";
		contactpage.style.display = "none";
		setTimeout(function(){
			contacttomain.style.display = "none";
			contacttomain.currentTime=0;
			contacttomain.load();
			}, 100);
	}
}

//Video from Projects to Main Menu
var projtomain = document.getElementById("projtomainv");
function playvid8(){
	projtomain.style.display = "block";
	projtomain.play();
	projtomain.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "block";
		projectpage.style.display = "none";
		setTimeout(function(){
			projtomain.style.display = "none";
			projtomain.currentTime=0;
			projtomain.load();
			}, 100);
	}
}

var projbuttons = document.getElementById("projbuttons");
var homeb = document.getElementById("homeb");
//Video from Projects to Project 1
var toproj1 = document.getElementById("toproj1v");
var proj1page = document.getElementById("proj1page")
function playvid9(){
	toproj1.style.display = "block";
	toproj1.play();
	toproj1.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		projbuttons.style.display = "none";
		homeb.style.display = "none";
		proj1page.style.display = "block";
		setTimeout(function(){
			toproj1.style.display = "none";
			toproj1.currentTime=0;
			toproj1.load();
			}, 100);
	}
}

//Video from Projects to Project 2
var toproj2 = document.getElementById("toproj2v");
var proj2page = document.getElementById("proj2page")
function playvid10(){
	toproj2.style.display = "block";
	toproj2.play();
	toproj2.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		projbuttons.style.display = "none";
		homeb.style.display = "none";
		proj2page.style.display = "block";
		setTimeout(function(){
			toproj2.style.display = "none";
			toproj2.currentTime=0;
			toproj2.load();
			}, 100);
	}
}

//Video from Projects to Project 3
var toproj3 = document.getElementById("toproj3v");
var proj3page = document.getElementById("proj3page")
function playvid11(){
	toproj3.style.display = "block";
	toproj3.play();
	toproj3.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		projbuttons.style.display = "none";
		homeb.style.display = "none";
		proj3page.style.display = "block";
		setTimeout(function(){
			toproj3.style.display = "none";
			toproj3.currentTime=0;
			toproj3.load();
			}, 100);
	}
}

//Video from Projects to Project 4
var toproj4 = document.getElementById("toproj4v");
var proj4page = document.getElementById("proj4page")
function playvid12(){
	toproj4.style.display = "block";
	toproj4.play();
	toproj4.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		projbuttons.style.display = "none";
		homeb.style.display = "none";
		proj4page.style.display = "block";
		setTimeout(function(){
			toproj4.style.display = "none";
			toproj4.currentTime=0;
			toproj4.load();
			}, 100);
	}
}

//Video from Projects to Project 5
var toproj5 = document.getElementById("toproj5v");
var proj5page = document.getElementById("proj5page")
function playvid13(){
	toproj5.style.display = "block";
	toproj5.play();
	toproj5.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		projbuttons.style.display = "none";
		homeb.style.display = "none";
		proj5page.style.display = "block";
		setTimeout(function(){
			toproj5.style.display = "none";
			toproj5.currentTime=0;
			toproj5.load();
			}, 100);
	}
}

//Video from Project 1 to Projects
var proj1toproj = document.getElementById("proj1toprojv");
function playvid14(){
	proj1toproj.style.display = "block";
	proj1toproj.play();
	proj1toproj.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		projbuttons.style.display = "block";
		homeb.style.display = "block";
		proj1page.style.display = "none";
		projectpage.style.display = "block";
		setTimeout(function(){
			proj1toproj.style.display = "none";
			proj1toproj.currentTime=0;
			proj1toproj.load();
			}, 100);
	}
}

//Video from Project 2 to Projects
var proj2toproj = document.getElementById("proj2toprojv");
function playvid15(){
	proj2toproj.style.display = "block";
	proj2toproj.play();
	proj2toproj.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		projbuttons.style.display = "block";
		homeb.style.display = "block";
		proj2page.style.display = "none";
		projectpage.style.display = "block";
		setTimeout(function(){
			proj2toproj.style.display = "none";
			proj2toproj.currentTime=0;
			proj2toproj.load();
			}, 100);
	}
}

//Video from Project 3 to Projects
var proj3toproj = document.getElementById("proj3toprojv");
function playvid16(){
	proj3toproj.style.display = "block";
	proj3toproj.play();
	proj3toproj.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		projbuttons.style.display = "block";
		homeb.style.display = "block";
		projectpage.style.display = "block";
		proj3page.style.display = "none";
		setTimeout(function(){
			proj3toproj.style.display = "none";
			proj3toproj.currentTime=0;
			proj3toproj.load();
			}, 100);
	}
}

//Video from Project 4 to Projects
var proj4toproj = document.getElementById("proj4toprojv");
function playvid17(){
	proj4toproj.style.display = "block";
	proj4toproj.play();
	proj4toproj.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		projbuttons.style.display = "block";
		homeb.style.display = "block";
		proj4page.style.display = "none";
		projectpage.style.display = "block";
		setTimeout(function(){
			proj4toproj.style.display = "none";
			proj4toproj.currentTime=0;
			proj4toproj.load();
			}, 100);
	}
}

//Video from Project 5 to Projects
var proj5toproj = document.getElementById("proj5toprojv");
function playvid18(){
	proj5toproj.style.display = "block";
	proj5toproj.play();
	proj5toproj.addEventListener('ended',myHandler,false);
	function myHandler(e){
		homepage.style.display = "none";
		projbuttons.style.display = "block";
		homeb.style.display = "block";
		proj5page.style.display = "none";
		projectpage.style.display = "block";
		setTimeout(function(){
			proj5toproj.style.display = "none";
			proj5toproj.currentTime=0;
			proj5toproj.load();
			}, 100);
	}
}
