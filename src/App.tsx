import { useState } from "react";
import Logo from "./components/Logo";
import PhoneMockup from "./components/PhoneMockup";

const translations = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How it works",
      cities: "Cities",
      gps: "Live GPS",
      getApp: "Get the app"
    },
    hero: {
      badge: "🇩🇿 Built for Algeria's streets",
      titlePre: "Your everyday ",
      titleSpan: "transit companion",
      desc: "tells you exactly which buses and lines to take to get anywhere in your city — fast, simple, and made for everyone.",
      googlePlay: "Google Play",
      getItOn: "Get it on",
      stats: {
        citiesCovered: "cities covered",
        freeToUse: "100% free to use",
        comingSoon: "GPS coming soon"
      }
    },
    marquee: [
      "🚌 ETUSA",
      "🚇 Algiers Metro",
      "🚊 Tramway",
      "🚌 Intercity buses",
      "🚉 SNTF",
      "🚐 Private transport"
    ],
    features: {
      label: "Features",
      heading: "Everything you need to move around",
      sub: "Like Moovit, but built and tuned for the way Algerians actually get around town.",
      items: [
        {
          icon: "🚌",
          title: "Find the right bus",
          desc: "Tell Chriki where you are and where you're going. It instantly shows which buses and lines to take.",
        },
        {
          icon: "🗺️",
          title: "Smart route planning",
          desc: "Get the fastest and cheapest routes with every change, stop and connection laid out clearly.",
        },
        {
          icon: "💸",
          title: "Know the fare",
          desc: "See how much your trip costs before you leave — no surprises when you board.",
        },
        {
          icon: "🔄",
          title: "Easy transfers",
          desc: "Combine buses, metro and tram seamlessly with step-by-step transfer guidance.",
        },
        {
          icon: "⏱️",
          title: "Save time daily",
          desc: "Stop guessing and asking around. Chriki knows the network so your commute just works.",
        },
        {
          icon: "📍",
          title: "Live GPS — soon",
          desc: "Track buses in real time and see exactly when yours arrives. Coming in the next update.",
        },
      ]
    },
    how: {
      label: "How it works",
      heading: "Three taps to your destination",
      steps: [
        {
          n: "01",
          title: "Set your trip",
          desc: "Enter your starting point and destination anywhere in your city.",
        },
        {
          n: "02",
          title: "Pick a route",
          desc: "Browse suggested routes ranked by speed, price and number of changes.",
        },
        {
          n: "03",
          title: "Ride with confidence",
          desc: "Follow clear directions for every bus, line and transfer until you arrive.",
        },
      ]
    },
    gps: {
      badge: "Coming soon",
      title: "Live GPS bus tracking",
      desc: "Soon you'll see every bus moving on the map in real time — know exactly where yours is and when it'll reach your stop. No more waiting in the dark.",
      desc2: "No more waiting indefinitely at the bus stop hoping your bus will show up. Through our network partnerships and volunteer drivers, Chriki will provide you with precise, real-time arrival estimates so you can step out of your house exactly when your bus is approaching.",
      betaNote: "Currently undergoing private testing in cooperation with select ETUSA lines in Algiers.",
      items: [
        "Real-time bus positions on the map",
        "Accurate arrival countdowns",
        "Live delays and crowding info",
      ],
      liveFeed: "Live Feed",
      stationName: "Place des Martyrs",
      bus65: "Line 65",
      metroL1: "Metro L1",
      line16: "Line 16",
      onTime: "On Time",
      delayed: "Delayed 4m",
      incoming: "Arriving",
      activeText: "Active tracking",
      etaVal: "2 min"
    },
    coverage: {
      label: "Coverage",
      heading: "Available across Algeria",
      sub: "We're growing fast — more cities and lines are added every month.",
      more: "+ more soon",
      cities: [
        "Algiers",
        "Oran",
        "Constantine",
        "Annaba",
        "Sétif",
        "Blida",
        "Tizi Ouzou",
        "Batna"
      ]
    },
    download: {
      heading: "today",
      downloadText: "Download",
      desc: "Join thousands of riders moving smarter through Algeria's cities. It's free.",
      getItOn: "Get it on",
    },
    footer: {
      privacy: "Privacy",
      contact: "Contact",
      madeWith: "Made with 💚 in Algeria"
    }
  },
  fr: {
    nav: {
      features: "Fonctionnalités",
      howItWorks: "Comment ça marche",
      cities: "Villes",
      gps: "GPS en direct",
      getApp: "Télécharger"
    },
    hero: {
      badge: "🇩🇿 Conçu pour les rues d'Algérie",
      titlePre: "Votre compagnon de ",
      titleSpan: "transport quotidien",
      desc: "vous indique exactement quels bus et lignes prendre pour aller n'importe où dans votre ville — rapide, simple et accessible à tous.",
      googlePlay: "Google Play",
      getItOn: "Disponible sur",
      stats: {
        citiesCovered: "villes couvertes",
        freeToUse: "100% gratuit",
        comingSoon: "GPS bientôt dispo"
      }
    },
    marquee: [
      "🚌 ETUSA",
      "🚇 Métro d'Alger",
      "🚊 Tramway",
      "🚌 Bus interurbains",
      "🚉 SNTF",
      "🚐 Transport privé"
    ],
    features: {
      label: "Fonctionnalités",
      heading: "Tout ce dont vous avez besoin pour vous déplacer",
      sub: "Comme Moovit, mais conçu et adapté aux habitudes de transport des Algériens.",
      items: [
        {
          icon: "🚌",
          title: "Trouver le bon bus",
          desc: "Dites à Chriki d'où vous partez et où vous allez. Il vous montre instantanément les bus et lignes à prendre.",
        },
        {
          icon: "🗺️",
          title: "Itinéraire intelligent",
          desc: "Obtenez les itinéraires les plus rapides et les plus économiques avec chaque correspondance et arrêt clairement détaillés.",
        },
        {
          icon: "💸",
          title: "Connaître le tarif",
          desc: "Consultez le tarif de votre trajet avant de partir — pas de mauvaises surprises à bord.",
        },
        {
          icon: "🔄",
          title: "Correspondances faciles",
          desc: "Combinez bus, métro et tramway en toute fluidité avec un guidage étape par étape pour chaque correspondance.",
        },
        {
          icon: "⏱️",
          title: "Gagner du temps",
          desc: "Ne devinez plus et arrêtez de demander votre chemin. Chriki connaît le réseau pour un trajet quotidien sans tracas.",
        },
        {
          icon: "📍",
          title: "GPS en direct — bientôt",
          desc: "Suivez les bus en temps réel et sachez exactement quand le vôtre arrive. Disponible dans la prochaine version.",
        },
      ]
    },
    how: {
      label: "Comment ça marche",
      heading: "Votre itinéraire en trois étapes",
      steps: [
        {
          n: "01",
          title: "Définir votre trajet",
          desc: "Saisissez votre point de départ et votre destination n'importe où dans votre ville.",
        },
        {
          n: "02",
          title: "Choisir un itinéraire",
          desc: "Parcourez les itinéraires suggérés, triés par rapidité, prix et nombre de correspondances.",
        },
        {
          n: "03",
          title: "Voyager sereinement",
          desc: "Suivez des instructions claires pour chaque bus, ligne et correspondance jusqu'à votre arrivée.",
        },
      ]
    },
    gps: {
      badge: "Bientôt disponible",
      title: "Suivi GPS des bus en direct",
      desc: "Bientôt, vous verrez chaque bus se déplacer en temps réel sur la carte — sachez exactement où se trouve le vôtre et quand il arrive. Plus d'attente interminable.",
      desc2: "Plus besoin d'attendre indéfiniment à l'arrêt de bus dans l'espoir qu'il passe. Grâce à nos partenariats et à notre communauté, Chriki vous offrira des estimations d'arrivée ultra-précises en temps réel pour que vous ne sortiez de chez vous que lorsque votre bus approche.",
      betaNote: "Actuellement en phase de test privé en collaboration avec certaines lignes ETUSA à Alger.",
      items: [
        "Position des bus en temps réel sur la carte",
        "Heures d'arrivée ultra-précises",
        "Infos sur les retards et l'affluence en direct",
      ],
      liveFeed: "Flux en Direct",
      stationName: "Place des Martyrs",
      bus65: "Ligne 65",
      metroL1: "Métro L1",
      line16: "Ligne 16",
      onTime: "À l'heure",
      delayed: "Retard 4m",
      incoming: "Arrivée",
      activeText: "Suivi actif",
      etaVal: "2 min"
    },
    coverage: {
      label: "Couverture",
      heading: "Disponible à travers l'Algérie",
      sub: "Nous grandissons vite — de nouvelles villes et lignes sont ajoutées chaque mois.",
      more: "+ d'autres bientôt",
      cities: [
        "Alger",
        "Oran",
        "Constantine",
        "Annaba",
        "Sétif",
        "Blida",
        "Tizi Ouzou",
        "Batna"
      ]
    },
    download: {
      heading: "aujourd'hui",
      downloadText: "Téléchargez",
      desc: "Rejoignez des milliers de voyageurs qui se déplacent plus intelligemment. C'est gratuit.",
      getItOn: "Disponible sur",
    },
    footer: {
      privacy: "Confidentialité",
      contact: "Contact",
      madeWith: "Fait avec 💚 en Algérie"
    }
  },
  ar: {
    nav: {
      features: "المميزات",
      howItWorks: "كيف يعمل",
      cities: "المدن",
      gps: "تتبع مباشر",
      getApp: "احصل على التطبيق"
    },
    hero: {
      badge: "🇩🇿 مصمم خصيصاً للشوارع الجزائرية",
      titlePre: "مرافقك اليومي ",
      titleSpan: "للتنقل المريح",
      desc: "يخبرك بدقة أي الحافلات والخطوط التي يجب ركوبها للذهاب إلى أي مكان في مدينتك — سريع، بسيط، ومصمم للجميع.",
      googlePlay: "Google Play",
      getItOn: "تحميل من",
      stats: {
        citiesCovered: "مدن مغطاة",
        freeToUse: "مجاني 100%",
        comingSoon: "تتبع GPS قريباً"
      }
    },
    marquee: [
      "🚌 إيتوزا (ETUSA)",
      "🚇 مترو الجزائر",
      "🚊 الترامواي",
      "🚌 حافلات بين الولايات",
      "🚉 SNTF",
      "🚐 النقل الخاص"
    ],
    features: {
      label: "المميزات",
      heading: "كل ما تحتاجه للتنقل بسهولة",
      sub: "مثل Moovit، ولكن تم بناؤه وتطويره للطريقة التي يتنقل بها الجزائريون فعلياً.",
      items: [
        {
          icon: "🚌",
          title: "ابحث عن الحافلة المناسبة",
          desc: "أخبر شريكي بموقعك ووجهتك، وسيعرض لك فوراً الحافلات والخطوط التي يمكنك ركوبها.",
        },
        {
          icon: "🗺️",
          title: "تخطيط ذكي للمسار",
          desc: "احصل على أسرع وأوفر مسار مع توضيح جميع التبديلات، المحطات، والاتصالات بكل وضوح.",
        },
        {
          icon: "💸",
          title: "اعرف السعر مسبقاً",
          desc: "اعرف تكلفة رحلتك قبل الانطلاق — بدون مفاجآت عند الركوب.",
        },
        {
          icon: "🔄",
          title: "تبديل سهل وسلس",
          desc: "اجمع بين الحافلات، المترو والترامواي بسلاسة تامة مع توجيه خطوة بخطوة أثناء التبديل.",
        },
        {
          icon: "⏱️",
          title: "وفر وقتك اليومي",
          desc: "وفر وقتك ولا داعي للسؤال المستمر. شريكي يعرف شبكة النقل جيداً ليتناسب مع تنقلك اليومي.",
        },
        {
          icon: "📍",
          title: "تتبع مباشر - قريباً",
          desc: "تتبع الحافلات في الوقت الفعلي واعرف متى تصل حافلتك بدقة. قريباً في التحديث القادم.",
        },
      ]
    },
    how: {
      label: "كيف يعمل؟",
      heading: "ثلاث خطوات بسيطة للوصول لوجهتك",
      steps: [
        {
          n: "01",
          title: "حدد رحلتك",
          desc: "أدخل نقطة الانطلاق والوجهة في أي مكان في مدينتك.",
        },
        {
          n: "02",
          title: "اختر أفضل مسار",
          desc: "تصفح المسارات المقترحة والمرتبة حسب السرعة، السعر، وعدد مرات التبديل.",
        },
        {
          n: "03",
          title: "رحلة مريحة وآمنة",
          desc: "اتبع اتجاهات واضحة لكل حافلة، خط، وتبديل حتى تصل بأمان إلى مقصدك.",
        },
      ]
    },
    gps: {
      badge: "قريباً",
      title: "تتبع الحافلات مباشرة عبر الـ GPS",
      desc: "قريباً ستتمكن من رؤية حركة كل حافلة على الخريطة في الوقت الفعلي — اعرف بدقة أين توجد حافلتك ومتى ستصل إلى محطتك. لا مزيد من الانتظار والترقب.",
      desc2: "لا مزيد من الانتظار اللامتناهي في محطات الحافلات على أمل وصولها. بفضل شراكاتنا الذكية وتتبعنا المتطور، سيوفر لك شريكي تقديرات دقيقة للوصول في الوقت الفعلي حتى تتمكن من مغادرة منزلك أو مكتبك بدقة عند اقتراب حافلتك.",
      betaNote: "يخضع حالياً للتجارب المغلقة بالتعاون مع خطوط محددة لمؤسسة إيتوزا (ETUSA) بالجزائر العاصمة.",
      items: [
        "مواقع الحافلات المباشرة على الخريطة",
        "عد تنازلي دقيق لوقت الوصول",
        "معلومات مباشرة عن التأخيرات والازدحام",
      ],
      liveFeed: "البث المباشر",
      stationName: "ساحة الشهداء",
      bus65: "الخط 65",
      metroL1: "مترو M1",
      line16: "الخط 16",
      onTime: "منتظم",
      delayed: "متأخر 4 د",
      incoming: "قادم",
      activeText: "تتبع نشط",
      etaVal: "دقيقتان"
    },
    coverage: {
      label: "التغطية",
      heading: "متوفر في مختلف أنحاء الجزائر",
      sub: "نتوسع بسرعة — يتم إضافة المزيد من المدن والخطوط كل شهر.",
      more: "+ المزيد قريباً",
      cities: [
        "الجزائر العاصمة",
        "وهران",
        "قسنطينة",
        "عنابة",
        "سطيف",
        "البليدة",
        "تيزي وزو",
        "باتنة"
      ]
    },
    download: {
      heading: "اليوم",
      downloadText: "حمل تطبيق",
      desc: "انضم إلى آلاف الركاب وتنقل بذكاء أكبر في مختلف المدن الجزائرية. إنه مجاني بالكامل.",
      getItOn: "تحميل من",
    },
    footer: {
      privacy: "سياسة الخصوصية",
      contact: "اتصل بنا",
      madeWith: "صنع بـ 💚 في الجزائر"
    }
  }
};

function PrivacyPolicy({
  lang,
  setView,
}: {
  lang: "en" | "fr" | "ar";
  setView: (val: "home" | "privacy") => void;
}) {
  const data = {
    en: {
      title: "Privacy Policy",
      updated: "Last updated: June 22, 2026",
      intro: "At Chriki (شريكي), we are committed to protecting your privacy. This Privacy Policy details exactly how we treat your information when you use our mobile application and our website. We do not sell or share any user details, and only collect essential information required to deliver public transit services.",
      sections: [
        {
          title: "1. Information We Collect",
          content: "We believe in extreme data minimization. We only collect the following details from our users:",
          bullets: [
            "Email Address: We only collect user email addresses (such as drivers or users of the Ween/Chriki live platform) during signup or communication. No other personal data, names, or addresses are collected.",
            "Location Information (Drivers): For drivers on the Ween live-transit tracking panel, we collect precise geoposition statistics. This allows you to broadcast your active bus trajectory on our public map feed to assist commuters.",
            "Location Information (Commuters): For Tariqi users (passengers), location sharing is completely optional. If authorized, it is used locally on your device solely to calculate and display the nearest bus stops around your current start point. We do not store or track commuter position histories."
          ]
        },
        {
          title: "2. Background Location & Run States",
          content: "Our system treats device resources and battery health with great care:",
          bullets: [
            "For Drivers: The application can work in the background when you choose to share your live GPS location. This ensures you can seamlessly broadcast the bus's active route coordinates to waiting passengers even if your screen is locked or turned off.",
            "For Tariqi Users: The application will NOT work or fetch location updates in the background. Location processing only occurs in the foreground when the passenger is actively searching for routes, keeping your device clean and saving battery."
          ]
        },
        {
          title: "3. How We Use and Protect Your Information",
          content: "We use the collected email addresses and coordinates solely to power and enhance your public transit experience across Algeria's streets. We prioritize your privacy above all. We do not sell, rent, trade, or share your email database, personal coordinates, or trip history with third-party advertisers or unauthorized platforms under any circumstances. Any commuter location queries run are calculated securely on-the-fly and processed in temporary index memory.",
          bullets: []
        },
        {
          title: "4. Algerian Data Protection Compliance",
          content: "Our system and data structures are built to align with Algerian safety protocols, notably Law No. 18-07 regarding the Protection of Physical Persons in the Treatment of Personal Data. We process and secure information according to these legal guidelines.",
          bullets: []
        },
        {
          title: "5. Your Controls and Rights",
          content: "You maintain full sovereignty over your data:",
          bullets: [
            "Permissions: You can authorize or deny location services access anytime through your Android/iOS system settings.",
            "De-Anonymization: Your trip planning operations are stored locally on your device and are never matched with active user directories, maintaining your complete daily privacy."
          ]
        },
        {
          title: "6. Support & Inquiries",
          content: "If you have any questions, feedback, or concerns regarding your privacy, feel free to contact us:",
          bullets: [
            "Email: contact@chriki.com",
            "Cooperation: dev@chriki.com"
          ]
        }
      ],
      back: "Back to Home"
    },
    fr: {
      title: "Politique de Confidentialité",
      updated: "Dernière mise à jour : 22 Juin 2026",
      intro: "Chez Chriki (شريكي), nous nous engageons à protéger votre vie privée. Cette politique de confidentialité explique en détail comment nous traitons vos informations lorsque vous utilisez notre application mobile et notre site Web. Nous ne vendons ni ne partageons vos données, et nous ne récoltons que le strict minimum nécessaire au bon fonctionnement du service.",
      sections: [
        {
          title: "1. Informations que nous collectons",
          content: "Nous appliquons un principe de minimisation stricte des données. Nous collectons uniquement les informations suivantes :",
          bullets: [
            "Adresse e-mail : Nous recueillons uniquement l'adresse e-mail de nos utilisateurs (les conducteurs ou les utilisateurs de la plateforme en direct Ween/Chriki) lors de la création de compte ou des échanges d'assistance. Aucune autre donnée personnelle (nom, adresse postale, etc.) n'est demandée.",
            "Données de localisation (Conducteurs) : Pour les chauffeurs partenaires sur la plateforme de suivi en direct Ween, nous collectons des données de géolocalisation précises. Cela vous permet de diffuser activement l'itinéraire de votre bus sur notre carte publique pour aider les voyageurs en attente.",
            "Données de localisation (Voyageurs) : Pour les utilisateurs Tariqi (voyageurs), le partage de position est entièrement facultatif. S'il est autorisé, il sert uniquement de manière locale sur votre téléphone à détecter et afficher les arrêts de bus à proximité de votre point de départ. Nous n'enregistrons ni ne suivons vos mouvements."
          ]
        },
        {
          title: "2. Utilisation de la position en arrière-plan",
          content: "Notre application gère les ressources de votre téléphone et l'autonomie de votre batterie avec le plus grand soin :",
          bullets: [
            "Pour les Conducteurs : L'application peut fonctionner en arrière-plan lorsque vous choisissez de partager votre position GPS en temps réel. Cela permet de continuer à diffuser l'itinéraire de votre bus aux usagers, même si l'écran de votre téléphone est verrouillé ou éteint.",
            "Pour les Utilisateurs Tariqi (Voyageurs) : L'application ne fonctionne PAS en arrière-plan et ne récupère jamais votre localisation en arrière-plan. La détection de la position s'effectue exclusivement au premier plan lorsque l'utilisateur cherche activement un trajet ou un arrêt."
          ]
        },
        {
          title: "3. Traitement et protection de vos informations",
          content: "Nous utilisons vos e-mails et coordonnées GPS uniquement pour optimiser votre expérience de transport en Algérie. Votre vie privée est sacrée. En aucun cas nous ne vendons, louons, échangeons ou partageons votre adresse e-mail ou votre historique de voyage avec des annonceurs ou des tiers. Toutes les requêtes de trajet voyageurs sont calculées à la volée de manière sécurisée et ne sont conservées que temporairement.",
          bullets: []
        },
        {
          title: "4. Conformité à la réglementation algérienne",
          content: "Conformément à la loi n° 18-07 relative à la protection des personnes physiques dans le traitement des données à caractère personnel en Algérie, nous mettons en œuvre toutes les mesures techniques pour assurer la sécurité absolue de vos données.",
          bullets: []
        },
        {
          title: "5. Vos choix et vos droits",
          content: "Vous gardez le contrôle total sur vos données à tout moment :",
          bullets: [
            "Autorisations : Vous pouvez activer ou révoquer l'accès à la localisation à tout moment via les paramètres de votre smartphone.",
            "Anonymat local : Vos historiques de recherche de trajet restent stockés localement sur votre téléphone et ne sont associés à aucun dossier d'inscription d'utilisateurs actifs."
          ]
        },
        {
          title: "6. Nous contacter",
          content: "Pour toute question relative à cette politique de confidentialité ou à la gestion de vos données personnelles :",
          bullets: [
            "Email : contact@chriki.com",
            "Partenariats : dev@chriki.com"
          ]
        }
      ],
      back: "Retour à l'accueil"
    },
    ar: {
      title: "سياسة الخصوصية",
      updated: "آخر تحديث: 22 يونيو 2026",
      intro: "نحن في شريكي (Chriki) ملتزمون بحماية خصوصيتك وأمان بياناتك. توضح سياسة الخصوصية هذه بالتفصيل كيفية التعامل مع معلوماتك عند استخدام تطبيقنا وموقعنا الإلكتروني. نحن لا نبيع أو نشارك تفاصيل المستخدمين، ونجمع فقط البيانات الأساسية والضرورية لتشغيل وتسهيل خدمات النقل العام.",
      sections: [
        {
          title: "1. البيانات التي نجمعها",
          content: "نحن نؤمن بالحد الأدنى المطلق لجمع البيانات. البيانات الوحيدة التي نقوم بجمعها من مستخدمينا هي:",
          bullets: [
            "البريد الإلكتروني: نجمع فقط عناوين البريد الإلكتروني للمستخدمين (سواء كانوا سائقين أو مستخدمي منصة البث المباشر Ween/Chriki) عند التسجيل أو المراسلة. لا يتطلب التطبيق أي بيانات شخصية أخرى مثل الاسم الكامل أو العنوان.",
            "بيانات الموقع الجغرافي (للسائقين): بالنسبة للسائقين على نظام التتبع المباشر Ween، نحدد ونجمع إحداثيات الموقع بدقة لبث مسلك الحافلة الفعلي على الخريطة ومساعدة الركاب المنتظرين.",
            "بيانات الموقع الجغرافي (للركاب): بالنسبة لمستخدمي مسار Tariqi (المسافرين)، فإن مشاركة الموقع اختيارية بالكامل. في حال تفعيلها، تُسخدم محلياً على هاتفك فقط لتحديد وعرض أقرب محطات الحافلات إليك كنتقة انطلاق. نحن لا نقوم بتسجيل أو تتبع تحركات الركاب اليومية."
          ]
        },
        {
          title: "2. ميزة تشغيل الموقع في الخلفية",
          content: "يتعامل نظامنا مع موارد جهازك وطاقة بطاريتك بأقصى درجات الاهتمام والكفاءة:",
          bullets: [
            "بالنسبة للسائقين: يمكن للتطبيق العمل في الخلفية (Background) عندما يقوم السائق بمشاركة موقعه مباشرة عبر الـ GPS. يضمن ذلك استمرار بث إحداثيات الحافلة ومسارها للركاب بانتظام حتى لو كانت شاشة الهاتف مغلقة أو تم قفلها.",
            "بالنسبة لمستخدمي Tariqi (المسافرين): التطبيق لا يعمل بالخلفية مطلقاً ولا يتتبع موقعك عند غلق التطبيق. قراءة الموقع تتم فقط في الواجهة (Foreground) وأثناء البحث النشط عن المحطات لتوفير طاقة بطارية هاتفك بالكامل."
          ]
        },
        {
          title: "3. كيف نستخدم بياناتك ونحميها",
          content: "نستخدم البريد الإلكتروني والموقع الجغرافي المسجل فقط لتطوير وتسهيل تنقلك اليومي عبر شوارع ومدن الجزائر. خصوصيتك فوق كل اعتبار. لا نقوم إطلاقاً ببيع، تأجير، تداول، أو مشاركة بريدك الإلكتروني أو مساراتك الجغرافية مع أي شركات إعلانية أو جهات خارجية تحت أي ظرف. جميع عمليات البحث تُعالج لحظياً وبأعلى معايير الأمان دون تخرين طويل الأمد.",
          bullets: []
        },
        {
          title: "4. الامتثال للقوانين الجزائرية لحماية البيانات",
          content: "تم تصميم وتطوير شريكي تماشياً مع القوانين والأنظمة السارية في الجزائر، ولا سيما القانون رقم 18-07 المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي، مما يضمن احتراماً تاماً لسلامتكم وبياناتكم.",
          bullets: []
        },
        {
          title: "5. خيارات المستخدم وحقوقه",
          content: "أنت صاحب القرار وصاحب السيادة الكاملة على بياناتك:",
          bullets: [
            "صلاحيات الموقع: يمكنك تفعيل أو إلغاء صلاحية الوصول إلى موقعك الجغرافي في أي وقت من خلال إعدادات نظام تشغيل هاتفك.",
            "خصوصية البحث المحفوظة: تُخزن سجلات البحث عن المحطات محلياً على جهازك وليست مربوطة بهوية شخصية محددة."
          ]
        },
        {
          title: "6. التواصل والدعم",
          content: "إذا كانت لديك أي استفسارات أو أسئلة بخصوص سياسة الخصوصية الخاصة بنا:",
          bullets: [
            "البريد الإلكتروني: contact@chriki.com",
            "للتواصل والتعاون: dev@chriki.com"
          ]
        }
      ],
      back: "العودة للرئيسية"
    }
  };

  const curr = data[lang];

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 md:py-20 animate-fade-in text-slate-800">
      {/* Back Button */}
      <button
        onClick={() => { setView("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        className="mb-8 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700 cursor-pointer"
      >
        <span>{lang === "ar" ? "←" : "←"}</span>
        <span>{curr.back}</span>
      </button>

      {/* Header */}
      <div className="border-b border-slate-100 pb-8 text-left rtl:text-right">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 leading-tight">
          {curr.title}
        </h1>
        <p className="mt-2 text-sm font-semibold text-emerald-600">
          {curr.updated}
        </p>
        <p className="mt-6 text-base leading-relaxed text-slate-600">
          {curr.intro}
        </p>
      </div>

      {/* Sections */}
      <div className="mt-10 space-y-10 text-left rtl:text-right">
        {curr.sections.map((sect, i) => (
          <div key={i} className="group relative">
            <h2 className="text-xl font-bold text-slate-900 border-l-4 rtl:border-l-0 rtl:border-r-4 border-emerald-500 pl-3 rtl:pl-0 rtl:pr-3 transition group-hover:border-emerald-600">
              {sect.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {sect.content}
            </p>
            {sect.bullets.length > 0 && (
              <ul className="mt-4 space-y-2.5 rtl:mr-2">
                {sect.bullets.map((bull, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    <span className="leading-relaxed">{bull}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "ar" | "fr">("en");
  const [view, setView] = useState<"home" | "privacy">("home");

  const t = translations[lang];

  const dynamicNavLinks = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.howItWorks, href: "#how" },
    { label: t.nav.cities, href: "#cities" },
    { label: t.nav.gps, href: "#gps" },
  ];

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className={`min-h-screen overflow-x-hidden bg-white text-slate-900 ${lang === "ar" ? "font-arabic" : ""}`}>
      {/* ===== Navbar ===== */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <button onClick={() => { setView("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-left rtl:text-right cursor-pointer focus:outline-none">
            <Logo />
          </button>
          
          <nav className="hidden items-center gap-8 md:flex">
            {dynamicNavLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setView("home")}
                className="text-sm font-medium text-slate-600 transition hover:text-emerald-700"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            {/* Desktop Language Switcher */}
            <div className="flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50/50 p-1 text-xs text-slate-600">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1.5 transition-all ${lang === "en" ? "bg-white font-bold text-emerald-700 shadow-sm" : "hover:text-slate-900"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("fr")}
                className={`rounded-full px-3 py-1.5 transition-all ${lang === "fr" ? "bg-white font-bold text-emerald-700 shadow-sm" : "hover:text-slate-900"}`}
              >
                FR
              </button>
              <button
                onClick={() => setLang("ar")}
                className={`rounded-full px-3.5 py-1.5 transition-all font-arabic ${lang === "ar" ? "bg-white font-bold text-emerald-700 shadow-sm" : "hover:text-slate-900"}`}
              >
                عربي
              </button>
            </div>

            <a
              href="#download"
              className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700"
            >
              {t.nav.getApp}
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 md:hidden"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              {dynamicNavLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => { setView("home"); setMenuOpen(false); }}
                  className="text-sm font-medium text-slate-600 hover:text-emerald-700"
                >
                  {l.label}
                </a>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="mt-2 flex items-center justify-around rounded-xl border border-slate-100 bg-slate-50/50 p-1 text-xs">
                <button
                  onClick={() => { setLang("en"); setMenuOpen(false); }}
                  className={`flex-1 rounded-lg py-2 text-center transition-all ${lang === "en" ? "bg-white font-bold text-emerald-700 shadow-sm" : "text-slate-600"}`}
                >
                  English
                </button>
                <button
                  onClick={() => { setLang("fr"); setMenuOpen(false); }}
                  className={`flex-1 rounded-lg py-2 text-center transition-all ${lang === "fr" ? "bg-white font-bold text-emerald-700 shadow-sm" : "text-slate-600"}`}
                >
                  Français
                </button>
                <button
                  onClick={() => { setLang("ar"); setMenuOpen(false); }}
                  className={`flex-1 rounded-lg py-2 text-center transition-all font-arabic ${lang === "ar" ? "bg-white font-bold text-emerald-700 shadow-sm" : "text-slate-600"}`}
                >
                  العربية
                </button>
              </div>

              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-full bg-emerald-600 py-3 text-center text-sm font-semibold text-white shadow-md"
              >
                {t.nav.getApp}
              </a>
            </div>
          </div>
        )}
      </header>

      {view === "home" ? (
        <>
          {/* ===== Hero ===== */}
          <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-white" />
        <div className={`absolute -z-10 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl ${lang === "ar" ? "-right-32" : "-left-32"} -top-32`} />
        <div className={`absolute -z-10 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl ${lang === "ar" ? "left-20" : "right-20"} top-40`} />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm">
              {t.hero.badge}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-3xl xl:text-6xl">
              {lang === "ar" ? "" : t.hero.titlePre}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                {t.hero.titleSpan}
              </span>
              {lang === "ar" ? t.hero.titlePre : ""}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-600">
              <span className="font-arabic font-bold">شريكي</span> {t.hero.desc}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.chriki.chriki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800"
              >
                <span className="text-2xl">▶</span>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] opacity-70">{t.hero.getItOn}</span>
                  <span className="block text-sm font-semibold">{t.hero.googlePlay}</span>
                </span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div>
                <span className="block text-2xl font-extrabold text-slate-900">8+</span>
                {t.hero.stats.citiesCovered}
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <span className="block text-2xl font-extrabold text-slate-900">100%</span>
                {t.hero.stats.freeToUse}
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <span className="block text-2xl font-extrabold text-slate-900">GPS</span>
                {t.hero.stats.comingSoon}
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ===== Logos / marquee ===== */}
      <section className="border-y border-slate-100 bg-slate-50/60 py-5">
        <div className="mx-auto max-w-6xl overflow-hidden px-5">
          <div className="flex w-max animate-marquee gap-10 text-sm font-semibold text-slate-400">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-10 whitespace-nowrap">
                {t.marquee.map((m, idx) => (
                  <span key={idx}>{m}</span>
                ))}
                {t.marquee.map((m, idx) => (
                  <span key={`dup-${idx}`}>{m}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            {t.features.label}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.features.heading}
          </h2>
          <p className="mt-4 text-slate-600">
            {t.features.sub}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((f) => (
            <div
              key={f.title}
              className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl transition group-hover:bg-emerald-100">
                {f.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section id="how" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              {t.how.label}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t.how.heading}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {t.how.steps.map((s) => (
              <div key={s.n} className="relative rounded-3xl border border-white/10 bg-white/5 p-7">
                <span className="font-arabic text-5xl font-black text-emerald-500/40">{s.n}</span>
                <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Live GPS section ===== */}
      <section id="gps" className="relative overflow-hidden py-20 border-y border-slate-100 bg-slate-50/30">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div className="text-slate-900">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-850">
              <span className="relative flex h-2 w-2">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              {t.gps.badge}
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t.gps.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-700">
              {t.gps.desc}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
              {t.gps.desc2}
            </p>
            <ul className="mt-6 space-y-3">
              {t.gps.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4 text-xs text-slate-600 max-w-md flex items-start gap-2.5 shadow-sm">
              <span className="text-sm">⚡</span>
              <p className="leading-relaxed">
                {t.gps.betaNote}
              </p>
            </div>
          </div>

          {/* Map illustration */}
          <div className="relative">
            {/* Background ambient glow */}
            <div className="absolute -inset-4 rounded-[40px] bg-emerald-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900/50 p-2.5 shadow-2xl backdrop-blur-md">
              <div className="relative h-[440px] overflow-hidden rounded-2xl bg-slate-950/90 select-none">
                {/* Simulated Street Grid */}
                <svg className="absolute inset-0 h-full w-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>

                {/* SVG Route Paths */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="none" fill="none">
                  {/* Subtle Map Roads */}
                  <path d="M-20,100 H420" stroke="rgba(255,255,255,0.07)" strokeWidth="12" strokeLinecap="round" />
                  <path d="M-20,280 H420" stroke="rgba(255,255,255,0.07)" strokeWidth="8" strokeLinecap="round" />
                  <path d="M120,-20 V420" stroke="rgba(255,255,255,0.07)" strokeWidth="10" strokeLinecap="round" />
                  <path d="M280,-20 V420" stroke="rgba(255,255,255,0.07)" strokeWidth="14" strokeLinecap="round" />
                  
                  {/* Main Route Highlight (Line 65 path) */}
                  <path
                    d="M 40,320 C 120,320 120,160 220,160 C 280,160 280,60 360,60"
                    stroke="#10b981"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.15"
                  />
                  <path
                    d="M 40,320 C 120,320 120,160 220,160 C 280,160 280,60 360,60"
                    stroke="#34d399"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="8 8"
                    className="animate-dash"
                  />

                  {/* Secondary Line (Metro Route) */}
                  <path
                    d="M 120,20 V 380"
                    stroke="#0284c7"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="5 5"
                    opacity="0.4"
                  />
                </svg>

                {/* --- Map HUD Overlay Top (Station Title & Live Indicator) --- */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/5 bg-slate-900/60 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-base">📍</span>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-none">{t.gps.stationName}</h4>
                      <p className="mt-0.5 text-[9px] text-slate-400 font-semibold uppercase tracking-wider">{t.gps.activeText}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-bold text-red-400 ring-1 ring-red-500/25">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
                    </span>
                    LIVE
                  </div>
                </div>

                {/* --- Interactive Map Pins & Vehicles --- */}
                
                {/* 1. Stop Marker (Place des Martyrs Hub) */}
                <div className="absolute left-[52%] top-[38%] -translate-x-1/2 -translate-y-1/2">
                  <div className="group relative">
                    <span className="pulse-ring absolute -inset-2.5 rounded-full bg-emerald-400/45" />
                    <div className="relative h-5 w-5 rounded-full border-2 border-white bg-emerald-500 shadow-md transition group-hover:scale-110" />
                    {/* Tooltip */}
                    <div className="absolute bottom-6 left-1/2 min-w-[100px] -translate-x-1/2 rounded bg-slate-900/95 px-1.5 py-0.5 text-center text-[10px] font-bold text-white shadow-lg border border-white/10 opacity-95">
                      {t.gps.stationName}
                    </div>
                  </div>
                </div>

                {/* 2. Main Pulse Moving Bus (Line 65) */}
                <div className="absolute left-[38%] top-[55%] -translate-x-1/2 -translate-y-1/2">
                  <div className="group relative flex flex-col items-center">
                    {/* Bus Label Badge */}
                    <div className="mb-1 rounded bg-emerald-500 px-1.5 py-0.5 text-[10px] font-bold text-white shadow-md ring-1 ring-white/10 flex items-center gap-1">
                      <span>🚌</span>
                      <span>{t.gps.bus65}</span>
                    </div>
                    <div className="relative">
                      <span className="pulse-ring absolute -inset-3.5 rounded-full bg-emerald-400/50" />
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-emerald-600 shadow-xl ring-4 ring-emerald-400/20 text-md">
                        🚌
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Metro Pin Moving on Blue Line */}
                <div className="absolute left-[26%] top-[20%] -translate-x-1/2 -translate-y-1/2">
                  <div className="group relative flex flex-col items-center">
                    <div className="mb-1 rounded bg-sky-600 px-1 py-0.5 text-[9px] font-bold text-white shadow-md">
                      {t.gps.metroL1}
                    </div>
                    <div className="relative">
                      <span className="pulse-ring absolute -inset-2.5 rounded-full bg-sky-400/40" />
                      <div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-sky-700 shadow-xl text-xs">
                        🚇
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. User Current Location Dot */}
                <div className="absolute left-[70%] top-[72%] -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <span className="absolute -inset-6 rounded-full bg-indigo-500/15 animate-pulse" />
                    <span className="absolute -inset-3 rounded-full bg-indigo-500/30 animate-pulse" />
                    <div className="relative h-3.5 w-3.5 rounded-full border-2 border-white bg-indigo-500 shadow-lg" />
                  </div>
                </div>

                {/* --- Live Arrival Information HUD Bottom --- */}
                <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-slate-900/85 p-3 shadow-xl backdrop-blur-md">
                  <div className="mb-2 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                    <span>{t.gps.liveFeed}</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {t.gps.activeText}
                    </span>
                  </div>
                  
                  <div className="space-y-1.5">
                    {/* Line 65 Item */}
                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-1.5 transition hover:bg-white/10">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500/20 text-xs">
                          🚌
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white leading-none">{t.gps.bus65}</p>
                          <p className="mt-1 text-[9px] text-slate-400 leading-none">{t.gps.incoming}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-400 ring-1 ring-emerald-500/20">
                          {t.gps.onTime}
                        </span>
                        <p className="text-xs font-extrabold text-emerald-400">{t.gps.etaVal}</p>
                      </div>
                    </div>

                    {/* Metro L1 Item */}
                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-1.5 transition hover:bg-white/10">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-sky-500/20 text-xs">
                          🚇
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white leading-none">{t.gps.metroL1}</p>
                          <p className="mt-1 text-[9px] text-slate-400 leading-none">{t.gps.incoming}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-400 ring-1 ring-emerald-500/20">
                          {t.gps.onTime}
                        </span>
                        <p className="text-xs font-extrabold text-sky-400 font-sans">5 min</p>
                      </div>
                    </div>

                    {/* Line 16 Item */}
                    <div className="flex items-center justify-between rounded-lg bg-white/5 p-1.5 transition hover:bg-white/10">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-500/20 text-xs">
                          🚌
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white leading-none">{t.gps.line16}</p>
                          <p className="mt-1 text-[9px] text-slate-400 leading-none">{t.gps.incoming}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="rounded-full bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-amber-400 ring-1 ring-amber-500/20">
                          {t.gps.delayed}
                        </span>
                        <p className="text-xs font-extrabold text-amber-400 font-sans">12 min</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Cities ===== */}
      <section id="cities" className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            {t.coverage.label}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.coverage.heading}
          </h2>
          <p className="mt-4 text-slate-600">
            {t.coverage.sub}
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {t.coverage.cities.map((c) => (
            <span
              key={c}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
            >
              📍 {c}
            </span>
          ))}
          <span className="rounded-full border border-dashed border-emerald-300 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-700">
            {t.coverage.more}
          </span>
        </div>
      </section>

      {/* ===== Download CTA ===== */}
      <section id="download" className="mx-auto max-w-6xl px-5 pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-emerald-800 px-7 py-14 text-center text-white shadow-2xl shadow-emerald-600/30">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">
            {lang === "ar" ? "" : t.download.downloadText}{" "}
            <span className="font-arabic">شريكي</span>{" "}
            {lang === "ar" ? t.download.downloadText : t.download.heading}
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-emerald-50/90">
            {t.download.desc}
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.chriki.chriki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800"
            >
              <span className="text-2xl">▶</span>
              <span className="text-left leading-tight">
                <span className="block text-[10px] opacity-60">{t.download.getItOn}</span>
                <span className="block text-sm font-bold">{t.hero.googlePlay}</span>
              </span>
            </a>
          </div>
        </div>
      </section>
        </>
      ) : (
        <PrivacyPolicy lang={lang} setView={setView} />
      )}

      {/* ===== Footer ===== */}
      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
          <button onClick={() => { setView("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="cursor-pointer focus:outline-none text-left rtl:text-right">
            <Logo />
          </button>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            {dynamicNavLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setView("home")} className="hover:text-emerald-700">
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setView("privacy"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="hover:text-emerald-700 cursor-pointer focus:outline-none font-semibold text-slate-500 hover:text-emerald-700 transition"
            >
              {t.footer.privacy}
            </button>
            <a href="mailto:contact@chriki.com" className="hover:text-emerald-700">
              {t.footer.contact}
            </a>
          </nav>
        </div>
        <div className="border-t border-slate-200/60 py-5 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} شريكي · Chriki — {lang === "en" ? t.footer.madeWith : (lang === "fr" ? t.footer.madeWith : t.footer.madeWith)}
        </div>
      </footer>
    </div>
  );
}
