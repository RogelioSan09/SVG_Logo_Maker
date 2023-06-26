// class for shapes
class Shapes {
    constructor(text, textColor, shape, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shapes {
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }
    // method to generate SVG
    generateSVG(){
        const {text, textColor, shape, shapeColor} = this;
        const logoCircle = new Circle(text, textColor, shape, shapeColor);
        return logoCircle;
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }
    // method to generate SVG
    generateSVG(){
        const {text, textColor, shape, shapeColor} = this;
        const logoTriangle = new Triangle(text, textColor, shape, shapeColor);
        return logoTriangle;
    }
}

class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }
    // method to generate SVG
    generateSVG(){
        const {text, textColor, shape, shapeColor} = this;
        const logoSquare = new Square(text, textColor, shape, shapeColor);
        return logoSquare;
    }
}

class Text {
    constructor(text, textColor){
        this.text = text;
        this.textColor = textColor;
    }
    // method to generate SVG
    generateSVG(){
        const {text, textColor} = this;
        const logoText = new Text(text, textColor);
        return logoText;
    }

}

module.exports = {Circle, Triangle, Square, Text};