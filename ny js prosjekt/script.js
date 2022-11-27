
const language = {
    en: "Good morning!",
    nb: "God morgen!",
    de: "Guten Morgen!",
    jp: "Ohayo gozaimasu!",
    pl: "Dzień dobry!",
    la: "Labrīt!",
    fr: "bonjour!",
    fi: "Hyvää huomenta!",
    fil: "magandang umaga po!"
}


const norskTekst = document.getElementById("result")

function setLang(langCode) {
  console.log({norskTekst})
norskTekst.setHTML(language[langCode])
}





