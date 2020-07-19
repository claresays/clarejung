const emojis = document.querySelectorAll('#emoji');
emojis.forEach(emoji => emoji.addEventListener('mouseover', function(e){
    emoji.classList.add('animated','shake')
}))

emojis.forEach(emoji => emoji.addEventListener('mouseout', function(e){
    emoji.classList.remove('animated','shake')
}))

const emojis2 = document.querySelectorAll('#emoji2');
emojis2.forEach(emoji => emoji.addEventListener('mouseover', function(e){
    emoji.classList.add('animated','bounce')
}))

emojis2.forEach(emoji => emoji.addEventListener('mouseout', function(e){
    emoji.classList.remove('animated','bounce')
}))

var modals = document.getElementsByClassName("modal");
var btns = document.getElementsByClassName("btn");
var spanes = document.getElementsByClassName("close");
var funcs = [];
 
function Modal(num) {
  return function() {
    btns[num].onclick =  function() {
        modals[num].style.display = "block";
        console.log(num);
    };
    spanes[num].onclick = function() {
        modals[num].style.display = "none";
    };
  };
}
 
for(var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}
 
for(var j = 0; j < btns.length; j++) {
  funcs[j]();
}
 
window.onclick = function(event) {
  if (event.target.className == "modal") {
      event.target.style.display = "none";
  }
};


const myForm = document.getElementById("myForm");
