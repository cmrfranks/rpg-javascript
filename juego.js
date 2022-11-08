let clase = parseInt(prompt("Elige una clase para comenzar tu aventura: \n 1- Guerrero \n 2- Mago \n 3- Tirador"));

const personajes = [];

class Personaje{
    constructor(arma, vida, poder){
        this.arma = arma;
        this.vida = vida;
        this.poder = poder;
    }
}

const guerrero = new Personaje(`${armaG}`, 100, 80);
personajes.push(guerrero);

const mago = new Personaje(`${armaM}`, 85, 90);
personajes.push(mago);

const tirador = new Personaje (`${armaT}`, 75, 95);
personajes.push(tirador);

