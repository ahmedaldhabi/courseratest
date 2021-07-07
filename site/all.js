(function () {
function clrr(t){
var clr = document.querySelectorAll("#myth");
for (var i = 0; i < clr.length; i++) {
clr[i].style.display = t;
}
};
		
var ddd = function() {
	var chk = document.getElementById("myth")
	if (chk.length == 0) {
	var cdiv = document.createElement("div");
cdiv.style = "background: rgba(255, 255, 255, 0.9); position: absolute; top: 0px; width: 100%; height: 100px; display: block; z-index: 999; color: red; overflow: auto; border: 3px solid red;";
cdiv.style.resize = "both";
cdiv.id = "myth";
var bdy = document.getElementsByTagName("body");
bdy[0].appendChild(cdiv);
	};
};

var xv = function() {
	ddd();
var s = document.getElementsByClassName("seek-thumb")[0].style.backgroundImage;
var ss = s.replace(/url\(\"|\"\)/gi, "");
var imgg = document.createElement("img");
imgg.style = "position: absolute; top: 0px; max-width: 100%; max-height: 100%; display: block; resize: both;";
imgg.id = "myimg";
imgg.src = ss;
document.getElementById("myth").appendChild(imgg); 
};

var ph = function() {
	ddd();
var s = document.getElementsByClassName("mhp1138_image")[1].src;
for (var i = 0; i < 7; i++) {
	var sd = ")S" + i;
	var ss = s.replace(/\)s./gi, sd);
	var mimg = document.createElement("img");
	mimg.style = "float: left; clear: right; max-width: 100%; max-height: 100%; display: block; margin-right: 10px; margin-bottom: 10px;";
	mimg.id = "myimg" + i;
	mimg.src = ss;
  mimg.alt = "img" + i;
	document.getElementById("myth").appendChild(mimg);
		
};

};

var xh = function() {
	ddd();
var s = document.getElementsByClassName("sprite")[0].style.backgroundImage;
var ss = s.replace(/url\(\"|\"\)/gi, "");
var imgg = document.createElement("img");
imgg.style = "position: absolute; top: 0px; width: 600%; height: 100%; display: block; resize: both;";
imgg.id = "myimg";
imgg.src = ss;
document.getElementById("myth").appendChild(imgg);
};

var xnx = function() {
	ddd();
var s = document.getElementsByClassName("seek-thumb")[0].style.backgroundImage;
var ss = s.replace(/url\(\"|\"\)/gi, "");
var imgg = document.createElement("img");
imgg.style = "position: absolute; top: 0px; max-width: 100%; max-height: 100%; display: block; resize: both;";
imgg.id = "myimg";
imgg.src = ss;
document.getElementById("myth").appendChild(imgg);
};
})(window);