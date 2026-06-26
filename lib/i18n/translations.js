// Centralised UI copy for every supported language.
// Keep the shape identical across locales so components can read the same keys.

export const LANGUAGES = [
  { code: "uk", label: "UA", htmlLang: "uk" },
  { code: "en", label: "EN", htmlLang: "en" },
  { code: "ru", label: "RU", htmlLang: "ru" },
];

export const DEFAULT_LANG = "uk";

export const translations = {
  uk: {
    nav: {
      howItWorks: "Як це працює",
      pricing: "Тарифи",
      faq: "FAQ",
      apply: "Подати заявку",
      language: "Мова",
    },
    hero: {
      badge: "16 спеціалістів вже з нами",
      titlePre: "Платформа",
      titleHighlight: "для психологів та терапевтів,",
      titlePost: "яка говорить відверто",
      subtitle:
        "Ми — платформа для тих, чия місія у житті допомагати іншим. Тому, наша ціль надати спеціалістам найзручніші інструменти для їх роботи. Ви отримуєте чесну модель без постійних комісій та сюрпризів.",
      ctaPrimary: "Подати заявку",
      ctaSecondary: "Чим ми відрізняємося?",
      stats: [
        { value: "0%", label: "комісії з ваших сессій — назавжди" },
        { value: "до 3 днів", label: "ручна верифікація спеціаліста" },
        { value: "25", label: "місць залишилося" },
      ],
    },
    clientDiscovery: {
      titleLine1: "Ви маєте бути там,",
      titleLine2: "де клієнти шукають",
      subtitle:
        "Vidverto — це не просто набір інструментів для роботи. Це місце, куди приходять люди, яким потрібна допомога. І де вони знаходять вас.",
      cta: "Подати заявку",
      indexNote: "Ваш профіль також індексується в Google",
      steps: [
        {
          num: "01",
          title: "Клієнт описує свій запит",
          description:
            "З чим хоче працювати, який формат, бюджет. Або просто переглядає каталог",
        },
        {
          num: "02",
          title: "Знаходить вас",
          description:
            "Ваш профіль з'являється у відповідних результатах. Клієнт бачить спеціалізацію, метод, ціну, відгуки",
        },
        {
          num: "03",
          title: "Сесія відбувається тут",
          description:
            "Відеодзвінок, оплата, нотатки — все вбудовано. Вам не треба нічого координувати руками.",
        },
      ],
    },
    problem: {
      heading: "Будемо відвертими — ви, напевно, вже з цим стикались",
      subheading:
        "Ми не будемо робити вигляд, що на ринку все добре. Ось що чуємо від терапевтів найчастіше:",
      items: [
        {
          title: "«Умови? Десь у договорі»",
          description:
            "Ніхто чітко не пояснює, скільки і за що. Умови змінюються, а ви дізнаєтесь тоді, коли гроші вже списані. Відчуття що правила пишуть не для вас — і це не випадково.",
        },
        {
          title: "«З кожної сесії — назавжди»",
          description:
            "Платформа забирає відсоток кожного разу. Навіть з клієнтами, яких ви ведете роками і знайшли самостійно. Чим довше клієнт — тим більше заробляє платформа. Поміркуйте, чиї інтереси вона насправді захищає.",
        },
        {
          title: "«Зручності немає, є кнопки»",
          description:
            "Є кнопка «відеодзвінок» і щось схоже на розклад. Але повноцінної CRM немає, оплати треба збирати окремо, нотатки — у телефоні. Інструмент є. Допомога — ні.",
        },
      ],
    },
    howItWorks: {
      heading: "Ось як ми влаштовані. Без дрібного шрифту.",
      principles: [
        {
          title: "Ваші клієнти — ваші. Крапка.",
          description:
            "Клієнт, якого ви ведете — ваш. Ми не беремо відсоток з ваших постійних сесій, не блокуємо доступ до їхньої історії і не використовуємо ваші дані як важіль. Якщо ви вирішите піти — забираєте все з собою. Ми так і задумали.",
        },
        {
          title: "Підписка замість нескінченних комісій",
          description:
            "Ви платите фіксовану суму на місяць — і ведете стільки сесій, скільки хочете. Наш дохід не залежить від того, скільки разів клієнт до вас прийде. Тому у нас немає причин зацікавлювати в тому, щоб терапія тривала довше, ніж потрібно.",
        },
        {
          title: "Одноразовий збір — лише за нового клієнта",
          descBefore: "Коли платформа приводить вам нового клієнта, ми беремо ",
          descBold: "50% від першої сесії",
          descAfter:
            " — один раз. Після цього цей клієнт ваш, і ми більше не з'являємось у ваших розрахунках. Знайшли клієнта самі — не платите взагалі нічого.",
        },
      ],
    },
    pricing: {
      heading: "Відверті ціни. Буквально.",
      subheading:
        "Ми розмістили всі цифри на одній сторінці. Тому що так і має бути.",
      perMonth: "міс",
      currency: "UAH",
      mostPopular: "Найпопулярніший",
      noHidden:
        "Немає прихованих комісій. Немає відсотків від постійних сесій. Немає сюрпризів.",
      features: {
        clients1: "1 клієнт (завжди в записах)",
        clients15: "До 15 клієнтів",
        clientsUnlimited: "Необмежена кількість клієнтів",
        video: "Відеодзвінки",
        booking: "Онлайн-запис",
        payments: "Оплата через платформу",
        crm: "CRM і нотатки",
        referral: "Реферальна програма",
        priority: "Пріоритет у каталозі",
        analytics: "Аналітика",
      },
      plans: [
        {
          name: "Безкоштовно",
          price: "0",
          period: "назавжди",
          description: "Щоб познайомитись з платформою",
          cta: "Почати безкоштовно",
        },
        {
          name: "Premium",
          price: "499",
          description: "Для активної практики",
          cta: "Подати заявку",
        },
        {
          name: "Unlimited",
          price: "899",
          description: "Без обмежень і з повним набором",
          cta: "Подати заявку",
        },
      ],
      lifetime: {
        title: "Довічний доступ — 8 990 UAH",
        once: "одноразово",
        description:
          "Усе з Unlimited — назавжди. Платите один раз і більше ніколи не відкриваєте розділ «Підписка».",
        gift:
          "🎁 Перші 25 терапевтів на платформі отримують довічний доступ безкоштовно — як подяка за те, що повірили нам першими.",
        cta: "Отримати доступ",
      },
    },
    verification: {
      heading: "Будемо чесними щодо верифікації: вона займає час",
      intro1:
        "Ми перевіряємо кожного спеціаліста вручну. Без автоматики, без «завантажте диплом і почніть за 5 хвилин». Це свідоме рішення — і ми хочемо пояснити чому.",
      intro2:
        "Клієнти, які приходять на Vidverto, довіряють нам вибір фахівця в один із найвразливіших моментів свого життя. Ми не можемо дозволити собі помилитись. І ви, напевно, теж не хочете бути на платформі, де поряд із вами — хто завгодно.",
      criteriaLabel: "Критерії верифікації",
      criteria: [
        "Вища психологічна або медична освіта (диплом державного зразка)",
        "Підтверджена спеціалізація або доказовий метод роботи",
        "Досвід практики від 1 року",
        "Проходження або наявність супервізії",
        "Відсутність задокументованих порушень етичного кодексу",
      ],
      stepsLabel: "Як відбувається",
      steps: [
        "Заявка через Telegram Bot",
        "Ви надсилаєте документи (диплом, підтвердження спеціалізації)",
        "Ми відповідаємо протягом 3 робочих днів",
        "Якщо треба щось уточнити — напишемо самі, не залишимо вас гадати",
      ],
    },
    referral: {
      heading:
        "Ваші клієнти приводять нових клієнтів. А ви — просто ведете сесії.",
      intro:
        "Кожен ваш клієнт на Vidverto отримує особисте реферальне посилання. Коли він ділиться ним з другом — і той записується на першу сесію — клієнт отримує безкоштовну сесію у вас. Скільки людей треба запросити для цього, вирішуєте ви самі.",
      examplesLabel: "Приклади налаштування",
      tableHead: { therapist: "Терапевт", threshold: "Поріг", logic: "Логіка" },
      examples: [
        {
          type: "Новий спеціаліст",
          threshold: "1–2 клієнти",
          logic: "Швидкий старт і нові обличчя",
        },
        {
          type: "Практик із базою",
          threshold: "2–3 клієнти",
          logic: "Стабільний органічний приріст",
        },
        {
          type: "Завантажений спеціаліст",
          threshold: "4–5 клієнтів",
          logic: "Мінімальні витрати, максимальний контроль",
        },
      ],
      tableNote: "Програма вмикається і вимикається в один клік. Ви керуєте — ми рахуємо.",
      statsLabel: "Відверто про цифри",
      statsIntro: "Ми самі здивувались, коли порахували.",
      costLabel: "Витрати на програму",
      costValue: "0.5–1.5%",
      costUnit: "місячного доходу",
      costNote: "у вигляді безкоштовних сесій",
      gainLabel: "Додатковий дохід від нових клієнтів",
      gainValue: "15–40%",
      gainUnit: "додаткового доходу",
      gainNote: "від нових клієнтів, яких привели реферери",
      exampleLabel: "Простий приклад",
      examplePre: "Терапевт із доходом ",
      exampleIncome: "30 000 UAH/місяць",
      exampleMid: " витрачає на безкоштовні сесії ",
      exampleCost: "150–450 UAH",
      exampleMid2: ". І отримує додатково ",
      exampleExtra: "4 500–12 000 UAH",
      examplePost: " від нових клієнтів.",
    },
    forFirstMembers: {
      badge: "Лише 25 місць",
      heading: "Ми шукаємо перших 25",
      intro1:
        "Не «перші користувачі» у маркетинговому сенсі. А люди, які будуть формувати платформу разом із нами — давати зворотний зв'язок, говорити що працює, а що ні, і бачити як все будується зсередини.",
      intro2: "Якщо це звучить як щось, у чому ви хочете бути, — ми раді.",
      perks: [
        "Довічний безкоштовний доступ до базового плану",
        "Пріоритетне розміщення в каталозі з першого дня",
        "Прямий зв'язок із командою",
        "Статус «Засновник платформи» у профілі — назавжди",
      ],
      cta: "Подати заявку",
      seatsLabel: "місць",
    },
    faq: {
      heading: "Питання, які ви вже хочете поставити",
      subheading: "Відповідаємо так само чесно, як і в усьому іншому.",
      items: [
        {
          q: "Коли запуститься платформа?",
          a: "Відкритий запуск — у найближчі місяці. Зараз збираємо заявки для закритої бети. Ви отримаєте доступ першими і зможете налаштувати профіль до того, як прийдуть перші клієнти.",
        },
        {
          q: "Я вже працюю на іншій платформі. Чи можна бути на двох?",
          a: "Так, ніяких обмежень і ніяких питань з нашого боку. Паралельна присутність на кількох платформах — нормальна практика.",
        },
        {
          q: "Що буде з моїми даними, якщо я вирішу піти?",
          a: "Ваша історія, нотатки, дані клієнтів — ваші. Ми надаємо повний експорт у будь-який момент. Ніякого локапу.",
        },
        {
          q: "Чи можу я вести клієнтів, яких знайшов сам — без збору?",
          a: "Так. 50% від першої сесії стягується лише коли клієнта привела платформа через каталог або пошук. Клієнти з вашої особистої мережі — без жодних зборів.",
        },
        {
          q: "Скільки часу займає верифікація?",
          a: "2–3 робочих дні після отримання документів. Якщо треба щось уточнити — ми напишемо першими, а не відправимо автоматичний відказ.",
        },
        {
          q: "Що якщо платформа мені не підійде?",
          a: "Скасувати підписку можна будь-коли, в один клік. Ніяких штрафів, ніяких прихованих умов розірвання.",
        },
        {
          q: "Які методи терапії ви приймаєте?",
          a: "Ми орієнтуємось на доказові підходи: КПТ, DBT, ACT, EMDR, схема-терапія, наративна практика. Якщо ваш основний метод не в цьому списку — напишіть при подачі заявки, розглядаємо кожен випадок окремо і відверто пояснюємо рішення.",
        },
      ],
    },
    finalCta: {
      heading: "Якщо це резонує — будемо раді познайомитись",
      subtitle:
        "Подайте заявку через Telegram. Ми відповімо особисто — не бот, не автовідповідь.",
      cta: "Подати заявку через Telegram",
      note: "Безкоштовно. Без зобов'язань. Відповідаємо протягом 3 робочих днів.",
    },
    footer: {
      tagline: "Платформа для онлайн-терапевтів. Прозора тарифікація, чесні умови.",
      contactsLabel: "Контакти",
      docsLabel: "Документи",
      terms: "Умови використання",
      privacy: "Політика конфіденційності",
      rights: "Всі права захищено.",
    },
  },

  en: {
    nav: {
      howItWorks: "How it works",
      pricing: "Pricing",
      faq: "FAQ",
      apply: "Apply",
      language: "Language",
    },
    hero: {
      badge: "16 specialists are already with us",
      titlePre: "A platform",
      titleHighlight: "for psychologists and therapists",
      titlePost: "that speaks openly",
      subtitle:
        "We're a platform for those whose life mission is to help others. That's why our goal is to give specialists the most convenient tools for their work. You get an honest model — no recurring commissions, no surprises.",
      ctaPrimary: "Apply",
      ctaSecondary: "How are we different?",
      stats: [
        { value: "0%", label: "commission on your sessions — forever" },
        { value: "up to 3 days", label: "manual specialist verification" },
        { value: "25", label: "seats remaining" },
      ],
    },
    clientDiscovery: {
      titleLine1: "You should be where",
      titleLine2: "clients are looking",
      subtitle:
        "Vidverto isn't just a set of work tools. It's a place people come to when they need help. And where they find you.",
      cta: "Apply",
      indexNote: "Your profile is also indexed on Google",
      steps: [
        {
          num: "01",
          title: "The client describes their request",
          description:
            "What they want to work on, the format, the budget. Or they simply browse the catalog",
        },
        {
          num: "02",
          title: "They find you",
          description:
            "Your profile appears in the relevant results. The client sees your specialization, method, price, and reviews",
        },
        {
          num: "03",
          title: "The session happens right here",
          description:
            "Video call, payment, notes — all built in. You don't have to coordinate anything by hand.",
        },
      ],
    },
    problem: {
      heading: "Let's be honest — you've probably run into this already",
      subheading:
        "We won't pretend everything's fine in this market. Here's what we hear from therapists most often:",
      items: [
        {
          title: "“The terms? Somewhere in the contract”",
          description:
            "Nobody clearly explains how much and what for. Terms change, and you find out only after the money's been taken. It feels like the rules weren't written for you — and that's no accident.",
        },
        {
          title: "“A cut of every session — forever”",
          description:
            "The platform takes a percentage every single time. Even with clients you've worked with for years and found yourself. The longer the client stays, the more the platform earns. Think about whose interests it actually protects.",
        },
        {
          title: "“There's no convenience, just buttons”",
          description:
            "There's a “video call” button and something resembling a schedule. But there's no proper CRM, payments have to be collected separately, notes live on your phone. The tool exists. The help doesn't.",
        },
      ],
    },
    howItWorks: {
      heading: "Here's how we're built. No fine print.",
      principles: [
        {
          title: "Your clients are yours. Period.",
          description:
            "A client you work with is yours. We don't take a percentage of your recurring sessions, we don't block access to their history, and we don't use your data as leverage. If you decide to leave — you take everything with you. That's by design.",
        },
        {
          title: "A subscription instead of endless commissions",
          description:
            "You pay a fixed monthly amount — and run as many sessions as you want. Our revenue doesn't depend on how many times a client comes back. So we have no reason to make therapy last longer than it needs to.",
        },
        {
          title: "A one-time fee — only for a new client",
          descBefore: "When the platform brings you a new client, we take ",
          descBold: "50% of the first session",
          descAfter:
            " — once. After that the client is yours, and we no longer show up in your numbers. Found a client yourself? You pay nothing at all.",
        },
      ],
    },
    pricing: {
      heading: "Open pricing. Literally.",
      subheading: "We put every number on a single page. Because that's how it should be.",
      perMonth: "mo",
      currency: "UAH",
      mostPopular: "Most popular",
      noHidden:
        "No hidden commissions. No percentage of recurring sessions. No surprises.",
      features: {
        clients1: "1 client (always in your records)",
        clients15: "Up to 15 clients",
        clientsUnlimited: "Unlimited clients",
        video: "Video calls",
        booking: "Online booking",
        payments: "Payments through the platform",
        crm: "CRM and notes",
        referral: "Referral program",
        priority: "Catalog priority",
        analytics: "Analytics",
      },
      plans: [
        {
          name: "Free",
          price: "0",
          period: "forever",
          description: "To get to know the platform",
          cta: "Start for free",
        },
        {
          name: "Premium",
          price: "499",
          description: "For an active practice",
          cta: "Apply",
        },
        {
          name: "Unlimited",
          price: "899",
          description: "No limits, with the full toolkit",
          cta: "Apply",
        },
      ],
      lifetime: {
        title: "Lifetime access — 8,990 UAH",
        once: "one-time",
        description:
          "Everything in Unlimited — forever. Pay once and never open the “Subscription” section again.",
        gift:
          "🎁 The first 25 therapists on the platform get lifetime access for free — as a thank-you for trusting us first.",
        cta: "Get access",
      },
    },
    verification: {
      heading: "Let's be honest about verification: it takes time",
      intro1:
        "We review every specialist by hand. No automation, no “upload your diploma and start in 5 minutes.” It's a deliberate choice — and we want to explain why.",
      intro2:
        "The clients who come to Vidverto trust us to choose a specialist for them in one of the most vulnerable moments of their lives. We can't afford to get it wrong. And you probably don't want to be on a platform where just anyone is next to you.",
      criteriaLabel: "Verification criteria",
      criteria: [
        "Higher education in psychology or medicine (state-recognized diploma)",
        "A confirmed specialization or evidence-based method",
        "At least 1 year of practice",
        "Ongoing or completed supervision",
        "No documented breaches of the code of ethics",
      ],
      stepsLabel: "How it works",
      steps: [
        "Application via the Telegram Bot",
        "You send your documents (diploma, proof of specialization)",
        "We respond within 3 business days",
        "If something needs clarifying, we'll reach out — we won't leave you guessing",
      ],
    },
    referral: {
      heading: "Your clients bring in new clients. And you — you just run sessions.",
      intro:
        "Every one of your clients on Vidverto gets a personal referral link. When they share it with a friend — and that friend books a first session — your client gets a free session with you. How many people they need to invite for that is entirely up to you.",
      examplesLabel: "Configuration examples",
      tableHead: { therapist: "Therapist", threshold: "Threshold", logic: "Logic" },
      examples: [
        {
          type: "New specialist",
          threshold: "1–2 clients",
          logic: "Quick start and fresh faces",
        },
        {
          type: "Practitioner with a base",
          threshold: "2–3 clients",
          logic: "Steady organic growth",
        },
        {
          type: "Fully booked specialist",
          threshold: "4–5 clients",
          logic: "Minimal cost, maximum control",
        },
      ],
      tableNote: "Turn the program on and off in one click. You're in control — we do the counting.",
      statsLabel: "Honest about the numbers",
      statsIntro: "We were surprised ourselves when we ran the math.",
      costLabel: "Cost of the program",
      costValue: "0.5–1.5%",
      costUnit: "of monthly income",
      costNote: "in the form of free sessions",
      gainLabel: "Extra income from new clients",
      gainValue: "15–40%",
      gainUnit: "of additional income",
      gainNote: "from new clients brought in by referrers",
      exampleLabel: "A simple example",
      examplePre: "A therapist earning ",
      exampleIncome: "30,000 UAH/month",
      exampleMid: " spends ",
      exampleCost: "150–450 UAH",
      exampleMid2: " on free sessions. And earns an extra ",
      exampleExtra: "4,500–12,000 UAH",
      examplePost: " from new clients.",
    },
    forFirstMembers: {
      badge: "Only 25 seats",
      heading: "We're looking for the first 25",
      intro1:
        "Not “early users” in the marketing sense. People who will shape the platform alongside us — giving feedback, telling us what works and what doesn't, and seeing how it all gets built from the inside.",
      intro2: "If that sounds like something you want to be part of — we'd be glad.",
      perks: [
        "Lifetime free access to the base plan",
        "Priority catalog placement from day one",
        "A direct line to the team",
        "“Platform Founder” status on your profile — forever",
      ],
      cta: "Apply",
      seatsLabel: "seats",
    },
    faq: {
      heading: "The questions you're already itching to ask",
      subheading: "We answer them just as honestly as we do everything else.",
      items: [
        {
          q: "When does the platform launch?",
          a: "Public launch is in the coming months. Right now we're collecting applications for a closed beta. You'll get access first and can set up your profile before the first clients arrive.",
        },
        {
          q: "I already work on another platform. Can I be on two?",
          a: "Yes — no restrictions and no questions from us. Being on several platforms in parallel is normal practice.",
        },
        {
          q: "What happens to my data if I decide to leave?",
          a: "Your history, notes, and client data are yours. We provide a full export at any time. No lock-up.",
        },
        {
          q: "Can I work with clients I found myself — with no fee?",
          a: "Yes. The 50% first-session fee applies only when the platform brought the client through the catalog or search. Clients from your own network — no fees at all.",
        },
        {
          q: "How long does verification take?",
          a: "2–3 business days after we receive your documents. If something needs clarifying, we'll reach out first rather than send an automatic rejection.",
        },
        {
          q: "What if the platform isn't right for me?",
          a: "You can cancel your subscription anytime, in one click. No penalties, no hidden termination terms.",
        },
        {
          q: "Which therapy methods do you accept?",
          a: "We focus on evidence-based approaches: CBT, DBT, ACT, EMDR, schema therapy, narrative practice. If your main method isn't on this list, mention it when you apply — we review every case individually and explain our decision openly.",
        },
      ],
    },
    finalCta: {
      heading: "If this resonates — we'd love to meet you",
      subtitle:
        "Apply via Telegram. We'll reply personally — not a bot, not an auto-response.",
      cta: "Apply via Telegram",
      note: "Free. No obligations. We respond within 3 business days.",
    },
    footer: {
      tagline: "A platform for online therapists. Transparent pricing, fair terms.",
      contactsLabel: "Contacts",
      docsLabel: "Documents",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      rights: "All rights reserved.",
    },
  },

  ru: {
    nav: {
      howItWorks: "Как это работает",
      pricing: "Тарифы",
      faq: "FAQ",
      apply: "Подать заявку",
      language: "Язык",
    },
    hero: {
      badge: "16 специалистов уже с нами",
      titlePre: "Платформа",
      titleHighlight: "для психологов и терапевтов,",
      titlePost: "которая говорит открыто",
      subtitle:
        "Мы — платформа для тех, чья миссия в жизни — помогать другим. Поэтому наша цель — дать специалистам самые удобные инструменты для работы. Вы получаете честную модель без постоянных комиссий и сюрпризов.",
      ctaPrimary: "Подать заявку",
      ctaSecondary: "Чем мы отличаемся?",
      stats: [
        { value: "0%", label: "комиссии с ваших сессий — навсегда" },
        { value: "до 3 дней", label: "ручная верификация специалиста" },
        { value: "25", label: "мест осталось" },
      ],
    },
    clientDiscovery: {
      titleLine1: "Вы должны быть там,",
      titleLine2: "где ищут клиенты",
      subtitle:
        "Vidverto — это не просто набор инструментов для работы. Это место, куда приходят люди, которым нужна помощь. И где они находят вас.",
      cta: "Подать заявку",
      indexNote: "Ваш профиль также индексируется в Google",
      steps: [
        {
          num: "01",
          title: "Клиент описывает свой запрос",
          description:
            "С чем хочет работать, какой формат, бюджет. Или просто просматривает каталог",
        },
        {
          num: "02",
          title: "Находит вас",
          description:
            "Ваш профиль появляется в подходящих результатах. Клиент видит специализацию, метод, цену, отзывы",
        },
        {
          num: "03",
          title: "Сессия проходит здесь",
          description:
            "Видеозвонок, оплата, заметки — всё встроено. Вам не нужно ничего координировать вручную.",
        },
      ],
    },
    problem: {
      heading: "Будем откровенны — вы наверняка с этим уже сталкивались",
      subheading:
        "Мы не будем делать вид, что на рынке всё хорошо. Вот что чаще всего слышим от терапевтов:",
      items: [
        {
          title: "«Условия? Где-то в договоре»",
          description:
            "Никто чётко не объясняет, сколько и за что. Условия меняются, а вы узнаёте об этом тогда, когда деньги уже списаны. Ощущение, что правила пишут не для вас — и это не случайно.",
        },
        {
          title: "«С каждой сессии — навсегда»",
          description:
            "Платформа забирает процент каждый раз. Даже с клиентами, которых вы ведёте годами и нашли сами. Чем дольше клиент — тем больше зарабатывает платформа. Подумайте, чьи интересы она на самом деле защищает.",
        },
        {
          title: "«Удобства нет, есть кнопки»",
          description:
            "Есть кнопка «видеозвонок» и что-то похожее на расписание. Но полноценной CRM нет, оплату нужно собирать отдельно, заметки — в телефоне. Инструмент есть. Помощи — нет.",
        },
      ],
    },
    howItWorks: {
      heading: "Вот как мы устроены. Без мелкого шрифта.",
      principles: [
        {
          title: "Ваши клиенты — ваши. Точка.",
          description:
            "Клиент, которого вы ведёте — ваш. Мы не берём процент с ваших постоянных сессий, не блокируем доступ к их истории и не используем ваши данные как рычаг. Если вы решите уйти — забираете всё с собой. Мы так и задумали.",
        },
        {
          title: "Подписка вместо бесконечных комиссий",
          description:
            "Вы платите фиксированную сумму в месяц — и ведёте столько сессий, сколько хотите. Наш доход не зависит от того, сколько раз клиент к вам придёт. Поэтому у нас нет причин стремиться к тому, чтобы терапия длилась дольше, чем нужно.",
        },
        {
          title: "Разовый сбор — только за нового клиента",
          descBefore: "Когда платформа приводит вам нового клиента, мы берём ",
          descBold: "50% от первой сессии",
          descAfter:
            " — один раз. После этого клиент ваш, и мы больше не появляемся в ваших расчётах. Нашли клиента сами — не платите вообще ничего.",
        },
      ],
    },
    pricing: {
      heading: "Откровенные цены. Буквально.",
      subheading: "Мы разместили все цифры на одной странице. Потому что так и должно быть.",
      perMonth: "мес",
      currency: "UAH",
      mostPopular: "Самый популярный",
      noHidden:
        "Нет скрытых комиссий. Нет процентов с постоянных сессий. Нет сюрпризов.",
      features: {
        clients1: "1 клиент (всегда в записях)",
        clients15: "До 15 клиентов",
        clientsUnlimited: "Неограниченное количество клиентов",
        video: "Видеозвонки",
        booking: "Онлайн-запись",
        payments: "Оплата через платформу",
        crm: "CRM и заметки",
        referral: "Реферальная программа",
        priority: "Приоритет в каталоге",
        analytics: "Аналитика",
      },
      plans: [
        {
          name: "Бесплатно",
          price: "0",
          period: "навсегда",
          description: "Чтобы познакомиться с платформой",
          cta: "Начать бесплатно",
        },
        {
          name: "Premium",
          price: "499",
          description: "Для активной практики",
          cta: "Подать заявку",
        },
        {
          name: "Unlimited",
          price: "899",
          description: "Без ограничений и с полным набором",
          cta: "Подать заявку",
        },
      ],
      lifetime: {
        title: "Пожизненный доступ — 8 990 UAH",
        once: "разово",
        description:
          "Всё из Unlimited — навсегда. Платите один раз и больше никогда не открываете раздел «Подписка».",
        gift:
          "🎁 Первые 25 терапевтов на платформе получают пожизненный доступ бесплатно — в благодарность за то, что поверили нам первыми.",
        cta: "Получить доступ",
      },
    },
    verification: {
      heading: "Будем честны насчёт верификации: она занимает время",
      intro1:
        "Мы проверяем каждого специалиста вручную. Без автоматики, без «загрузите диплом и начните за 5 минут». Это осознанное решение — и мы хотим объяснить почему.",
      intro2:
        "Клиенты, которые приходят на Vidverto, доверяют нам выбор специалиста в один из самых уязвимых моментов своей жизни. Мы не можем позволить себе ошибиться. И вы наверняка тоже не хотите быть на платформе, где рядом с вами — кто угодно.",
      criteriaLabel: "Критерии верификации",
      criteria: [
        "Высшее психологическое или медицинское образование (диплом государственного образца)",
        "Подтверждённая специализация или доказательный метод работы",
        "Опыт практики от 1 года",
        "Прохождение или наличие супервизии",
        "Отсутствие задокументированных нарушений этического кодекса",
      ],
      stepsLabel: "Как это происходит",
      steps: [
        "Заявка через Telegram Bot",
        "Вы присылаете документы (диплом, подтверждение специализации)",
        "Мы отвечаем в течение 3 рабочих дней",
        "Если нужно что-то уточнить — напишем сами, не оставим вас гадать",
      ],
    },
    referral: {
      heading: "Ваши клиенты приводят новых клиентов. А вы — просто ведёте сессии.",
      intro:
        "Каждый ваш клиент на Vidverto получает личную реферальную ссылку. Когда он делится ею с другом — и тот записывается на первую сессию — клиент получает бесплатную сессию у вас. Сколько людей нужно пригласить для этого, решаете вы сами.",
      examplesLabel: "Примеры настройки",
      tableHead: { therapist: "Терапевт", threshold: "Порог", logic: "Логика" },
      examples: [
        {
          type: "Новый специалист",
          threshold: "1–2 клиента",
          logic: "Быстрый старт и новые лица",
        },
        {
          type: "Практик с базой",
          threshold: "2–3 клиента",
          logic: "Стабильный органический прирост",
        },
        {
          type: "Загруженный специалист",
          threshold: "4–5 клиентов",
          logic: "Минимальные затраты, максимальный контроль",
        },
      ],
      tableNote: "Программа включается и выключается в один клик. Вы управляете — мы считаем.",
      statsLabel: "Откровенно о цифрах",
      statsIntro: "Мы сами удивились, когда посчитали.",
      costLabel: "Затраты на программу",
      costValue: "0.5–1.5%",
      costUnit: "месячного дохода",
      costNote: "в виде бесплатных сессий",
      gainLabel: "Дополнительный доход от новых клиентов",
      gainValue: "15–40%",
      gainUnit: "дополнительного дохода",
      gainNote: "от новых клиентов, которых привели рефереры",
      exampleLabel: "Простой пример",
      examplePre: "Терапевт с доходом ",
      exampleIncome: "30 000 UAH/месяц",
      exampleMid: " тратит на бесплатные сессии ",
      exampleCost: "150–450 UAH",
      exampleMid2: ". И получает дополнительно ",
      exampleExtra: "4 500–12 000 UAH",
      examplePost: " от новых клиентов.",
    },
    forFirstMembers: {
      badge: "Только 25 мест",
      heading: "Мы ищем первых 25",
      intro1:
        "Не «первые пользователи» в маркетинговом смысле. А люди, которые будут формировать платформу вместе с нами — давать обратную связь, говорить, что работает, а что нет, и видеть, как всё строится изнутри.",
      intro2: "Если это звучит как то, частью чего вы хотите быть, — мы рады.",
      perks: [
        "Пожизненный бесплатный доступ к базовому плану",
        "Приоритетное размещение в каталоге с первого дня",
        "Прямая связь с командой",
        "Статус «Основатель платформы» в профиле — навсегда",
      ],
      cta: "Подать заявку",
      seatsLabel: "мест",
    },
    faq: {
      heading: "Вопросы, которые вы уже хотите задать",
      subheading: "Отвечаем так же честно, как и во всём остальном.",
      items: [
        {
          q: "Когда запустится платформа?",
          a: "Открытый запуск — в ближайшие месяцы. Сейчас собираем заявки для закрытой беты. Вы получите доступ первыми и сможете настроить профиль до того, как придут первые клиенты.",
        },
        {
          q: "Я уже работаю на другой платформе. Можно быть на двух?",
          a: "Да, никаких ограничений и никаких вопросов с нашей стороны. Параллельное присутствие на нескольких платформах — нормальная практика.",
        },
        {
          q: "Что будет с моими данными, если я решу уйти?",
          a: "Ваша история, заметки, данные клиентов — ваши. Мы предоставляем полный экспорт в любой момент. Никакого лок-апа.",
        },
        {
          q: "Могу ли я вести клиентов, которых нашёл сам — без сбора?",
          a: "Да. 50% от первой сессии взимается только когда клиента привела платформа через каталог или поиск. Клиенты из вашей личной сети — без каких-либо сборов.",
        },
        {
          q: "Сколько времени занимает верификация?",
          a: "2–3 рабочих дня после получения документов. Если нужно что-то уточнить — мы напишем первыми, а не отправим автоматический отказ.",
        },
        {
          q: "Что если платформа мне не подойдёт?",
          a: "Отменить подписку можно в любой момент, в один клик. Никаких штрафов, никаких скрытых условий расторжения.",
        },
        {
          q: "Какие методы терапии вы принимаете?",
          a: "Мы ориентируемся на доказательные подходы: КПТ, DBT, ACT, EMDR, схема-терапия, нарративная практика. Если вашего основного метода нет в этом списке — напишите при подаче заявки, рассматриваем каждый случай отдельно и откровенно объясняем решение.",
        },
      ],
    },
    finalCta: {
      heading: "Если это откликается — будем рады познакомиться",
      subtitle:
        "Подайте заявку через Telegram. Мы ответим лично — не бот, не автоответ.",
      cta: "Подать заявку через Telegram",
      note: "Бесплатно. Без обязательств. Отвечаем в течение 3 рабочих дней.",
    },
    footer: {
      tagline: "Платформа для онлайн-терапевтов. Прозрачная тарификация, честные условия.",
      contactsLabel: "Контакты",
      docsLabel: "Документы",
      terms: "Условия использования",
      privacy: "Политика конфиденциальности",
      rights: "Все права защищены.",
    },
  },
};
