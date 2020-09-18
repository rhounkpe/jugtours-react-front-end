import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            groups: []
        };

    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/api/groups');
        const body = await response.json();
        this.setState({
            groups: body,
            isLoading: false
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className="App-intro">
                        <h2>JUG List</h2>
                        {this.state.groups.map(group =>
                            <div key={group.id}>
                                {group.name}
                            </div>
                        )}
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
