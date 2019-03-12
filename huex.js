class HUEX {
    adicione(valor, atributo) {
        let valores = this.mostre(atributo);
        valores.push(valor);
        return valores;
    }
    retire(atributo, posicao) {
        let valores = this.mostre(atributo);
        valores.pop();
        return valores;
    }
    incremente(atributo) {
        this.mude(this.mostre(atributo) + 1, atributo);
    }
    decremente(atributo) {
        this.mude(this.mostre(atributo) - 1, atributo);
    }
};