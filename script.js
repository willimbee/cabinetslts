/* ============================================
   SLTS — Main JavaScript
   ============================================ */

// ————————————————————————————————
// i18n — Translation System
// ————————————————————————————————
const translations = {
  fr: {
    // Nav
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.courses": "Cours",
    "nav.testimonials": "Témoignages",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Nouveau : Cours en ligne disponibles",
    "hero.title1": "Transformez vos compétences linguistiques en ",
    "hero.title2": "opportunités professionnelles",
    "hero.subtitle": "Améliorez vos compétences linguistiques avec nos cours certifiés et nos services de traduction professionnelle. Bénéficiez d'une expertise de qualité pour atteindre vos objectifs.",
    "hero.cta1": "Inscription maintenant",
    "hero.cta2": "Voir nos services",

    // Stats
    "stats.clients": "Clients satisfaits",
    "stats.success": "Taux de réussite",
    "stats.support": "Support client",
    "stats.certified": "Traductions certifiées",

    // Services
    "services.label": "Services",
    "services.title": "Nos Services",
    "services.subtitle": "Nous offrons des services de traduction, d'interprétariat et de formation de haute qualité.",
    "services.trad.title": "Traduction",
    "services.trad.desc": "Nous fournissons des traductions certifiées, rapides et précises pour divers documents officiels et professionnels.",
    "services.interp.title": "Interprétariat",
    "services.interp.desc": "Profitez de notre expertise lors de vos sommets, conférences, réunions internationales et événements officiels.",
    "services.form.title": "Formation",
    "services.form.desc": "Préparez-vous aux tests de langue avec nos cours d'anglais, d'allemand et d'espagnol dispensés par des formateurs certifiés.",

    // Courses
    "courses.label": "Cours de Langues",
    "courses.title": "Nos Cours de Langues",
    "courses.subtitle": "Améliorez vos compétences linguistiques avec nos cours d'anglais, d'allemand et d'espagnol.",
    "courses.badge.popular": "Populaire",
    "courses.badge.new": "Nouveau",
    "courses.badge.open": "Ouvert",
    "courses.en.title": "Anglais — Général & Académique",
    "courses.en.desc": "Maîtrisez l'anglais avec nos cours couvrant tous les niveaux, du débutant au perfectionnement. Préparation TOEFL, IELTS et Cambridge.",
    "courses.en.days": "Lundi, Mercredi, Vendredi",
    "courses.en.time": "08h00 - 10h00 | 17h00 - 19h00",
    "courses.de.title": "Allemand — Tous Niveaux",
    "courses.de.desc": "Apprenez l'allemand avec nos formateurs natifs. Cours adaptés aux besoins professionnels et académiques. Préparation Goethe-Zertifikat.",
    "courses.de.days": "Mardi, Jeudi, Samedi",
    "courses.de.time": "09h00 - 11h00 | 15h00 - 17h00",
    "courses.es.title": "Espagnol — Tous Niveaux",
    "courses.es.desc": "Découvrez l'espagnol avec des cours dynamiques et interactifs. Idéal pour le voyage, le commerce et la culture hispanophone.",
    "courses.es.days": "Lundi, Mercredi, Vendredi",
    "courses.es.time": "10h00 - 12h00 | 16h00 - 18h00",
    "courses.permonth": "/ mois",
    "courses.enroll": "S'inscrire",
    "courses.mainCta": "Inscription aux cours",

    // Testimonials
    "testimonials.label": "Témoignages",
    "testimonials.title": "Paroles de clients satisfaits",
    "testimonials.subtitle": "Découvrez ce que nos clients disent de nos services.",
    "testimonials.t1.role": "Cliente depuis 2020",
    "testimonials.t1.text": "\"Un service exceptionnel qui a dépassé toutes mes attentes. L'équipe est professionnelle et réactive. Mes documents ont été traduits avec précision et dans les délais.\"",
    "testimonials.t2.role": "Client depuis 2019",
    "testimonials.t2.text": "\"Grâce à leur expertise, j'ai pu réaliser mon projet dans les délais. Une collaboration que je recommande vivement. Le suivi personnalisé fait toute la différence.\"",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Nous sommes impatients de collaborer avec vous pour donner vie à vos projets linguistiques.",
    "contact.form.name": "Nom complet",
    "contact.form.email": "Email",
    "contact.form.subject": "Sujet",
    "contact.form.selectSubject": "Sélectionnez un sujet",
    "contact.form.opt1": "Demande de traduction",
    "contact.form.opt2": "Inscription aux cours",
    "contact.form.opt3": "Service d'interprétariat",
    "contact.form.opt4": "Autre demande",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer le message",
    "contact.info.title": "Informations de contact",
    "contact.info.phone": "Téléphone",
    "contact.info.address": "Adresse",
    "contact.hours.title": "Horaires d'ouverture",
    "contact.hours.weekdays": "Lundi - Samedi",
    "contact.hours.sunday": "Dimanche",
    "contact.hours.closed": "Fermé",

    // Footer
    "footer.desc": "Votre satisfaction est notre priorité.",
    "footer.links": "Liens rapides",
    "footer.services": "Nos services",
    "footer.followUs": "Suivez-nous",
    "footer.rights": "Tous droits réservés.",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
  },

  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.courses": "Courses",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "New: Online courses available",
    "hero.title1": "Transform your language skills into ",
    "hero.title2": "professional opportunities",
    "hero.subtitle": "Improve your language skills with our certified courses and professional translation services. Benefit from quality expertise to achieve your goals.",
    "hero.cta1": "Register now",
    "hero.cta2": "View our services",

    // Stats
    "stats.clients": "Satisfied clients",
    "stats.success": "Success rate",
    "stats.support": "Client support",
    "stats.certified": "Certified translations",

    // Services
    "services.label": "Services",
    "services.title": "Our Services",
    "services.subtitle": "We offer high-quality translation, interpreting and training services.",
    "services.trad.title": "Translation",
    "services.trad.desc": "We provide certified, fast and accurate translations for various official and professional documents.",
    "services.interp.title": "Interpreting",
    "services.interp.desc": "Take advantage of our expertise at your summits, conferences, international meetings and official events.",
    "services.form.title": "Training",
    "services.form.desc": "Prepare for language tests with our English, German and Spanish courses taught by certified trainers.",

    // Courses
    "courses.label": "Language Courses",
    "courses.title": "Our Language Courses",
    "courses.subtitle": "Improve your language skills with our English, German and Spanish courses.",
    "courses.badge.popular": "Popular",
    "courses.badge.new": "New",
    "courses.badge.open": "Open",
    "courses.en.title": "English — General & Academic",
    "courses.en.desc": "Master English with courses covering all levels, from beginner to advanced. TOEFL, IELTS and Cambridge preparation.",
    "courses.en.days": "Monday, Wednesday, Friday",
    "courses.en.time": "8:00 AM - 10:00 AM | 5:00 PM - 7:00 PM",
    "courses.de.title": "German — All Levels",
    "courses.de.desc": "Learn German with our native trainers. Courses tailored to professional and academic needs. Goethe-Zertifikat preparation.",
    "courses.de.days": "Tuesday, Thursday, Saturday",
    "courses.de.time": "9:00 AM - 11:00 AM | 3:00 PM - 5:00 PM",
    "courses.es.title": "Spanish — All Levels",
    "courses.es.desc": "Discover Spanish with dynamic and interactive courses. Ideal for travel, business and Hispanic culture.",
    "courses.es.days": "Monday, Wednesday, Friday",
    "courses.es.time": "10:00 AM - 12:00 PM | 4:00 PM - 6:00 PM",
    "courses.permonth": "/ month",
    "courses.enroll": "Enroll",
    "courses.mainCta": "Enroll in courses",

    // Testimonials
    "testimonials.label": "Testimonials",
    "testimonials.title": "What our clients say",
    "testimonials.subtitle": "Discover what our clients have to say about our services.",
    "testimonials.t1.role": "Client since 2020",
    "testimonials.t1.text": "\"An exceptional service that exceeded all my expectations. The team is professional and responsive. My documents were translated accurately and on time.\"",
    "testimonials.t2.role": "Client since 2019",
    "testimonials.t2.text": "\"Thanks to their expertise, I was able to complete my project on time. A collaboration I highly recommend. The personalized follow-up makes all the difference.\"",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Contact Us",
    "contact.subtitle": "We look forward to collaborating with you to bring your language projects to life.",
    "contact.form.name": "Full name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.selectSubject": "Select a subject",
    "contact.form.opt1": "Translation request",
    "contact.form.opt2": "Course enrollment",
    "contact.form.opt3": "Interpreting service",
    "contact.form.opt4": "Other request",
    "contact.form.message": "Message",
    "contact.form.send": "Send message",
    "contact.info.title": "Contact information",
    "contact.info.phone": "Phone",
    "contact.info.address": "Address",
    "contact.hours.title": "Opening hours",
    "contact.hours.weekdays": "Monday - Saturday",
    "contact.hours.sunday": "Sunday",
    "contact.hours.closed": "Closed",

    // Footer
    "footer.desc": "Your satisfaction is our priority.",
    "footer.links": "Quick links",
    "footer.services": "Our services",
    "footer.followUs": "Follow us",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
  }
};

let currentLang = localStorage.getItem('slts-lang') || 'fr';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('slts-lang', lang);
  document.documentElement.lang = lang;

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update active buttons
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ————————————————————————————————
// DOM Ready
// ————————————————————————————————
document.addEventListener('DOMContentLoaded', () => {

  // ---------- i18n Init ----------
  setLanguage(currentLang);

  // Language toggle buttons
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // ---------- AOS Init ----------
  AOS.init({
    offset: 100,
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    delay: 50,
  });

  // ---------- Swiper — Hero Background ----------
  new Swiper('.hero-swiper', {
    loop: true,
    speed: 1200,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
  });

  // ---------- GSAP — Hero Entrance ----------
  if (typeof gsap !== 'undefined') {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-badge', { y: 30, opacity: 0, duration: .8, delay: .3 })
      .from('.hero h1', { y: 50, opacity: 0, duration: .9 }, '-=.4')
      .from('.hero-subtitle', { y: 30, opacity: 0, duration: .7 }, '-=.5')
      .from('.hero-cta', { y: 30, opacity: 0, duration: .7 }, '-=.4')
      .from('.hero-stats', { y: 40, opacity: 0, duration: .8 }, '-=.3');
  }

  // ---------- Navbar scroll effect ----------
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 60);
    lastScroll = scrollY;
  }, { passive: true });

  // ---------- Mobile Menu ----------
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileOverlay = document.getElementById('mobileOverlay');

  function toggleMobileMenu() {
    const isOpen = mobileNav.classList.contains('open');
    menuToggle.classList.toggle('open', !isOpen);
    mobileNav.classList.toggle('open', !isOpen);
    mobileOverlay.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  menuToggle.addEventListener('click', toggleMobileMenu);
  mobileOverlay.addEventListener('click', toggleMobileMenu);

  // Close mobile menu on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) toggleMobileMenu();
    });
  });

  // ---------- Smooth Scroll ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight + 10;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});