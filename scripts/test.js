window.onload = function() {
  var heading = document.createElement("h1");
  var heading_text = document.createTextNode("Big Text");
  heading.appendChild(heading_text);
  var attr = document.createAttribute("id");
  attr.value = "olenaHeading";
  heading.setAttributeNode(attr);
  
  window.changeColor = function(colorName) {
    var element = document.getElementById('olenaHeading');
    element.style.color = colorName;
  }
  
  var btn1 = document.createElement("button");
  var btn1_text = document.createTextNode("Button, change color to red");
  var btn1_attr = document.createAttribute("onclick");
  btn1_attr.value = "changeColor('red')";
  btn1.appendChild(btn1_text);
  btn1.setAttributeNode(btn1_attr);

  document.body.appendChild(heading);
  document.body.appendChild(btn1);

}