import React, {Component} from 'react';
import css from './inputSalario.module.css';

export default class InputSalario extends Component {

    handleChangeInput = (event) => {
        this.props.method(event.target.value);
    }
    render() {
        return (
            <div className={css.configuration}>
                <label>Salário</label>
                <input type='number' onChange={this.handleChangeInput}/>
            </div>
        );
    }
}