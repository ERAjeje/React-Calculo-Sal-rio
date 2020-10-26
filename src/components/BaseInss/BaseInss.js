import React, {Component} from 'react';

class BaseInss extends Component {

    render() {
        const {fullSalary} = this.props;
        return (
            <div className='container col s3'>
                <label>Base INSS:</label>
                <input type='number' disabled value={fullSalary}/>
            </div>
        );
    }
}

export default BaseInss;