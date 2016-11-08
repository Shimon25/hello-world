/**
 * Created by Shimon.Zilbert on 08/11/2016.
 */

Car();

function Car( m, c, e, y){
   var model = m;
    var color = c;
    var engine = e;
    var  year = y;

    function getM() {
        return model;
    }
    function getC() {
        return color;
    }
    function getE() {
        return engine;
    }
    function getY() {
        return year;
    }

    function setM(m) {
         model = m;
    }
    function setC(c) {
         color = c;
    }
    function setE(e) {
         engine = e;
    }
    function setY(y) {
         year = y;
    }

    Car._Model = 100;
    Car._Color = 20;
    Car._Engine = 10000;
    Car._YearMin = 1900;
    Car._YearMax = 2016;

    Car.getRandomCar = function () {
        return Car(Util.randomInt(Car._Model), Util.randomInt(Car._Color), Util.randomInt(Car._Engine), Util.randomIntRange(Car._YearMin, Car._YearMax));
    }

    Car.sortBy = function (str) {
        return Car.sorters[str];
    }

    Car.sorters = {
        model: function (a,b) {
            return a.getModel() - b.getModel();},
        color: function (a,b) {
            return a.getColor() - b.getColor();},
        engine: function (a,b) {
            return a.getEngine() - b.getEngine();},
        year: function (a,b) {
            return a.getYear() - b.getYear();}
    }

    var min;
    var max;
    Car.filters = {
        engine: function (e) {
            return e.getEngine()>=min && e.getEngine()<=max;},
        year: function (e) {
            return a.getYear() - b.getYear();}
    }

    Car.filter = function (str, mn, mx) {
        min = mn;
        max = mx;
        return Car.filters[str];
    }

    toStr = function () {
        return("model: " + model + " color: " + color + " engine: " + engine + " year: " + year );
    }


    return{
        getModel : getM,
        getColor : getC,
        getEngine : getE,
        getYear : getY,
        setModel : setM,
        setColor : setC,
        setEngine : setE,
        setYear : setY,
        toString : toStr

    }

}
