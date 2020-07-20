
var hamburguer = document.getElementById("hamburguer");

// hamburguer.addEventListener("touchstart", hamburguerDown());


hamburguer.addEventListener("touchstart", 

			function(){
				var hamburguerState= document.querySelector("#links-drop-down li ul")
					// console.log(hamburguerState.style.display);
					if (hamburguerState.style.display!=="inherit"){
						hamburguerState.style.display = "inherit";
						console.log("click");
					}
					else{
						hamburguerState.style.display = "none";
						console.log("bye");
					}
			}												);


// hamburguer.addEventListener("touchleave", 

// function(){
// 	var hamburguerState= document.querySelector("#links-drop-down li ul")
// 		// console.log(hamburguerState.style.display);
// 		if (hamburguerState.style.display!=="inherit"){
// 			hamburguerState.style.display = "inherit";
// 			console.log("click");
// 		}
// 		else{
// 			hamburguerState.style.display = "none";
// 			console.log("bye");
// 		}
// }												);


// hamburguer.addEventListener("touchend", 

// function(){
// 	var hamburguerState= document.querySelector("#links-drop-down li ul")
// 		// console.log(hamburguerState.style.display);
// 		if (hamburguerState.style.display!=="inherit"){
// 			hamburguerState.style.display = "inherit";
// 			console.log("click");
// 		}
// 		else{
// 			hamburguerState.style.display = "none";
// 			console.log("bye");
// 		}
// }												);
