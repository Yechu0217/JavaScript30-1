const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediStream => {
      video.srcObject = localMediStream
      video.play()
    })
    .catch(err => console.error('webcam is off! ', err))
}


function paintToCanvas() {
  const width = video.videoWidth
  const height = video.videoHeight

  canvas.width = width
  canvas.height = height

  ctx.drawImage(video, 0, 0, width, height)
  //픽셀 계산 
  let pixels = ctx.getImageData(0, 0, width, height)
  //픽셀 변행 
  //pixels = redEffect(pixels)
  pixels = rgbSplit(pixels)
  ctx.globalAlpah = 0.8
  //다시 붙이기 
  ctx.putImageData(pixels, 0, 0)
  window.requestAnimationFrame(paintToCanvas)

}

function takePhoto() {
  snap.currentTime = 0
  snap.play() //찰칵 소리 

  const data = canvas.toDataURL('Image/jpeg')
  // console.log(data) //base64 ->사진을 text로 나타낸거로 보면 됨 

  const link = document.createElement('a')
  link.href = data
  link.setAttribute('download', 'selfie')
  link.innerHTML = `<img src="${data}" alt="good looking"/>`
  strip.insertBefore(link, strip.firstChild)
}

function playAnimationFrame() {
  window.requestAnimationFrame(paintToCanvas)
}
getVideo()

video.addEventListener('canplay', playAnimationFrame)

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100//red 
    pixels.data[i + 1] = pixels.data[i + 1] + 10// green
    pixels.data[i + 2] = pixels.data[i + 2] + 5 // blue
  }
  return pixels
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0] //red 
    pixels.data[i + 300] = pixels.data[i + 1]// green
    pixels.data[i - 300] = pixels.data[i + 2]  // blue
  }
  return pixels
}
function greenScreen(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0] //red 
    pixels.data[i + 300] = pixels.data[i + 1]// green
    pixels.data[i - 300] = pixels.data[i + 2]  // blue
  }
  return pixels
}