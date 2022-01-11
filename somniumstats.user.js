// ==UserScript==
// @name         SomniumStats
// @namespace    http://github.com/logianer
// @version      0.1
// @description  Somnium-Bestand
// @author       Logianer
// @match        https://*.somniumcards.de/produkt/*
// @icon         https://www.somniumcards.de/wp-content/themes/wp-somnium-theme/dist/images/apple-touch-icon.png
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==
function addGlobalStyle(css) {
   var head, style;
   head = document.getElementsByTagName('head')[0];
   if (!head) { return; }
   style = document.createElement('style');
   style.type = 'text/css';
   style.innerHTML = css;
   head.appendChild(style);
}
addGlobalStyle(`#show_count {padding: .6em; margin: .5em; border: 0; background: rgba(0,0,0,0)}`)
$("#atomion-summary-wrapper div.summary.entry-summary p.stock.in-stock").append(`<button id="show_count"><i class="fas fa-sync-alt fa-xl"></i></button><is></is>`)
$("#show_count").click(async ()=>{
    res = await fetch("https://somniumstats.duckdns.org/product/"+$(`[name="add-to-cart"]`).val())
    data = await res.json()
    $("is").text(data.inStock)
})
