const tweetBtn = document.querySelector('.tweet-btn');

const changeOpacity = x => {
  tweetBtn.style.opacity = x;
  

};

const textField = document.getElementById('text_field');

textField.addEventListener('keypress', e => {
  if (e.target.value !== "") {
    changeOpacity(1);
  }
   });



tweetBtn.addEventListener('click', e => {
 
  var test = document.getElementById('text_field');
      var tag = document.createElement("p");
      var text = document.createTextNode(test.value);
      tag.appendChild(text);
      var element = document.getElementById("new");
      element.appendChild(tag);

});



  textField.addEventListener('blur', e => {
    if (e.target.value === "") {
      changeOpacity(0.5);
    }

  });

