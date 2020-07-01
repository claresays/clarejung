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