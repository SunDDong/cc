/**
 * Created by Rayr Lee on 18/4/4.
 */
import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component {
    render() {
        return (
            <div>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter