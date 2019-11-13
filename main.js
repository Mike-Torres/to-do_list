const toDoList = [];

function inputText() {
   var item = document.getElementById("input").value; 
   var text = document.createTextNode(item);
   var newItem = document.createElement('li')
   newItem.appendChild(text);
   document.getElementById('list').appendChild(newItem)
   
   console.log('working')
  }


function removeText() {
    // Step 2 
}


