class ListaResultado{
    
    constructor(){
        this._listaResultado = [];
    }

    adiciona(resultado){
        this._listaResultado.push(resultado);
    }

    get resultados(){
        // Cria um arrray que é uma cópia do atributo da classe para garantir que o atributo não sofra alterações
        return [].concat(this._listaResultado);
    }

}