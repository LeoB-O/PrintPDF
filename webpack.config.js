const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    library: "printPDF",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
    filename: "printPDF.js",
    sourceMapFilename: "print.map",
    libraryExport: "default"
  }
};
