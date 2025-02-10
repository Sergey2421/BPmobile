import {I18n} from "i18n-js";
import de from "/i18n/de.json";
import en from "/i18n/en.json";
import es from "/i18n/es.json";
import fr from "/i18n/fr.json";
import ja from "/i18n/ja.json";
import pt from "/i18n/pt.json";

const i18n = new I18n({
    de,
    es,
    fr,
    ja,
    pt,
    en,
});

i18n.locale = '';

const content = document.querySelectorAll('.lang');

i18n.onChange(() =>{
        for (const el of content) {

            const text = el.innerHTML;
            let price = '';

            if (text.match(/per week/gm)) {
                price = i18n.l("currency",pricePerWeek)
            } else if (text.match(/per year/gm)) {
                price = i18n.l("currency",pricePerYear)
            }

            console.log(price)

            el.innerHTML = i18n.t(text, {price}) || el.innerHTML
        }
    }
)


const pricePerWeek = 6.99;
const pricePerYear = 39.99;


const queryLang = new URLSearchParams(document.location.search).get('lang');

let systemLang = window.navigator.language;
systemLang = systemLang.substring(0,2);

const allowedLangs = ["en", "de", "es", "fr", "ja", "pt"];

let currentLang = allowedLangs.find(lang => lang === queryLang) || allowedLangs.find(lang => lang === systemLang) || 'en';

i18n.locale = currentLang;


