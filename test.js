
class Rectangle {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
 
  get area() {
    return "this : " + this.calcArea();
  }

  calcArea() {
    return this.largeur * this.hauteur;
  }
}

const carré = new Rectangle(10, 10);

console.log(carré.area);
module.exports = carré