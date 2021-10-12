const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');
const merch = document.getElementById('merch');
const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');


function menuBut(){
	console.log("bewhj");
anime({
  targets: '#home',
  easing: 'easeInOutSine',
  translateX : -1500,
  duration : 1000

});
anime({
  targets: '#about',
  easing: 'easeInOutSine',
  translateX : -1500,
  duration : 1000

});
anime({
  targets: '#project1',
  easing: 'easeInOutSine',
  translateX : -1500,
  duration : 1000

});
anime({
  targets: '#merch',
  easing: 'easeInOutSine',
  translateX : -1500,
  duration : 1000

});
anime({
  targets: '#menu',
  easing: 'easeInOutSine',
  translateX : -1520,
  duration : 1000

});

document.addEventListener("click", printMousePos);
}

function manicM(){
	console.log("befgdgfwhj");
anime({
  targets: '#home',
  easing: 'easeInOutSine',
  translateX : 5,
  duration : 1000

});
anime({
  targets: '#menu',
  easing: 'easeInOutSine',
  translateX : 1520,
  duration : 1000

});
}


function aboutM(){
	console.log("befgdgfwhj");
anime({
  targets: '#about',
  easing: 'easeInOutSine',
  translateX : 1500,
  duration : 1000

});
anime({
  targets: '#menu',
  easing: 'easeInOutSine',
  translateX : 1520,
  duration : 1000

});
}




function projectM(str){
	console.log("befgdgfwhj");
anime({
  targets: str,
  easing: 'easeInOutSine',
  translateX : 1500,
  duration : 1000

});
anime({
  targets: '#menu',
  easing: 'easeInOutSine',
  translateX : 1520,
  duration : 1000

});
}




function printMousePos(event) {
	console.log("clientX: " + event.clientX +
    " - clientY: " + event.clientY);

    if ( (event.clientX > 150 && event.clientX < 650) && (event.clientY > 160 && event.clientY < 330) ){
    	manicM();
    }
    if ( (event.clientX > 530 && event.clientX < 630) && (event.clientY > 380 && event.clientY < 485) ){
    	aboutM();
    }
    if ( (event.clientX > 1048 && event.clientX < 1360) && (event.clientY > 250 && event.clientY < 370) ){
    	projectM("#project1");
    }
    if ( (event.clientX > 1040 && event.clientX < 1220) && (event.clientY > 530 && event.clientY < 630) ){
    	projectM("#merch");
    }
}


function scrollF(){
	console.log("scroll");
}
