function showPic(whichpic) {
	var source=whichpic.getAttribute("href");
	var txt=whichPic.getAttribute("title");
	var placeholder=document.getElementById("placeholder");
	var picTitle=document.getElementById("picTitle");
	placeholder.setAttribute("src",source);
	picTitle.innerHTML=txt;
}