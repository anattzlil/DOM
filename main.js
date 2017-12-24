var anchor = document.createElement('a');
var anchorTxt = document.createTextNode("Elevation's Website");
var attr = document.createAttribute("href");
var para = document.getElementById('elevation');
attr.value = "http://en.elevation.academy/";
anchor.attributes.setNamedItem(attr);
anchor.appendChild(anchorTxt);
para.appendChild(anchor);

var btn = document.createElement('button');
var firstTxt = document.createTextNode('1st text');
var divBtn = document.getElementById('btn-cont');
var click = document.createAttribute('onclick');
var clicked = false;
btn.attributes.setNamedItem(click);
btn.appendChild(firstTxt);
divBtn.appendChild(btn);
var textFunction = function() {
    if(!clicked) {
        btn.innerHTML='2nd text';
        clicked = true;
    } else {
        btn.innerHTML='1st text';
        clicked = false;
    }
}
click.value = "textFunction()";



