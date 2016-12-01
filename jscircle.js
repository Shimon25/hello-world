/**
 * Created by Gran1 on 01.12.16.
 */

var staticCircle;
var staticSquare;
Circle.area;
Square.area;
function Circle(radius){

    if(!staticCircle) {
        Circle.area = function (x) {
            return 3.1415 * x * x;
        };
        staticCircle = true;
    }

    var r = radius;
    
    return {
        getRadius: function () {
            return r;
        }
    }
    
}

function Square(side){

        if(!staticSquare){
    Square.area = function (x) {
        return x*x;
    };
    staticSquare = true;}

    this.side = side;
}
