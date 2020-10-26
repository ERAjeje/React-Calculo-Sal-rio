import React, { Component } from 'react';
import BarraPercentual from "./components/BarraPercentual/BarraPercentual";
import InputSalario from "./components/InputSalario/InputSalario";
import BaseInss from "./components/BaseInss/BaseInss";
import Inss from "./components/Inss/Inss";
import BaseImpostoRenda from "./components/BaseImpostoRenda/BaseImpostoRenda";
import ImpostoRenda from "./components/ImpostoRenda/ImpostoRenda";
import SalarioLiquido from "./components/SalarioLiquido/SalarioLiquido";
import {calcDescInss, calcDescIrpf} from "./helpers/calcSalary";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            fullSalary: 0,
            inss: 0,
            baseIrpf: 0,
            irpf: 0,
            liquid: 0,
            inssP: 0,
            irpfP: 0,
        }
    }
    handleCalculate = (value) => {
        const intl = Intl.NumberFormat('en-US',{maximumFractionDigits: 2})

        const inss1 = calcDescInss(value);
        const baseIrpf1 = value - inss1;
        let irpf1 = 0;
        if(baseIrpf1 > 1903.98)
            irpf1 = calcDescIrpf(baseIrpf1);
        const liquid = intl.format(value - inss1 - irpf1);
        const inss = intl.format(inss1);
        const baseIrpf = intl.format(baseIrpf1);
        const irpf = intl.format(irpf1);
        const irpfP = (this.state.fullSalary === '') ? 0 : intl.format(((irpf1/(value))*100));
        const inssP = (this.state.fullSalary === '') ? 0 : intl.format(((inss1/(value))*100));
        this.setState({
            fullSalary: value,
            inss,
            baseIrpf,
            irpf,
            liquid,
            irpfP,
            inssP,
        });

    }
  render() {
        const {fullSalary, inss, baseIrpf, irpf, liquid, irpfP, inssP} = this.state;
    return (
        <div className='container'>
            <div className='alignH1'>
                <h1>React Salário</h1>
            </div>
            <InputSalario method={this.handleCalculate}/>
            <div className='row'>
                <BaseInss fullSalary={fullSalary}/>
                <Inss inss={inss} inssP={inssP}/>
                <BaseImpostoRenda baseIrpf={baseIrpf}/>
                <ImpostoRenda irpf={irpf} irpfP={irpfP}/>
                <SalarioLiquido liquid={liquid}/>
            </div>
            <BarraPercentual />
        </div>
    );
  }
}
