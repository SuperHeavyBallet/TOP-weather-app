const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Apply this rule to .js files
                exclude: /node_modules/, // Don't apply to files residing in node_modules
                use: {
                    loader: "babel-loader", // Use Babel loader
                    options: {
                        presets: ["@babel/preset-env"] // Use @babel/preset-env for transpilation
                    }
                }
            }
            // Add more rules for handling CSS, images, etc. if needed
        ]
    }
};

