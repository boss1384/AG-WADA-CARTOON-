function playVideo(videoSrc) {
  const player = document.getElementById('videoPlayer');
  player.src = videoSrc;
  player.play();

  window.scrollTo({
    top: player.offsetTop,
    behavior: 'smooth'
  });
}
