import React, {Component} from 'react';

class SalarioLiquido extends Component {
    render() {
        const {liquid} = this.props;
        return (
            <div className='container col s3'>
                <label>Salário Líquido:</label>
                <input disabled value={liquid} id='liquid'/> <span id='liquidP' ></span>
            </div>
        );
    }
}

export default SalarioLiquido;