const Calcular = function(){
    var pNome = "Usuário"
    pNome = document.getElementById("nome").value
    pValorHora = document.getElementById("valorHora").value
    pQntdTrab = document.getElementById("qntdTrab").value
    var pSalBrt
    var pSalReal

    //Evita situação de campo nome vazio
    if(pNome == ""){
        pNome = "Usuário"
    }
    if(pValorHora == 0 || pQntdTrab == 0){
        alert("Você não preencheu os valores corretamente, os valores a seguir são inválidos")
    }

    
    //var que checa se o usuário tem gratificação ou IRRF
    var pCheckGratificacao = 0
    var pCheckIRRF = 0
    
    //Salário bruto
    pSalBrt = pValorHora * pQntdTrab
    pSalReal = pSalBrt

    //Cria variavel com 15% do salario
    p15PorcentoDoSalario = pSalBrt * (15/100)
    
    //Se o salario for maior que 2000 desconta 15% de imposto de renda
    if(pSalBrt > 2000){
        pSalReal -= p15PorcentoDoSalario
        pCheckIRRF = 1
    }
    
    //Se trabalhou de 155 a 165 horas tem bonificação de 15%
    if(pQntdTrab >= 155 && pQntdTrab <= 165){
        pSalReal += p15PorcentoDoSalario
        pCheckGratificacao = 1
    }

    //Checa se a gratificação foi aplicada ou não
    var pGratificacao 
    if(pCheckGratificacao == 1){
        pGratificacao = p15PorcentoDoSalario
    }
    if(pCheckGratificacao == 0){
        pGratificacao = "0,00"
    }

    //Checa se o Imposto/IRRF foi aplicado
    var pIRRF
    if(pCheckIRRF == 1){
        pIRRF = p15PorcentoDoSalario
    }
    if(pCheckIRRF == 0){
        pIRRF = "0,00"
    }

    //Envia ao usuário as informações
    //usuário recebeu IRRF e Gratificação
    if(pCheckIRRF == 1 && pCheckGratificacao == 1){
        alert("olá " + pNome + ", Seu salario Bruto é R$" + pSalBrt + ", você recebeu 15% de IRRF e 15% de gratificação, assim reduzindo e somando novamente R$" + pGratificacao + ", ao seu salario, sendo assim seu salario líquido é R$" + pSalReal)
    }
    else if(pCheckIRRF == 1 && pCheckGratificacao == 0){
        if(pQntdTrab < 155){
            alert("Olá " + pNome + ", Seu salário Bruto, é de R$" + pSalBrt + ", Seu IRRF é R$" + pIRRF + ", você não ganhou bonificação pois não atingiu a meta de 155 horas mensais, e seu salario líquido foi de R$" + pSalReal)
        }
        else if(pQntdTrab > 165){
            alert("Olá " + pNome + ", Seu salário Bruto, é de R$" + pSalBrt + ", Seu IRRF é R$" + pIRRF + ", você não ganhou bonificação pois ultrapassou a quantidade de 165 horas mensais, e seu salario líquido foi de R$" + pSalReal)
        }
    }
    else if(pCheckIRRF == 0 && pCheckGratificacao == 1){
            alert("Olá " + pNome + ", Seu salário Bruto é de R$" + pSalBrt + ", sua gratificação é de R$" + pGratificacao + ", você não recebeu IRRF, pois seu salário está abaixo de R$2000,00 Seu salário final foi de R$" + pSalReal)
    }
    else if(pCheckIRRF == 0 && pCheckGratificacao == 0){
        alert("Olá " + pNome + ", Seu salário Bruto foi de R$" + pSalBrt + ", você não possui IRRF e nem Gratificação, Seu salário líquido é de R$" + pSalReal)
    }
}



