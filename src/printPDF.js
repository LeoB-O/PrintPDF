export default function PrintPDF(file) {
  if(!file instanceof Blob) {
    throw new Error('file has to be a Blob object');
  }

  // transform blob to object url
  let objectUrl = URL.createObjectURL(file);

  // create an invisble iframe
  let iframe = document.createElement("iframe");
  iframe.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute;');
  
  // use iframe to load pdf
  iframe.src = objectUrl;
  document.documentElement.appendChild(iframe);

  // use iframe to print
  iframe.onload = () => {
    iframe.contentWindow.print();
  }
}