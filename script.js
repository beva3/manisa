let userInput = document.getElementById('userInput');
let fiteny = document.getElementById('fiteny');
let resultat = document.getElementById('resultat');
let btn = document.querySelectorAll('.btn');

const isa_mlg = {
    "unite":[
        'ray',
        'roa',
        'telo',
        'efatra',
        'dimy',
        'enina',
        'fito',
        'valo',
        'sivy',
    ],
    "dizaine":[
        'folo',
        'roapolo',
        'telopolo',
        'efapolo',
        'dimapolo',
        'enimpolo',
        'fitopolo',
        'valopolo',
        'sivifolo'
    ],
    "centaine":[
        'zato',
        'roanjato',
        'telonjato',
        'efajato',
        'dimanjato',
        'eninjato',
        'fotonjato',
        'valonjato',
        'sivinjato'
    ]
};
console.log(isa_mlg['unite'][0]);
/**
 * ! creat funtion manisa in mlg or fr or en
 */
function manisa(nbr){
    if(nbr<10){
        return isa_mlg['unite'][nbr -1];
    }else if(nbr >=10 && nbr<100){
        return (nbr%10 === 0) ?
            isa_mlg['dizaine'][parseInt(nbr/10) -1]
            :(nbr%10 ===1) ?
                "iraika ambin'ny" + ' ' + isa_mlg['dizaine'][parseInt(nbr/10) -1]
                : isa_mlg['unite'][nbr%10 -1] + " ambin'ny " + isa_mlg['dizaine'][parseInt(nbr/10) -1];

    }else if (nbr>=100 && nbr<1000){
        return (nbr%100 === 0) ?
            isa_mlg['centaine'][parseInt(nbr/100) -1]
            : (nbr%100 < 10) ?
                (nbr%100 ===1)?
                    'iraika' + " ambin'ny " + isa_mlg['centaine'][parseInt(nbr/100) -1]:
                    isa_mlg['unite'][nbr%100 -1] + " ambin'ny " + isa_mlg['centaine'][parseInt(nbr/100) -1]:
            manisa(nbr%100) + " sy " + isa_mlg['centaine'][parseInt(nbr/100) -1]

    }else if(nbr>=1000 && nbr<10000){
        return (nbr%1000 === 0)?
            (nbr === 1000)?
                'arivo'
                :isa_mlg['unite'][parseInt(nbr/1000) -1] + ' arivo '
            : manisa(nbr%1000) + ' sy ' + manisa(parseInt(nbr/1000)*1000)

    }else if (nbr>=10000 && nbr<100000){
        return (nbr%10000 === 0)?
            (nbr === 10000)?
                'iray alina'
                :isa_mlg['unite'][parseInt(nbr/10000) -1] + ' alina '
            : manisa(nbr%10000) + ' sy ' + manisa(parseInt(nbr/10000)*10000)

    }else if (nbr>=100000 && nbr<1000000){
        return (nbr%100000 === 0)?
            (nbr === 100000)?
                'iray hetsy'
                :isa_mlg['unite'][parseInt(nbr/100000) -1] + ' hetsy '
            : manisa(nbr%100000) + ' sy ' + manisa(parseInt(nbr/100000)*100000)
    }
    else{
        return 'wait the update please';
    }
}
const btn_mthd = [
    ()=>{
        if(resultat.value === '' && userInput.value != ''){}
        resultat.value = '';
        userInput.value = '';
    },
    ()=>{
        if(userInput.value !=''){
            //  TODO str to nbr
            let nbr = parseInt(userInput.value);
            
            //TODO nbr to 'string isa'
            resultat.value = manisa(nbr);
        }
    }
];

/**
 * !type button
 */

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',()=>{
        //console.log(btn_mthd[i].call());
        btn_mthd[i].call();
    })
}

/**
 * !after
 */

// if(resultat.value != '' ){
//     btn[0].innerHTML = 'New';
//     btn[1].disabled = true;
// }else{
//     btn[0].innerHTML = 'Cancel';
//     btn[1].disabled = false;
// }

// btn[0].addEventListener('click',()=>{
//     console.log(btn_mthd[0]);
// });
