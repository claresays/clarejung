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

var btn = document.getElementsByClassName("click-to-open");

for (var i = 0; i < btn.length; i++) {
  var thisBtn = btn[i];
  thisBtn.addEventListener("click", function(){
    var modal = document.getElementById(this.dataset.modal);
    modal.style.display = "flex";
}, false)};

document.querySelector('.close-button').addEventListener('click',
function() {
    document.querySelector('.click-to-open').style.display = 'none';
});