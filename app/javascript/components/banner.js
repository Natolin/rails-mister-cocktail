import Typed from 'typed.js';


function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Are you thirsty?", "You should have a cocktail!"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
