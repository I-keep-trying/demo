const canvas = document.getElementById('aboutMe')
canvas.width = window.innerWidth
let ctx = canvas.getContext('2d')
let text = 'About Me'

const debounce = func => {
  let timer
  return event => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(func, 100, event)
  }
}
window.addEventListener(
  'resize',
  debounce(() => {
    canvas.width = window.innerWidth

    init()
  })
)

const init = () => {
  let x = canvas.width / 2
  let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
  gradient.addColorStop('0', '#f79009')
  gradient.addColorStop('.2', '#ce096c')
  gradient.addColorStop('.4', '#f79009')
  gradient.addColorStop('.6', '#ce096c')
  gradient.addColorStop('.8', '#f79009')
  gradient.addColorStop('1', '#ce096c')

  ctx.font = '700 3rem Roboto, sans-serif'
  ctx.fillStyle = gradient
  ctx.textAlign = 'center'
  ctx.fillText(text, x, 90)
}
init()
