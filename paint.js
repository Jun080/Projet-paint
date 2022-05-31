
width = "";
height = "";
let color = "";
function changeColor(){
  color = document.getElementById("color").value;
}

let sizetext = "";
function ChangeSize(){
  sizetext = document.getElementById("sizeText").value + "px";
  console.log(sizetext);
}
let Police = "";
function changePolice(){
  Police = document.getElementById("police").value;
  console.log(Police);
}
let Style = "";
function changeStyle(){
  Style = document.getElementById("style").value ;
  console.log(Style);
}
function changeWidth(){
  width = document.getElementById("width").value;
  width /= 5
  widthPoly = document.getElementById("width").value;
  console.log(widthPoly)
}

function changeHeight(){
  height = document.getElementById("height").value;
  height /= 5
  heightPoly = document.getElementById("height").value;
  console.log(widthPoly)
}
let rayon= null;
function changeRayon(){
  rayon = document.getElementById("rayon").value;
  console.log(rayon);

}

function addElementrect() {
  // gives him content
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "19 3 100 100");
  svg.setAttribute("width", "700");
  svg.setAttribute("height", "500");
  svg.setAttribute('fill',"black");

  var svgNS = svg.namespaceURI;
  var rect = document.createElementNS(svgNS,'rect');
  rect.setAttribute('x',0);
  rect.setAttribute('y',5);
  rect.setAttribute('width',width);
  rect.setAttribute('height',height);
  rect.setAttribute('fill','black');
  rect.setAttribute('stroke','pink');
  rect.setAttribute('stroke-width','1');
  
  // changeRouge();


  // change color's element 
  rect.addEventListener('click', () => {   
    if (fill.checked == true){
      rect.setAttribute('fill',color);
    }
    // si la checkbox pour la bordure est check
    if (border.checked == true){
      rect.setAttribute('stroke',color);
    }
    rect.setAttribute('width',width);
    rect.setAttribute('height',height);
  
  })
  rect.addEventListener('dblclick', () =>{
    rect.remove();
  })
  svg.style.position = "absolute";
    svg.onmousedown=function(){
    dragValue=svg;
    }

  
  svg.appendChild(rect);
  document.querySelector("#canva").appendChild(svg);
  
  
}

var dragValue;

// function to create circles when you clicked in the right button
function addElementcircle() {
  
  // et lui donne un peu de contenu
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("width", "150");
  svg.setAttribute("height", "150");
  var svgNS = svg.namespaceURI;
  // Create a circle element (not part of the DOM yet)
  var circle = document.createElementNS(svgNS,'circle'); 
  circle.setAttribute('fill','red'); 
  circle.setAttribute('cx',50);     
  circle.setAttribute('cy',50);    
  circle.setAttribute('r',45);      
  circle.setAttribute('stroke','pink');
  circle.setAttribute('stroke-width','4');
  // change color's element 
  
  circle.addEventListener('click', () => {
    if (fill.checked == true){
      circle.setAttribute('fill',color);
    }
    // si la checkbox pour la bordure est check
    if (border.checked == true){
      circle.setAttribute('stroke',color);
    }
    if (rayon.value !== null){
      svg.setAttribute('width', rayon);
      svg.setAttribute('height', rayon);
    }
  

  })
  circle.addEventListener('dblclick', () =>{
    circle.remove();
  })
  svg.style.position = "absolute";
    svg.onmousedown=function(){
    dragValue=svg;
   }

  svg.appendChild(circle);
  document.querySelector("#canva").appendChild(svg);

}
// function to create triangle when you clicked in the right button
function addElementtriangle() {
  // create a new div
  var newSvg = document.createElement("svg");
  // gives him content
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // modified svg'attributs
  // pour créer un triangle de 200x150
  svg.setAttribute("width", "220")
  svg.setAttribute("height", "170")
  var svgNS = svg.namespaceURI;
  // created triangle's attributs
  var polygon = document.createElementNS(svgNS,'polygon');

  polygon.setAttribute('points','10,160 110,10 210,160');
  polygon.setAttribute('stroke','pink');
  polygon.setAttribute('stroke-width','4');

  var a = polygon.points.getItem(0);
  var b = polygon.points.getItem(1);
  var c = polygon.points.getItem(2);

  // change color's element 
  polygon.addEventListener('click', () => {
    // si la checkbox pour le remplissage est check
    if (fill.checked == true){
      polygon.setAttribute('fill',color);
    }
    // si la checkbox pour la bordure est check
    if (border.checked == true){
      polygon.setAttribute('stroke',color);
    }
    
    if (heightPoly != ""){
      a.y = heightPoly-10;
      c.y = heightPoly-10;
    }

    if (widthPoly != ""){
      b.x = widthPoly/2;
      c.x = widthPoly-10;
    }
    
    svg.setAttribute('width', widthPoly);
    svg.setAttribute('height', heightPoly);
    
    

  })
  polygon.addEventListener('dblclick', () =>{
    polygon.remove();
  })
  svg.style.position = "absolute";
    svg.onmousedown=function(){
    dragValue=svg;
  }

  
  // add the triangle to the SVG document so we can see it
  svg.appendChild(polygon);
  document.querySelector("#canva").appendChild(svg);

  
}

function addElementtexte(){
    // crée un nouvel élément div

    var zone = document.createElement("textarea");
 
    zone.id = 'text';
    zone.style.border = "none";

    zone.addEventListener('click', () => {
      
      zone.style.fontFamily = Police;
      zone.style.fontStyle = Style;
      zone.style.fontSize = sizetext;
      if (ColorText.checked == true){
        zone.style.color = color;
      } else if (ColorSur.checked == true) {
        zone.style.backgroundColor = color;
      }
    })
    
    zone.addEventListener('dblclick', () =>{
      zone.remove();
    })

    zone.style.position = "absolute";
    zone.onmousedown=function(){
      dragValue=zone;
    }
  
    // ajoute le nouvel élément créé et son contenu dans le DOM
    var currentDiv = document.getElementById('div3'); 
    document.querySelector("#canva").appendChild(zone,currentDiv);

}

// fonction déplacement

document.onmouseup = function(e){
  dragValue=null;
}
document.onmousemove= function(e){
  if (dragValue) {
      var x = e.clientX ;
      var y = e.clientY ;

      dragValue.style.left = x -230 + "px";
      dragValue.style.top = y -200 + "px";
  }
}
function MenuExplicatif(){
  console.log(true);
  window.open('help.html','help','menubar=no, scrollbars=no, top=200, left=300, width=800, height=600');
}

function reqListenerpdf () {
  console.log(this.responseText);
  window.location.href = "pagepdf.pdf";  //permet de quitter la page pour envoyer sur celle du pdf
}

function reqListenerpng () {
  console.log(this.responseText);
  window.location.href = "screenshot.png"; //permet de quitter la page pour envoyer sur celle du png
}

function save () {
  console.log(this.responseText);
  window.location.href = "save.svg"; //permet de save
}
function generatePDF(){

  let html = document.getElementById("test").innerHTML;
  console.log(html);

  let formData = new FormData(); // cée un simili formulaire pour recevoir les données
  formData.append("blob", html);
  
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListenerpdf;
  oReq.open("post", "paint.php", true); //envoie les information à paint.php
  oReq.send(formData);

}

function generatePNG(){

  let html = document.getElementById("test").innerHTML;
  console.log(html);

  let formData = new FormData(); // cée un simili formulaire pour recevoir les données
  formData.append("blob", html);
  
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListenerpng;
  oReq.open("post", "paint.php", true); //envoie les information à paint.php
  oReq.send(formData);

}

function erase() {
  window.location.reload();
}


function SaveToClient()
{
    let data = document.getElementById("canva").innerHTML;
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(data);
    var DocName = "save.cnv";
    var dlAnchorElem = document.getElementById('downloader');
    dlAnchorElem.setAttribute("href",dataStr);
    dlAnchorElem.setAttribute("download", DocName);
    dlAnchorElem.click();
}

window.onload = () => {
  document.getElementById("file-input").addEventListener('change', LoadFromClient);
};

function LoadFromClient() {

  if (typeof window.FileReader !== 'function') {
      alert("loading files isn't supported on this browser yet.");
      return;
  }
  let input = document.getElementById('file-input');


  var fr=new FileReader();
  fr.onload=function(){

      document.getElementById("canva").innerHTML = fr.result;
  }
  fr.readAsText(input.files[0]);
} 