/**
 * Created by tlhagh on 2017/8/5.
 */
// mock/db.js
'use strict'
const faker = require('faker')

module.exports = function() {
    let data = {
        'activity': [
            {
                id: 0,
                title: faker.lorem.words(),
                img: faker.image.image()
            }
        ]
    }
    return data
}