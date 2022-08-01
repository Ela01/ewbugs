import React from 'react';
import  Circuit_ from '../C.svg';
import '../App.css';

class Circuit extends React.Component {
    render() {
        return (
            <div>
                <img src={Circuit_} className="backgroundImage" alt="Circuit"/>
            </div>
        );
    }
}
export default Circuit;