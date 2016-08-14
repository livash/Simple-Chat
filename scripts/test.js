window.onload = function() {
  var heading = document.createElement("h1");
  var heading_text = document.createTextNode("Big Text");
  heading.appendChild(heading_text);
  var attr = document.createAttribute("id");
  attr.value = "olenaHeading";
  heading.setAttributeNode(attr);
  
  window.changeColor = function(color) {
    var element = document.getElementById('olenaHeading');
    element.style.color = color;
  }

  window.changeBkgndColor = function(color) {
    var element = document.body;
    element.style.backgroundColor = color;
  }

  var br = document.createElement('br');
  
  var btn1 = document.createElement("button");
  var btn1_text = document.createTextNode("Button, change text color to red");
  var btn1_attr = document.createAttribute("onclick");
  btn1_attr.value = "changeColor('red')";
  btn1.appendChild(btn1_text);
  btn1.setAttributeNode(btn1_attr);

  var btn2 = document.createElement("button");
  var btn2_text = document.createTextNode("Check background color to lime");
  var btn2_attr = document.createAttribute('onclick');
  btn2_attr.value = "changeBkgndColor('lime')";
  btn2.appendChild(btn2_text);
  btn2.setAttributeNode(btn2_attr);

  var input = document.createElement("input");
  var input_attr = document.createAttribute('type');
  input_attr.value = "checkbox";
  input.setAttributeNode(input_attr);
  input.checked = true;
  input.value = "hello";

  var span = document.createElement("span");
  span.innerHTML = "Check Me Out";

  var link = document.createElement("a");
  link.setAttribute('href', 'http://google.com');
  link.innerHTML = "Google Link";

  document.body.appendChild(heading);
  document.body.appendChild(btn1);
  document.body.appendChild(br);
  document.body.appendChild(btn2);
  document.body.appendChild(br.cloneNode(true));
  document.body.appendChild(input);
  document.body.appendChild(span);
  document.body.appendChild(br.cloneNode(true));
  document.body.appendChild(link);


  // create a prompt that append users input as LI into UL
  // pressing ESC will finish the propmt cycle

  var h2 = document.createElement('h2');
  h2.appendChild(document.createTextNode('My Master List'));
  document.body.appendChild(h2);

  var ul = document.createElement('ul');
  document.body.appendChild(ul);

  while(true) {
    var data = prompt("Add an item to your Master List", "");

    if (data === null)
      break;

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(data));
    ul.appendChild(li);
  }

}