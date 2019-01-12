class DateHelper{
    
    constructor(){

        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`; // Exemplo de template String
    }

    static textoParaData(texto){
        
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }

        /*Os ... são chamados de Spread Operators e são usados onde são esperados múltiplos parâmetros de 
        uma função ou diversos elementos de um array 
        O map itera sobre todo o conteúdo de um array 
        O => simboliza uma arrow function, o que torna desnecessário o uso da palavra function 
        Quando há apenas um comando na arrow function, não é necessário o comando return */
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }


}