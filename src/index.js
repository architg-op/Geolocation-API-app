import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );

        // Checking push from VSCode
    } 

    render() {
        

        return (
            <div>
                Latitude:
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));