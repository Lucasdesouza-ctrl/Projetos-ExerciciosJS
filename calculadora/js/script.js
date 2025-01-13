function createCalculator() {
  return {
    display: document.querySelector(".display"),
    init() {
      this.clickButton();
    },
    pressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.completeOperation();
        }
      });
    },
    completeOperation() {
      let operation = this.display.value;
      try {
        operation = eval(operation);
        if (!operation) {
          alert("Operação invalida");
          return;
        }
        this.display.value = operation;
      } catch (e) {
        alert("Operação invalida");
      }
    },
    clearDisplay() {
      this.display.value = "";
    },
    deleteNumber() {
      this.display.value = this.display.value.slice(0, -1);
    },
    clickButton() {
      document.addEventListener("click", (event) => {
        const el = event.target;
        if (el.classList.contains("btn-num")) {
          this.btnToDisplay(el.innerText);
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.deleteNumber();
        }
        if (el.classList.contains("btn-eq")) {
          this.completeOperation();
        }
      });
    },
    btnToDisplay(value) {
      this.display.value += value;
    },
  };
}
const calculator = createCalculator();
calculator.init();
