var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
var wid;//85
screen.width<=467?wid='-95':wid='-65';
if (prevScrollpos-5 > currentScrollPos) {
  document.getElementById("navbar").style.top = "0";
} else if(prevScrollpos+5< currentScrollPos) {
  document.getElementById("navbar").style.top = wid+'px';
}
  prevScrollpos = currentScrollPos;
}
