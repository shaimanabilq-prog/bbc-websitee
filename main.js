"use strict";
/* ============ EDITABLE DATA ============ */
const CAMPAIGNS = { camp1: true, camp2: true };            // set false to hide a campaign

// Level groups: edit sizes to match BBC's real structure (must total 12). No CEFR codes are shown.
const LEVEL_GROUPS = [
  { key: "Beginner", ar: "مبتدئ", count: 2 },
  { key: "Elementary", ar: "أساسي", count: 2 },
  { key: "Intermediate", ar: "متوسط", count: 3 },
  { key: "Upper Intermediate", ar: "فوق المتوسط", count: 3 },
  { key: "Advanced", ar: "متقدم", count: 2 }
];


// Journey statistics: only items with a confirmed value are shown. Fill in 'value' once BBC confirms real figures.
const STATS = [
  { value: 12, en: "English levels", ar: "مستوى دراسي" },
  { value: null, en: "", ar: "" },
  { value: null, en: "", ar: "" }
];
// Add real content to show these sections (they stay hidden while empty).
const ACTIVITIES = [];     // { src:"assets/images/activities/x.jpg", alt:"", en:"caption", ar:"تعليق" }
const TEACHERS = [];       // { photo:"assets/images/teachers/x.jpg", name:"", role_en:"", role_ar:"" }
const TESTIMONIALS = [];   // { name:"", level:"", photo:"", en:"approved quote", ar:"" }

const FAQ = [
  { q: ["How many English levels does BBC offer?", "كم مستوى إنجليزي يقدّم BBC؟"], a: ["BBC offers a learning journey of 12 English levels, grouped from Beginner to Advanced.", "يقدّم BBC رحلة تعليمية تتكوّن من 12 مستوى في اللغة الإنجليزية، ضمن مجموعات تبدأ من المبتدئ وصولاً إلى المتقدم."] },
  { q: ["How do I find my level?", "كيف أعرف مستواي؟"], a: ["Start with a placement test to find the level that suits you before you begin studying.", "يمكنك البدء باختبار تحديد المستوى للتعرّف على مستواك المناسب قبل بدء الدراسة."] },
  { q: ["Can I get in touch before registering?", "هل أستطيع التواصل قبل التسجيل؟"], a: ["Of course! Message the BBC team directly on WhatsApp to ask about programs, levels and offers: <a href='https://wa.me/970566130150' target='_blank' rel='noopener'>wa.me/970566130150</a>", "بالتأكيد! يمكنك التواصل مع فريق BBC مباشرة عبر WhatsApp للاستفسار عن البرامج والمستويات والعروض: <a href='https://wa.me/970566130150' target='_blank' rel='noopener'>wa.me/970566130150</a>"] },
  { q: ["What offers are available?", "ما العروض المتاحة؟"], a: ["Discover our offers, including Speak & Connect and 12 Levels. 12 Months. Contact the institute to confirm current availability and terms.", "تعرّف على العروض التعليمية المتاحة، ومنها Speak & Connect وعرض 12 Levels. 12 Months. تواصل مع المعهد للتأكد من توفر العروض الحالية وشروطها."] },
  { q: ["How much is the book fee?", "كم رسوم الكتب؟"], a: ["According to the full-year offer, the book fee is 50 NIS per level. Please contact the institute to confirm the current fee.", "وفق تفاصيل عرض العام الكامل، تبلغ رسوم الكتاب 50 شيكلاً لكل مستوى. يرجى التواصل مع المعهد لتأكيد الرسوم الحالية."] },
  { q: ["Where is BBC located?", "أين يقع BBC؟"], a: ["غزة – الرمال – السرايا – شارع الشهداء – عمارة ساق الله – الطابق الأول.", "غزة – الرمال – السرايا – شارع الشهداء – عمارة ساق الله – الطابق الأول."] },
  { q: ["How can I follow BBC activities?", "كيف أتابع أنشطة BBC؟"], a: ["Follow the institute's activities, offers and student experiences on our official Instagram: <a href='https://www.instagram.com/bbc.institute/' target='_blank' rel='noopener'>@bbc.institute</a>", "يمكنك متابعة أنشطة المعهد وعروضه وتجارب طلابه عبر حسابنا الرسمي على إنستغرام: <a href='https://www.instagram.com/bbc.institute/' target='_blank' rel='noopener'>@bbc.institute</a>"] }
];

const REELS = [
  { name: "Mousa", level: "B2.2 — Upper Intermediate", camp: "Grow & Lead", id: "Dfy2kElIJYR" },
  { name: "حنان", level: "", camp: "", id: "Ddn4Ayeomb1" },
  { name: "Motaz Sh. Skaik", level: "A2.1 — Elementary", camp: "Grow & Lead", id: "DffHAFUoLaS" },
  { name: "Mona M. Al Habil", level: "B1.2", camp: "Grow & Lead", id: "DeGyfh3omcK" },
  { name: "Taghreed R. Ahmed", level: "C1.1 — Advanced", camp: "Grow & Lead", id: "DfSNo6iIqB0" }
];

const I18N = {
  en: { "nav.activities":"Activities","jp.h":"YOUR JOURNEY. YOUR POTENTIAL.","jp.p":"BBC is more than a place to learn English. It is a community where students grow their skills, discover their potential and build confidence for the future.",
    "gal.h":"LEARNING BEYOND THE CLASSROOM.","gal.1":"Group learning","gal.2":"Workshops","gal.3":"Student presentations","gal.4":"Conversation activities",
    "act.h":"A COMMUNITY THAT INSPIRES.","tch.h":"LEARN WITH PEOPLE WHO INSPIRE.","tst.h":"EVERY JOURNEY HAS A STORY.","faq.h":"QUESTIONS? WE’RE HERE TO HELP.","ct.reg":"REGISTER NOW",
    "ft.tag":"MORE THAN ENGLISH. MORE CONFIDENCE. MORE YOU.","ft.about":"About BBC","ft.faq":"FAQ","ft.copy":"© 2026 BBC — British Book Center. All rights reserved.",
    "nav.home":"Home","nav.about":"About","nav.programs":"Programs","nav.offers":"Offers","nav.stories":"Student Stories","nav.contact":"Contact","nav.join":"Join BBC",
    "hero.l1":"MORE THAN ENGLISH.","hero.l2":"MORE THAN WORDS.","hero.l3":"MORE OPPORTUNITIES.","hero.sub":"Learn English. Build Confidence. Discover Your Potential.",
    "hero.desc":"At BBC, English is more than a language. It is a gateway to confidence, communication, personal growth, and new opportunities.","hero.cta1":"START YOUR JOURNEY","hero.cta2":"EXPLORE BBC","hero.badge":"levels, one journey",
    "about.h":"MORE THAN A PLACE TO LEARN.","about.p":"BBC is a place where students develop their English language skills, build confidence, strengthen communication, and discover their potential.",
    "why.h":"WHY BBC?","why.1t":"INTERACTIVE LEARNING","why.1p":"Learn through practical and engaging experiences.","why.2t":"PERSONAL GROWTH","why.2p":"Build confidence and improve communication.","why.3t":"SUPPORTIVE COMMUNITY","why.3p":"Grow in a welcoming learning environment.","why.4t":"REAL OPPORTUNITIES","why.4p":"Discover activities, workshops, and new experiences.",
    "lv.h":"YOUR NEXT LEVEL STARTS HERE.","lv.p":"Twelve levels. Five stages. One clear path from your first words to confident, fluent English.","lv.level":"Level",
    "of.h":"EXCLUSIVE OPPORTUNITIES.","of.p":"Your journey to better English starts with the right opportunity.","of.reg":"REGISTER NOW",
    "c1.h":"YOUR VOICE. YOUR CONFIDENCE.","c1.b1":"3 Integrated Levels.","c1.b2":"More Speaking Practice.","c1.b3":"Better Confidence.","c1.b4":"Improved Fluency.",
    "c2.h":"ONE YEAR. MORE POSSIBILITIES.","c2.1":"Free English placement test.","c2.2":"Pay for two levels only: 900 NIS.","c2.3":"Start studying immediately.","c2.4":"Remaining levels free for one year.","c2.5":"Book fee: 50 NIS per level.","c2.6":"Twelve levels during twelve months.","c2.7":"Special discounts for siblings and friends.",
    "v.h":"REAL STUDENTS. REAL VOICES.","v.p":"Confidence is not just taught. It is built through practice, experience, and expression.","v.more":"VIEW MORE ON INSTAGRAM","v.play":"Play reel","v.open":"Open on Instagram",
    "st.h":"FOUR STEPS. ONE NEW YOU.","st.1":"Take a Placement Test.","st.2":"Discover Your Level.","st.3":"Start Learning.","st.4":"Build Your Confidence.",
    "ct.h":"LET’S START YOUR ENGLISH JOURNEY.","ct.phone":"Phone","ct.wa":"CHAT ON WHATSAPP" },
  ar: { "nav.activities":"الأنشطة","jp.h":"رحلتك. إمكاناتك.","jp.p":"BBC أكثر من مكان لتعلّم الإنجليزية. إنه مجتمع ينمّي فيه الطلاب مهاراتهم ويكتشفون إمكاناتهم ويبنون ثقتهم للمستقبل.",
    "gal.h":"تعلّم خارج الصف.","gal.1":"التعلّم الجماعي","gal.2":"ورش العمل","gal.3":"عروض الطلاب","gal.4":"أنشطة المحادثة",
    "act.h":"مجتمع يُلهم.","tch.h":"تعلّم مع من يُلهمونك.","tst.h":"لكل رحلة قصة.","faq.h":"أسئلة؟ نحن هنا لمساعدتك.","ct.reg":"ابدأ التسجيل الآن",
    "ft.tag":"أكثر من إنجليزي. أكثر ثقة. أكثر أنت.","ft.about":"عن BBC","ft.faq":"الأسئلة","ft.copy":"© 2026 BBC — British Book Center. جميع الحقوق محفوظة.",
    "nav.home":"الرئيسية","nav.about":"من نحن","nav.programs":"البرامج","nav.offers":"العروض","nav.stories":"قصص الطلاب","nav.contact":"تواصل معنا","nav.join":"انضم إلى BBC",
    "hero.l1":"أكثر من إنجليزية.","hero.l2":"أكثر من كلمات.","hero.l3":"فرص أكثر.","hero.sub":"تعلّم الإنجليزية. ابنِ ثقتك. اكتشف إمكاناتك.",
    "hero.desc":"في BBC، الإنجليزية أكثر من لغة. إنها بوابة إلى الثقة والتواصل والنمو الشخصي وفرص جديدة.","hero.cta1":"ابدأ رحلتك","hero.cta2":"اكتشف BBC","hero.badge":"مستوى، رحلة واحدة",
    "about.h":"أكثر من مكان للتعلّم.","about.p":"BBC مكان ينمّي فيه الطلاب مهاراتهم في اللغة الإنجليزية، ويبنون ثقتهم، ويعزّزون تواصلهم، ويكتشفون إمكاناتهم.",
    "why.h":"لماذا BBC؟","why.1t":"تعلّم تفاعلي","why.1p":"تعلّم من خلال تجارب عملية وممتعة.","why.2t":"نمو شخصي","why.2p":"ابنِ ثقتك وحسّن تواصلك.","why.3t":"مجتمع داعم","why.3p":"انمُ في بيئة تعليمية مرحّبة.","why.4t":"فرص حقيقية","why.4p":"اكتشف أنشطة وورشات وتجارب جديدة.",
    "lv.h":"مستواك التالي يبدأ هنا.","lv.p":"اثنا عشر مستوى. خمس مراحل. طريق واضح من أولى كلماتك إلى إنجليزية واثقة وطلقة.","lv.level":"المستوى",
    "of.h":"فرص حصرية.","of.p":"رحلتك إلى إنجليزية أفضل تبدأ بالفرصة المناسبة.","of.reg":"سجّل الآن",
    "c1.h":"صوتك. ثقتك.","c1.b1":"3 مستويات متكاملة.","c1.b2":"تدريب أكثر على المحادثة.","c1.b3":"ثقة أكبر.","c1.b4":"طلاقة أفضل.",
    "c2.h":"عام واحد. إمكانيات أكثر.","c2.1":"فحص تحديد مستوى مجاني في الإنجليزية.","c2.2":"ادفع قيمة مستويين فقط: 900 شيكل.","c2.3":"ابدأ الدراسة فورًا.","c2.4":"باقي المستويات مجانًا لمدة سنة.","c2.5":"رسوم الكتاب: 50 شيكل لكل مستوى.","c2.6":"اثنا عشر مستوى خلال اثني عشر شهرًا.","c2.7":"خصومات خاصة للإخوة والأصدقاء.",
    "v.h":"طلاب حقيقيون. أصوات حقيقية.","v.p":"الثقة لا تُعلَّم فقط. إنها تُبنى بالممارسة والتجربة والتعبير.","v.more":"المزيد على إنستغرام","v.play":"شغّل الفيديو","v.open":"افتح على إنستغرام",
    "st.h":"أربع خطوات. أنت الجديد.","st.1":"قدّم فحص تحديد المستوى.","st.2":"اكتشف مستواك.","st.3":"ابدأ التعلّم.","st.4":"ابنِ ثقتك.",
    "ct.h":"لنبدأ رحلتك مع الإنجليزية.","ct.phone":"الهاتف","ct.wa":"تواصل عبر واتساب" }
};

/* ============ HELPERS ============ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
let lang = "en";
const t = k => I18N[lang][k] || I18N.en[k] || k;

/* ============ LEVELS ============ */
function buildLevels() {
  const track = $("#lvTrack"); track.innerHTML = ""; let n = 0;
  LEVEL_GROUPS.forEach(g => {
    const grp = document.createElement("div"); grp.className = "lv-group"; grp.style.setProperty("--n", g.count);
    grp.innerHTML = `<h3>${lang === "ar" ? g.ar : g.key}</h3><div class="lv-cells"></div>`;
    for (let i = 0; i < g.count; i++) {
      n++; const b = document.createElement("button");
      b.type = "button"; b.className = "lv"; b.style.setProperty("--i", n);
      b.setAttribute("aria-label", `${t("lv.level")} ${n}`); b.innerHTML = `<span>${n}</span>`;
      b.addEventListener("click", () => { $$(".lv").forEach(x => x.classList.remove("on")); b.classList.add("on"); });
      $(".lv-cells", grp).append(b);
    }
    track.append(grp);
  });
}

/* ============ REELS ============ */
function buildReels() {
  const wrap = $("#reels"); wrap.innerHTML = "";
  REELS.forEach((r, i) => {
    const url = `https://www.instagram.com/p/${r.id}/`;
    const el = document.createElement("article"); el.className = "reel";
    const meta = [r.level, r.camp].filter(Boolean).join(" · ");
    el.innerHTML = `<button class="reel-btn" type="button" data-n="${i + 1}" aria-label="${t("v.play")}: ${r.name}">
      <span></span><span class="play"></span>
      <span class="reel-info"><strong>${r.name}</strong>${meta ? `<small>${meta}</small>` : ""}</span></button>
      <a class="reel-link" href="${url}" target="_blank" rel="noopener">${t("v.open")}</a>`;
    $(".reel-btn", el).addEventListener("click", () => {      // embed loads only on click: no autoplay, no sound
      const f = document.createElement("iframe");
      f.src = `${url}embed/`; f.title = r.name; f.loading = "lazy"; f.allowFullscreen = true;
      f.allow = "encrypted-media; fullscreen"; $(".reel-btn", el).replaceWith(f);
    });
    wrap.append(el);
  });
}
const scrollReels = d => $("#reels").scrollBy({ left: d * $(".reel").offsetWidth * 1.1, behavior: "smooth" });
$("#prev").onclick = () => scrollReels(document.dir === "rtl" || lang === "ar" ? 1 : -1);
$("#next").onclick = () => scrollReels(lang === "ar" ? -1 : 1);


/* ============ STATS, FAQ, OPTIONAL SECTIONS ============ */
let tIdx = 0;
function buildDynamic() {
  const i = lang === "ar" ? 1 : 0, L = lang;
  $("#stats").innerHTML = STATS.filter(x => x.value !== null && x[L]).map(x => `<div class="stat"><b>${x.value}</b><span>${x[L]}</span></div>`).join("");
  const list = $("#faqList"); list.innerHTML = "";
  FAQ.forEach((f, n) => {
    const it = document.createElement("div"); it.className = "faq-item";
    it.innerHTML = `<h3><button class="faq-q" type="button" aria-expanded="false" aria-controls="fa${n}" id="fq${n}">${f.q[i]}</button></h3>
      <div class="faq-a" id="fa${n}" role="region" aria-labelledby="fq${n}"><div><p>${f.a[i]}</p></div></div>`;
    list.append(it);
  });
  $$(".faq-q").forEach(b => b.onclick = () => {
    const open = b.getAttribute("aria-expanded") === "true";
    $$(".faq-q").forEach(x => { x.setAttribute("aria-expanded", "false"); x.parentElement.nextElementSibling.classList.remove("open"); });
    if (!open) { b.setAttribute("aria-expanded", "true"); b.parentElement.nextElementSibling.classList.add("open"); }
  });
  $("#activities").hidden = !ACTIVITIES.length;
  $("#actGrid").innerHTML = ACTIVITIES.map(a => `<figure><img src="${a.src}" alt="${a.alt || ""}" loading="lazy"><figcaption>${a[L] || ""}</figcaption></figure>`).join("");
  $("#teachers").hidden = !TEACHERS.length;
  $("#tchGrid").innerHTML = TEACHERS.map(x => `<div>${x.photo ? `<img src="${x.photo}" alt="${x.name}" loading="lazy">` : ""}<h3>${x.name}</h3><p>${x["role_" + L] || ""}</p></div>`).join("");
  $("#testi").hidden = !TESTIMONIALS.length; showT(0);
}
function showT(d) {
  if (!TESTIMONIALS.length) return;
  tIdx = (tIdx + d + TESTIMONIALS.length) % TESTIMONIALS.length;
  const x = TESTIMONIALS[tIdx], q = x[lang] || x.en;
  $("#tstSlide").innerHTML = `<figure>${x.photo ? `<img src="${x.photo}" alt="${x.name}">` : ""}<blockquote>${q}</blockquote><figcaption>${x.name}${x.level ? " — " + x.level : ""}</figcaption></figure>`;
}
$("#tPrev").onclick = () => showT(-1); $("#tNext").onclick = () => showT(1);

/* ============ LIGHTBOX ============ */
const lb = $("#lb");
$$(".tile").forEach(tl => tl.addEventListener("click", () => {
  const im = $("img", tl); if (!im) return;
  $("img", lb).src = im.src; $("img", lb).alt = im.alt; $("p", lb).textContent = $("span", tl).textContent;
  lb.hidden = false; $("#lbClose").focus();
}));
const closeLb = () => { lb.hidden = true; };
$("#lbClose").onclick = closeLb; lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });

/* ============ LANGUAGE ============ */
function setLang(l) {
  lang = l;
  document.documentElement.lang = l; document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(n => { n.textContent = t(n.dataset.i18n); });
  $("#lang").textContent = l === "ar" ? "EN" : "AR";
  buildLevels(); buildReels(); buildDynamic();
  try { localStorage.setItem("bbc-lang", l); } catch (e) {}
}
$("#lang").onclick = () => setLang(lang === "en" ? "ar" : "en");

/* ============ CAMPAIGNS ============ */
Object.entries(CAMPAIGNS).forEach(([id, on]) => { if (!on) $("#" + id).classList.add("is-hidden"); });

/* ============ NAV, MENU, SCROLL ============ */
const nav = $("#nav"), menu = $("#menu"), burger = $("#burger"), totop = $("#totop"), prog = $("#progress");
function closeMenu() { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; }
burger.onclick = () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open); document.body.style.overflow = open ? "hidden" : "";
};
$$("#menu a").forEach(a => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
let tick = false;
addEventListener("scroll", () => {
  if (tick) return; tick = true;
  requestAnimationFrame(() => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("scrolled", y > 40); totop.classList.toggle("show", y > 700);
    prog.style.transform = `scaleX(${h > 0 ? y / h : 0})`; tick = false;
  });
}, { passive: true });
totop.onclick = () => scrollTo({ top: 0, behavior: "smooth" });

/* active link + reveal */
const links = $$("#menu a");
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main > section[id]").forEach(s => spy.observe(s));
const rev = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rev.unobserve(e.target); } }), { threshold: .15 });
$$(".reveal").forEach(n => rev.observe(n));

/* ============ INIT ============ */
let saved = "en"; try { saved = localStorage.getItem("bbc-lang") || "en"; } catch (e) {}
setLang(saved === "ar" ? "ar" : "en");
