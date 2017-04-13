function showPic(whichpic) {
	var source=whichpic.getAttribute("href");
	var text=whichpic.getAttribute("title");
	var placeholder=document.getElementById("placeholder");
	var picTitle=document.getElementById("picTitle");
	placeholder.setAttribute("src",source);
	picTitle.firstChild.nodeValue=text;
}