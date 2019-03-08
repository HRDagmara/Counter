var Counter = React.createClass({

  getDefaultProps: function () {
    console.log("default props");
  },

  ComponentWillMount: function () {
    console.log("component will mount");
  },

  componentDidMount: function () {
    console.log("component did mount");
  },

  componentWillUnmount: function () {
    console.log("component will unmount");
  },

  getInitialState: function () {
    console.log("initial state");
    return {
      count: 0
    }
  },

  increment: function () {
    this.setState({
      count: this.state.count + 1
    });
  },

  decrement: function () {
    this.setState({
      count: this.state.count - 1
    });
  },

  render: function () {
    return (
      React.createElement('div', {},
        React.createElement('button', { onClick: this.decrement }, '-'),
        React.createElement('p', {}, this.state.count),
        React.createElement('button', { onClick: this.increment }, '+')
      )
    )
  },

});

var elements = React.createElement('div', {},
  React.createElement(Counter),
  React.createElement(Counter)
);
ReactDOM.render(elements, document.getElementById('app'));



