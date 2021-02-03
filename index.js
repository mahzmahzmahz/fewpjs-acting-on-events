// Your code here
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 7}px`;
    }
  }

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  debugger
    if (left > 0) {
      dodger.style.left = `${left + 7}px`;
    }
  }

  function moveDodgerDown() {
      let downNumbers = dodger.style.bottom.replace("px", "");
      let bottom = parseInt(downNumbers, 10);

      if (bottom >= 0) {
          dodger.style.bottom = `${bottom - 7}px`;
      }
  }

  function moveDodgerUp() {
    let downNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(downNumbers, 10);

    if (bottom >= 0) {
        dodger.style.bottom = `${bottom + 7}px`;
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowDown") {
        moveDodgerDown()
    }
})

  document.addEventListener('keydown', function(e) {
      if (e.key === "ArrowUp") {
          moveDodgerUp()
      }
  })


  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
  })

  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft()
    }
  })