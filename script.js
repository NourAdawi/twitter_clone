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

      var tag2 = document.createElement("h4");
      var text2 = document.createTextNode('Nour Adawi');
      tag2.appendChild(text2);
      var element2 = document.getElementById("new2");
      element2.appendChild(tag2);

      var tag3 = document.createElement("span");
      var text3 = document.createTextNode('@nourdaza . just now');
      tag3.appendChild(text3);
      var element3 = document.getElementById("new2");
      element3.appendChild(tag3);


});



  textField.addEventListener('blur', e => {
    if (e.target.value === "") {
      changeOpacity(0.5);
    }

  });

