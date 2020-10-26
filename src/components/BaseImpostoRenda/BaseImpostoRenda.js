import React, {Component} from 'react';

class BaseImpostoRenda extends Component {
    render() {
        const {baseIrpf} = this.props;
        return (
            <div className='container col s3'>
                <label>Base Imposto de Renda:</label>
                <input disabled value={baseIrpf}/>
            </div>
        );
    }
}

export default BaseImpostoRenda;