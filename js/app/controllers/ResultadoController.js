class ResultadoController{
    
    constructor(){
        // Semelhante ao jQuery
        let $ = document.querySelector.bind(document);

        this._timeCasa = $('#time-casa');
        this._timeVisitante = $('#time-visitante');
        this._golsCasa = $('#gols-casa');
        this._golsVisitante = $('#gols-visitante');
        this._dataPartida = $('#data-partida');
    }

    adiciona(event){
        event.preventDefault();

        let resultado = this._criaResultado();

        console.log(resultado);
    }


    _criaResultado(){
        return new Resultado(this._timeCasa.value, 
            this._timeVisitante.value, 
            this._golsCasa.value, 
            this._golsVisitante.value,
            this._dataPartida.value);
    }

}