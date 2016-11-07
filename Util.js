/**
 * Created by Gran1 on 07.11.16.
 */
Util();

function Util() {
    Util.randomInt= function (bound) {
        return Math.floor(Math.random() *bound);
    }
    Util.randomIntRange= function (min,max) {
        return min+Util.randomInt(max-min+1);
    }
    Util.randomFloat= function (min,max) {
        return min+(max-min)*Math.random();
    }
}
