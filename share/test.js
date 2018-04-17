/**
 * Created by tlhagh on 2017/7/27.
 */
var Person = function () {
    this.age = 1;
}
debugger
var p1 = new Person();
console.log('=================Person===================');
console.log(Person.__proto__);
console.log(Person.prototype);
console.log(Person.constructor);
console.log('=================p1===================');
console.log(p1.prototype);
console.log(p1.constructor);
console.log(p1.__proto__);
console.log('===================p1.constructor=================');
console.log(p1.constructor.prototype);
console.log(p1.constructor.__proto__);
console.log('==================Person.prototype==================');
console.log(Person.prototype.constructor);
console.log(Person.prototype.__proto__);
console.log(Person.prototype.prototype);
console.log('=================Person.constructor===================');
console.log(Person.constructor.__proto__);
console.log(Person.constructor.prototype);
console.log('=================Person.constructor===================');
console.log(Person.__proto__.constructor);
console.log(Person.__proto__.__proto__);
console.log(Person.__proto__.prototype);

console.log('--------------------------------------------------------');
var animal = function(price){
    this.price= price;
};
animal.prototype.getPrice = function () {
    console.log(this.price)
}
Object.prototype.getName = function () {


}
var tidy = new animal(200);
//for in可以获取对象的所有可以枚举的属性，包括集成的属性
console.log(tidy.hasOwnProperty('price'));
console.log(tidy.hasOwnProperty('getName'));
for (var item in tidy){
    console.log(item);
}

var o = new Object();
o.prop = 'exists';
console.log(o.hasOwnProperty('prop'));             // 返回 true
console.log(o.hasOwnProperty('toString'));         // 返回 false
console.log(o.hasOwnProperty('hasOwnProperty'));   // 返回 false

var buz = {
    fog: 'stack'
};

for (var name in buz) {
    if (buz.hasOwnProperty(name)) {
        console.log("this is fog (" + name + ") for sure. Value: " + buz[name]);
    }
    else {
        console.log(name); // toString or something else
    }
}

({}).hasOwnProperty.call(buz, 'bar'); // true
Object.prototype.hasOwnProperty.call(buz, 'bar'); // true
console.log(({}));
console.log("str".hasOwnProperty("split"));
console.log(String.prototype.hasOwnProperty("split"));
console.log(Object.getOwnPropertyNames(o));
console.log(Object.getOwnPropertyNames(buz));
console.log(Object.getOwnPropertyNames(tidy));
console.log(Object.keys(tidy));


