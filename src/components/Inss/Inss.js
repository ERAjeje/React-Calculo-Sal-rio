import React, {Component} from 'react';

class Inss extends Component {

    render() {
        const {inss, inssP} = this.props;
        const color = {
            color: 'orange',
        }
        return (
            <div className='container col s3'>
                <label>INSS:</label>
                <input disabled value={inss} style={color} /><span style={color}>(</span> <span id='inssP' style={color}>{inssP}</span> <span style={color}>%)</span>
            </div>
        );
    }
}

export default Inss;