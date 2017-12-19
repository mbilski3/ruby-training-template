var merge = require('webpack-merge');
var fs = require('fs')

if (['development', 'production', 'qa'].indexOf(process.env.NODE_ENV) < 0) {
    console.log('-------------------------------------------')
    console.log('-  NO ENV IS SET, SETTING TO: localhost ! -')
    console.log('-------------------------------------------')
    process.env.NODE_ENV = "localhost"
}
module.exports = merge.smart([
    require('./webpack-front/common'),
    require('./webpack-front/' + process.env.NODE_ENV || 'development')
]);
