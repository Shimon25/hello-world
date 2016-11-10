/**
 * Created by Gran1 on 10.11.16.
 */

function Book(t, a, y ) {
    var title = t;
    var author = a;
    var year = y;
    
    
    var g = {
        title : function () {    return title; },
        author: function () {    return author; },
        year: function () {    return year; }
    }

    var s = {
        title : function (val) {   title=val; return true ;},
        year: function (val) {  if(val<1600) return false;  year=val; return true }
    }
    return {
        value : function (name, val) {
            if (name == undefined) return undefined;
            if (typeof(name) != "string") return "not a string type";
            if (name == "") return "value = ";
            if (val == undefined){
                if (g[name] == undefined) return "no such property";
            return g[name]();
        }
        else{
            if (s[name] == undefined) return "no such property";
            return s[name](val);
        }
    },
        toString: function () { return "title" + title+ " author" + author + " year" +year; }
}}
