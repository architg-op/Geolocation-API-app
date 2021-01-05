import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lat: null, errMess: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat : position.coords.latitude
                });
            },
            (err) => {
                this.setState({
                    errMess : err.message
                });
            }
        );

        // Checking push from VSCode
    } 

    render() {
        
            if(!this.state.lat && this.state.errMess) {
                return (
                    <div>
                    Error: {this.state.errMess}
                    </div>
                );
            }
            if(this.state.lat && !this.state.errMess) {
                return (
                    <div>
                    Latitude: {this.state.lat}
                    </div>
                );
            }
            else {
                return (
                    <div>
                    Loading...
                    </div>
                );
            }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));