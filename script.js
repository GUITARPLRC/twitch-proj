var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var list = document.getElementById("list");
/*
link1.click();
link2.click();
link3.click();
*/
getTwitchers();
function getTwitchers (){
	
	$.getJSON("https://api.twitch.tv/kraken/streams/followed",function (data){
		
		console.log(data);
		
	})
	
}