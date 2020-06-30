const emojis = document.querySelectorAll('#emoji');
emojis.forEach(emoji => emoji.addEventListener('mouseover', function(e){
    emoji.classList.add('animated','bounce')
}))

emojis.forEach(emoji => emoji.addEventListener('mouseout', function(e){
    emoji.classList.remove('animated','bounce')
}))