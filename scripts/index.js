// var animation = bodymovin.loadAnimation({
// 	container: document.getElementById('bm'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: true,
// 	path: 'data.json'
//   })

// var animation = bodymovin.loadAnimation({
// 	container: document.getElementById('bl'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: true,
// 	path: 'data2.json'
// })

function toggleAudio() {
	var audio = document.getElementById("myAudio");

	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
}