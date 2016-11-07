/**
 * Created by Gran1 on 03.11.16.
 */

var personStatic;

function Person(n, a, m) {

    if(personStatic===undefined){
        Person.greetings = "Long live";
    }
    personStatic = 1;

    Person.MAX_NAMES = 5;
    Person.MIN_AGE = 18;
    Person.MAX_AGE = 120;
    Person.MIN_SALARY = 5200;
    Person.MAX_SALARY = 120000;
    
    Person.GetRendomPerson = function () {
        return Person(Util.randomInt(Person.MAX_NAMES),
            Util.randomIntRange(Person.MIN_AGE,Person.MAX_AGE));
    };

    Person.sorters = {
        name: function (e1, e2) {
            return e1.getName() - e2.getName();},
        age:  function (e1, e2) {
                return e1.getAge() - e2.getAge();}
    };

    
    Person.sortBy = function (str) {
        // switch(str) {
            // case "name":
            //     return function (e1, e2) {
            //         return e1.getName() - e2.getName();
            //     }
            // case "age":
            //     return function (e1, e2) {
            //         return e1.getAge() - e2.getAge();
            //     }
        //     default: return null;
        //
        // }
        return Person.sorters[str];
    };
var min;
    var max;

    Person.filter = function (mn, mx) {
        min = mn;
        max = mx;
            return function(e){
               return e.getAge()>=min && e.getAge()<=min
            }

    };


    
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

    function setN(n) {
        name = n;
    }

    var h = function () {return Person.greetings + " " + name
        
    };
    var h1 = function () {return "name " +  name + " age " + age};
    
       return {
           getName : getN,
           getAge : getA,
           getMarried : getM,
    setName : setN,
           hello : h,
           toString: h1
       }
}