const toDoList = [];

document.addEventListener("keydown", keyDownEnter, false);

function keyDownEnter(e) {
  if(e.keyCode === 13) {
    event.preventDefault();
    inputText();
  } 
}

function inputText() {
  var item = document.getElementById("input").value;   //input value of what's being typed in
  var text = document.createTextNode(item);   // storing the input value from Item into text
  var newItem = document.createElement('li')  //  displaying (item) on a list 
  newItem.appendChild(text);  //input value stored in text is being attached to list item where it will be displayed
  document.getElementById('list').appendChild(newItem) //seperate entity... this is where the source of truth is actually being displayed
 }

function removeText() {
  // var list = document.getElementById('list')
  // list.removeChild(list.childNodes[0])

  var item = document.getElementById("input").value; 
  var text = document.createTextNode(item);
  var newItem = document.createElement('li')
  
  newItem.removeChild(text.lastElementChild)
}


