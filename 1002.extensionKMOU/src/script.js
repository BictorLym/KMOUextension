////////////////////////
const kmouHomeURL = "https://www.kmou.ac.kr/";
const kmouLibraryURL = "https://library.kmou.ac.kr/";
const kmouLMSURL = "https://cyberweb.kmou.ac.kr/";
const kmouSuGangURL = "https://sugang.kmou.ac.kr/";
const kmouExtraCurriculumnURL = "https://ocean-cts.kmou.ac.kr/";
const kmouEveryTimeURL = "https://www.everytime.kr";

function openURLInNewTab(URL) {
    whale.tabs.create({ 
        url:URL
    });
}

document.getElementById('clickkmouHome').addEventListener('click', 
() => { openURLInNewTab(kmouHomeURL) }, false);
document.getElementById('clickkmouLibrary').addEventListener('click', () => { openURLInNewTab(kmouLibraryURL) }, false);
document.getElementById('clickkmouLMS').addEventListener('click', () => { openURLInNewTab(kmouLMSURL) }, false);
document.getElementById('clickkmouSuGang').addEventListener('click', () => { openURLInNewTab(kmouSuGangURL) }, false);
document.getElementById('clickkmouExtraCurriculumn').addEventListener('click', () => { openURLInNewTab(kmouExtraCurriculumnURL) }, false);
document.getElementById('clickkmouEveryTime').addEventListener('click', () => { openURLInNewTab(kmouEveryTimeURL) }, false);
