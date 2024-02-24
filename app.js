function handelOriention(e) {
  const cubeEl = document.querySelector(".cube")
  let alpha = e.alpha
  let beta = e.beta
  let gamma = e.gamma

  cubeEl.style.transform =
    "rotateX(" +
    beta +
    "deg) rotateY(" +
    gamma +
    "deg) rotateZ(" +
    alpha +
    "deg)"
}

async function requestDeviceOrientaion() {
  if (
    typeof DeviceOrientationEvent != "undefined" &&
    typeof DeviceOrientationEvent.requestPerission === "function"
  ) {
    //iOs 13+
    try {
      const permissionState = await DeviceOrientationEvent.requestPerission()

      if (permissionState === "granted") {
        window.addEventListener("deviceorientation", handelOriention)
      }
    } catch (error) {
      console.error(error)
    }
  } else if ("DeviceOrientationEvent" in window) {
    // not iOs 13+
    window.addEventListener("deviceorientation", handelOriention)
  } else {
    // not supported
    alert("not supported")
  }
}
