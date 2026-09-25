export type BrandImage = {
  src: string
  alt: string
}

export type BrandPortfolioItem = {
  lastModified?: string
  name: string
  slug: string
  country: string
  region: 'france' | 'italy' | 'japan' | 'uk' | 'korea'
  officialWebsite?: string
  title: string
  description: string
  intro: string
  positioning: string
  whyItFits: string[]
  keywords: string[]
  cardImage: string
  heroImage: BrandImage
  gallery: BrandImage[]
}

export const brandPortfolio: BrandPortfolioItem[] = [
  {
    name: 'Manuelle Guibal',
    slug: 'manuelle-guibal',
    country: 'Франция',
    region: 'france',
    title: 'Manuelle Guibal | Французская дизайнерская женская одежда в VN13',
    description:
      'Manuelle Guibal в портфеле VN13: французская дизайнерская женская одежда, мягкая архитектура силуэта и лимитированные коллекции для партнеров и клиентов.',
    intro:
      'Manuelle Guibal — один из наиболее точных примеров того, как VN13 работает с премиальной европейской женской одеждой: спокойная палитра, чистый силуэт и вещи, которые органично смотрятся в селективной рознице.',
    positioning:
      'Французская дизайнерская линия для бутиков, шоурумов и клиентов, которым важны сдержанная эстетика, качество материалов и ограниченная доступность.',
    whyItFits: [
      'сильный французский дизайнерский код',
      'подходит для премиальной розницы и капсульных подборок',
      'усиливает позиционирование VN13 как куратора, а не просто поставщика',
    ],
    keywords: ['Manuelle Guibal', 'французская женская одежда', 'дизайнерская женская одежда', 'лимитированные серии'],
    officialWebsite: 'https://shop.manuelleguibal.fr/',
    cardImage: '/brands/real/manuelle-guibal-card-v20260913-q70.webp',
    heroImage: {
      src: '/brands/real/manuelle-guibal-1.jpg',
      alt: 'Manuelle Guibal in the VN13 portfolio',
    },
    gallery: [
      { src: '/brands/real/manuelle-guibal-1.jpg', alt: 'Manuelle Guibal editorial skirt look' },
      { src: '/brands/real/manuelle-guibal-2.jpg', alt: 'Manuelle Guibal black layered look' },
      { src: '/brands/real/manuelle-guibal-3.webp', alt: 'Manuelle Guibal navy dress look' },
    ],
  },
  {
    name: 'H+ Hannoh Wessel',
    slug: 'hannoh-wessel',
    lastModified: '2026-09-25',
    country: 'Италия',
    region: 'italy',
    title: 'Hannoh Wessel: итальянская дизайнерская одежда | VN13',
    description:
      'H+ Hannoh Wessel в портфеле VN13: итальянская премиальная женская одежда с интеллектуальным кроем, натуральными тканями и ясным позиционированием для бутиков.',
    intro:
      'H+ Hannoh Wessel работает в той зоне, где премиальная одежда выглядит интеллектуально, носится долго и заметно отличается от массового рынка.',
    positioning:
      'Итальянский бренд для партнеров, которым нужен узнаваемый авторский дизайн без избыточной визуальной агрессии.',
    whyItFits: [
      'усиливает направление премиальной женской одежды',
      'подходит для контролируемой дистрибуции в бутиках',
      'естественно связывается с лимитированными сериями и предзаказом',
    ],
    keywords: ['Hannoh Wessel', 'итальянская женская одежда', 'премиальная женская одежда', 'бутики'],
    officialWebsite: 'https://www.hannoh.net/',
    cardImage: '/brands/hannoh-lookbook/hannoh-card-v20260913-q70.webp',
    heroImage: {
      src: '/brands/hannoh-lookbook/hannoh-07.jpg',
      alt: 'H+ Hannoh Wessel full-length neutral knit look',
    },
    gallery: [
      {
        src: '/brands/hannoh-lookbook/hannoh-03.seo.webp',
        alt: 'H+ Hannoh Wessel lookbook flat lay with colorful pieces',
      },
      {
        src: '/brands/hannoh-lookbook/hannoh-05.jpg',
        alt: 'H+ Hannoh Wessel back view in a dark knit sweater',
      },
      {
        src: '/brands/hannoh-lookbook/hannoh-06.jpg',
        alt: 'H+ Hannoh Wessel hanging black sweater on a white wall',
      },
      {
        src: '/brands/hannoh-lookbook/hannoh-07.jpg',
        alt: 'H+ Hannoh Wessel full-length neutral knit styling',
      },
      {
        src: '/brands/hannoh-lookbook/hannoh-10.jpg',
        alt: 'H+ Hannoh Wessel hanging neutral sweater on a white wall',
      },
      {
        src: '/brands/hannoh-lookbook/hannoh-11.jpg',
        alt: 'H+ Hannoh Wessel front portrait in a navy knit sweater',
      },
      {
        src: '/brands/hannoh-lookbook/hannoh-14.jpg',
        alt: 'H+ Hannoh Wessel side view in a navy knit sweater',
      },
    ],
  },
  {
    name: 'Moyuru',
    slug: 'moyuru',
    lastModified: '2026-09-22',
    country: 'Япония',
    region: 'japan',
    title: 'Moyuru: японская дизайнерская одежда | VN13',
    description:
      'Moyuru в портфеле VN13: японская дизайнерская женская одежда с объемом, фактурой и выразительной архитектурой силуэта. Уточните коллекции, размеры и наличие.',
    intro:
      'Moyuru добавляет в портфель VN13 более экспериментальный, но все еще коммерчески применимый слой: японская эстетика, сложная форма и выразительная драпировка.',
    positioning:
      'Премиальный дизайнерский бренд для клиентов, которые ищут узнаваемую форму и хотят выйти за пределы массовой моды.',
    whyItFits: [
      'поддерживает спрос на японскую дизайнерскую одежду',
      'подходит для лукбука и редакционных материалов',
      'добавляет разнообразие в портфель брендов',
    ],
    keywords: [
      'Moyuru',
      'Moyuru одежда',
      'японский бренд одежды Moyuru',
      'японская женская одежда',
      'дизайнерская одежда',
      'премиальная женская одежда',
    ],
    officialWebsite: 'https://www.moyuru.com/',
    cardImage: '/brands/moyuru-card-v20260913-q70.webp',
    heroImage: {
      src: '/brands/moyuru.jpg',
      alt: 'Moyuru sculptural editorial look',
    },
    gallery: [
      { src: '/brands/moyuru.jpg', alt: 'Moyuru sculptural editorial look' },
      { src: '/brands/real/moyuru-1.jpg', alt: 'Moyuru cream draped silhouette' },
    ],
  },
  {
    name: 'Shoto',
    slug: 'shoto',
    country: 'Италия',
    region: 'italy',
    title: 'Shoto | Итальянская премиальная обувь и аксессуары в VN13',
    description:
      'Shoto в портфеле VN13: итальянская премиальная обувь и аксессуары с акцентом на фактуру, ремесло и ограниченные коллекции.',
    intro:
      'Shoto полезен VN13 как бренд, который усиливает не только одежду, но и весь образ премиального гардероба через ремесленную материальность.',
    positioning:
      'Сильное дополнение ассортимента бутика, где важны качество, тактильность и нишевая узнаваемость.',
    whyItFits: [
      'расширяет коммерческую категорию обуви и аксессуаров',
      'подходит для мультибрендовых бутиков',
      'усиливает тему ремесла и ограниченной доступности',
    ],
    keywords: [
      'Shoto',
      'Shoto обувь',
      'итальянская обувь Shoto',
      'итальянская премиальная обувь',
      'обувь для бутиков',
      'лимитированные серии',
    ],
    officialWebsite: 'https://shoto.it/',
    cardImage: '/brands/shoto/shoto-card-v20260913-q70.webp',
    heroImage: {
      src: '/brands/shoto/shoto-hero.webp',
      alt: 'Shoto white sneaker with gum sole campaign image',
    },
    gallery: [
      {
        src: '/brands/shoto/SnapInsta.to_541539407_18531228808038082_6066990912907420491_n.jpg',
        alt: 'Shoto soft leather shoulder bag in pale yellow',
      },
      {
        src: '/brands/shoto/615076494_18558357934038082_6389260614900632214_n.seo.webp',
        alt: 'Shoto distressed dark leather ankle boot close-up',
      },
      {
        src: '/brands/shoto/616232137_18559012153038082_3633954830721466232_n.jpg',
        alt: 'Shoto textured brown hiking boot with lug sole',
      },
      {
        src: '/brands/shoto/669718219_18585084271038082_837904584658068667_n.jpg',
        alt: 'Shoto tan square-toe shoe worn in a styling shot',
      },
      {
        src: '/brands/shoto/670985693_18588234931038082_7378609284391052632_n.jpg',
        alt: 'Shoto black square-toe flats with wide trousers',
      },
      {
        src: '/brands/shoto/712783413_18600317155038082_3330356221178560842_n.jpg',
        alt: 'Shoto woven dark slip-ons styled with light denim',
      },
      {
        src: '/brands/shoto/SnapInsta.to_569048135_18542711938038082_7995947979296624523_n.seo.webp',
        alt: 'Shoto black lace-up boot photographed on wet metal steps',
      },
      {
        src: '/brands/shoto/586693224_18552939847038082_1240825861893496768_n.jpg',
        alt: 'Shoto white low-top sneaker on a styled tabletop',
      },
      {
        src: '/brands/shoto/703461601_18596272012038082_6547306615233869090_n.seo.webp',
        alt: 'Shoto brown leather ballet flats placed on grass',
      },
      {
        src: '/brands/shoto/688366447_18593159884038082_7356684868757243262_n.jpg',
        alt: 'Shoto cream sneaker with studded outsole detail',
      },
      {
        src: '/brands/shoto/609529989_18556325866038082_3864551140701178461_n.jpg',
        alt: 'Shoto burnished brown zip boot close-up',
      },
      {
        src: '/brands/shoto/670956103_18595146640038082_1908520894200912985_n.jpg',
        alt: 'Shoto white sneaker leaning against a textured wall',
      },
      {
        src: '/brands/shoto/659033416_18583709092038082_3052003841669754962_n.jpg',
        alt: 'Shoto white sneaker with gum sole campaign image',
      },
      {
        src: '/brands/shoto/626301927_18565931677038082_7612540125183476155_n.seo.webp',
        alt: 'Shoto black low heel leather shoe on a red floor',
      },
      {
        src: '/brands/shoto/655985593_18579610105038082_7749392370293070382_n.jpg',
        alt: 'Shoto brown derby shoes styled outdoors near a tree',
      },
      {
        src: '/brands/shoto/651236470_18578166544038082_7311788769899891371_n.seo.webp',
        alt: 'Shoto tan derby shoe close-up on pine needles',
      },
      {
        src: '/brands/shoto/669758350_18586356370038082_1367804636948255350_n.jpg',
        alt: 'Shoto cream sneaker with orange studded outsole detail',
      },
      {
        src: '/brands/shoto/587287039_18551237389038082_4095073901099379027_n.seo.webp',
        alt: 'Shoto taupe suede Chelsea boot on linen fabric',
      },
      {
        src: '/brands/shoto/582106099_18554923330038082_3366956147583184308_n.seo.webp',
        alt: 'Shoto black polished lace-less shoe with distressed toe',
      },
      {
        src: '/brands/shoto/625054647_18564637405038082_3567024032595400609_n.seo.webp',
        alt: 'Shoto black lace-less shoe photographed on grass',
      },
    ],
  },
  {
    name: 'Post & Co',
    slug: 'post-and-co',
    country: 'Италия',
    region: 'italy',
    title: 'Post & Co | Итальянские аксессуары VN13',
    description:
      'Post & Co в портфеле VN13: итальянские премиальные аксессуары, которые дополняют женский ассортимент и помогают собирать цельные образы.',
    intro:
      'Post & Co работает как логичное расширение премиального женского ассортимента: аксессуары, ремесло и визуально зрелая подача.',
    positioning:
      'Аксессуарный слой для бутиков и клиентов, которым нужен цельный гардероб, а не только одежда.',
    whyItFits: [
      'увеличивает коммерческую глубину портфеля',
      'дает отдельные поисковые запросы по аксессуарам',
      'естественно связывается с разделами премиальной женской одежды',
    ],
    keywords: ['Post & Co', 'итальянские аксессуары', 'премиальные аксессуары', 'бутик'],
    officialWebsite: 'https://postandcoshop.com/',
    cardImage: '/brands/post-and-co/belt-collection-card-v20260913-q70.webp',
    heroImage: {
      src: '/brands/post-and-co/black-textured-belt-hero.webp',
      alt: 'Post & Co black textured leather belt',
    },
    gallery: [
      { src: '/brands/post-and-co/belt-collection.seo.webp', alt: 'Post & Co belt collection campaign image' },
      { src: '/brands/post-and-co/black-textured-belt.seo.webp', alt: 'Post & Co black textured leather belt' },
      { src: '/brands/post-and-co/brown-textured-belt.seo.webp', alt: 'Post & Co brown textured leather belt' },
      { src: '/brands/post-and-co/black-belt.png', alt: 'Post & Co black leather belt with metal buckle' },
      { src: '/brands/post-and-co/light-textured-belt.png', alt: 'Post & Co light textured leather belt' },
      { src: '/brands/post-and-co/dark-brown-double-belt.seo.webp', alt: 'Post & Co dark brown double leather belt' },
      { src: '/brands/post-and-co/black-gold-buckle-belt.seo.webp', alt: 'Post & Co black belt with gold buckle' },
      { src: '/brands/post-and-co/green-studded-sandals.png', alt: 'Post & Co green studded sandals' },
      { src: '/brands/post-and-co/brown-suede-loafer.seo.webp', alt: 'Post & Co brown suede loafer' },
    ],
  },
  {
    name: 'Aequamente',
    slug: 'aequamente',
    lastModified: '2026-09-25',
    country: 'Италия',
    region: 'italy',
    title: 'Aequamente: итальянская женская одежда | VN13',
    description:
      'Aequamente в портфеле VN13: итальянская женская одежда с мягкой архитектурой, природной палитрой и коммерческой пригодностью для бутиков.',
    intro:
      'Aequamente помогает VN13 удерживать баланс между дизайнерской выразительностью и понятным потребительским предложением.',
    positioning:
      'Премиальная линия для розницы, где важны спокойная эстетика, качество ткани и предсказуемая носибельность.',
    whyItFits: [
      'усиливает направление премиальной итальянской одежды',
      'хорошо работает в лукбуке и редакционных материалах',
      'усиливает доверие к селекции VN13',
    ],
    keywords: ['Aequamente', 'итальянская женская одежда', 'премиальная одежда', 'бутики'],
    officialWebsite: 'https://www.aequamente.it/',
    cardImage: '/brands/aequamente-lookbook/aequamente-card-v20260913-q70.webp',
    heroImage: {
      src: '/brands/aequamente-lookbook/aequamente-main-hero.webp',
      alt: 'Aequamente model wearing a white dress outdoors',
    },
    gallery: [
      { src: '/brands/aequamente-lookbook/aequamente-main.jpg', alt: 'Aequamente model wearing a white dress outdoors' },
      { src: '/brands/aequamente-lookbook/aequamente-02.jpg', alt: 'Aequamente vertical editorial portrait' },
      { src: '/brands/aequamente-lookbook/aequamente-03.jpg', alt: 'Aequamente garden portrait' },
      { src: '/brands/aequamente-lookbook/aequamente-04.jpg', alt: 'Aequamente tonal fashion portrait' },
      { src: '/brands/real/aequamente-1.seo.webp', alt: 'Aequamente first editorial look' },
      { src: '/brands/real/aequamente-2.seo.webp', alt: 'Aequamente second editorial look' },
    ],
  },
  {
    name: 'MJ Watson',
    slug: 'mj-watson',
    country: 'Италия',
    region: 'italy',
    title: 'MJ Watson | Итальянская дизайнерская женская одежда в VN13',
    description:
      'MJ Watson в портфеле VN13: итальянская дизайнерская женская одежда с фокусом на форме, материале и нишевой подаче для бутиков и частных клиентов.',
    intro:
      'MJ Watson дополняет портфель VN13 как бренд, который хорошо работает в селективной рознице и отвечает на запрос на современную моду без ухода в масс-маркет.',
    positioning:
      'Дизайнерская одежда для магазинов, которым нужен более современный, но все еще премиальный ассортимент.',
    whyItFits: [
      'подходит для знакомства с брендом через бутики',
      'даёт материал для журнала и брендовых страниц',
      'поддерживает идею лимитированных серий',
    ],
    keywords: ['MJ Watson', 'итальянская женская одежда', 'дизайнерская женская одежда', 'премиум'],
    cardImage: '/brands/mj-watson/mj-watson-01.seo.webp',
    heroImage: {
      src: '/brands/mj-watson/mj-watson-hero.webp',
      alt: 'MJ Watson Spring Summer 2026 look',
    },
    gallery: [
      { src: '/brands/mj-watson/mj-watson-01.seo.webp', alt: 'MJ Watson Spring Summer 2026 look 1' },
      { src: '/brands/mj-watson/mj-watson-02.jpg', alt: 'MJ Watson Spring Summer 2026 look 2' },
      { src: '/brands/mj-watson/mj-watson-03.seo.webp', alt: 'MJ Watson Spring Summer 2026 look 3' },
      { src: '/brands/mj-watson/mj-watson-04.jpg', alt: 'MJ Watson Spring Summer 2026 look 4' },
      { src: '/brands/mj-watson/mj-watson-05.jpg', alt: 'MJ Watson Spring Summer 2026 look 5' },
      { src: '/brands/mj-watson/mj-watson-06.jpg', alt: 'MJ Watson Spring Summer 2026 look 6' },
      { src: '/brands/mj-watson/mj-watson-07.jpg', alt: 'MJ Watson Spring Summer 2026 look 7' },
      { src: '/brands/mj-watson/mj-watson-08.seo.webp', alt: 'MJ Watson Spring Summer 2026 look 8' },
      { src: '/brands/mj-watson/mj-watson-09.seo.webp', alt: 'MJ Watson Spring Summer 2026 look 9' },
      { src: '/brands/mj-watson/mj-watson-10.seo.webp', alt: 'MJ Watson Spring Summer 2026 look 10' },
    ],
  },
  {
    name: 'Isabella Clementini',
    slug: 'isabella-clementini',
    country: 'Италия',
    region: 'italy',
    title: 'Isabella Clementini | Итальянская одежда VN13',
    description:
      'Isabella Clementini в портфеле VN13: итальянская дизайнерская одежда с вневременным гардеробом, натуральными фактурами и вещами, которые легко соединяются между сезонами.',
    intro:
      'Isabella Clementini строит гардероб вокруг спокойной формы, тактильных материалов и вещей, которые остаются актуальными от сезона к сезону.',
    positioning:
      'Итальянская дизайнерская линия для бутиков и клиентов, которым важны сдержанная эстетика, практичность и цельный гардероб.',
    whyItFits: [
      'поддерживает запрос на итальянскую дизайнерскую одежду',
      'подходит для сезонного лукбука и селективной розницы',
      'усиливает тему вневременного гардероба и межсезонных сочетаний',
    ],
    keywords: ['Isabella Clementini', 'итальянская женская одежда', 'дизайнерская одежда', 'вневременной гардероб', 'бутики'],
    officialWebsite: 'https://isabellaclementini.com/',
    cardImage: '/brands/isabella-clementini/isabella-clementini-01.jpg',
    heroImage: {
      src: '/brands/isabella-clementini/isabella-clementini-01.jpg',
      alt: 'Isabella Clementini model wearing a textured coat and black scarf',
    },
    gallery: [
      { src: '/brands/isabella-clementini/isabella-clementini-01.jpg', alt: 'Isabella Clementini textured coat and black scarf' },
      { src: '/brands/isabella-clementini/isabella-clementini-02.jpg', alt: 'Isabella Clementini grey suit with black top' },
      { src: '/brands/isabella-clementini/isabella-clementini-03.jpg', alt: 'Isabella Clementini black knit and checked skirt' },
      { src: '/brands/isabella-clementini/isabella-clementini-04.jpg', alt: 'Isabella Clementini black jacket and wide trousers' },
      { src: '/brands/isabella-clementini/isabella-clementini-05.jpg', alt: 'Isabella Clementini patterned coat over black dress' },
      { src: '/brands/isabella-clementini/isabella-clementini-06.jpg', alt: 'Isabella Clementini patterned coat with cream knit and denim' },
      { src: '/brands/isabella-clementini/isabella-clementini-07.jpg', alt: 'Isabella Clementini blue shirt and skirt set' },
      { src: '/brands/isabella-clementini/isabella-clementini-08.jpg', alt: 'Isabella Clementini blue coat and layered outfit' },
      { src: '/brands/isabella-clementini/isabella-clementini-09.jpg', alt: 'Isabella Clementini denim jacket and trousers' },
      { src: '/brands/isabella-clementini/isabella-clementini-10.jpg', alt: 'Isabella Clementini patterned jacket and denim trousers' },
      { src: '/brands/isabella-clementini/isabella-clementini-11.jpg', alt: 'Isabella Clementini grey knit sweater' },
      { src: '/brands/isabella-clementini/isabella-clementini-12.jpg', alt: 'Isabella Clementini olive cardigan and trousers' },
      { src: '/brands/isabella-clementini/isabella-clementini-13.jpg', alt: 'Isabella Clementini olive overshirt and denim' },
      { src: '/brands/isabella-clementini/isabella-clementini-14.jpg', alt: 'Isabella Clementini denim jacket and midi skirt' },
      { src: '/brands/isabella-clementini/isabella-clementini-15.jpg', alt: 'Isabella Clementini beige cardigan and denim' },
      { src: '/brands/isabella-clementini/isabella-clementini-16.jpg', alt: 'Isabella Clementini olive coat and knit layers' },
      { src: '/brands/isabella-clementini/isabella-clementini-17.jpg', alt: 'Isabella Clementini black jacket and flowing skirt' },
      { src: '/brands/isabella-clementini/isabella-clementini-18.jpg', alt: 'Isabella Clementini side profile in a beige vest' },
      { src: '/brands/isabella-clementini/isabella-clementini-19.jpg', alt: 'Isabella Clementini beige knit and denim outfit' },
    ],
  },
  {
    name: 'Sula',
    slug: 'sula',
    country: 'Великобритания',
    region: 'uk',
    title: 'Sula | Британская дизайнерская женская одежда в VN13',
    description:
      'Sula в портфеле VN13: британская дизайнерская женская одежда, которая добавляет интеллектуальную, нишевую и легко узнаваемую эстетику.',
    intro:
      'Sula добавляет в портфель VN13 более выразительный британский тон и расширяет направление дизайнерской женской одежды.',
    positioning:
      'Нишевый дизайнерский бренд для покупателей, которым важны характер, индивидуальность и точная селекция.',
    whyItFits: [
      'делает портфель менее однотипным',
      'усиливает направление британской дизайнерской одежды',
      'хорошо связывается с лукбуком и материалами журнала',
    ],
    keywords: ['Sula', 'британская женская одежда', 'дизайнерская женская одежда', 'нишевый бренд одежды'],
    officialWebsite: 'https://www.sulaclothing.com/',
    cardImage: '/brands/sula.jpg',
    heroImage: {
      src: '/brands/sula.jpg',
      alt: 'Sula relaxed garden portrait',
    },
    gallery: [{ src: '/brands/sula.jpg', alt: 'Sula relaxed linen styling' }],
  },
  {
    name: 'SOH',
    slug: 'soh',
    lastModified: '2026-09-25',
    country: 'Южная Корея',
    region: 'korea',
    title: 'SOH | Корейская премиальная женская одежда в VN13',
    description:
      'SOH в портфеле VN13: корейская премиальная женская одежда с современным кроем. Уточните доступные коллекции, размеры и условия заказа.',
    intro:
      'SOH добавляет азиатский премиальный контекст и делает портфель VN13 более интересным для запросов о современной дизайнерской женской одежде.',
    positioning:
      'Современный премиальный бренд для клиентов, которым нужен лаконичный, выразительный и цельный гардероб.',
    whyItFits: [
      'расширяет географию и семантику портфеля',
      'добавляет современное направление в ассортимент',
      'поддерживает лукбук и органическую видимость в поиске',
    ],
    keywords: [
      'SOH',
      'SOH одежда',
      'Soh корейский бренд купить',
      'корейская женская одежда',
      'премиальная женская одежда',
      'дизайнерская одежда',
    ],
    cardImage: '/brands/soh/soh-01.jpg',
    heroImage: {
      src: '/brands/soh/soh-01.jpg',
      alt: 'SOH ochre knit coat styled with tailored trousers',
    },
    gallery: [
      { src: '/brands/soh/soh-01.jpg', alt: 'SOH ochre knit coat styled with tailored trousers' },
      { src: '/brands/soh/soh-02.jpg', alt: 'SOH close-up of an ochre knit coat' },
      { src: '/brands/soh/soh-03.jpg', alt: 'SOH ochre knit coat on a hanger' },
      { src: '/brands/soh/soh-04.jpg', alt: 'SOH cream knit cardigan with ochre trim' },
      { src: '/brands/soh/soh-05.jpg', alt: 'SOH cream cardigan detail with ochre cuffs' },
      { src: '/brands/soh/soh-06.jpg', alt: 'SOH cream cardigan editorial portrait' },
      { src: '/brands/soh/soh-07.jpg', alt: 'SOH cream cardigan on a hanger' },
      { src: '/brands/soh/soh-08.jpg', alt: 'SOH green ribbed knit sweater editorial portrait' },
      { src: '/brands/soh/soh-09.jpg', alt: 'SOH green ribbed high-neck sweater' },
      { src: '/brands/soh/soh-10.jpg', alt: 'SOH green ribbed sweater on a hanger' },
      { src: '/brands/soh/soh-11.jpg', alt: 'SOH camel knit garment on a hanger' },
      { src: '/brands/soh/soh-12.jpg', alt: 'SOH camel knit tunic styled with dark trousers' },
      { src: '/brands/soh/soh-13.jpg', alt: 'SOH charcoal distressed knit sweater on a hanger' },
      { src: '/brands/soh/soh-14.jpg', alt: 'SOH camel sweater editorial portrait' },
      { src: '/brands/soh/soh-15.jpg', alt: 'SOH camel knit seam detail' },
      { src: '/brands/soh/soh-16.jpg', alt: 'SOH camel sweater with contrast trim on a hanger' },
      { src: '/brands/soh/soh-17.jpg', alt: 'SOH black and white long dress' },
      { src: '/brands/soh/soh-18.jpg', alt: 'SOH white shirt with black draped trousers' },
      { src: '/brands/soh/soh-19.jpg', alt: 'SOH white cropped jacket with wide black trousers' },
      { src: '/brands/soh/soh-20.jpg', alt: 'SOH black utility jacket and wide trousers' },
      { src: '/brands/soh/soh-21.jpg', alt: 'SOH cream jacket and wide skirt set' },
      { src: '/brands/soh/soh-22.webp', alt: 'SOH cream shirt layered with dark denim' },
      { src: '/brands/soh/soh-23.jpg', alt: 'SOH grey gathered-back dress' },
      { src: '/brands/soh/soh-24.jpg', alt: 'SOH grey sleeveless dress with pockets' },
      { src: '/brands/soh/soh-25.jpg', alt: 'SOH close-up of contrasting neutral fabric panels' },
      { src: '/brands/soh/soh-26.jpg', alt: 'SOH neutral colour-block dress from the back' },
      { src: '/brands/soh/soh-27.jpg', alt: 'SOH white dress with neutral scarf' },
      { src: '/brands/soh/soh-28.jpg', alt: 'SOH neutral linen layered outfit' },
      { src: '/brands/soh/soh-29.jpg', alt: 'SOH neutral gathered dress with scarf' },
      { src: '/brands/soh/soh-30.webp', alt: 'SOH neutral gathered dress editorial look' },
    ],
  },
]

export function getBrandPortfolioItem(slug: string) {
  return brandPortfolio.find((brand) => brand.slug === slug)
}
