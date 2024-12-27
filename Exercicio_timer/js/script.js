function theTimer() {
  const timer = document.querySelector(".timer");
  let seconds = 0;
  let timerFunction;
  document.addEventListener("click", function (event) {
    const element = event.target;
    if (element.classList.contains("reflesh")) {
      timer.classList.remove("paused");
      clearInterval(timerFunction);
      timer.innerHTML = "00:00:00";
      seconds = 0;
    }
    if (element.classList.contains("pause")) {
      timer.classList.add("paused");
      clearInterval(timerFunction);
    }
    if (element.classList.contains("init")) {
      timer.classList.remove("paused");
      clearInterval(timerFunction);
      initTimer();
    }
  });

  function setTimeSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  function initTimer() {
    timerFunction = setInterval(function () {
      seconds++;
      timer.innerHTML = setTimeSeconds(seconds);
    }, 1000);
  }
}
theTimer();