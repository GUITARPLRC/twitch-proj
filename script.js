var submit = document.getElementById("submit");

submit.addEventListener("click", getUser, false);

function getUser() {
	
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}
	
	var user = document.getElementById("user").value;
	
	getChannels(user);
	
}

function getChannels(user){
	
	$.getJSON("https://api.twitch.tv/kraken/users/"+ user +"/follows/channels", function (data){
		
		var list = document.getElementById("list");
		
		for (var i =0; i < data.follows.length; i++) {
      
      var anchor = document.createElement("a");
				anchor.setAttribute("href", data.follows[i].channel.url); // set channel link to
			var item = document.createElement("li");
				item.setAttribute("class", "streamer");
			var div = document.createElement("div");
			var pic = document.createElement("img");
				pic.setAttribute("src", data.follows[i].channel.logo); // set channel logo
				pic.setAttribute("class", "picture");
			var header = document.createElement("h3");
				header.textContent = data.follows[i].channel.display_name; // set channel name
        
			var description = document.createTextNode(data.follows[i].channel.status); // set channel status (if "live")
			
			div.appendChild(pic); // div > pic
			div.appendChild(header); // div > pic > header
			div.appendChild(description); // div > pic > header > description
      
			item.appendChild(anchor); // li(item) > a...
			anchor.appendChild(div); // li(item) > a > div...
			list.appendChild(item); // list > li(item) > a > div > pic > header > description
		
		}
		
	});
	
}