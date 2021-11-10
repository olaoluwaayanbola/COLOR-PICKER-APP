function colorPicker() {
    const btn = document.querySelector("Body")
    const MathMethod1 = Math.floor(Math.random()*256)
    const MathMethod2 = Math.floor(Math.random()*256)
    const MathMethod3 = Math.floor(Math.random()*256)
    let w =MathMethod1
    let d = MathMethod2
    let s = MathMethod3
    let H = 0
    /* btn.style.backgroundColor = `rgb(${d},${w},${s})` */
    btn.style.background = `linear-gradient(to right,rgba(245,0,123,0.4),rgba(${d},${w},${s},0.2),rgba(${d},${w},${s},0))`
  }
