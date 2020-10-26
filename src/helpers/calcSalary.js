function calcDescInss(value) {
    const faixa1 = 1045.0;
    const faixa2 = 2089.6;
    const faixa3 = 3134.4;
    const faixa4 = 6101.06;
    let aux = value;
    let sal = 0;
    function calcFaixa1(value){
        return value * 0.075;
    }
    function calcFaixa2(value){
        return value * 0.09;
    }
    function calcFaixa3(value){
        return value * 0.12;
    }
    function calcFaixa4(value){
        return value * 0.14;
    }
    if(aux <= faixa1){
        return calcFaixa1(aux);
    } else if( aux > faixa1 && aux <= faixa2){
        sal = calcFaixa1(faixa1);
        aux -= faixa1;
        sal += calcFaixa2(aux);
        return sal;
    } else if(aux > faixa2 && aux <= faixa3){
        sal = calcFaixa1(faixa1);
        aux -= faixa1;
        sal += calcFaixa2(faixa2-faixa1);
        (aux - faixa2) > 0 ? aux -= faixa2 : aux -= faixa2 - faixa1
        sal += calcFaixa3(aux);
        return sal;
    }else if(aux > faixa3 && aux <= faixa4){
        sal = calcFaixa1(faixa1);
        sal += calcFaixa2(faixa2-faixa1);
        sal += calcFaixa3(faixa3 - faixa2);
        (aux - faixa3) > 0 ? aux -= faixa3 : aux -= faixa3 - faixa2 - faixa1
        sal += calcFaixa4(aux);
        return sal;
    } else if(aux > faixa4){
        sal = 0;
        sal = calcFaixa1(faixa1);
        sal += calcFaixa2(faixa2-faixa1);
        sal += calcFaixa3(faixa3-faixa2);
        sal += calcFaixa4(faixa4-faixa3);
        return sal;
    }
}

function calcDescIrpf(value) {
    const faixa1 = 1903.98;
    const faixa2 = 2826.65;
    const faixa3 = 3751.05;
    const faixa4 = 4664.68;
    let aux = value;
    let sal = 0;
    function calcFaixa2(value){
        return value * 0.075;
    }
    function calcFaixa3(value){
        return value * 0.15;
    }
    function calcFaixa4(value){
        return value * 0.225;
    }
    function calcFaixa5(value){
        return value * 0.275;
    }
    if(aux > faixa1 && aux <= faixa2){
        return calcFaixa2(aux - faixa1);
    } else if(aux > faixa2 && aux <= faixa3){
        sal = calcFaixa2(faixa2-faixa1);
        aux -= faixa2;
        sal += calcFaixa3(aux);
        return sal;
    } else if(aux > faixa3 && aux <= faixa4){
        sal = calcFaixa2(faixa2-faixa1);
        sal += calcFaixa3(faixa3-faixa2);
        aux -= faixa3;
        sal += calcFaixa4(aux);
        return sal;
    } else if(aux > faixa4){
        sal = calcFaixa2(faixa2-faixa1);
        sal += calcFaixa3(faixa3-faixa2);
        sal += calcFaixa4(faixa4 - faixa3);
        sal += calcFaixa5(aux - faixa4);
        return sal;
    }
}

export  {calcDescIrpf, calcDescInss}