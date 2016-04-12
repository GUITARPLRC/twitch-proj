var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");

var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin","comster404"];

/*
link1.click();
link2.click();
link3.click();
*/

function getTwitchers (){
	
	$.getJSON("https://api.twitch.tv/kraken/streams?channel=freecodecamp,storbeck,terakilobyte,habathcx,RobotCaleb,thomasballinger,noobs2ninjas,beohoff,brunofin,comster404", function (data){
		
		var list = document.getElementById("list");
		
		console.log(data);
		
		var anchor = document.createElement("a");
		anchor.setAttribute("href", data.streamer.self);
		var item = document.createElement("li");
		var div = document.createElement("div");
		var pic = document.createElement("div");
		pic.setAttribute("class", "picture");
		var header = document.createElement("h3");
		var description = document.createTextNode(data.streamer);
		
		div.appendChild(pic); // div > pic
		div.appendChild(header); // div > pic > header
		div.appendChild(description); // div > pic > header > description
		item.appendChild(div); // li(item) > div
		anchor.appendChild(item); // a > li(item) > div
		list.appendChild(anchor); // list > a > li(item) > div > pic > header > description
		
	});
	
}

getTwitchers();