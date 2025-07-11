const countries = [
    {name: "United Arab Emirates", flag: "https://flagcdn.com/w320/ae.png"},
    {name: "Afghanistan", flag: "https://flagcdn.com/w320/af.png"},
    {name: "Armenia", flag: "https://flagcdn.com/w320/am.png"},
    {name: "Azerbaijan", flag: "https://flagcdn.com/w320/az.png"},
    {name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png"},
    {name: "Bahrain", flag: "https://flagcdn.com/w320/bh.png"},
    {name: "Brunei Darussalam", flag: "https://flagcdn.com/w320/bn.png"},
    {name: "Bhutan", flag: "https://flagcdn.com/w320/bt.png"},
    {name: "China", flag: "https://flagcdn.com/w320/cn.png"},
    {name: "Cyprus", flag: "https://flagcdn.com/w320/cy.png"},
    {name: "Georgia", flag: "https://flagcdn.com/w320/ge.png"},
    {name: "South Georgia and the South Sandwich Islands", flag: "https://flagcdn.com/w320/gs.png"},
    {name: "Indonesia", flag: "https://flagcdn.com/w320/id.png"},
    {name: "Israel", flag: "https://flagcdn.com/w320/il.png"},
    {name: "India", flag: "https://flagcdn.com/w320/in.png"},
    {name: "British Indian Ocean Territory", flag: "https://flagcdn.com/w320/io.png"},
    {name: "Iraq", flag: "https://flagcdn.com/w320/iq.png"},
    {name: "Iran", flag: "https://flagcdn.com/w320/ir.png"},
    {name: "Jordan", flag: "https://flagcdn.com/w320/jo.png"},
    {name: "Japan", flag: "https://flagcdn.com/w320/jp.png"},
    {name: "Kyrgyzstan", flag: "https://flagcdn.com/w320/kg.png"},
    {name: "Cambodia", flag: "https://flagcdn.com/w320/kh.png"},
    {name: "North Korea", flag: "https://flagcdn.com/w320/kp.png"},
    {name: "South Korea", flag: "https://flagcdn.com/w320/kr.png"},
    {name: "Kuwait", flag: "https://flagcdn.com/w320/kw.png"},
    {name: "Kazakhstan", flag: "https://flagcdn.com/w320/kz.png"},
    {name: "Lebanon", flag: "https://flagcdn.com/w320/lb.png"},
    {name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png"},
    {name: "Myanmar", flag: "https://flagcdn.com/w320/mm.png"},
    {name: "Mongolia", flag: "https://flagcdn.com/w320/mn.png"},
    {name: "Maldives", flag: "https://flagcdn.com/w320/mv.png"},
    {name: "Malaysia", flag: "https://flagcdn.com/w320/my.png"},
    {name: "Nepal", flag: "https://flagcdn.com/w320/np.png"},
    {name: "Oman", flag: "https://flagcdn.com/w320/om.png"},
    {name: "Philippines", flag: "https://flagcdn.com/w320/ph.png"},
    {name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png"},
    {name: "Palestine", flag: "https://flagcdn.com/w320/ps.png"},
    {name: "Qatar", flag: "https://flagcdn.com/w320/qa.png"},
    {name: "Russian ", flag: "https://flagcdn.com/w320/ru.png"},
    {name: "Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png"},
    {name: "Singapore", flag: "https://flagcdn.com/w320/sg.png"},
    {name: "Syrian Arab Republic", flag: "https://flagcdn.com/w320/sy.png"},
    {name: "Thailand", flag: "https://flagcdn.com/w320/th.png"},
    {name: "Tajikistan", flag: "https://flagcdn.com/w320/tj.png"},
    {name: "Timor-Leste", flag: "https://flagcdn.com/w320/tl.png"},
    {name: "Turkmenistan", flag: "https://flagcdn.com/w320/tm.png"},
    {name: "Turkey", flag: "https://flagcdn.com/w320/tr.png"},
    {name: "Taiwan", flag: "https://flagcdn.com/w320/tw.png"},
    {name: "Uzbekistan", flag: "https://flagcdn.com/w320/uz.png"},
    {name: "Vietnam", flag: "https://flagcdn.com/w320/vn.png"},
    {name: "Yemen", flag: "https://flagcdn.com/w320/ye.png"},
    {name: "Andorra", flag: "https://flagcdn.com/w320/ad.png"},
    {name: "Albania", flag: "https://flagcdn.com/w320/al.png"},
    {name: "Angola", flag: "https://flagcdn.com/w320/ao.png"},
    {name: "Burkina Faso", flag: "https://flagcdn.com/w320/bf.png"},
    {name: "Burundi", flag: "https://flagcdn.com/w320/bi.png"},
    {name: "Benin", flag: "https://flagcdn.com/w320/bj.png"},
    {name: "Botswana", flag: "https://flagcdn.com/w320/bw.png"},
    {name: "Central African Republic", flag: "https://flagcdn.com/w320/cf.png"},
    {name: "Cameroon", flag: "https://flagcdn.com/w320/cm.png"},
    {name: "Djibouti", flag: "https://flagcdn.com/w320/dj.png"},
    {name: "Algeria", flag: "https://flagcdn.com/w320/dz.png"},
    {name: "Egypt", flag: "https://flagcdn.com/w320/eg.png"},
    {name: "Eritrea", flag: "https://flagcdn.com/w320/er.png"},
    {name: "Ethiopia", flag: "https://flagcdn.com/w320/et.png"},
    {name: "Gabon", flag: "https://flagcdn.com/w320/ga.png"},
    {name: "Ghana", flag: "https://flagcdn.com/w320/gh.png"},
    {name: "Gambia", flag: "https://flagcdn.com/w320/gm.png"},
    {name: "Guinea", flag: "https://flagcdn.com/w320/gn.png"},
    {name: "Equatorial Guinea", flag: "https://flagcdn.com/w320/gq.png"},
    {name: "Guinea-Bissau", flag: "https://flagcdn.com/w320/gw.png"},
    {name: "Kenya", flag: "https://flagcdn.com/w320/ke.png"},
    {name: "Comoros", flag: "https://flagcdn.com/w320/km.png"},
    {name: "Liberia", flag: "https://flagcdn.com/w320/lr.png"},
    {name: "Lesotho", flag: "https://flagcdn.com/w320/ls.png"},
    {name: "Libya", flag: "https://flagcdn.com/w320/ly.png"},
    {name: "Morocco", flag: "https://flagcdn.com/w320/ma.png"},
    {name: "Madagascar", flag: "https://flagcdn.com/w320/mg.png"},
    {name: "Mali", flag: "https://flagcdn.com/w320/ml.png"},
    {name: "Mauritania", flag: "https://flagcdn.com/w320/mr.png"},
    {name: "Mauritius", flag: "https://flagcdn.com/w320/mu.png"},
    {name: "Malawi", flag: "https://flagcdn.com/w320/mw.png"},
    {name: "Mozambique", flag: "https://flagcdn.com/w320/mz.png"},
    {name: "Namibia", flag: "https://flagcdn.com/w320/na.png"},
    {name: "Niger", flag: "https://flagcdn.com/w320/ne.png"},
    {name: "Nigeria", flag: "https://flagcdn.com/w320/ng.png"},
    {name: "Rwanda", flag: "https://flagcdn.com/w320/rw.png"},
    {name: "Seychelles", flag: "https://flagcdn.com/w320/sc.png"},
    {name: "Sudan", flag: "https://flagcdn.com/w320/sd.png"},
    {name: "Sierra Leone", flag: "https://flagcdn.com/w320/sl.png"},
    {name: "Senegal", flag: "https://flagcdn.com/w320/sn.png"},
    {name: "Somalia", flag: "https://flagcdn.com/w320/so.png"},
    {name: "South Sudan", flag: "https://flagcdn.com/w320/ss.png"},
    {name: "Chad", flag: "https://flagcdn.com/w320/td.png"},
    {name: "Togo", flag: "https://flagcdn.com/w320/tg.png"},
    {name: "Tunisia", flag: "https://flagcdn.com/w320/tn.png"},
    {name: "Tanzania", flag: "https://flagcdn.com/w320/tz.png"},
    {name: "Uganda", flag: "https://flagcdn.com/w320/ug.png"},
    {name: "South Africa", flag: "https://flagcdn.com/w320/za.png"},
    {name: "Zambia", flag: "https://flagcdn.com/w320/zm.png"},
    {name: "Zimbabwe", flag: "https://flagcdn.com/w320/zw.png"},
    {name: "Antigua and Barbuda", flag: "https://flagcdn.com/w320/ag.png"},
    {name: "Austria", flag: "https://flagcdn.com/w320/at.png"},
    {name: "Bosnia and Herzegovina", flag: "https://flagcdn.com/w320/ba.png"},
    {name: "Belgium", flag: "https://flagcdn.com/w320/be.png"},
    {name: "Bulgaria", flag: "https://flagcdn.com/w320/bg.png"},
    {name: "Bahamas", flag: "https://flagcdn.com/w320/bs.png"},
    {name: "Belarus", flag: "https://flagcdn.com/w320/by.png"},
    {name: "Switzerland", flag: "https://flagcdn.com/w320/ch.png"},
    {name: "Czech Republic", flag: "https://flagcdn.com/w320/cz.png"},
    {name: "Germany", flag: "https://flagcdn.com/w320/de.png"},
    {name: "Denmark", flag: "https://flagcdn.com/w320/dk.png"},
    {name: "Estonia", flag: "https://flagcdn.com/w320/ee.png"},
    {name: "Spain", flag: "https://flagcdn.com/w320/es.png"},
    {name: "Finland", flag: "https://flagcdn.com/w320/fi.png"},
    {name: "France", flag: "https://flagcdn.com/w320/fr.png"},
    {name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png"},
    {name: "Greece", flag: "https://flagcdn.com/w320/gr.png"},
    {name: "Croatia", flag: "https://flagcdn.com/w320/hr.png"},
    {name: "Hungary", flag: "https://flagcdn.com/w320/hu.png"},
    {name: "Ireland", flag: "https://flagcdn.com/w320/ie.png"},
    {name: "Iceland", flag: "https://flagcdn.com/w320/is.png"},
    {name: "Italy", flag: "https://flagcdn.com/w320/it.png"},
    {name: "Liechtenstein", flag: "https://flagcdn.com/w320/li.png"},
    {name: "Lithuania", flag: "https://flagcdn.com/w320/lt.png"},
    {name: "Luxembourg", flag: "https://flagcdn.com/w320/lu.png"},
    {name: "Latvia", flag: "https://flagcdn.com/w320/lv.png"},
    {name: "Monaco", flag: "https://flagcdn.com/w320/mc.png"},
    {name: "Moldova", flag: "https://flagcdn.com/w320/md.png"},
    {name: "Montenegro", flag: "https://flagcdn.com/w320/me.png"},
    {name: "Macedonia", flag: "https://flagcdn.com/w320/mk.png"},
    {name: "Malta", flag: "https://flagcdn.com/w320/mt.png"},
    {name: "Netherlands", flag: "https://flagcdn.com/w320/nl.png"},
    {name: "Norway", flag: "https://flagcdn.com/w320/no.png"},
    {name: "Poland", flag: "https://flagcdn.com/w320/pl.png"},
    {name: "Portugal", flag: "https://flagcdn.com/w320/pt.png"},
    {name: "Romania", flag: "https://flagcdn.com/w320/ro.png"},
    {name: "Serbia", flag: "https://flagcdn.com/w320/rs.png"},
    {name: "Sweden", flag: "https://flagcdn.com/w320/se.png"},
    {name: "Slovenia", flag: "https://flagcdn.com/w320/si.png"},
    {name: "Slovakia", flag: "https://flagcdn.com/w320/sk.png"},
    {name: "San Marino", flag: "https://flagcdn.com/w320/sm.png"},
    {name: "Ukraine", flag: "https://flagcdn.com/w320/ua.png"},
    {name: "Holy See (Vatican City State)", flag: "https://flagcdn.com/w320/va.png"},
    {name: "Kosovo", flag: "https://flagcdn.com/w320/xk.png"},
    {name: "Argentina", flag: "https://flagcdn.com/w320/ar.png"},
    {name: "Barbados", flag: "https://flagcdn.com/w320/bb.png"},
    {name: "Bolivia", flag: "https://flagcdn.com/w320/bo.png"},
    {name: "Belize", flag: "https://flagcdn.com/w320/bz.png"},
    {name: "Canada", flag: "https://flagcdn.com/w320/ca.png"},
    {name: "Costa Rica", flag: "https://flagcdn.com/w320/cr.png"},
    {name: "Cuba", flag: "https://flagcdn.com/w320/cu.png"},
    {name: "Dominica", flag: "https://flagcdn.com/w320/dm.png"},
    {name: "Dominican Republic", flag: "https://flagcdn.com/w320/do.png"},
    {name: "Grenada", flag: "https://flagcdn.com/w320/gd.png"},
    {name: "Guatemala", flag: "https://flagcdn.com/w320/gt.png"},
    {name: "Honduras", flag: "https://flagcdn.com/w320/hn.png"},
    {name: "Haiti", flag: "https://flagcdn.com/w320/ht.png"},
    {name: "Jamaica", flag: "https://flagcdn.com/w320/jm.png"},
    {name: "Saint Kitts And Nevis", flag: "https://flagcdn.com/w320/kn.png"},
    {name: "Saint Lucia", flag: "https://flagcdn.com/w320/lc.png"},
    {name: "Mexico", flag: "https://flagcdn.com/w320/mx.png"},
    {name: "Nicaragua", flag: "https://flagcdn.com/w320/ni.png"},
    {name: "Panama", flag: "https://flagcdn.com/w320/pa.png"},
    {name: "El Salvador", flag: "https://flagcdn.com/w320/sv.png"},
    {name: "Trinidad and Tobago", flag: "https://flagcdn.com/w320/tt.png"},
    {name: "United States", flag: "https://flagcdn.com/w320/us.png"},
    {name: "Saint Vincent And The Grenadines", flag: "https://flagcdn.com/w320/vc.png"},
    {name: "Australia", flag: "https://flagcdn.com/w320/au.png"},
    {name: "Brazil", flag: "https://flagcdn.com/w320/br.png"},
    {name: "Chile", flag: "https://flagcdn.com/w320/cl.png"},
    {name: "Colombia", flag: "https://flagcdn.com/w320/co.png"},
    {name: "Ecuador", flag: "https://flagcdn.com/w320/ec.png"},
    {name: "Fiji", flag: "https://flagcdn.com/w320/fj.png"},
    {name: "Guyana", flag: "https://flagcdn.com/w320/gy.png"},
    {name: "Peru", flag: "https://flagcdn.com/w320/pe.png"},
    {name: "Paraguay", flag: "https://flagcdn.com/w320/py.png"},
    {name: "Suriname", flag: "https://flagcdn.com/w320/sr.png"},
    {name: "Uruguay", flag: "https://flagcdn.com/w320/uy.png"},
    {name: "Venezuela", flag: "https://flagcdn.com/w320/ve.png"},
    {name: "Antarctica", flag: "https://flagcdn.com/w320/aq.png"},
    {name: "American Samoa", flag: "https://flagcdn.com/w320/as.png"},
    {name: "Micronesia", flag: "https://flagcdn.com/w320/fm.png"},
    {name: "Guam", flag: "https://flagcdn.com/w320/gu.png"},
    {name: "Kiribati", flag: "https://flagcdn.com/w320/ki.png"},
    {name: "Marshall Islands", flag: "https://flagcdn.com/w320/mh.png"},
    {name: "Nauru", flag: "https://flagcdn.com/w320/nr.png"},
    {name: "New Zealand", flag: "https://flagcdn.com/w320/nz.png"},
    {name: "Papua New Guinea", flag: "https://flagcdn.com/w320/pg.png"},
    {name: "Palau", flag: "https://flagcdn.com/w320/pw.png"},
    {name: "Solomon Islands", flag: "https://flagcdn.com/w320/sb.png"},
    {name: "Tonga", flag: "https://flagcdn.com/w320/to.png"},
    {name: "Tuvalu", flag: "https://flagcdn.com/w320/tv.png"},
    {name: "Vanuatu", flag: "https://flagcdn.com/w320/vu.png"},
    {name: "Samoa", flag: "https://flagcdn.com/w320/ws.png"},
    {name: "Puerto Rico", flag: "https://flagcdn.com/w320/pr.png"},
    {name: "Anguilla", flag: "https://flagcdn.com/w320/ai.png"},
    {name: "Aruba", flag: "https://flagcdn.com/w320/aw.png"},
    {name: "Åland Islands", flag: "https://flagcdn.com/w320/ax.png"},
    {name: "Saint Barthélemy", flag: "https://flagcdn.com/w320/bl.png"},
    {name: "Bermuda", flag: "https://flagcdn.com/w320/bm.png"},
    {name: "Bonaire, Sint Eustatius and Saba", flag: "https://flagcdn.com/w320/bq.png"},
    {name: "Bouvet Island", flag: "https://flagcdn.com/w320/bv.png"},
    {name: "Cocos (Keeling) Islands", flag: "https://flagcdn.com/w320/cc.png"},
    {name: "The Democratic Republic of The Congo", flag: "https://flagcdn.com/w320/cd.png"},
    {name: "Republic of the Congo", flag: "https://flagcdn.com/w320/cg.png"},
    {name: "Côte D'Ivoire", flag: "https://flagcdn.com/w320/ci.png"},
    {name: "Cook Islands", flag: "https://flagcdn.com/w320/ck.png"},
    {name: "Cape Verde", flag: "https://flagcdn.com/w320/cv.png"},
    {name: "Curaçao", flag: "https://flagcdn.com/w320/cw.png"},
    {name: "Christmas Island", flag: "https://flagcdn.com/w320/cx.png"},
    {name: "Western Sahara", flag: "https://flagcdn.com/w320/eh.png"},
    {name: "European Union", flag: "https://flagcdn.com/w320/eu.png"},
    {name: "Falkland Islands (Malvinas)", flag: "https://flagcdn.com/w320/fk.png"},
    {name: "Faroe Islands", flag: "https://flagcdn.com/w320/fo.png"},
    {name: "French Guiana", flag: "https://flagcdn.com/w320/gf.png"},
    {name: "Guernsey", flag: "https://flagcdn.com/w320/gg.png"},
    {name: "Gibraltar", flag: "https://flagcdn.com/w320/gi.png"},
    {name: "Greenland", flag: "https://flagcdn.com/w320/gl.png"},
    {name: "Guadeloupe", flag: "https://flagcdn.com/w320/gp.png"},
    {name: "Hong Kong", flag: "https://flagcdn.com/w320/hk.png"},
    {name: "Heard and McDonald Islands", flag: "https://flagcdn.com/w320/hm.png"},
    {name: "Isle of Man", flag: "https://flagcdn.com/w320/im.png"},
    {name: "Jersey", flag: "https://flagcdn.com/w320/je.png"},
    {name: "Cayman Islands", flag: "https://flagcdn.com/w320/ky.png"},
    {name: "Lao People's Democratic Republic", flag: "https://flagcdn.com/w320/la.png"},
    {name: "Saint Martin", flag: "https://flagcdn.com/w320/mf.png"},
    {name: "Macao", flag: "https://flagcdn.com/w320/mo.png"},
    {name: "Northern Mariana Islands", flag: "https://flagcdn.com/w320/mp.png"},
    {name: "Martinique", flag: "https://flagcdn.com/w320/mq.png"},
    {name: "Montserrat", flag: "https://flagcdn.com/w320/ms.png"},
    {name: "New Caledonia", flag: "https://flagcdn.com/w320/nc.png"},
    {name: "Norfolk Island", flag: "https://flagcdn.com/w320/nf.png"},
    {name: "Niue", flag: "https://flagcdn.com/w320/nu.png"},
    {name: "French Polynesia", flag: "https://flagcdn.com/w320/pf.png"},
    {name: "Saint Pierre And Miquelon", flag: "https://flagcdn.com/w320/pm.png"},
    {name: "Pitcairn", flag: "https://flagcdn.com/w320/pn.png"},
    {name: "Réunion", flag: "https://flagcdn.com/w320/re.png"},
    {name: "Saint Helena", flag: "https://flagcdn.com/w320/sh.png"},
    {name: "Sao Tome and Principe", flag: "https://flagcdn.com/w320/st.png"},
    {name: "Sint Maarten", flag: "https://flagcdn.com/w320/sx.png"},
    {name: "Swaziland", flag: "https://flagcdn.com/w320/sz.png"},
    {name: "Turks and Caicos Islands", flag: "https://flagcdn.com/w320/tc.png"},
    {name: "French Southern Territories", flag: "https://flagcdn.com/w320/tf.png"},
    {name: "Tokelau", flag: "https://flagcdn.com/w320/tk.png"},
    {name: "Virgin Islands, British", flag: "https://flagcdn.com/w320/vg.png"},
    {name: "Virgin Islands, U.S.", flag: "https://flagcdn.com/w320/vi.png"},
    {name: "Wallis and Futuna", flag: "https://flagcdn.com/w320/wf.png"},
    {name: "Mayotte", flag: "https://flagcdn.com/w320/yt.png"}
];
// Country ranges by continent
const asia_range = range(0, 50);
const africa_range = range(50, 106);
const europe_range = range(106, 150);
const northAmerica_range = range(150, 173);
const southAmerica_range = range(173, 185);
const oceania_range = range(185, 199);

// Continent ranges mapping for easier access
const continentRanges = {
    'Asia': asia_range,
    'Africa': africa_range,
    'Europe': europe_range,
    'North America': northAmerica_range,
    'South America': southAmerica_range,
    'Oceania': oceania_range
};

function range(start, end) {
    return Array.from({ length: end - start }, (_, i) => i + start);
}

// Game state variables
let selectedContinents = [];
let customQuestionCount = 10;
let shuffledCountries = [];
let currentQuestionIndex = 0;
let score = 0;
let correctAnswerCountry = '';
let currentMode = '';
let streak = 0;
let maxStreak = 0;
let correctAnswersCount = 0;
let wrongAnswersCount = 0;
let timerInterval;

// Game constants
const TOTAL_CLASSIC_QUESTIONS = 10;
const TIMED_MODE_DURATION = 60;
const CLASSIC_MODE_NEXT_QUESTION_DELAY = 800; 
const TIMED_MODE_NEXT_QUESTION_DELAY = 100;

// DOM elements - Initialize after DOM is loaded
let themeToggle, body, modeSelectionScreen, classicModeBtn, timedModeBtn, customModeBtn;
let highScoresBtn, gameScreen, questionNumberSpan, totalQuestionsSpan, scoreSpan;
let streakContainer, streakSpan, timerContainer, timerSpan, flagImage, answerButtons;
let resultsScreen, finalScoreSpan, correctAnswersSpan, wrongAnswersSpan, accuracySpan;
let maxStreakSpan, playAgainBtn, highScoresScreen, highScoresList, backToMenuBtn, homeLink;

// Initialize DOM elements
function initializeDOMElements() {
    themeToggle = document.getElementById('theme-toggle');
    body = document.body;
    modeSelectionScreen = document.getElementById('mode-selection');
    classicModeBtn = document.getElementById('classic-mode');
    timedModeBtn = document.getElementById('timed-mode');
    customModeBtn = document.getElementById('custom-mode');
    highScoresBtn = document.getElementById('high-scores');
    gameScreen = document.getElementById('game-screen');
    questionNumberSpan = document.getElementById('question-number');
    totalQuestionsSpan = document.getElementById('total-questions');
    scoreSpan = document.getElementById('score');
    streakContainer = document.getElementById('streak-container');
    streakSpan = document.getElementById('streak');
    timerContainer = document.getElementById('timer-container');
    timerSpan = document.getElementById('timer');
    flagImage = document.getElementById('flag-image');
    answerButtons = document.querySelectorAll('.answer-btn');
    resultsScreen = document.getElementById('results-screen');
    finalScoreSpan = document.getElementById('final-score');
    correctAnswersSpan = document.getElementById('correct-answers');
    wrongAnswersSpan = document.getElementById('wrong-answers');
    accuracySpan = document.getElementById('accuracy');
    maxStreakSpan = document.getElementById('max-streak');
    playAgainBtn = document.getElementById('play-again');
    highScoresScreen = document.getElementById('high-scores-screen');
    highScoresList = document.getElementById('high-scores-list');
    backToMenuBtn = document.getElementById('back-to-menu');
    homeLink = document.getElementById('home-link');
}

// Utility functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomUniqueItems(sourceArray, count, excludeItems = []) {
    const uniqueItems = new Set();
    const availableItems = sourceArray.filter(item => !excludeItems.includes(item));
    
    if (availableItems.length < count) {
        console.error("Not enough unique items available to pick from. Consider adding more countries or reducing quiz options.");
        if (availableItems.length > 0) {
            while (uniqueItems.size < Math.min(count, availableItems.length)) {
                const randomIndex = Math.floor(Math.random() * availableItems.length);
                uniqueItems.add(availableItems[randomIndex]);
            }
        }
        return Array.from(uniqueItems);
    }
    
    while (uniqueItems.size < count) {
        const randomIndex = Math.floor(Math.random() * availableItems.length);
        uniqueItems.add(availableItems[randomIndex]);
    }
    return Array.from(uniqueItems);
}

function getCountriesByContinents(continents) {
    let indices = [];
    if (continents.includes('Asia')) indices = indices.concat(asia_range);
    if (continents.includes('Africa')) indices = indices.concat(africa_range);
    if (continents.includes('Europe')) indices = indices.concat(europe_range);
    if (continents.includes('North America')) indices = indices.concat(northAmerica_range);
    if (continents.includes('South America')) indices = indices.concat(southAmerica_range);
    if (continents.includes('Oceania')) indices = indices.concat(oceania_range);
    
    // Make sure countries array exists before mapping
    if (typeof countries === 'undefined') {
        console.error('Countries array is not defined');
        return [];
    }
    
    return indices.map(index => countries[index]).filter(country => country !== undefined);
}

// Screen management
function showScreen(screenId) {
    const screens = [modeSelectionScreen, gameScreen, resultsScreen, highScoresScreen];
    screens.forEach(screen => {
        if (screen && screen.id === screenId) {
            screen.classList.remove('hidden');
        } else if (screen) {
            screen.classList.add('hidden');
        }
    });
}

// Game initialization and reset
function resetGameAndUI() {
    clearInterval(timerInterval);
    score = 0;
    currentQuestionIndex = 0;
    streak = 0;
    maxStreak = 0;
    correctAnswersCount = 0;
    wrongAnswersCount = 0;
    shuffledCountries = [];
    
    if (scoreSpan) scoreSpan.textContent = 0;
    if (streakSpan) streakSpan.textContent = 0;
    if (questionNumberSpan) questionNumberSpan.textContent = 0;
    if (totalQuestionsSpan) totalQuestionsSpan.textContent = 0;
    if (timerSpan) {
        timerSpan.textContent = TIMED_MODE_DURATION;
        timerSpan.classList.remove('text-red-500', 'pulse');
    }
    if (flagImage) {
        flagImage.src = '';
        flagImage.alt = 'Country Flag';
        flagImage.classList.remove('glowing-border-correct', 'glowing-border-wrong');
    }
    if (answerButtons) {
        answerButtons.forEach(button => {
            button.textContent = '';
            button.classList.remove('correct', 'wrong');
            button.classList.add('from-blue-500', 'to-blue-700', 'hover:from-blue-600', 'hover:to-blue-800');
            button.disabled = false;
        });
    }
    if (streakContainer) streakContainer.classList.add('hidden');
    if (timerContainer) timerContainer.classList.add('hidden');
}

function initializeGame(mode, customContinents = [], customCount = 10) {
    resetGameAndUI();
    currentMode = mode;

    if (mode === 'custom') {
        selectedContinents = customContinents;
        customQuestionCount = customCount;
        const customCountries = getCountriesByContinents(selectedContinents);
        shuffleArray(customCountries);
        shuffledCountries = customCountries.slice(0, customQuestionCount);
        if (totalQuestionsSpan) totalQuestionsSpan.textContent = customQuestionCount;
        if (streakContainer) streakContainer.classList.remove('hidden');
    } else {
        // Make sure countries array exists
        if (typeof countries === 'undefined') {
            console.error('Countries array is not defined');
            return;
        }
        
        shuffledCountries = [...countries];
        shuffleArray(shuffledCountries);
        
        if (mode === 'timed') {
            if (timerContainer) timerContainer.classList.remove('hidden');
            if (totalQuestionsSpan) totalQuestionsSpan.textContent = '∞';
            startTimer();
        } else if (mode === 'classic') {
            if (totalQuestionsSpan) totalQuestionsSpan.textContent = TOTAL_CLASSIC_QUESTIONS;
            if (streakContainer) streakContainer.classList.remove('hidden');
        }
    }

    if (questionNumberSpan) questionNumberSpan.textContent = currentQuestionIndex + 1;
    showScreen('game-screen');
    loadQuestion();
}

function loadQuestion() {
    const totalQuestions = currentMode === 'custom' ? customQuestionCount : TOTAL_CLASSIC_QUESTIONS;

    if ((currentMode === 'classic' || currentMode === 'custom') && currentQuestionIndex >= totalQuestions) {
        endGame();
        return;
    }

    if (currentQuestionIndex >= shuffledCountries.length) {
        if (currentMode === 'timed') {
            if (typeof countries === 'undefined') {
                console.error('Countries array is not defined');
                endGame();
                return;
            }
            shuffledCountries = [...countries];
            shuffleArray(shuffledCountries);
            currentQuestionIndex = 0;
        } else {
            endGame();
            return;
        }
    }

    const currentCountryData = shuffledCountries[currentQuestionIndex];
    if (!currentCountryData) {
        console.error('Current country data is undefined');
        endGame();
        return;
    }
    
    correctAnswerCountry = currentCountryData.name;
    
    if (flagImage) {
        flagImage.src = currentCountryData.flag;
        flagImage.alt = `Flag of ${currentCountryData.name}`;
        flagImage.classList.remove('glowing-border-correct', 'glowing-border-wrong');
    }

    if (typeof countries === 'undefined') {
        console.error('Countries array is not defined');
        return;
    }
    
    const allCountryNames = countries.map(c => c.name);
    const wrongOptions = getRandomUniqueItems(allCountryNames, 3, [correctAnswerCountry]);
    let options = [correctAnswerCountry, ...wrongOptions];
    shuffleArray(options);

    if (answerButtons) {
        answerButtons.forEach((button, index) => {
            button.textContent = options[index] || '';
            button.classList.remove('correct', 'wrong');
            button.classList.add('from-blue-500', 'to-blue-700', 'hover:from-blue-600', 'hover:to-blue-800');
            button.disabled = false;
        });
    }

    if (questionNumberSpan) questionNumberSpan.textContent = currentQuestionIndex + 1;
}

function handleAnswer(selectedButton) {
    if (!answerButtons) return;
    
    answerButtons.forEach(button => {
        button.disabled = true;
        button.classList.remove('hover:from-blue-600', 'hover:to-blue-800');
    });
    
    const selectedAnswer = selectedButton.textContent;
    const delay = currentMode === 'timed' ? TIMED_MODE_NEXT_QUESTION_DELAY : CLASSIC_MODE_NEXT_QUESTION_DELAY;
    
    if (selectedAnswer === correctAnswerCountry) {
        score += 10;
        if (scoreSpan) scoreSpan.textContent = score;
        streak++;
        correctAnswersCount++;
        selectedButton.classList.add('correct');
        if (flagImage) flagImage.classList.add('glowing-border-correct');
    } else {
        streak = 0;
        wrongAnswersCount++;
        selectedButton.classList.add('wrong');
        if (flagImage) flagImage.classList.add('glowing-border-wrong');
        
        // Highlight the correct answer
        answerButtons.forEach(button => {
            if (button.textContent === correctAnswerCountry) {
                button.classList.add('correct');
            }
        });
    }
    
    if (streakSpan) streakSpan.textContent = streak;
    maxStreak = Math.max(maxStreak, streak);
    
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, delay);
}

function startTimer() {
    let timeLeft = TIMED_MODE_DURATION;
    if (timerSpan) timerSpan.textContent = timeLeft;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timerSpan) timerSpan.textContent = timeLeft;
        
        if (timeLeft <= 10) {
            if (timerSpan) timerSpan.classList.add('text-red-500', 'pulse');
        } else {
            if (timerSpan) timerSpan.classList.remove('text-red-500', 'pulse');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    showScreen('results-screen');
    
    if (finalScoreSpan) finalScoreSpan.textContent = score;
    if (correctAnswersSpan) correctAnswersSpan.textContent = correctAnswersCount;
    if (wrongAnswersSpan) wrongAnswersSpan.textContent = wrongAnswersCount;
    if (maxStreakSpan) maxStreakSpan.textContent = maxStreak;
    
    const totalAttempted = correctAnswersCount + wrongAnswersCount;
    const accuracy = totalAttempted > 0 ? ((correctAnswersCount / totalAttempted) * 100).toFixed(1) : 0;
    if (accuracySpan) accuracySpan.textContent = accuracy;
    
    saveHighScore(currentMode, score);
}

function saveHighScore(mode, newScore) {
    try {
        let highScores = JSON.parse(localStorage.getItem('flagQuizHighScores')) || {};
        if (!highScores[mode] || newScore > highScores[mode]) {
            highScores[mode] = newScore;
            localStorage.setItem('flagQuizHighScores', JSON.stringify(highScores));
        }
    } catch (error) {
        console.error('Error saving high score:', error);
    }
}

function displayHighScores() {
    showScreen('high-scores-screen');
    
    if (!highScoresList) return;
    
    try {
        const highScores = JSON.parse(localStorage.getItem('flagQuizHighScores')) || {};
        highScoresList.innerHTML = '';
        
        const modes = {
            'classic': 'Classic Mode',
            'timed': 'Timed Mode',
            'custom': 'Custom Mode'
        };
        
        for (const modeKey in modes) {
            const scoreValue = highScores[modeKey] !== undefined ? highScores[modeKey] : 'N/A';
            let scoreColor = '';
            
            if (modeKey === 'classic') {
                scoreColor = 'text-indigo-600 dark:text-indigo-300';
            } else if (modeKey === 'timed') {
                scoreColor = 'text-amber-600 dark:text-amber-300';
            } else if (modeKey === 'custom') {
                scoreColor = 'text-green-600 dark:text-green-300';
            }
            
            const listItem = `
                <div class="flex justify-between items-center py-2 px-3 rounded-md bg-gray-50 dark:bg-gray-800 shadow-sm">
                    <span>${modes[modeKey]}</span>
                    <span class="font-semibold ${scoreColor}">${scoreValue}</span>
                </div>
            `;
            highScoresList.innerHTML += listItem;
        }
    } catch (error) {
        console.error('Error displaying high scores:', error);
    }
}

function getSelectedContinentsFromUI() {
    const checkboxes = document.querySelectorAll('input[name="continent"]:checked');
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

// Event listeners setup
function setupEventListeners() {
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body) {
                body.classList.toggle('dark');
                try {
                    if (body.classList.contains('dark')) {
                        localStorage.setItem('theme', 'dark');
                    } else {
                        localStorage.setItem('theme', 'light');
                    }
                } catch (error) {
                    console.error('Error saving theme:', error);
                }
            }
        });
    }
    
    if (classicModeBtn) {
        classicModeBtn.addEventListener('click', () => initializeGame('classic'));
    }
    
    if (timedModeBtn) {
        timedModeBtn.addEventListener('click', () => initializeGame('timed'));
    }
    
    if (customModeBtn) {
        customModeBtn.addEventListener('click', () => {
            const continentCheckboxes = document.querySelectorAll('input[name="continent"]:checked');
            const selectedContinents = Array.from(continentCheckboxes).map(cb => cb.value);
            const questionCountInput = document.getElementById('question-count');
            const customCount = parseInt(questionCountInput?.value, 10) || 10;

            if (selectedContinents.length === 0) {
                alert('Please select at least one continent.');
                return;
            }

            initializeGame('custom', selectedContinents, customCount);
        });
    }
    
    if (highScoresBtn) {
        highScoresBtn.addEventListener('click', displayHighScores);
    }
    
    if (playAgainBtn) {
        playAgainBtn.addEventListener('click', () => initializeGame(currentMode));
    }
    
    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', () => {
            resetGameAndUI();
            showScreen('mode-selection');
        });
    }
    
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            resetGameAndUI();
            showScreen('mode-selection');
        });
    }
    
    if (answerButtons) {
        answerButtons.forEach(button => {
            button.addEventListener('click', () => handleAnswer(button));
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeDOMElements();
    setupEventListeners();
    
    // Set theme
    try {
        if (localStorage.getItem('theme') === 'dark') {
            if (body) body.classList.add('dark');
        } else {
            if (body) body.classList.remove('dark');
        }
    } catch (error) {
        console.error('Error loading theme:', error);
    }
    
    showScreen('mode-selection');
});