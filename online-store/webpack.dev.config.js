const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        //static: path.resolve(__dirname, 'dist'),
        contentBase: path.resolve(__dirname, './dist'),
    },
};
