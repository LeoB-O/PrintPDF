import printPDF from "./src/printPDF";

if (window && !window.PrintPDF) {
  window.PrintPDF = printPDF;
}

export default printPDF;
