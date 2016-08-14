const OPERATORS = ['+', '-', '*', '/', '=', 'c'];
const NUMBERS = [0,1,2,3,4,5,6,7,8,9];

class Calculator {
  constructor() {
    this.expression = [],
    this.operators = OPERATORS,
    this.numbers = NUMBERS
  }

  evaluate() {
    // function which will take all the inputs from the
    // this.expression and return a result
  }

  cancel() {
    this.expression = []; // clear out the expression
  }

  render(elementId) {
    let elem = document.getElementById(elementId);
    let calcUI = this.createCalcUI();
    elem.appendChild(calcUI);
  }

  createCalcUI() {
    let main = document.createElement('div');
    main.setAttribute('class', 'calc-main clearfix');

    let display = this.createDisplay();
    let buttons = this.createButtons();

    main.appendChild(display);
    main.appendChild(buttons);

    return main;
  }

  createDisplay() {
    let display = document.createElement('div');
    display.setAttribute('class', 'display');

    return display;
  }

  createButtons() {
    let buttons = document.createElement('div');
    buttons.setAttribute('class', 'buttons');

    let numbers = this.createNumbers();
    let operators = this.createOperators();

    buttons.appendChild(numbers);
    buttons.appendChild(operators);

    return buttons;
  }

  createNumbers() {
    let self = this;
    let numbers = document.createElement('div');
    numbers.setAttribute('class', 'numbers');

    this.numbers.forEach((num) => {
      let button = document.createElement('button');
      button.setAttribute('value', num);
      button.innerHTML = num;
      button.setAttribute('onclick', 'calculator.numberClick(event)');
      numbers.appendChild(button);
    });

    return numbers;
  }

  createOperators() {
    let operators = document.createElement('div');
    operators.setAttribute('class', 'operators');

    return operators;
  }

  numberClick(event) {
    let value = event.target.getAttribute('value');
    this.expression.push(value);
  }
}

window.calculator = new Calculator();
calculator.render('main-calculator');