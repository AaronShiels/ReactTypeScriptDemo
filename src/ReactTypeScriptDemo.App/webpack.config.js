var path = require("path");

module.exports = {
    entry: ["./ClientApp/index.tsx"],
    output: {
        path: path.resolve(__dirname, "wwwroot"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: { limit: 65000, mimetype: "application/font-woff" } },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: { limit: 65000, mimetype: "application/octet-stream" } },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: { limit: 65000, mimetype: "image/svg+xml" } },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: { limit: 65000, mimetype: "application/vnd.ms-fontobject" } },
            { test: /\.[ot]tf$/, loader: "url-loader", options: { limit: 65000, mimetype: "application/octet-stream" } },
        ]
    }
};