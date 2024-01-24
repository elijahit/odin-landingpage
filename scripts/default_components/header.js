let baseUrl;

// GESTISCO L'URL BASE PER INDEX e PAGINE VARIE 
if (window.location.href.includes('index.html')) {
  baseUrl = ".";
} else {
  baseUrl = "..";
}

// INSERISCO L'HTML dell'HEADER CHE HA BISOGNO DI
// criticals.css PER FUNZIONARE
document.write(`\
  <header>\
    <div class="header__wrapper">\
      <div class="logo" aria-labelledby="logo__site">\
        <a id="logo__site" href="${baseUrl}/index.html">Header Logo</a>\
      </div>\
      <button class="mobile__only" aria-label="navigazione principale" aria-pressed="false">\
        <img src="${baseUrl}/images/hamburger.svg" alt="Menu Principale" />\
      </button>\
      <nav class="desktop" aria-label="principale">\
        <ul>\
          <li><a href="#">header link one</a></li>\
          <li><a href="#">header link two</a></li>\
          <li><a href="${baseUrl}/pages/contact.html">Contact</a></li>\
        </ul>\
      </nav>\
    </div>\
    <nav class="mobile" aria-label="principale">\
      <button class="close__menu" aria-label="navigazione principale" aria-pressed="false">\
        <img src="${baseUrl}/images/closeHamburger.svg" alt="Chiudi menu">\
      </button>\
      <ul>\
        <li><a href="#">header link one</a></li>\
        <li><a href="#">header link two</a></li>\
        <li><a href="${baseUrl}/pages/contact.html">Contact</a></li>\
      </ul>\
    </nav>\
  </header>\
`);

// DOPO AVER INSERITO L'HTML SELEZIONO L'ELEMENTO DA ATTIVARE
// SE SI E' IN UNA PAGINA DIVERSA DA INDEX.HTML TRAMITE
// DUE FOREACH VALUTO SE DESKTOP O MOBILE SONO SELEZIONATI
// NECESSITA DI UNA CLASSE active__nav IMPOSTATA NEL CSS
//DELLA PAGINA COME AD ESEMPIO CONTACT.CSS PER PAGES/CONTACT.HTML

document.querySelectorAll('header nav.mobile ul li').forEach((e) => {
  if(e.innerHTML.includes(window.location.href.split("/")[window.location.href.split("/").length-1])) {
    e.classList.add('active__nav');
  }
});

document.querySelectorAll('header .header__wrapper nav.desktop ul li').forEach((e) => {
  if(e.innerHTML.includes(window.location.href.split("/")[window.location.href.split("/").length-1])) {
    e.classList.add('active__nav');
  }
});