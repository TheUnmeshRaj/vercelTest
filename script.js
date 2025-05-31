const countries = [
    {name: "Andorra", flag: "https://flagcdn.com/w320/ad.png"},
    {name: "United Arab Emirates", flag: "https://flagcdn.com/w320/ae.png"},
    {name: "Afghanistan", flag: "https://flagcdn.com/w320/af.png"},
    {name: "Antigua and Barbuda", flag: "https://flagcdn.com/w320/ag.png"},
    {name: "Anguilla", flag: "https://flagcdn.com/w320/ai.png"},
    {name: "Albania", flag: "https://flagcdn.com/w320/al.png"},
    {name: "Armenia", flag: "https://flagcdn.com/w320/am.png"},
    {name: "Angola", flag: "https://flagcdn.com/w320/ao.png"},
    {name: "Antarctica", flag: "https://flagcdn.com/w320/aq.png"},
    {name: "Argentina", flag: "https://flagcdn.com/w320/ar.png"},
    {name: "American Samoa", flag: "https://flagcdn.com/w320/as.png"},
    {name: "Austria", flag: "https://flagcdn.com/w320/at.png"},
    {name: "Australia", flag: "https://flagcdn.com/w320/au.png"},
    {name: "Aruba", flag: "https://flagcdn.com/w320/aw.png"},
    {name: "Åland Islands", flag: "https://flagcdn.com/w320/ax.png"},
    {name: "Azerbaijan", flag: "https://flagcdn.com/w320/az.png"},
    {name: "Bosnia and Herzegovina", flag: "https://flagcdn.com/w320/ba.png"},
    {name: "Barbados", flag: "https://flagcdn.com/w320/bb.png"},
    {name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png"},
    {name: "Belgium", flag: "https://flagcdn.com/w320/be.png"},
    {name: "Burkina Faso", flag: "https://flagcdn.com/w320/bf.png"},
    {name: "Bulgaria", flag: "https://flagcdn.com/w320/bg.png"},
    {name: "Bahrain", flag: "https://flagcdn.com/w320/bh.png"},
    {name: "Burundi", flag: "https://flagcdn.com/w320/bi.png"},
    {name: "Benin", flag: "https://flagcdn.com/w320/bj.png"},
    {name: "Saint Barthélemy", flag: "https://flagcdn.com/w320/bl.png"},
    {name: "Bermuda", flag: "https://flagcdn.com/w320/bm.png"},
    {name: "Brunei Darussalam", flag: "https://flagcdn.com/w320/bn.png"},
    {name: "Bolivia", flag: "https://flagcdn.com/w320/bo.png"},
    {name: "Bonaire, Sint Eustatius and Saba", flag: "https://flagcdn.com/w320/bq.png"},
    {name: "Brazil", flag: "https://flagcdn.com/w320/br.png"},
    {name: "Bahamas", flag: "https://flagcdn.com/w320/bs.png"},
    {name: "Bhutan", flag: "https://flagcdn.com/w320/bt.png"},
    {name: "Bouvet Island", flag: "https://flagcdn.com/w320/bv.png"},
    {name: "Botswana", flag: "https://flagcdn.com/w320/bw.png"},
    {name: "Belarus", flag: "https://flagcdn.com/w320/by.png"},
    {name: "Belize", flag: "https://flagcdn.com/w320/bz.png"},
    {name: "Canada", flag: "https://flagcdn.com/w320/ca.png"},
    {name: "Cocos (Keeling) Islands", flag: "https://flagcdn.com/w320/cc.png"},
    {name: "The Democratic Republic of The Congo", flag: "https://flagcdn.com/w320/cd.png"},
    {name: "Central African Republic", flag: "https://flagcdn.com/w320/cf.png"},
    {name: "Republic ofo the Congo", flag: "https://flagcdn.com/w320/cg.png"},
    {name: "Switzerland", flag: "https://flagcdn.com/w320/ch.png"},
    {name: "Côte D'Ivoire", flag: "https://flagcdn.com/w320/ci.png"},
    {name: "Cook Islands", flag: "https://flagcdn.com/w320/ck.png"},
    {name: "Chile", flag: "https://flagcdn.com/w320/cl.png"},
    {name: "Cameroon", flag: "https://flagcdn.com/w320/cm.png"},
    {name: "China", flag: "https://flagcdn.com/w320/cn.png"},
    {name: "Colombia", flag: "https://flagcdn.com/w320/co.png"},
    {name: "Costa Rica", flag: "https://flagcdn.com/w320/cr.png"},
    {name: "Cuba", flag: "https://flagcdn.com/w320/cu.png"},
    {name: "Cape Verde", flag: "https://flagcdn.com/w320/cv.png"},
    {name: "Curaçao", flag: "https://flagcdn.com/w320/cw.png"},
    {name: "Christmas Island", flag: "https://flagcdn.com/w320/cx.png"},
    {name: "Cyprus", flag: "https://flagcdn.com/w320/cy.png"},
    {name: "Czech Republic", flag: "https://flagcdn.com/w320/cz.png"},
    {name: "Germany", flag: "https://flagcdn.com/w320/de.png"},
    {name: "Djibouti", flag: "https://flagcdn.com/w320/dj.png"},
    {name: "Denmark", flag: "https://flagcdn.com/w320/dk.png"},
    {name: "Dominica", flag: "https://flagcdn.com/w320/dm.png"},
    {name: "Dominican Republic", flag: "https://flagcdn.com/w320/do.png"},
    {name: "Algeria", flag: "https://flagcdn.com/w320/dz.png"},
    {name: "Ecuador", flag: "https://flagcdn.com/w320/ec.png"},
    {name: "Estonia", flag: "https://flagcdn.com/w320/ee.png"},
    {name: "Egypt", flag: "https://flagcdn.com/w320/eg.png"},
    {name: "Western Sahara", flag: "https://flagcdn.com/w320/eh.png"},
    {name: "Eritrea", flag: "https://flagcdn.com/w320/er.png"},
    {name: "Spain", flag: "https://flagcdn.com/w320/es.png"},
    {name: "Ethiopia", flag: "https://flagcdn.com/w320/et.png"},
    {name: "European Union", flag: "https://flagcdn.com/w320/eu.png"},
    {name: "Finland", flag: "https://flagcdn.com/w320/fi.png"},
    {name: "Fiji", flag: "https://flagcdn.com/w320/fj.png"},
    {name: "Falkland Islands (Malvinas)", flag: "https://flagcdn.com/w320/fk.png"},
    {name: "Micronesia", flag: "https://flagcdn.com/w320/fm.png"},
    {name: "Faroe Islands", flag: "https://flagcdn.com/w320/fo.png"},
    {name: "France", flag: "https://flagcdn.com/w320/fr.png"},
    {name: "Gabon", flag: "https://flagcdn.com/w320/ga.png"},
    {name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png"},
    {name: "Grenada", flag: "https://flagcdn.com/w320/gd.png"},
    {name: "Georgia", flag: "https://flagcdn.com/w320/ge.png"},
    {name: "French Guiana", flag: "https://flagcdn.com/w320/gf.png"},
    {name: "Guernsey", flag: "https://flagcdn.com/w320/gg.png"},
    {name: "Ghana", flag: "https://flagcdn.com/w320/gh.png"},
    {name: "Gibraltar", flag: "https://flagcdn.com/w320/gi.png"},
    {name: "Greenland", flag: "https://flagcdn.com/w320/gl.png"},
    {name: "Gambia", flag: "https://flagcdn.com/w320/gm.png"},
    {name: "Guinea", flag: "https://flagcdn.com/w320/gn.png"},
    {name: "Guadeloupe", flag: "https://flagcdn.com/w320/gp.png"},
    {name: "Equatorial Guinea", flag: "https://flagcdn.com/w320/gq.png"},
    {name: "Greece", flag: "https://flagcdn.com/w320/gr.png"},
    {name: "South Georgia and the South Sandwich Islands", flag: "https://flagcdn.com/w320/gs.png"},
    {name: "Guatemala", flag: "https://flagcdn.com/w320/gt.png"},
    {name: "Guam", flag: "https://flagcdn.com/w320/gu.png"},
    {name: "Guinea-Bissau", flag: "https://flagcdn.com/w320/gw.png"},
    {name: "Guyana", flag: "https://flagcdn.com/w320/gy.png"},
    {name: "Hong Kong", flag: "https://flagcdn.com/w320/hk.png"},
    {name: "Heard and McDonald Islands", flag: "https://flagcdn.com/w320/hm.png"},
    {name: "Honduras", flag: "https://flagcdn.com/w320/hn.png"},
    {name: "Croatia", flag: "https://flagcdn.com/w320/hr.png"},
    {name: "Haiti", flag: "https://flagcdn.com/w320/ht.png"},
    {name: "Hungary", flag: "https://flagcdn.com/w320/hu.png"},
    {name: "Indonesia", flag: "https://flagcdn.com/w320/id.png"},
    {name: "Ireland", flag: "https://flagcdn.com/w320/ie.png"},
    {name: "Israel", flag: "https://flagcdn.com/w320/il.png"},
    {name: "Isle of Man", flag: "https://flagcdn.com/w320/im.png"},
    {name: "India", flag: "https://flagcdn.com/w320/in.png"},
    {name: "British Indian Ocean Territory", flag: "https://flagcdn.com/w320/io.png"},
    {name: "Iraq", flag: "https://flagcdn.com/w320/iq.png"},
    {name: "Iran", flag: "https://flagcdn.com/w320/ir.png"},
    {name: "Iceland", flag: "https://flagcdn.com/w320/is.png"},
    {name: "Italy", flag: "https://flagcdn.com/w320/it.png"},
    {name: "Jersey", flag: "https://flagcdn.com/w320/je.png"},
    {name: "Jamaica", flag: "https://flagcdn.com/w320/jm.png"},
    {name: "Jordan", flag: "https://flagcdn.com/w320/jo.png"},
    {name: "Japan", flag: "https://flagcdn.com/w320/jp.png"},
    {name: "Kenya", flag: "https://flagcdn.com/w320/ke.png"},
    {name: "Kyrgyzstan", flag: "https://flagcdn.com/w320/kg.png"},
    {name: "Cambodia", flag: "https://flagcdn.com/w320/kh.png"},
    {name: "Kiribati", flag: "https://flagcdn.com/w320/ki.png"},
    {name: "Comoros", flag: "https://flagcdn.com/w320/km.png"},
    {name: "Saint Kitts And Nevis", flag: "https://flagcdn.com/w320/kn.png"},
    {name: "North Korea", flag: "https://flagcdn.com/w320/kp.png"},
    {name: "South Korea", flag: "https://flagcdn.com/w320/kr.png"},
    {name: "Kuwait", flag: "https://flagcdn.com/w320/kw.png"},
    {name: "Cayman Islands", flag: "https://flagcdn.com/w320/ky.png"},
    {name: "Kazakhstan", flag: "https://flagcdn.com/w320/kz.png"},
    {name: "Lao People's Democratic Republic", flag: "https://flagcdn.com/w320/la.png"},
    {name: "Lebanon", flag: "https://flagcdn.com/w320/lb.png"},
    {name: "Saint Lucia", flag: "https://flagcdn.com/w320/lc.png"},
    {name: "Liechtenstein", flag: "https://flagcdn.com/w320/li.png"},
    {name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png"},
    {name: "Liberia", flag: "https://flagcdn.com/w320/lr.png"},
    {name: "Lesotho", flag: "https://flagcdn.com/w320/ls.png"},
    {name: "Lithuania", flag: "https://flagcdn.com/w320/lt.png"},
    {name: "Luxembourg", flag: "https://flagcdn.com/w320/lu.png"},
    {name: "Latvia", flag: "https://flagcdn.com/w320/lv.png"},
    {name: "Libya", flag: "https://flagcdn.com/w320/ly.png"},
    {name: "Morocco", flag: "https://flagcdn.com/w320/ma.png"},
    {name: "Monaco", flag: "https://flagcdn.com/w320/mc.png"},
    {name: "Moldova", flag: "https://flagcdn.com/w320/md.png"},
    {name: "Montenegro", flag: "https://flagcdn.com/w320/me.png"},
    {name: "Saint Martin", flag: "https://flagcdn.com/w320/mf.png"},
    {name: "Madagascar", flag: "https://flagcdn.com/w320/mg.png"},
    {name: "Marshall Islands", flag: "https://flagcdn.com/w320/mh.png"},
    {name: "Macedonia", flag: "https://flagcdn.com/w320/mk.png"},
    {name: "Mali", flag: "https://flagcdn.com/w320/ml.png"},
    {name: "Myanmar", flag: "https://flagcdn.com/w320/mm.png"},
    {name: "Mongolia", flag: "https://flagcdn.com/w320/mn.png"},
    {name: "Macao", flag: "https://flagcdn.com/w320/mo.png"},
    {name: "Northern Mariana Islands", flag: "https://flagcdn.com/w320/mp.png"},
    {name: "Martinique", flag: "https://flagcdn.com/w320/mq.png"},
    {name: "Mauritania", flag: "https://flagcdn.com/w320/mr.png"},
    {name: "Montserrat", flag: "https://flagcdn.com/w320/ms.png"},
    {name: "Malta", flag: "https://flagcdn.com/w320/mt.png"},
    {name: "Mauritius", flag: "https://flagcdn.com/w320/mu.png"},
    {name: "Maldives", flag: "https://flagcdn.com/w320/mv.png"},
    {name: "Malawi", flag: "https://flagcdn.com/w320/mw.png"},
    {name: "Mexico", flag: "https://flagcdn.com/w320/mx.png"},
    {name: "Malaysia", flag: "https://flagcdn.com/w320/my.png"},
    {name: "Mozambique", flag: "https://flagcdn.com/w320/mz.png"},
    {name: "Namibia", flag: "https://flagcdn.com/w320/na.png"},
    {name: "New Caledonia", flag: "https://flagcdn.com/w320/nc.png"},
    {name: "Niger", flag: "https://flagcdn.com/w320/ne.png"},
    {name: "Norfolk Island", flag: "https://flagcdn.com/w320/nf.png"},
    {name: "Nigeria", flag: "https://flagcdn.com/w320/ng.png"},
    {name: "Nicaragua", flag: "https://flagcdn.com/w320/ni.png"},
    {name: "Netherlands", flag: "https://flagcdn.com/w320/nl.png"},
    {name: "Norway", flag: "https://flagcdn.com/w320/no.png"},
    {name: "Nepal", flag: "https://flagcdn.com/w320/np.png"},
    {name: "Nauru", flag: "https://flagcdn.com/w320/nr.png"},
    {name: "Niue", flag: "https://flagcdn.com/w320/nu.png"},
    {name: "New Zealand", flag: "https://flagcdn.com/w320/nz.png"},
    {name: "Oman", flag: "https://flagcdn.com/w320/om.png"},
    {name: "Panama", flag: "https://flagcdn.com/w320/pa.png"},
    {name: "Peru", flag: "https://flagcdn.com/w320/pe.png"},
    {name: "French Polynesia", flag: "https://flagcdn.com/w320/pf.png"},
    {name: "Papua New Guinea", flag: "https://flagcdn.com/w320/pg.png"},
    {name: "Philippines", flag: "https://flagcdn.com/w320/ph.png"},
    {name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png"},
    {name: "Poland", flag: "https://flagcdn.com/w320/pl.png"},
    {name: "Saint Pierre And Miquelon", flag: "https://flagcdn.com/w320/pm.png"},
    {name: "Pitcairn", flag: "https://flagcdn.com/w320/pn.png"},
    {name: "Puerto Rico", flag: "https://flagcdn.com/w320/pr.png"},
    {name: "Palestine", flag: "https://flagcdn.com/w320/ps.png"},
    {name: "Portugal", flag: "https://flagcdn.com/w320/pt.png"},
    {name: "Palau", flag: "https://flagcdn.com/w320/pw.png"},
    {name: "Paraguay", flag: "https://flagcdn.com/w320/py.png"},
    {name: "Qatar", flag: "https://flagcdn.com/w320/qa.png"},
    {name: "Réunion", flag: "https://flagcdn.com/w320/re.png"},
    {name: "Romania", flag: "https://flagcdn.com/w320/ro.png"},
    {name: "Serbia", flag: "https://flagcdn.com/w320/rs.png"},
    {name: "Russian Federation", flag: "https://flagcdn.com/w320/ru.png"},
    {name: "Rwanda", flag: "https://flagcdn.com/w320/rw.png"},
    {name: "Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png"},
    {name: "Solomon Islands", flag: "https://flagcdn.com/w320/sb.png"},
    {name: "Seychelles", flag: "https://flagcdn.com/w320/sc.png"},
    {name: "Sudan", flag: "https://flagcdn.com/w320/sd.png"},
    {name: "Sweden", flag: "https://flagcdn.com/w320/se.png"},
    {name: "Singapore", flag: "https://flagcdn.com/w320/sg.png"},
    {name: "Saint Helena", flag: "https://flagcdn.com/w320/sh.png"},
    {name: "Slovenia", flag: "https://flagcdn.com/w320/si.png"},
    {name: "Svalbard And Jan Mayen", flag: "https://flagcdn.com/w320/sj.png"},
    {name: "Slovakia", flag: "https://flagcdn.com/w320/sk.png"},
    {name: "Sierra Leone", flag: "https://flagcdn.com/w320/sl.png"},
    {name: "San Marino", flag: "https://flagcdn.com/w320/sm.png"},
    {name: "Senegal", flag: "https://flagcdn.com/w320/sn.png"},
    {name: "Somalia", flag: "https://flagcdn.com/w320/so.png"},
    {name: "Suriname", flag: "https://flagcdn.com/w320/sr.png"},
    {name: "South Sudan", flag: "https://flagcdn.com/w320/ss.png"},
    {name: "Sao Tome and Principe", flag: "https://flagcdn.com/w320/st.png"},
    {name: "El Salvador", flag: "https://flagcdn.com/w320/sv.png"},
    {name: "Sint Maarten", flag: "https://flagcdn.com/w320/sx.png"},
    {name: "Syrian Arab Republic", flag: "https://flagcdn.com/w320/sy.png"},
    {name: "Swaziland", flag: "https://flagcdn.com/w320/sz.png"},
    {name: "Turks and Caicos Islands", flag: "https://flagcdn.com/w320/tc.png"},
    {name: "Chad", flag: "https://flagcdn.com/w320/td.png"},
    {name: "French Southern Territories", flag: "https://flagcdn.com/w320/tf.png"},
    {name: "Togo", flag: "https://flagcdn.com/w320/tg.png"},
    {name: "Thailand", flag: "https://flagcdn.com/w320/th.png"},
    {name: "Tajikistan", flag: "https://flagcdn.com/w320/tj.png"},
    {name: "Tokelau", flag: "https://flagcdn.com/w320/tk.png"},
    {name: "Timor-Leste", flag: "https://flagcdn.com/w320/tl.png"},
    {name: "Turkmenistan", flag: "https://flagcdn.com/w320/tm.png"},
    {name: "Tunisia", flag: "https://flagcdn.com/w320/tn.png"},
    {name: "Tonga", flag: "https://flagcdn.com/w320/to.png"},
    {name: "Turkey", flag: "https://flagcdn.com/w320/tr.png"},
    {name: "Trinidad and Tobago", flag: "https://flagcdn.com/w320/tt.png"},
    {name: "Tuvalu", flag: "https://flagcdn.com/w320/tv.png"},
    {name: "Taiwan", flag: "https://flagcdn.com/w320/tw.png"},
    {name: "Tanzania", flag: "https://flagcdn.com/w320/tz.png"},
    {name: "Ukraine", flag: "https://flagcdn.com/w320/ua.png"},
    {name: "Uganda", flag: "https://flagcdn.com/w320/ug.png"},
    {name: "United States Minor Outlying Islands", flag: "https://flagcdn.com/w320/um.png"},
    {name: "United States", flag: "https://flagcdn.com/w320/us.png"},
    {name: "Uruguay", flag: "https://flagcdn.com/w320/uy.png"},
    {name: "Uzbekistan", flag: "https://flagcdn.com/w320/uz.png"},
    {name: "Holy See (Vatican City State)", flag: "https://flagcdn.com/w320/va.png"},
    {name: "Saint Vincent And The Grenadines", flag: "https://flagcdn.com/w320/vc.png"},
    {name: "Venezuela", flag: "https://flagcdn.com/w320/ve.png"},
    {name: "Virgin Islands, British", flag: "https://flagcdn.com/w320/vg.png"},
    {name: "Virgin Islands, U.S.", flag: "https://flagcdn.com/w320/vi.png"},
    {name: "Vietnam", flag: "https://flagcdn.com/w320/vn.png"},
    {name: "Vanuatu", flag: "https://flagcdn.com/w320/vu.png"},
    {name: "Wallis and Futuna", flag: "https://flagcdn.com/w320/wf.png"},
    {name: "Samoa", flag: "https://flagcdn.com/w320/ws.png"},
    {name: "Kosovo", flag: "https://flagcdn.com/w320/xk.png"},
    {name: "Yemen", flag: "https://flagcdn.com/w320/ye.png"},
    {name: "Mayotte", flag: "https://flagcdn.com/w320/yt.png"},
    {name: "South Africa", flag: "https://flagcdn.com/w320/za.png"},
    {name: "Zambia", flag: "https://flagcdn.com/w320/zm.png"},
    {name: "Zimbabwe", flag: "https://flagcdn.com/w320/zw.png"}
];

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
    const TOTAL_CLASSIC_QUESTIONS = 10;
    const TIMED_MODE_DURATION = 60;
    const CLASSIC_MODE_NEXT_QUESTION_DELAY = 800; 
    const TIMED_MODE_NEXT_QUESTION_DELAY = 100; 
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const modeSelectionScreen = document.getElementById('mode-selection');
    const classicModeBtn = document.getElementById('classic-mode');
    const timedModeBtn = document.getElementById('timed-mode');
    const highScoresBtn = document.getElementById('high-scores');
    const gameScreen = document.getElementById('game-screen');
    const questionNumberSpan = document.getElementById('question-number');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const scoreSpan = document.getElementById('score');
    const streakContainer = document.getElementById('streak-container');
    const streakSpan = document.getElementById('streak');
    const timerContainer = document.getElementById('timer-container');
    const timerSpan = document.getElementById('timer');
    const flagImage = document.getElementById('flag-image');
    const answerButtons = document.querySelectorAll('.answer-btn');
    const resultsScreen = document.getElementById('results-screen');
    const finalScoreSpan = document.getElementById('final-score');
    const correctAnswersSpan = document.getElementById('correct-answers');
    const wrongAnswersSpan = document.getElementById('wrong-answers');
    const accuracySpan = document.getElementById('accuracy');
    const maxStreakSpan = document.getElementById('max-streak');
    const playAgainBtn = document.getElementById('play-again');
    const highScoresScreen = document.getElementById('high-scores-screen');
    const highScoresList = document.getElementById('high-scores-list');
    const backToMenuBtn = document.getElementById('back-to-menu');
    const homeLink = document.getElementById('home-link');
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
                 while (uniqueItems.size < count) {
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
    function showScreen(screenId) {
        const screens = [modeSelectionScreen, gameScreen, resultsScreen, highScoresScreen];
        screens.forEach(screen => {
            if (screen.id === screenId) {
                screen.classList.remove('hidden');
            } else {
                screen.classList.add('hidden');
            }
        });
    }
    function resetGameAndUI() {
        clearInterval(timerInterval);
        score = 0;
        currentQuestionIndex = 0;
        streak = 0;
        maxStreak = 0;
        correctAnswersCount = 0;
        wrongAnswersCount = 0;
        shuffledCountries = [];
        scoreSpan.textContent = 0;
        streakSpan.textContent = 0;
        questionNumberSpan.textContent = 0;
        totalQuestionsSpan.textContent = 0;
        timerSpan.textContent = TIMED_MODE_DURATION;
        timerSpan.classList.remove('text-red-500', 'pulse');
        flagImage.src = '';
        flagImage.alt = 'Country Flag';
        flagImage.classList.remove('glowing-border-correct', 'glowing-border-wrong');
        answerButtons.forEach(button => {
            button.textContent = '';
            button.classList.remove('correct', 'wrong');
            button.classList.add('from-blue-500', 'to-blue-700', 'hover:from-blue-600', 'hover:to-blue-800');
            button.disabled = false;
        });
        streakContainer.classList.add('hidden');
        timerContainer.classList.add('hidden');
    }
    function initializeGame(mode) {
        resetGameAndUI();
        currentMode = mode;
        shuffledCountries = [...countries];
        shuffleArray(shuffledCountries);
        questionNumberSpan.textContent = currentQuestionIndex + 1;
        if (currentMode === 'timed') {
            timerContainer.classList.remove('hidden');
            totalQuestionsSpan.textContent = '∞'; 
            startTimer();
        } else if (currentMode === 'classic') {
            totalQuestionsSpan.textContent = TOTAL_CLASSIC_QUESTIONS;
            streakContainer.classList.remove('hidden');
        }
        showScreen('game-screen');
        loadQuestion();
    }
    function loadQuestion() {
        if ((currentMode === 'classic') && currentQuestionIndex >= TOTAL_CLASSIC_QUESTIONS) {
            endGame();
            return;
        }
        if (currentQuestionIndex >= shuffledCountries.length) {
            if (currentMode === 'timed') {
                shuffledCountries = [...countries];
                shuffleArray(shuffledCountries);
                currentQuestionIndex = 0; // Reset index to start from the beginning of the reshuffled list
            } else {
                // For classic mode, if somehow we run out of flags before TOTAL_CLASSIC_QUESTIONS, end the game.
                endGame();
                return;
            }
        }
        const currentCountryData = shuffledCountries[currentQuestionIndex];
        correctAnswerCountry = currentCountryData.name;
        flagImage.src = currentCountryData.flag;
        flagImage.alt = `Flag of ${currentCountryData.name}`;
        flagImage.classList.remove('glowing-border-correct', 'glowing-border-wrong');
        const allCountryNames = countries.map(c => c.name);
        const wrongOptions = getRandomUniqueItems(allCountryNames, 3, [correctAnswerCountry]);
        let options = [correctAnswerCountry, ...wrongOptions];
        shuffleArray(options);
        answerButtons.forEach((button, index) => {
            button.textContent = options[index];
            button.classList.remove('correct', 'wrong');
            button.classList.add('from-blue-500', 'to-blue-700', 'hover:from-blue-600', 'hover:to-blue-800');
            button.disabled = false;
        });
        questionNumberSpan.textContent = currentQuestionIndex + 1;
    }
    function handleAnswer(selectedButton) {
        answerButtons.forEach(button => {
            button.disabled = true; // Disable all buttons after an answer is chosen
            button.classList.remove('hover:from-blue-600', 'hover:to-blue-800');
        });
        const selectedAnswer = selectedButton.textContent;
        const delay = currentMode === 'timed' ? TIMED_MODE_NEXT_QUESTION_DELAY : CLASSIC_MODE_NEXT_QUESTION_DELAY;
        if (selectedAnswer === correctAnswerCountry) {
            score += 10;
            scoreSpan.textContent = score;
            streak++;
            correctAnswersCount++;
            selectedButton.classList.add('correct');
            flagImage.classList.add('glowing-border-correct');
           
        } else {
            streak = 0; // Reset streak on wrong answer
            wrongAnswersCount++;
            selectedButton.classList.add('wrong');
            flagImage.classList.add('glowing-border-wrong');
            // Highlight the correct answer even if the user chose wrong
            answerButtons.forEach(button => {
                if (button.textContent === correctAnswerCountry) {
                    button.classList.add('correct');
                }
            });
        }
        streakSpan.textContent = streak;
        maxStreak = Math.max(maxStreak, streak); // Update max streak
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, delay); // Use dynamic delay based on mode
    }
    // Removed explainFlagSymbolism function as the feature is removed
    function startTimer() {
        let timeLeft = TIMED_MODE_DURATION;
        timerSpan.textContent = timeLeft;
        timerInterval = setInterval(() => {
            timeLeft--;
            timerSpan.textContent = timeLeft;
            if (timeLeft <= 10) {
                timerSpan.classList.add('text-red-500', 'pulse');
            } else {
                timerSpan.classList.remove('text-red-500', 'pulse');
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
        finalScoreSpan.textContent = score;
        correctAnswersSpan.textContent = correctAnswersCount;
        wrongAnswersSpan.textContent = wrongAnswersCount;
        maxStreakSpan.textContent = maxStreak;
        const totalAttempted = correctAnswersCount + wrongAnswersCount;
        const accuracy = totalAttempted > 0 ? ((correctAnswersCount / totalAttempted) * 100).toFixed(1) : 0;
        accuracySpan.textContent = accuracy;
        saveHighScore(currentMode, score);
    }
    function saveHighScore(mode, newScore) {
        let highScores = JSON.parse(localStorage.getItem('flagQuizHighScores')) || {};
        if (!highScores[mode] || newScore > highScores[mode]) {
            highScores[mode] = newScore;
            localStorage.setItem('flagQuizHighScores', JSON.stringify(highScores));
        }
    }
    function displayHighScores() {
        showScreen('high-scores-screen');
        const highScores = JSON.parse(localStorage.getItem('flagQuizHighScores')) || {};
        highScoresList.innerHTML = '';
        const modes = {
            'classic': 'Classic Mode',
            'timed': 'Timed Mode',
        };
        for (const modeKey in modes) {
            const scoreValue = highScores[modeKey] !== undefined ? highScores[modeKey] : 'N/A';
            const scoreColor = modeKey === 'classic' ? 'text-indigo-600 dark:text-indigo-300' :
                               modeKey === 'timed' ? 'text-amber-600 dark:text-amber-300' : '';
            const listItem = `
                <div class="flex justify-between items-center py-2 px-3 rounded-md bg-gray-50 dark:bg-gray-800 shadow-sm">
                    <span>${modes[modeKey]}</span>
                    <span class="font-semibold ${scoreColor}">${scoreValue}</span>
                </div>
            `;
            highScoresList.innerHTML += listItem;
        }
    }
    // Event Listeners
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    classicModeBtn.addEventListener('click', () => initializeGame('classic'));
    timedModeBtn.addEventListener('click', () => initializeGame('timed'));
    highScoresBtn.addEventListener('click', displayHighScores);
    playAgainBtn.addEventListener('click', () => initializeGame(currentMode)); // Re-initialize with current mode
    backToMenuBtn.addEventListener('click', () => {
        resetGameAndUI(); // Ensure game state is clean before going to menu
        showScreen('mode-selection');
    });
    homeLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        resetGameAndUI();
        showScreen('mode-selection');
    });
    answerButtons.forEach(button => {
        button.addEventListener('click', () => handleAnswer(button));
    });
    // Removed explainFlagBtn listener
    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark'); // Ensure 'dark' class is removed if theme is light
        }
        showScreen('mode-selection'); // Start on the mode selection screen
    });