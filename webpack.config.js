const config = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        blog: './src/js/blog.js',
        contact: './src/js/contacts.js',
        apartements: './src/js/apartements.js'
        // Need add all main js files
    },
    output: {
        filename: '[name].boundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
};

module.exports = config;