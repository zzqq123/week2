const path  =require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:{
		app:path.join(__dirname,'src/app.js')
	},
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.js$/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:['vue-style-loader','css-loader']
                    })
            },
            {
                test:/.(jpg|png|gif)/,
                loader:'file-laoder'
            },
            {
                test:/.(eot|ttf|woff|svg)/,
                loader:'url-loader'
            }
        ]
    },
    devServer:{
        host:'localhost',
        port:8080,
        setup(app){
            app.get('/',function(req,res){
                let data = fs.readFileSync('./data/data.json');
                res.end(data);
            })
        }
    },
    resolve:{
        extensions:['.js','.vue','json','.css'],
        alias:{
            '@':path.resolve(__dirname,'src'),
            'vue$':'vue/dist/vue.esm.js'
        },
        modules:[path.resolve(__dirname,'src'),'node_modules']
    },
    plugins:[
    new ExtractTextPlugin('main.css'),
/*    new webpack.optimize.CommonChunkPlugin({
        filename:"common.js"
    }),*/
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./index.html'
    })
    ]
}