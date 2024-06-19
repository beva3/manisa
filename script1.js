document.addEventListener('DOMContentLoaded',function(){
    const userInput = document.getElementById('userInput');
    const fiteny = document.getElementById('fiteny');
    const resultat = document.getElementById('resultat');
    const execute = document.getElementById('execute');
    const cancel = document.getElementById('cancel');
    var number = parseInt(userInput.value);
    var entier=userInput.value;

    cancel.addEventListener('click',reset);
    execute.addEventListener('click',function(){
        resultat.value ="";
        if(isNaN(parseFloat(userInput.value))){
            console.log('Not a Number');
            resultat.value = fiteny.value =='0' ? 'MAMPIDIRA ISA':fiteny.value=='1'?'ENTREZ UN NOMBRE':'ENTER A NUMBER';
        }
        else{
            number = parseFloat(userInput.value);
            entier= parseInt(number);
            switch(parseInt(fiteny.value)){
                case 0:
                    if(number==0)
                        resultat.value = "Aotra"
                    else
                        manisa(parseInt(entier));
                    break;
                case 1:
                    if(number==0)
                        resultat.value = "Zéro"
                    else
                        compter(entier);
                    break;
                case 2:
                    if(number==0)
                        resultat.value = "Zero"
                    else
                        count(entier);
            }
            console.log("isa",parseFloat(number));
        }
    })
    
    function reset(){
        console.log('reset pressé');
        resultat.value="";
        userInput.value="";
    }

    function manisa(isa){
        /*console.log('malagasy');*/
        var digit=parseInt(isa)%10;
        switch(parseInt(isa)%10){
            case 0:
                digit ="aotra"
                break;
            case 1:
                digit ="iray"
                break;
            case 2:
                digit ="roa"
                break;
            case 3:
                digit ="telo"
                break;
            case 4:
                digit ="efatra"
                break;
            case 5:
                digit ="dimy"
                break;
            case 6:
                digit ="enina"
                break;
            case 7:
                digit ="fito"
                break;
            case 8:
                digit ="valo"
                break;
            case 9:
                digit ="sivy"
                break;
        }
        
        resultat.value =resultat.value+' '+digit;
        
        isa = parseInt(isa/10);
        if(isa>0) manisa(isa);
    }

    function compter(nombre){
        /*console.log("français");*/
        var digit=parseInt(nombre)%10;
        switch(parseInt(nombre)%10){
            case 0:
                digit ="zéro"
                break;
            case 1:
                digit ="un"
                break;
            case 2:
                digit ="deux"
                break;
            case 3:
                digit ="trois"
                break;
            case 4:
                digit ="quatre"
                break;
            case 5:
                digit ="cinq"
                break;
            case 6:
                digit ="six"
                break;
            case 7:
                digit ="sept"
                break;
            case 8:
                digit ="huit"
                break;
            case 9:
                digit ="neuf"
                break;
        }
        resultat.value =digit+' '+resultat.value;
        
        nombre = parseInt(nombre/10);
        if(nombre>0) compter(nombre);
    }

    function count(number){
        /*console.log("english");*/
        var digit=parseInt(number)%10;
        switch(parseInt(number)%10){
            case 0:
                digit ="zero"
                break;
            case 1:
                digit ="one"
                break;
            case 2:
                digit ="two"
                break;
            case 3:
                digit ="three"
                break;
            case 4:
                digit ="four"
                break;
            case 5:
                digit ="five"
                break;
            case 6:
                digit ="six"
                break;
            case 7:
                digit ="seven"
                break;
            case 8:
                digit ="eight"
                break;
            case 9:
                digit ="nine"
                break;
        }
        resultat.value =digit+' '+resultat.value;
        
        number = parseInt(number/10);
        if(number>0) count(number);
    }
})