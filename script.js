const tweetBtn = document.querySelector('.tweet-btn');

const changeOpacity = x => {
  tweetBtn.style.opacity = x;
  
};
const textField = document.getElementById('text_field');
textField.addEventListener('keypress', e => {
  if(e.target.value !== ""){
    changeOpacity(1);
  }
  
});

tweetBtn.addEventListener('click', e => {
  
});

textField.addEventListener('blur', e => {
  if(e.target.value === ""){
    changeOpacity(0.5);
  }
  
});

