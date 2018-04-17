/**
 * Created by tlhagh on 2017/8/5.
 */
var Mock = require('mockjs');
var mockserver = require('mockserver-grunt');
let data = Mock.mock({
    'list|1-10':[{
        'id|+1':1
    }],
    "string|10": "★",
    "number|+1": 202,
    "number2|99-100": 0
})
console.log(data);