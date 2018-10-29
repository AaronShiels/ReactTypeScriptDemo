const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
	entry: "./client/index.tsx",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: path.resolve(__dirname, "/dist/"),
	},

	devtool: "source-map",

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
	},

	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "ts-loader" },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: { limit: 65000, mimetype: "application/font-woff" } },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: { limit: 65000, mimetype: "application/octet-stream" } },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: { limit: 65000, mimetype: "image/svg+xml" } },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: { limit: 65000, mimetype: "application/vnd.ms-fontobject" } },
			{ test: /\.[ot]tf$/, loader: "url-loader", options: { limit: 65000, mimetype: "application/octet-stream" } },
		],
	},

	plugins: [new CopyWebpackPlugin([{ from: "client/index.html" }])],

	devServer: {
		contentBase: path.resolve(__dirname, "./"),
		publicPath: path.resolve(__dirname, "/dist/"),

		compress: true,
		host: "0.0.0.0",
		port: 9000,
		disableHostCheck: true,

		stats: "errors-only",

		index: "index.html",
		proxy: {
			"/api": {
				target: "http://test.com",
				secure: false,
				changeOrigin: true,
				pathRewrite: { "^/api": "" },
			},
		},
		historyApiFallback: { rewrites: [{ from: /^(?!\/api).*$/, to: "/index.html" }] },
	},
};

module.exports = config;
