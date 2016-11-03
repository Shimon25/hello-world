/**
 * Created by Gran1 on 03.11.16.
 */

function Person(n, a, m) {
    var name = n;
    var age = a;
    var married = m;

    function getN() {
        return name;
    }
    function getA() {
        return age;
    }
    function getM() {
        return married;
    }

       return {
           getName : getN,
           getAge : getA,
           getMarried : getM,

       }
}