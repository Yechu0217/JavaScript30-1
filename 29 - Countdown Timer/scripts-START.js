const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

let countdown

function timer(seconds) {
  // 타이머 있으면 clear
  clearTimeout(countdown)

  const now = Date.now()  // milliseconds
  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)

    if (secondsLeft < 0) {
      return clearInterval(countdown)
    }

    //display
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainderSeconds = seconds % 60
  const display = `${minutes} : ${remainderSeconds < 10 ? '0' + remainderSeconds : remainderSeconds}`
  timerDisplay.textContent = display
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp)
  const hour = end.getHours()
  const minutes = end.getMinutes()
  const adjusted = hour > 12 ? hour - 12 : hour;
  endTime.textContent = `be back at ${adjusted} : ${minutes < 10 ? '0' + minutes : minutes}`

}

function startTimer() {
  const seconds = parseInt(this.dataset.time)
  timer(seconds)
}
buttons.forEach(button => button.addEventListener('click', startTimer))

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const mins = this.minutes.value
  timer(mins * 60)
  this.reset()
})