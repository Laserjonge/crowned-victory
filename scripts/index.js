var loadAnimation = bodymovin.loadAnimation({
  container: document.getElementById("loading-screen"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "loading.json",
});

var stillAnimation = bodymovin.loadAnimation({
  container: document.getElementById("attack-screen"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "still.json",
});

var hammer = document.getElementById("hammer-button");
var kick = document.getElementById("kick-button");
var music = document.getElementById("music-button");


//MOVING ICONS
var hammerAnimation = bodymovin.loadAnimation({
  container: document.getElementById("hammer-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "icon-hammer.json",
});

var kickAnimation = bodymovin.loadAnimation({
  container: document.getElementById("kick-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "icon-shoe.json",
});

var musicAnimation = bodymovin.loadAnimation({
  container: document.getElementById("music-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "icon-music.json",
});

var muteAnim = bodymovin.loadAnimation({
  container: document.getElementById("mute-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "icon-mute.json",
});

var resetAnimation = bodymovin.loadAnimation({
  container: document.getElementById("reset-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "icon-reset.json",
});


// HAMMER FUNCTION
function hammerFunction() {
  // Change the animation path to "hammer.json"
  changeAnimationPath("hammer.json");
}
// Function to change the animation path
function changeAnimationPath(newPath) {
  stillAnimation.destroy(); // Destroy the current animation instance
  stillAnimation = bodymovin.loadAnimation({
    // Load a new animation instance with the updated path
    container: document.getElementById("attack-screen"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: newPath,
  });
}


// KICK FUNCTION
function kickFunction() {
  // Change the animation path to "kick.json"
  changeAnimationPath("kick.json");
}
// Function to change the animation path
function changeAnimationPath(newPath) {
  stillAnimation.destroy(); // Destroy the current animation instance
  stillAnimation = bodymovin.loadAnimation({
    // Load a new animation instance with the updated path
    container: document.getElementById("attack-screen"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: newPath,
  });
}


// MUSIC FUNCTION
function musicFunction() {
  // Change the animation path to "music.json"
  changeAnimationPath("music.json");
}
// Function to change the animation path
function changeAnimationPath(newPath) {
  stillAnimation.destroy(); // Destroy the current animation instance
  stillAnimation = bodymovin.loadAnimation({
    // Load a new animation instance with the updated path
    container: document.getElementById("attack-screen"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: newPath,
  });
}

hammer.addEventListener("click", hammerFunction);
kick.addEventListener("click", kickFunction);
music.addEventListener("click", musicFunction);




// RESET FUNCTION
var reset = document.getElementById("reset-button");

function refreshPage() {
  window.location.reload();
}

reset.addEventListener("click", refreshPage);


function mute() {
  changePath("icon-mute.json");
}

function unmute() {
  changePath("icon-volume.json");
}

function changePath(newPath) {
  muteAnim.destroy();
  muteAnim = bodymovin.loadAnimation({
    container: document.getElementById("mute-animation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: newPath,
  });
}

var muteButton = document.getElementById("mute-button");

function toggleAudio() {
  var audio = document.getElementById("myAudio");

  if (audio.paused) {
    audio.play();
    mute();
    console.log("if");
  } else {
    audio.pause();
    unmute();
  }
}

muteButton.addEventListener("click", toggleAudio);




// DRAGGABLE FUNCTION
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (document.getElementById(elmnt.id + "Header")) {
      document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // Calculate the new position, ensuring it stays within the screen boundaries:
      var newTop = Math.max(0, Math.min(window.innerHeight - elmnt.offsetHeight, elmnt.offsetTop - pos2));
      var newLeft = Math.max(0, Math.min(window.innerWidth - elmnt.offsetWidth, elmnt.offsetLeft - pos1));

      elmnt.style.top = newTop + "px";
      elmnt.style.left = newLeft + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  // Apply the dragElement function to make the header draggable
  dragElement(document.getElementById("draggableElement"));




  // CENTER
  function alignHeader() {
    var header = document.getElementById('draggableElement');

    // Calculate the position to center the header
    var topPosition = (window.innerHeight - header.offsetHeight) / 2;
    var leftPosition = (window.innerWidth - header.offsetWidth) / 2;

    // Set the top and left properties
    // header.style.top = topPosition + 'px';
    header.style.left = leftPosition + 'px';
  }

  // Align the header initially
  alignHeader();

  // Align the header on window resize
  window.addEventListener('resize', alignHeader);


