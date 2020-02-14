const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {

    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: path.join(__dirname, 'src', 'main', 'resources', 'static', 'js', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'src', 'main', 'resources', 'static', 'js','dist'),
        filename: '[name].js',
    },
    devServer: {
      overlay:true,
      contentBase:'./dist',
      hot: true,
      compress:true,
      port: 8000,
      allowedHosts:[
            'localhost:8080'
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
    })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },{
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, 'src', 'main', 'resources', 'static', 'css'),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true,
                            modules: true,
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    resolve:{
        modules:[
            path.join(__dirname, 'src', 'main', 'resources', 'static', 'js'),
            path.join(__dirname, 'src', 'main', 'resources', 'static', 'css' ),
            path.join(__dirname, 'node_modules'),
        ],
    }
};
