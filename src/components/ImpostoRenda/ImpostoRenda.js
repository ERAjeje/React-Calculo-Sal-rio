import React, {Component} from 'react';

class ImpostoRenda extends Component {
    render() {
        const {irpf, irpfP} = this.props;
        const color = {
            color: 'Red',
        }
        return (
            <div className='container col s3 color'>
                <label>Imposto de Renda:</label>
                <input disabled value={`${irpf}`} style={color}  /> <span style={color}>(</span> <span id='irpfP' style={color}>{irpfP}</span> <span style={color}>%)</span>
            </div>
        );
    }
}

export default ImpostoRenda;