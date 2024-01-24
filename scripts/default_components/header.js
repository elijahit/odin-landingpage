document.write('\
  <header>\
    <div class="header__wrapper">\
      <div class="logo" aria-labelledby="logo__site">\
        <a id="logo__site" href="./index.html">Header Logo</a>\
      </div>\
      <button class="mobile__only" aria-label="navigazione principale" aria-pressed="false">\
        <img src="./images/hamburger.svg" alt="Menu Principale" />\
      </button>\
      <nav class="desktop" aria-label="principale">\
        <ul>\
          <li><a href="#">header link one</a></li>\
          <li><a href="#">header link two</a></li>\
          <li><a href="./pages/contact.html">Contact</a></li>\
        </ul>\
      </nav>\
    </div>\
    <nav class="mobile" aria-label="principale">\
      <button class="close__menu" aria-label="navigazione principale" aria-pressed="false">\
        <img src="./images/closeHamburger.svg" alt="Chiudi menu">\
      </button>\
      <ul>\
        <li><a href="#">header link one</a></li>\
        <li><a href="#">header link two</a></li>\
        <li><a href="./pages/contact.html">Contact</a></li>\
      </ul>\
    </nav>\
  </header>\
');