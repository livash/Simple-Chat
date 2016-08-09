class Display extends React.Component {
  render() {
    return (
      <div className="display">0</div>
    );
  }
}

class Numbers extends React.Component {
  render() {
    let numbers = [1,2,3,4,5,6,7,8,9,0];
    return (
      <div className="numbers">
        {numbers.map( number => (<button key={number}>{number}</button>))}
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
      <div className="buttons">
        <Numbers />
        <Operators />
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div>
        <Display />
        <Buttons />
      </div>
    );
  }
};

ReactDOM.render(
  <Main />,
  document.getElementById('main-calculator')
);