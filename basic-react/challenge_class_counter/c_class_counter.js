//Class Component Counter
const { Component } = React;
const { render } = ReactDOM;

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div>
                <h1>Pengenalan React Tingkat Dasar</h1>
                <h2>Counter</h2>
                <h1>{this.state.count.toString().padStart('0')}</h1>
                <button onClick={this.decrement}>- 1</button>
                <button onClick={this.increment}>+ 1</button>
            </div>
        );
    }
}

render(<Counter />, document.getElementById('root'));