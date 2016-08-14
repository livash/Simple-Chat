class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="display">{this.props.displayValue}</div>
    );
  }
}

class Numbers extends React.Component {
  render() {
    let numbers = [0,1,2,3,4,5,6,7,8,9];
    return (
      <div className="numbers">
        {numbers.map( number => (<button key={number} >{number}</button>))}
      </div>
    );
  }
};

class Operators extends React.Component {
  render() {
    let operators = [
      {
        name: "plus",
        value: "+"
      },
      {
        name: "minus",
        value: "-"
      },
      {
        name: "multiply",
        value: "*"
      },
      {
        name: "divide",
        value: "/"
      },
      {
        name: "evaluate",
        value: "="
      },
      {
        name: "cancel",
        value: "c"
      }
    ]
    return (
      <div className="operators">
        {operators.map( operator => {
          return (
            <button className="operator" key={operator.name}>{operator.value}</button>
          );
        })}
      </div>
    );
  }
};

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons clearfix">
        <Numbers />
        <Operators />
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: [], // array of numbers and operators as they are entered
      displayValue: this.props.displayValue
    }
  }
  render() {
    return (
      <div>
        <Display displayValue={this.state.displayValue} />
        <Buttons />
      </div>
    );
  }
};

ReactDOM.render(
  <Calculator displayValue={'0'}/>,
  document.getElementById('main-calculator')
);