var team = [
	{
		name: "Rickard Bergeling",
		photo: "img/members/Rickard.png",
		github: "herrr",
		responsibilites: ["3D models", "Networking", "UI", "Game Logic"]
	},
	{
		name: "Erik Forsberg",
		photo: "img/members/Erik.jpg",
		github: "ankhuve",
		responsibilites: ["Arrow effects & 3D models", "World modeling", "PixelSense and Vive interaction"]
	},
	{
		name: "Arvid Sätterkvist",
		photo: "img/members/Arvid.png",
		github: "arvidsat",
		responsibilites: ["Shaders", "3D models", "Networking"]
	},
	{
		name: "Calle Sténson",
		photo: "img/members/Calle.jpg",
		github: "cstensonpv",
		responsibilites: ["Enemy logic", "Game logic", "PixelSense interaction"]
	},
	{
		name: "Anton Sivertsson",
		photo: "img/members/Anton.jpg",
		github: "antonsivertsson",
		responsibilites: ["Bow interaction", "Networking", "Enemy health UI", "Game Logic", "Sound"]
	},
	{
		name: "Emil Westin",
		photo: "img/members/Emil.jpg",
		github: "emiwes",
		responsibilites: ["Networking", "PixelSense and Vive interaction", "Game Logic"]
	}
];

var generateTeamContent = function(){
	var innerHTML = "";
	for(var member in team){
		innerHTML += '<div class="member">';
		innerHTML += '<a href="https://github.com/'+team[member].github+'">';
		innerHTML += '<img src="'+team[member].photo+'"/>';
		innerHTML += '<div class="fname">'+team[member].name.split(" ")[0]+'</div>';
		innerHTML += '<div class="lname">'+team[member].name.split(" ")[1]+'</div>';
		innerHTML += '</a>';

		innerHTML += '<div style="text-align:left;"><span style="color:#159957">Responsible for:</span><ul style="padding-left:15px">';
		for(var responsibility in team[member].responsibilites){
			innerHTML += '<li>' + team[member].responsibilites[responsibility] + '</li>';
		}
		innerHTML += '</ul></div>';

		innerHTML += '</div>';
	}
	document.getElementById("theTeam").innerHTML = innerHTML;
};

generateTeamContent();
