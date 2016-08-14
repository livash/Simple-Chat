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
    this.display = display;
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
    let operatorsArr = document.createElement('div');
    operatorsArr.setAttribute('class', 'operators');

    this.operators.forEach((operator) => {
      let button = document.createElement('button');
      button.setAttribute('class', 'operator');
      button.setAttribute('value', operator);
      button.setAttribute('onclick', 'calculator.operatorClick(event)');
      button.innerHTML = operator;
      operatorsArr.appendChild(button);
    });

    return operatorsArr;
  }

  numberClick(event) {
    let value = event.target.getAttribute('value');
    this.expression.push(value);
    this.updateDisplay();
  }

  operatorClick(event) {
    let value = event.target.getAttribute('value');
    switch (value) {
      case 'c':
        this.expression = [];
        this.updateDisplay();
        break;
      case '=':
        let result = this.evaluate();
        this.expression = [result];
        this.updateDisplay();
        break;
      default:
        this.expression.push(value);
        this.updateDisplay();
        break;
    }
  }

  updateDisplay() {
    let toShow = '0';
    if (this.expression.length > 0) {
      toShow = '';
      this.expression.forEach((val) => {
        toShow += val;
      });
    }
    this.display.innerHTML = toShow;
  }

  evaluate() {
    return eval(this.expression.join(''));
  }
}

window.calculator = new Calculator();
calculator.render('main-calculator');