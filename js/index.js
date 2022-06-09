const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handlePlay() {
  $video.play()
  
  $play.hidden = true
  $pause.hidden = false
  
  console.log('Le diste clic al botón de play')
}

function handlePause(){
  $video.pause()

  $play.hidden = false
  $pause.hidden = true

  console.log('Le diste clic al botón de pause')
}

function handleBackward(){
  $video.currentTime -= 10

  console.log('Para atrás 10 segundos')
}

function handleForward(){
  $video.currentTime += 10

  console.log('Para adelante 10 segundos')
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
  $progress.max = $video.duration
  console.log('Ha cargado mi video')
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput() {
  $video.currentTime = $progress.value
}