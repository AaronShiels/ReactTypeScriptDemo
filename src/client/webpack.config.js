var path = require("path");

module.exports = {
	entry: "./app/index.tsx",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: path.resolve(__dirname, "/dist/"),
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"],
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: "ts-loader" },
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: { limit: 65000, mimetype: "application/font-woff" } },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: { limit: 65000, mimetype: "application/octet-stream" } },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: { limit: 65000, mimetype: "image/svg+xml" } },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader", options: { limit: 65000, mimetype: "application/vnd.ms-fontobject" } },
			{ test: /\.[ot]tf$/, loader: "url-loader", options: { limit: 65000, mimetype: "application/octet-stream" } },
		],
	},

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
	},

	devServer: {
		contentBase: path.resolve(__dirname, "./"),
		publicPath: path.resolve(__dirname, "/dist/"),

		compress: true,
		host: "0.0.0.0",
		port: 9000,
		disableHostCheck: true,

		stats: "errors-only",

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
