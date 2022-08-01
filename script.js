function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Por favor insira um número')
    }
    else{
        tab.innerHTML = ''
        for (var i = 1; i < 11; i++){
            let item = document.createElement('option')
            item.text = `${num.valueAsNumber} x ${i} = ${num.valueAsNumber*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
    

}