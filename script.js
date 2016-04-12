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
	
	$.getJSON("https://api.twitch.tv/kraken/users/guitarplrc/follows/channels", function (data){
		
		var list = document.getElementById("list");
		
		console.log(data);
		
		for (var i =0; i < data.follows.length; i++) {
		
			var anchor = document.createElement("a");
				anchor.setAttribute("href", data.follows[i].channel.url); // set streamer link to
			var item = document.createElement("li");
				item.setAttribute("class", "streamer");
			var div = document.createElement("div");
			var pic = document.createElement("div");
				pic.setAttribute("href", data.follows[i].channel.logo); // set streamer logo
				pic.setAttribute("class", "picture");
			var header = document.createElement("h3");
				header.textContent = data.follows[i].channel.display_name; // set streamer name
			var description = document.createTextNode(data.follows[i].channel.status); // set streamer status (if "live")
			
			
			
			div.appendChild(pic); // div > pic
			div.appendChild(header); // div > pic > header
			div.appendChild(description); // div > pic > header > description
			item.appendChild(div); // li(item) > div
			anchor.appendChild(item); // a > li(item) > div
			list.appendChild(anchor); // list > a > li(item) > div > pic > header > description
		
		}
		
	});
	
}

getTwitchers();