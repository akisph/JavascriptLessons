// this file wont run n the server

const path = require('path'); // it means we require this particullar module from the library


module.exports = {
    entry: './source/index.js', // entry point define the source fies
    output: {
        path: path.resolve(__dirname,'dist/assets'),// path.resolve concatenate the two paths //must be an ABSOLUTE URL//
        filename: 'bundle.js'
    },//__dirname // this variable gives the absoolute path through the project
    devServer:{
        contentBase: path.resolve(__dirname,'dist'), // the path wjere the index.html is
        publicPath: '/assets/' //where the assets are been served from
    }
}; 

