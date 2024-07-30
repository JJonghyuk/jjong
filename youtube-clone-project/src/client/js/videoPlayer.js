const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const playBtnBlindText = playBtn.querySelector(".blind-text");
const playBtnIcon = playBtn.querySelector("i");
const muteBtn = document.getElementById("mute");
const muteBtnBlindText = muteBtn.querySelector(".blind-text");
const muteBtnIcon = muteBtn.querySelector("i");
const volumeRange = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeLine = document.getElementById("timeLine");
const fullScreenBtn = document.getElementById("fullScreen");
const fullScreenBlindText = fullScreenBtn.querySelector(".blind-text");
const fullScreenIcon = fullScreenBtn.querySelector("i");
const videoContainer = document.getElementById("videoContainer");
const videoControls = document.getElementById("videoControls");

let controlsTimeout = null;
let controlsMovementTimeout = null;
let volumeValue = 0.5;
video.volume = volumeValue;


const handlePlayClick = (e) => {
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }
  playBtnBlindText.innerText = video.paused ? "Play" : "Pause";
  playBtnIcon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
};

const handleMute = (e) => {
  if(video.muted){
    video.muted = false;
  }else{
    video.muted = true;
  }
  muteBtnBlindText.innerText = video.muted ? "UnMute" : "Mute";
  muteBtnIcon.classList = video.muted ? "fas fa-volume-mute" : "fas fa-volume-up";
  volumeRange.value = video.muted ? 0 : volumeValue;
};

const handleVolumeChange = (event) =>{
  const { target: { value } } = event;
  if(video.muted){
    video.muted = false;
    muteBtnBlindText.innerText = "Mute";
  }
  volumeValue = value;
  video.volume = value;
};

const formatTime = (seconds) => new Date(seconds * 1000).toISOString().substring(14, 19);

const handleLoadedData = () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeLine.max = Math.floor(video.duration);
};

const handleTimeUpdate = () => {
  currentTime.innerText = formatTime(Math.floor(video.currentTime));
  timeLine.value = Math.floor(video.currentTime);
};

const handleTimelineChange = (event) => {
  const { target:{ value } } = event;
  video.currentTime = value;
};

const handleFullScreen = () => {
  const fullScreen = document.fullscreenElement;
  if(fullScreen){
    document.exitFullscreen();
    videoContainer.classList.remove("full-screen");
    fullScreenBlindText.innerText = "Enter Full Screen";
    fullScreenIcon.classList = "fas fa-expand";
  }else{
    videoContainer.requestFullscreen();
    videoContainer.classList.add("full-screen");
    fullScreenBlindText.innerText = "Exit Full Screen";
    fullScreenIcon.classList = "fas fa-compress";
  }

};

const hideControls = () => videoControls.classList.remove("showing");

const handleMouseMove = () => {
  if(controlsTimeout){
    clearTimeout(controlsTimeout);
    controlsTimeout = null;
  }
  if(controlsMovementTimeout){
    clearTimeout(controlsMovementTimeout);
    controlsMovementTimeout = null;
  }
  videoControls.classList.add("showing")
  controlsMovementTimeout = setTimeout(hideControls, 3000)
}

const handleMouseLeave = () => {
  controlsTimeout = setTimeout(hideControls, 3000);
}

const handleKeycodeVideoPlay = (event) => {
  console.log(event);
  if(event.code === "Space"){
    event.preventDefault();
    handlePlayClick();
  }
}


const handleEnded = () => {
  const { id } = videoContainer.dataset;
  fetch(`/api/videos/${id}/view`, {
    method: "POST",
  });
}

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
volumeRange.addEventListener("input", handleVolumeChange);
video.readyState ? handleLoadedData() : video.addEventListener("loadeddata", handleLoadedData);
video.addEventListener("timeupdate", handleTimeUpdate);
timeLine.addEventListener("input", handleTimelineChange);
fullScreenBtn.addEventListener("click", handleFullScreen);
videoContainer.addEventListener("mousemove", handleMouseMove);
videoContainer.addEventListener("mouseleave", handleMouseLeave);
video.addEventListener("click", handlePlayClick)
document.addEventListener("keydown", handleKeycodeVideoPlay)
video.addEventListener("ended", handleEnded);