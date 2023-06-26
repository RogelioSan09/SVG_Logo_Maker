// class for shapes
class Shapes{
    // constructor for shapes
    constructor(){
        this.circle = circle;
        this.square = square;
        this.triangle = triangle;
    }

}

class Circle extends Shapes{
    constructor(cx, cy, r){
        super();
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.circle = circle;
    }
    
}

const logoShape1 = new Circle(
    
)

class Square extends Shapes{
    constructor(x, y, width, height, rx, ry){
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.rx = rx;
        this.ry = ry;
        this.square = square;
    }

}

const logoShape2 = new Square(
    
)

class Triangle extends Shapes{
    constructor(pointsA, pointsB, pointsC){
        super();
        this.points = [pointsA, pointsB, pointsC];
    }
    
}


const logoShape3 = new Triangle(
    
)
module.exports = Shapes;