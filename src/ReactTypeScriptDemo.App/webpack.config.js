var path = require("path");

module.exports = {
    entry: ["./ClientApp/app.tsx"],
    output: {
        path: path.resolve(__dirname, "wwwroot"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    }
};