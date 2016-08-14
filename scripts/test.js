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
  document.body.appendChild(document.createElement('br'));
  document.body.appendChild(input);
  document.body.appendChild(span);
  document.body.appendChild(document.createElement('br'));
  document.body.appendChild(link);

}