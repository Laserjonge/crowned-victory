// var animation = bodymovin.loadAnimation({
// 	container: document.getElementById('loading-screen'),
// 	renderer: 'svg',
// 	loop: false,
// 	autoplay: true,
// 	path: 'loading-screen.json'
//   })

var animation = bodymovin.loadAnimation({
	container: document.getElementById('loading-screen'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'kick.json'
  })

// var animation = bodymovin.loadAnimation({
// 	container: document.getElementById('bl'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: true,
// 	path: 'data2.json'
// })


// MUTE FUNCTION
function toggleAudio() {
	var audio = document.getElementById("myAudio");

	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
}


// RESET FUNCTION
function refreshPage(){
    window.location.reload();
} 