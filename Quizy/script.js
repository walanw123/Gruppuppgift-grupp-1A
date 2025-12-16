const quizData = {
    geografi: [
        { q: "Vad är huvudstaden i Sverige?", a: ["Stockholm", "Oslo", "Köpenhamn", "Helsingfors"], correct: 0 },
        { q: "Vilken är världens längsta flod?", a: ["Nilen", "Amazonfloden", "Yangtze", "Mississippi"], correct: 0 },
        { q: "Vilket är det största landet i världen?", a: ["Ryssland", "Kanada", "Kina", "USA"], correct: 0 },
        { q: "Hur många kontinenter finns det?", a: ["7", "5", "6", "8"], correct: 0 },
        { q: "Vad heter jordens högsta berg?", a: ["Mount Everest", "K2", "Kilimanjaro", "Mont Blanc"], correct: 0 },
        { q: "Vilket hav ligger mellan Europa och Afrika?", a: ["Medelhavet", "Röda havet", "Svarta havet", "Adriatiska havet"], correct: 0 },
        { q: "Vad är huvudstaden i Japan?", a: ["Tokyo", "Osaka", "Kyoto", "Nagoya"], correct: 0 },
        { q: "Vilket är det minsta landet i världen?", a: ["Vatikanstaten", "Monaco", "San Marino", "Liechtenstein"], correct: 0 },
        { q: "På vilken kontinent ligger Egypten?", a: ["Afrika", "Asien", "Europa", "Sydamerika"], correct: 0 },
        { q: "Vad heter världens största öken?", a: ["Sahara", "Gobi", "Kalahari", "Arabian"], correct: 0 },
        { q: "Vilken stad kallas 'kärlekens stad'?", a: ["Paris", "Venedig", "Rom", "Barcelona"], correct: 0 },
        { q: "Vilket land har flest invånare?", a: ["Indien", "Kina", "USA", "Indonesien"], correct: 0 },
        { q: "Vad heter Norges huvudstad?", a: ["Oslo", "Bergen", "Trondheim", "Stavanger"], correct: 0 },
        { q: "Vilket land har formen av en stövel?", a: ["Italien", "Spanien", "Grekland", "Portugal"], correct: 0 },
        { q: "Vad är världens djupaste hav?", a: ["Stilla havet", "Atlanten", "Indiska oceanen", "Arktiska oceanen"], correct: 0 },
        { q: "Vilken flod rinner genom Paris?", a: ["Seine", "Themsen", "Donau", "Rhen"], correct: 0 },
        { q: "Hur många länder finns i Norden?", a: ["5", "4", "6", "3"], correct: 0 },
        { q: "Vad heter Australiens huvudstad?", a: ["Canberra", "Sydney", "Melbourne", "Brisbane"], correct: 0 },
        { q: "Vilket land är känt för pyramiderna?", a: ["Egypten", "Mexiko", "Peru", "Kina"], correct: 0 },
        { q: "Vilken kontinent är minst befolkad?", a: ["Antarktis", "Australien", "Europa", "Afrika"], correct: 0 }
    ],
    bilar: [
        { q: "Vilket märke har en springande häst som logga?", a: ["Ferrari", "Porsche", "Lamborghini", "Maserati"], correct: 0 },
        { q: "Vilket land kommer märket Volvo från?", a: ["Sverige", "Norge", "Finland", "Danmark"], correct: 0 },
        { q: "Vad står BMW för?", a: ["Bayerische Motoren Werke", "British Motor Works", "Berlin Motor Works", "Best Motor Worldwide"], correct: 0 },
        { q: "Vilket bilmärke har fyra ringar som logga?", a: ["Audi", "Renault", "Mazda", "Subaru"], correct: 0 },
        { q: "Vilket land tillverkas Toyota i?", a: ["Japan", "Korea", "Kina", "Taiwan"], correct: 0 },
        { q: "Vad heter Teslas grundare?", a: ["Elon Musk", "Steve Jobs", "Bill Gates", "Jeff Bezos"], correct: 0 },
        { q: "Vilket bilmärke är känt för Mustang?", a: ["Ford", "Chevrolet", "Dodge", "Chrysler"], correct: 0 },
        { q: "Vilket lyxmärke tillhör Volkswagen-koncernen?", a: ["Lamborghini", "Ferrari", "Aston Martin", "McLaren"], correct: 0 },
        { q: "Vad betyder GTI?", a: ["Grand Touring Injection", "Great Turbo Injection", "Grand Turbo Inline", "Great Touring Inline"], correct: 0 },
        { q: "Vilket märke har en treuddad stjärna?", a: ["Mercedes-Benz", "Chrysler", "Mitsubishi", "Peugeot"], correct: 0 },
        { q: "Vilket land kommer Hyundai från?", a: ["Sydkorea", "Japan", "Kina", "Thailand"], correct: 0 },
        { q: "Vad kallas en bil med två sittplatser?", a: ["Coupé", "Sedan", "SUV", "Kombi"], correct: 0 },
        { q: "Vilket märke tillverkar modellen 911?", a: ["Porsche", "Ferrari", "Aston Martin", "Jaguar"], correct: 0 },
        { q: "Vad heter Italiens mest kända sportbilstillverkare?", a: ["Ferrari", "Fiat", "Alfa Romeo", "Lancia"], correct: 0 },
        { q: "Vilket bilmärke äger Rolls-Royce idag?", a: ["BMW", "Volkswagen", "Mercedes", "Audi"], correct: 0 },
        { q: "Vad står SUV för?", a: ["Sport Utility Vehicle", "Super Utility Vehicle", "Special Urban Vehicle", "Street Utility Van"], correct: 0 },
        { q: "Vilket märke har en lejonlogga?", a: ["Peugeot", "Renault", "Citroën", "Seat"], correct: 0 },
        { q: "Vilket är världens mest sålda bil genom tiderna?", a: ["Toyota Corolla", "Ford F-150", "VW Golf", "Honda Civic"], correct: 0 },
        { q: "Vad kallas bilar som drivs av både bensin och el?", a: ["Hybrid", "Diesel", "Plugin", "Turbo"], correct: 0 },
        { q: "Vilket land kommer Saab från?", a: ["Sverige", "Finland", "Norge", "Danmark"], correct: 0 }
    ],
    marken: [
        { q: "Vilket märke har en bockad swoosh som logga?", a: ["Nike", "Adidas", "Puma", "Reebok"], correct: 0 },
        { q: "Vad heter äppelmärket?", a: ["Apple", "Samsung", "Huawei", "Nokia"], correct: 0 },
        { q: "Vilket företag äger Instagram?", a: ["Meta", "Google", "Twitter", "Microsoft"], correct: 0 },
        { q: "Vad står loggan M för på snabbmat?", a: ["McDonald's", "Max", "Burger King", "KFC"], correct: 0 },
        { q: "Vilket märke har tre ränder som symbol?", a: ["Adidas", "Nike", "Puma", "Under Armour"], correct: 0 },
        { q: "Vilket varumärke säljer mest läsk?", a: ["Coca-Cola", "Pepsi", "Fanta", "Sprite"], correct: 0 },
        { q: "Vad heter Amazons grundare?", a: ["Jeff Bezos", "Bill Gates", "Elon Musk", "Mark Zuckerberg"], correct: 0 },
        { q: "Vilket märke har en siren som logga?", a: ["Starbucks", "Costa", "Wayne's", "Espresso House"], correct: 0 },
        { q: "Vilket är världens största möbelföretag?", a: ["IKEA", "Ashley", "Wayfair", "Rooms To Go"], correct: 0 },
        { q: "Vad heter Microsofts söktjänst?", a: ["Bing", "Yahoo", "Ask", "AOL"], correct: 0 },
        { q: "Vilket klädesföretag har en krokodil?", a: ["Lacoste", "Ralph Lauren", "Tommy Hilfiger", "Calvin Klein"], correct: 0 },
        { q: "Vilket företag tillverkar PlayStation?", a: ["Sony", "Microsoft", "Nintendo", "Sega"], correct: 0 },
        { q: "Vad heter H&M's fullständiga namn?", a: ["Hennes & Mauritz", "Hector & Mats", "House & Mode", "Henrik & Maria"], correct: 0 },
        { q: "Vilket märke har en häst som logga (inte Ferrari)?", a: ["Porsche", "Ford Mustang", "Lamborghini", "Jaguar"], correct: 0 },
        { q: "Vilket företag äger YouTube?", a: ["Google", "Facebook", "Amazon", "Microsoft"], correct: 0 },
        { q: "Vad heter världens största möbelkedja från Sverige?", a: ["IKEA", "Mio", "Jysk", "Hem"], correct: 0 },
        { q: "Vilket lyxmärke har dubbel C som logga?", a: ["Chanel", "Cartier", "Coach", "Carolina Herrera"], correct: 0 },
        { q: "Vilket företag tillverkar Galaxy-telefoner?", a: ["Samsung", "LG", "Sony", "Nokia"], correct: 0 },
        { q: "Vad står loggan 'LV' för?", a: ["Louis Vuitton", "Las Vegas", "La Vida", "Luxury Value"], correct: 0 },
        { q: "Vilket företag skapade Windows?", a: ["Microsoft", "Apple", "IBM", "Linux"], correct: 0 }
    ],
    historia: [
        { q: "Vilket år slutade andra världskriget?", a: ["1945", "1944", "1946", "1943"], correct: 0 },
        { q: "Vem var Sveriges första kvinnliga statsminister?", a: ["Magdalena Andersson", "Anna Lindh", "Mona Sahlin", "Margot Wallström"], correct: 0 },
        { q: "Vilket år föll Berlinmuren?", a: ["1989", "1990", "1988", "1987"], correct: 0 },
        { q: "Vem upptäckte Amerika?", a: ["Christopher Columbus", "Leif Eriksson", "Marco Polo", "Ferdinand Magellan"], correct: 0 },
        { q: "Vilket år landade människan på månen?", a: ["1969", "1968", "1970", "1971"], correct: 0 },
        { q: "Vem var USAs första president?", a: ["George Washington", "Thomas Jefferson", "John Adams", "Benjamin Franklin"], correct: 0 },
        { q: "Vilket år startade första världskriget?", a: ["1914", "1915", "1913", "1916"], correct: 0 },
        { q: "Vem målade Mona Lisa?", a: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], correct: 0 },
        { q: "Vilket år grundades Sverige som nation?", a: ["Cirka 1000-talet", "500-talet", "1500-talet", "1200-talet"], correct: 0 },
        { q: "Vem var kung under slaget vid Lützen 1632?", a: ["Gustav II Adolf", "Karl XII", "Gustav Vasa", "Karl XIV Johan"], correct: 0 },
        { q: "Vilket år blev Sverige medlem i EU?", a: ["1995", "1992", "1998", "2000"], correct: 0 },
        { q: "Vem var Tysklands ledare under WW2?", a: ["Adolf Hitler", "Joseph Stalin", "Benito Mussolini", "Winston Churchill"], correct: 0 },
        { q: "Vilket år hände franska revolutionen?", a: ["1789", "1790", "1788", "1791"], correct: 0 },
        { q: "Vem skrev 'Romeo och Julia'?", a: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Oscar Wilde"], correct: 0 },
        { q: "Vilket år sjönk Titanic?", a: ["1912", "1910", "1914", "1915"], correct: 0 },
        { q: "Vem var Egyptens drottning cirka 50 f.Kr?", a: ["Kleopatra", "Nefertiti", "Hatshepsut", "Isis"], correct: 0 },
        { q: "Vilket år avskaffades slaveriet i USA?", a: ["1865", "1860", "1870", "1863"], correct: 0 },
        { q: "Vem grundade det Romerska riket?", a: ["Romulus", "Julius Caesar", "Augustus", "Nero"], correct: 0 },
        { q: "Vilket år började den industriella revolutionen?", a: ["1760-talet", "1800-talet", "1700-talet", "1850-talet"], correct: 0 },
        { q: "Vem uppfann telefonen?", a: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"], correct: 0 }
    ],

    Städer: [
        { q: "Vilken stad är känd som 'The Big Apple'?", a: ["New York", "Los Angeles", "Chicago", "Miami"], correct: 0 },
        { q: "Vilken stad är huvudstad i Frankrike?", a: ["Paris", "Lyon", "Marseille", "Nice"], correct: 0 }, 
        { q: "Vilken stad är känd för sin lutande torn?", a: ["Pisa", "Florens", "Rom", "Venedig"], correct: 0 },
        { q: "Vilken stad är huvudstad i Japan?", a: ["Tokyo", "Osaka", "Kyoto", "Nagoya"], correct: 0 },
        { q: "Vilken stad är känd som 'City of Angels'?", a: ["Los Angeles", "San Francisco", "Seattle", "San Diego"], correct: 0 },
        { q: "Vilken stad är huvudstad i Australien?", a: ["Canberra", "Sydney", "Melbourne", "Brisbane"], correct: 0 },
        { q: "Vilken stad är känd för sin kanaler och gondoler?", a: ["Venedig", "Amsterdam", "Brugge", "Stockholm"], correct: 0 },
        { q: "Vilken stad är huvudstad i Egypten?", a: ["Kairo", "Alexandria", "Giza", "Luxor"], correct: 0 },
        { q: "Vilken stad är känd som 'The Eternal City'?", a: ["Rom", "Aten", "Istanbul", "Jerusalem"], correct: 0 },  
        { q: "Vilken stad är huvudstad i Kanada?", a: ["Ottawa", "Toronto", "Vancouver", "Montreal"], correct: 0 },
        { q: "Vilken stad är känd för sin skyline med skyskrapor som Willis Tower?", a: ["Chicago", "New York", "Houston", "Miami"], correct: 0 },
        { q: "Vilken stad är huvudstad i Brasilien?", a: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], correct: 0 },
        { q: "Vilken stad är känd som 'The City of Light'?", a: ["Paris", "London", "Berlin", "Madrid"], correct: 0 },
        { q: "Vilken stad är huvudstad i Indien?", a: ["New Delhi", "Mumbai", "Bangalore", "Chennai"], correct: 0 },
        { q: "Vilken stad är känd för sin operahus och Harbour Bridge?", a: ["Sydney", "Melbourne", "Brisbane", "Perth"], correct: 0 },
        { q: "Vilken stad är huvudstad i Tyskland?", a: ["Berlin", "München", "Hamburg", "Frankfurt"], correct: 0 },
        { q: "Vilken stad är känd som 'The Windy City'?", a: ["Chicago", "New York", "Boston", "Seattle"], correct: 0 },
        { q: "Vilken stad är huvudstad i Ryssland?", a: ["Moskva", "Sankt Petersburg", "Novosibirsk", "Jekaterinburg"], correct: 0 },
        { q: "Vilken stad är känd för sin festival La Tomatina?", a: ["Buñol", "Madrid", "Barcelona", "Valencia"], correct: 0 },
        { q: "Vilken stad är huvudstad i Italien?", a: ["Rom", "Milano", "Neapel", "Turin"], correct: 0 }
    ],

    Funfacts: [

        {q: "Sant eller falskt: Coca-Cola var ursprungligen grön.", a: ["Falskt", "Sant"], correct: 0},
        {q: "Vad är det högsta antalet glasskulor som någonsin balanserats på en enda strut?", a: ["125", "87", "99", "100"], correct: 0},
        {q: "Vilket land konsumerar mest choklad per capita?", a: ["Schweiz", "Tyskland", "Belgien", "USA"], correct: 0},
        {q: "Vad var den första maten som åts i rymden?", a: ["Äppelmos", "Smörgås", "Godis", "Jordnötter"], correct: 0},
        {q: "Vilket djur kan sova i tre år?", a: ["Snigel", "Sengångare", "Björn", "Sköldpadda"], correct: 0},
        {q: "Vilken färg har en isbjörns hud under pälsen?", a: ["Svart", "Vit", "Rosa", "Brun"], correct: 0},
        {q: "Det är olagligt att namnge en gris Napoleon i Frankrike.", a: ["Falskt", "Sant", "Endast i vissa regioner", "Endast på söndagar"], correct: 0},
        {q: "Vad är rekordet för längst tid att hålla andan under vatten?", a: ["24 minuter", "10 minuter", "15 minuter", "29 minuter"], correct: 0},
        {q: "I vilket land är det olagligt att tugga tuggummi offentligt?", a: ["Singapore", "Malaysia", "Thailand", "Vietnam"], correct: 0},
        {q: "Vilken frukt är förbjuden på många hotell på grund av sin starka lukt?", a: ["Durian", "Mango", "Jackfrukt", "Drakfrukt"], correct: 0},
        {q: "Vad är den snabbaste tiden någon har ätit en 12-tums pizza?", a: ["23 sekunder", "10 sekunder", "53 sekunder", "1 minut"], correct: 0},
        {q: "Vilket land krediteras med att ha uppfunnit glass?", a: ["Kina", "Italien", "Frankrike", "Marocko"], correct: 0},
        {q: "Du får inte använda en dammsugare efter kl. 22.00 i Victoria, Australien.", a: ["Sant", "Falskt", "Endast på helger", "Endast i lägenheter"], correct: 0}
    ]
};

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let totalScore = parseInt(localStorage.getItem('totalScore')) || 0;
// ersätt direkt DOM-skrivning med säkert uppdateringsanrop
// document.getElementById('totalScore').textContent = totalScore;

// central funktion för att uppdatera score i UI (säker: kollar existence)
function updateTotalScoreDisplays() {
    const header = document.getElementById('totalScoreHeader');
    const result = document.getElementById('totalScoreResult');
    const old = document.getElementById('totalScore');
    if (header) header.textContent = 'Dina poäng: ' + totalScore;
    if (result) result.textContent = totalScore;
    if (old) old.textContent = totalScore;
}

updateTotalScoreDisplays(); // init

let currentCategory = null;

const storedCategoryScores = JSON.parse(localStorage.getItem('categoryScores')) || {};
const categoryScores = {};
Object.keys(quizData).forEach(cat => {
    categoryScores[cat] = typeof storedCategoryScores[cat] === 'number' ? storedCategoryScores[cat] : 0;
});

function updateCategoryScoreDisplays() {
    Object.keys(quizData).forEach(cat => {
        const el = document.getElementById('score-' + cat);
        if (el) el.textContent = categoryScores[cat] || 0;
    });
}

updateCategoryScoreDisplays(); // init

function startQuiz(category) {
    currentQuiz = quizData[category];
    currentCategory = category; // spara aktuell kategori
    currentQuestion = 0;
    score = 0;
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    document.getElementById('resultSection').classList.add('hidden');
    showQuestion();
}

// Hjälpfunktion: Fisher‑Yates shuffle
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let currentCorrectIndex = null;

function showQuestion() {
    if (currentQuestion >= currentQuiz.length) {
        showResult();
        return;
    }

    const question = currentQuiz[currentQuestion];
    document.getElementById('questionNumber').textContent = currentQuestion + 1;
    document.getElementById('questionText').textContent = question.q;

    // skapa kopia av svaren, blanda och räkna ut nytt korrekt index
    const items = question.a.map((text, i) => ({ text, orig: i }));
    shuffleArray(items);
    const shuffled = items.map(it => it.text);
    currentCorrectIndex = items.findIndex(it => it.orig === question.correct);

    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';

    shuffled.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index, currentCorrectIndex);
        answersContainer.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (selected === correct) {
        buttons[selected].classList.add('correct');
        score++;
        totalScore++;
        // öka kategori-poäng
        if (currentCategory) {
            categoryScores[currentCategory] = (categoryScores[currentCategory] || 0) + 1;
            localStorage.setItem('categoryScores', JSON.stringify(categoryScores));
            updateCategoryScoreDisplays();
        }
        localStorage.setItem('totalScore', totalScore);
        updateTotalScoreDisplays();
    } else {
        buttons[selected].classList.add('incorrect');
        if (typeof correct === 'number' && buttons[correct]) buttons[correct].classList.add('correct');
    }

    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 1500);
}


function showResult() {
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('resultSection').classList.remove('hidden');
    document.getElementById('finalScore').textContent = score;
    
    const resultMessage = document.getElementById('resultMessage');
    if (score === 20) {
        resultMessage.textContent = '🌟 Perfekt! Du är en mästare!';
    } else if (score >= 15) {
        resultMessage.textContent = '🎉 Utmärkt jobbat!';
    } else if (score >= 10) {
        resultMessage.textContent = '👍 Bra jobbat!';
    } else {
        resultMessage.textContent = '💪 Fortsätt öva, du kan bli bättre!';
    }
}

function goHome() {
    document.getElementById('homeSection').style.display = 'block';
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('resultSection').classList.add('hidden');
    currentQuestion = 0;
    score = 0;
}

// Nollställ totalpoäng och kategori-poäng vid restart
function restartQuizAndResetPoints() {
    totalScore = 0;
    Object.keys(categoryScores).forEach(cat => categoryScores[cat] = 0);
    localStorage.setItem('totalScore', totalScore);
    localStorage.setItem('categoryScores', JSON.stringify(categoryScores));
    updateTotalScoreDisplays();
    updateCategoryScoreDisplays();

    currentQuestion = 0;
    score = 0;
    showQuestion();
}

// gör funktionen tillgänglig från HTML (onclick)
window.restartQuizAndResetPoints = restartQuizAndResetPoints;

document.addEventListener('DOMContentLoaded', () => {
    // bind flera möjliga restart-knappar om de finns
    const restartIds = ['restartAllBtn', 'restartAllBtnHeader', 'restartAllBtnResult'];
    restartIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', restartQuizAndResetPoints);
    });
    updateTotalScoreDisplays();
    updateCategoryScoreDisplays();
});