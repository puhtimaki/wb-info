function tallenna(tekstiId) {
    const teksti = document.getElementById(tekstiId).value;
    localStorage.setItem(tekstiId, teksti);
    alert('Tallennettu!');
}

function tyhjaa(tekstiId) {
    document.getElementById(tekstiId).value = '';
    localStorage.removeItem(tekstiId);
    alert('Tyhjennetty!');
}

window.onload = function() {
    document.getElementById('viikko-ohjelma-teksti').value = localStorage.getItem('viikko-ohjelma-teksti') || '';
    document.getElementById('tiedotteet-teksti').value = localStorage.getItem('tiedotteet-teksti') || '';
    document.getElementById('muuta-teksti').value = localStorage.getItem('muuta-teksti') || '';
}
