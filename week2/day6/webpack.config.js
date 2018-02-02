const path = require('path');
module.exports = {
    entry:'content/js/app.js',
    output:{
        path:'./dist',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                loader:'style-loader'
            }
        ]
    },
    devserver:{
        host:'localhost',
        port:8080,
        setup:{

        }
    }

}