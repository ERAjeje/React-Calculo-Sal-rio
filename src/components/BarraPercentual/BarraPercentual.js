import React, {useEffect, useState} from "react";

export default function BarraPercentual() {
    const [useSalarioP, setUseSalarioP] = useState(0);
    const [useInssP, setInssP] = useState(0);
    const [useIrpfP, setIrpfP] = useState(0);
    useEffect(() => {
        let InssP = document.getElementById('inssP');
        let IrpfP = document.getElementById('irpfP');
        let Liquid = document.getElementById('liquidP')

        const intl = Intl.NumberFormat("pt-br", {maximumFractionDigits: 2})
        const salary = 100 - parseFloat(IrpfP.innerText) - parseFloat(InssP.innerText);
        Liquid.innerText = intl.format(salary) + '%';
        setInssP(InssP.innerText);
        setIrpfP(IrpfP.innerText);
        setUseSalarioP(salary);
    })
    const barraSalario = {
        width: `${useSalarioP}%`,
        height: '1.5rem',
        backgroundColor: 'green',
    };
    const barraImposto = {
        width: `${useIrpfP}%`,
        height: '1.5rem',
        backgroundColor: 'darkred',
    };
    const barraDesconto = {
        width: `${useInssP}%`,
        height: '1.5rem',
        backgroundColor: 'orange',
    }
    const rowFormater = {
        display: 'flex'
    }
    return (
        <div>
            <div style={rowFormater}>
                <div style={barraDesconto}></div>
                <div style={barraImposto}></div>
                <div style={barraSalario}></div>
            </div>
        </div>
    );
}