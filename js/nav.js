var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos-5 > currentScrollPos) {
  document.getElementById("navbar").style.top = "0";
} else if(prevScrollpos+5< currentScrollPos) {
  document.getElementById("navbar").style.top = "-64px";
}
  prevScrollpos = currentScrollPos;
}
