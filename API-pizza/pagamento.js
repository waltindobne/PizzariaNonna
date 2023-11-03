const selecionar = (elemento) => document.querySelector(elemento)
const selecionartudo = (elemento) => document.querySelectorAll(elemento)
const selecionarId = (elemento) => document.getElementById(elemento)

selecionarId('Finalizar').addEventListener('click', function(){
    selecionar('.pagamentos').style.display= 'flex'
})

function pix(){
    console.log('pix')
    selecionar('.pagamento-cartao').style.display = 'none'
    selecionar('.pagamento-pix').style.display = 'flex'
    

    selecionarId('submitPagamentoPix').addEventListener('click', function(e){
        e.preventDefault()
        selecionar('.codigoQR').style.display = 'block'
        selecionar('.janelapix').style.display = 'none'
    })
    
}



function cartao(){
    console.log('cartao')
    selecionar('.pagamento-cartao').style.display = 'flex'
    selecionar('.pagamento-pix').style.display = 'none'

    selecionarId('submitPagamentoCartao').addEventListener('click', function(e){
        e.preventDefault()
        var numeroCartao = selecionarId('numeroCartao').value
        var titularCartao = selecionarId('titularCartao').value
        var cvvCartao = selecionarId('cvvCartao').value
        var mesInput = selecionarId('mesInput').value
        var anoInput = selecionarId('anoInput').value

        if(numeroCartao==''|| titularCartao==''|| cvvCartao==''|| mesInput=='Mês'|| anoInput=='Ano'){
            alert('Preencha todos os campos')
        }else{
            alert('cartão registrado com sucesso, em até 2 dias uteís mandaremos a fatura')
            window.location.replace('index.html')
        }
        console.log(numeroCartao)
        console.log(titularCartao)
        console.log(cvvCartao)
        console.log(mesInput)
        console.log(anoInput)

        
    })
    
}

//carrossel de imagens

let count = 1
selecionarId('radio1').checked = true

setInterval(function(){
    nextImg()
}, 2500)

function nextImg(){
    count++
    if(count>3){
        count=1
    }

    selecionarId('radio'+count).checked = true
}