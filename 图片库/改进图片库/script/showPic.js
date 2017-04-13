window.onload=function() {
	prepareGallery();
}

function prepareGallery() {
	var gallery_list=document.getElementById("gallery_list");
	var links=gallery_list.getElementsByTagName("a");
	for(var i=0;i<links.length;i++) {
		links[i].onclick=function() {
			showPic(this);
			return false;
		}
	}
}

function showPic(whichpic) {
	var source=whichpic.getAttribute("href");
	var text=whichpic.getAttribute("title");
	var placeholder=document.getElementById("placeholder");
	var picTitle=document.getElementById("picTitle");
	placeholder.setAttribute("src",source);
	picTitle.firstChild.nodeValue=text;
}