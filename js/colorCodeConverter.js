//***************** Question 3b
  function hexFromRGB(r, g, b) {
        r=Math.floor((r/100)*255);
        g=Math.floor((g/100)*255);
        b=Math.floor((b/100)*255);
        let rgb = [r,g,b];
        let hex = [
          r.toString( 16 ),
          g.toString( 16 ),
          b.toString( 16 )
        ];
        $.each( hex, function( nr, val ) {
          if ( val.length === 1 ) {
            hex[ nr ] = "0" + val;
          }
        });
        let codes = [hex,rgb]
        return(codes);
      }

function onnumber(obj,n)
  {
    let r=$("#r").val();
    let g=$("#g").val();
    let b=$("#b").val();
    if( n==1 )
      $("#red").slider("value", r);
    else if( n==2 )
      $("#green").slider("value", g);
    else
      $("#blue").slider("value", b);
  }
function refreshSwatch() {
  let sourceFormat =$('input[name=colorformat]:checked').val();
  let red = document.querySelector('#sliderRed').value;
  let green = document.querySelector('#sliderGreen').value;
  let blue = document.querySelector('#sliderBlue').value;
  let clrcodes =  hexFromRGB( red, green, blue ); 
  let hex = clrcodes[0].join( "" ).toUpperCase();
  let rgb = clrcodes[1].join();
  
  $( "#swatch" ).css( "background-color", "#" + hex );
  document.querySelector("#r").value = red;
  document.querySelector("#g").value = green;
  document.querySelector("#b").value = blue;
if(sourceFormat==="RGB"){
document.getElementById("source").value = "RGB("+rgb+")";
document.getElementById("source").innerHTML = "("+rgb+")";
}
else{
document.getElementById("source").value = "#"+hex;
document.getElementById("source").innerHTML = "#"+hex;
}
document.getElementById("rgb").value = "RGB("+rgb+")";
document.getElementById("rgb").innerHTML = "("+rgb+")";
document.getElementById("hex").value = "#"+hex;
document.getElementById("hex").innerHTML = "#"+hex;
}
//****************** The following is no longer really needed, could just hide and show the RGB and HEX elements, but for the purposes of this competition I'm including a calculation method:

function hex2rgb(hex){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);
    result = 'rgba('+r+','+g+','+b+')';
    return result;
}
//Function to convert rgb to hex
function rgb2hex(rgb){  
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  result = (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
  return result;
}
function detectFormat(input){ 
  if(input.includes("RGB")){
    return rgb2hex(input);
  }
  else if(input.includes("#")){
     return hex2rgb(input);
  }
  else{
  alert("The value you entered is not correctly formatted. Make sure it starts with '#' for hex values or 'rgb' for rgb values");
  }
}
//Find all links and attach an "onclick" behavior which sets the profile image to "thinking.png"
// let elements = document.getElementsByTagName('a');
// for(var i = 0, len = elements.length; i < len; i++) {
//     elements[i].onclick = function () {
//        let img=document.getElementById("profile");
//        img.src="http://aslexpress.net/codingCompetition6/img/Thinking.png";
//     }
// }
//***************** event listeners
document.getElementById("sliderRed").addEventListener("change", function(){
    refreshSwatch();
});
document.getElementById("sliderGreen").addEventListener("change", function(){
    refreshSwatch();
});
document.getElementById("sliderBlue").addEventListener("change", function(){
    refreshSwatch();
});
document.getElementById("convertbtn").addEventListener("click", function(){
    let input=document.getElementById("source").value
    document.getElementById("converted").value=detectFormat(input);
    document.getElementById("profile").src = "http://aslexpress.net/codingCompetition6/img/Inspiration.png";
});
//add an event listener to all links which sets the profile image to thinking.png anytime a link is clicked
function callback(e) {
    var e = window.e || e;

    if (e.target.tagName !== 'A'){
      return;
    }
   else{
    e.target.src = "http://aslexpress.net/codingCompetition6/img/Thinking.png";
    return;
   }    
}

if (document.addEventListener)
    document.addEventListener('click', callback, false);
else
    document.attachEvent('onclick', callback);