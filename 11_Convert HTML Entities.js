function convertHTML(str) {

  str=str.replace(/&/g, "&amp;")
  .replace(/</g, "&lt;" )
  .replace(/>/g, "&gt;")
  .replace(/'/g, "&apos;")
  .replace(/"/g, "&quot;")

  return str;
}

convertHTML("Dolce & Gabbana");
