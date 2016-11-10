
/**
 * Created by Gran1 on 10.11.16.
 */

Car = function ( m ,y, e) {
    this.model = m;
    this.year = y;
    this.engine = e;

    this.toString = function () {
        return "model" + this.model+ " year" +this.year+ " engine" + this.engine;
    }

    this.getAll = function () {
        var res = "";
        for(var key in this)
            if(typeof(this[key]) != "function")
                res = res+ key + this[key] + ";";

        return res;
    }
    
    

}