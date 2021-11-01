const React = require('react');
const { render } = require('react-dom');

function Parent({ name }) {
    return (
        <div>
            <h1>Parent</h1>
            <Child name={name} />
        </div>
    );
}

function Child({ name }) {
    return (
        <div>
            <h1>Child</h1>
            <GrandChild name={name} />
        </div>
    );
}

function GrandChild({ name }) {
    return (
        <div>
            <h1>GrandChild</h1>
            <h3>Name: {name}</h3>
        </div>
    );
}

class App extends React.Component {
    render() {
        const name = 'React';
        return (
            <div>
                <Parent name={name} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
