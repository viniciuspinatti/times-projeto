class Resultado{

    // O underline é usado como convenção para indicar atributos e métodos privados
    constructor(timeCasa, timeVisitante, golsCasa, golsVisitante, dataPartida){
        this._timeCasa = timeCasa;
        this._timeVisitante = timeVisitante;
        this._golsCasa = golsCasa;
        this._golsVisitante = golsVisitante;
        this._dataPartida = dataPartida;
    }

    get timeCasa(){
        return this._timeCasa;
    }

    get timeVisitante(){
        return this._timeVisitante;
    }

    get golsCasa(){
        return this._golsCasa;
    }

    get golsVisitante(){
        return this._golsVisitante;
    }

    get dataPartida(){
        return this._dataPartida;
    }

    get vencedor(){
        if(this._golsCasa == this._golsVisitante)
            return 'empate';
        else if(this._golsCasa > this._golsVisitante)
            return this._timeCasa;
        else if(this._golsCasa < this._golsVisitante)
            return this._timeVisitante;
    }

}