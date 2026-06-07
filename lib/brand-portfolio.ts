export type BrandImage = {
  src: string
  alt: string
}

export type BrandPortfolioItem = {
  name: string
  slug: string
  country: string
  region: 'france' | 'italy' | 'japan' | 'uk' | 'korea'
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
      'Manuelle Guibal — один из наиболее точных примеров того, как VN13 работает с премиальным европейским womenswear: спокойная палитра, чистый силуэт и вещи, которые хорошо продаются через curated retail.',
    positioning:
      'Французская дизайнерская линия для бутиков, шоурумов и клиентов, которым важны сдержанная эстетика, качество материалов и ограниченная доступность.',
    whyItFits: [
      'сильный французский дизайнерский код',
      'подходит для премиальной розницы и капсульных подборок',
      'усиливает позиционирование VN13 как куратора, а не просто поставщика',
    ],
    keywords: ['Manuelle Guibal', 'французская женская одежда', 'дизайнерская женская одежда', 'лимитированные серии'],
    cardImage: '/brands/real/manuelle-guibal-1.jpg',
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
    country: 'Италия',
    region: 'italy',
    title: 'H+ Hannoh Wessel | Итальянская премиальная женская одежда в VN13',
    description:
      'H+ Hannoh Wessel в портфеле VN13: итальянская премиальная женская одежда с интеллектуальным кроем, натуральными тканями и boutique-level positioning.',
    intro:
      'H+ Hannoh Wessel работает в той зоне, где премиальная одежда должна выглядеть интеллектуально, носиться долго и отличаться от массового fashion-ритейла.',
    positioning:
      'Итальянский бренд для партнеров, которым нужен узнаваемый авторский дизайн без избыточной визуальной агрессии.',
    whyItFits: [
      'хорошо ложится на premium womenswear intent',
      'поддерживает boutique distribution',
      'естественно усиливает тему limited series и pre-order',
    ],
    keywords: ['Hannoh Wessel', 'итальянская женская одежда', 'премиальная женская одежда', 'бутики'],
    cardImage: '/brands/hannoh-lookbook/hannoh-11.jpg',
    heroImage: {
      src: '/brands/hannoh-lookbook/hannoh-07.jpg',
      alt: 'H+ Hannoh Wessel full-length neutral knit look',
    },
    gallery: [
      {
        src: '/brands/hannoh-lookbook/hannoh-03.jpg',
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
    country: 'Япония',
    region: 'japan',
    title: 'Moyuru | Японская дизайнерская женская одежда в VN13',
    description:
      'Moyuru в портфеле VN13: японская дизайнерская женская одежда с объемом, фактурой и выразительной архитектурой силуэта.',
    intro:
      'Moyuru добавляет в портфель VN13 более экспериментальный, но все еще коммерчески применимый слой: японская эстетика, сложная форма и выразительная драпировка.',
    positioning:
      'Премиальный дизайнерский бренд для клиентов, которые ищут узнаваемую форму и отличаются от mainstream fashion.',
    whyItFits: [
      'сильный long-tail по японскому womenswear',
      'подходит для editorial lookbook и journal content',
      'добавляет разнообразие в портфель брендов',
    ],
    keywords: ['Moyuru', 'японская женская одежда', 'дизайнерская одежда', 'премиальный womenswear'],
    cardImage: '/brands/real/moyuru-1.jpg',
    heroImage: {
      src: '/brands/real/moyuru-1.jpg',
      alt: 'Moyuru sculptural cream outfit',
    },
    gallery: [{ src: '/brands/real/moyuru-1.jpg', alt: 'Moyuru sculptural draped silhouette' }],
  },
  {
    name: 'Shoto',
    slug: 'shoto',
    country: 'Италия',
    region: 'italy',
    title: 'Shoto | Итальянская премиальная обувь и женский fashion в VN13',
    description:
      'Shoto в портфеле VN13: итальянский премиальный fashion с акцентом на фактуру, ремесло и очень ограниченный спросовый цикл.',
    intro:
      'Shoto полезен VN13 как бренд, который усиливает не только одежду, но и весь образ премиального гардероба через ремесленную материальность.',
    positioning:
      'Сильный boutique product для ассортиментных подборок, где важны качество, тактильность и нишевая узнаваемость.',
    whyItFits: [
      'дает дополнительный high-intent коммерческий трафик',
      'подходит для мультибрендовых бутиков',
      'усиливает тему craftsmanship и limited availability',
    ],
    keywords: ['Shoto', 'итальянский premium fashion', 'бутик fashion', 'лимитированные серии'],
    cardImage: '/brands/real/shoto-1.jpg',
    heroImage: {
      src: '/brands/real/shoto-1.jpg',
      alt: 'Shoto artisanal leather boot',
    },
    gallery: [{ src: '/brands/real/shoto-1.jpg', alt: 'Shoto leather boot close-up' }],
  },
  {
    name: 'Post & Co',
    slug: 'post-and-co',
    country: 'Италия',
    region: 'italy',
    title: 'Post & Co | Итальянские премиальные аксессуары в портфеле VN13',
    description:
      'Post & Co в портфеле VN13: итальянские премиальные аксессуары, которые дополняют womenswear-ассортимент и повышают средний чек.',
    intro:
      'Post & Co работает как логичное расширение премиального женского ассортимента: аксессуары, ремесло и визуально зрелая подача.',
    positioning:
      'Аксессуарный слой для бутиков и клиентов, которым нужен цельный гардероб, а не только одежда.',
    whyItFits: [
      'увеличивает коммерческую глубину портфеля',
      'дает отдельные поисковые запросы по аксессуарам',
      'естественно связывается с premium womenswear pages',
    ],
    keywords: ['Post & Co', 'итальянские аксессуары', 'премиальные аксессуары', 'бутик'],
    cardImage: '/brands/real/post-and-co-1.png',
    heroImage: {
      src: '/brands/real/post-and-co-1.png',
      alt: 'Post & Co accessories campaign visual',
    },
    gallery: [{ src: '/brands/real/post-and-co-1.png', alt: 'Post & Co campaign accessory image' }],
  },
  {
    name: 'Aequamente',
    slug: 'aequamente',
    country: 'Италия',
    region: 'italy',
    title: 'Aequamente | Итальянская премиальная женская одежда в VN13',
    description:
      'Aequamente в портфеле VN13: итальянская женская одежда с мягкой архитектурой, природной палитрой и коммерческой пригодностью для бутиков.',
    intro:
      'Aequamente помогает VN13 удерживать баланс между дизайнерской выразительностью и понятным потребительским предложением.',
    positioning:
      'Премиальная линия для розницы, где важны спокойная эстетика, качество ткани и предсказуемая носибельность.',
    whyItFits: [
      'поддерживает cleaner premium search intent',
      'хорошо работает в lookbook и editorial pages',
      'усиливает доверие к селекции VN13',
    ],
    keywords: ['Aequamente', 'итальянская женская одежда', 'премиальная одежда', 'бутики'],
    cardImage: '/brands/real/aequamente-1.jpg',
    heroImage: {
      src: '/brands/real/aequamente-1.jpg',
      alt: 'Aequamente editorial image',
    },
    gallery: [
      { src: '/brands/real/aequamente-1.jpg', alt: 'Aequamente first editorial look' },
      { src: '/brands/real/aequamente-2.jpg', alt: 'Aequamente second editorial look' },
    ],
  },
  {
    name: 'MJ Watson',
    slug: 'mj-watson',
    country: 'Италия',
    region: 'italy',
    title: 'MJ Watson | Итальянская дизайнерская женская одежда в VN13',
    description:
      'MJ Watson в портфеле VN13: итальянская дизайнерская женская одежда с фокусом на форме, материале и нишевой подаче.',
    intro:
      'MJ Watson дополняет портфель VN13 как бренд, который хорошо работает в curated retail и помогает закрыть более модный запрос без ухода в масс-маркет.',
    positioning:
      'Дизайнерская одежда для магазинов, которым нужен более современный, но все еще премиальный ассортимент.',
    whyItFits: [
      'сильный fit для boutique discovery',
      'дает контент для journal and brand pages',
      'поддерживает limited series narrative',
    ],
    keywords: ['MJ Watson', 'итальянская женская одежда', 'дизайнерский womenswear', 'премиум'],
    cardImage: '/brands/real/mj-watson-1.jpg',
    heroImage: {
      src: '/brands/real/mj-watson-1.jpg',
      alt: 'MJ Watson knitwear look',
    },
    gallery: [{ src: '/brands/real/mj-watson-1.jpg', alt: 'MJ Watson minimalist knitwear' }],
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
      'Sula добавляет в портфель VN13 более выразительный британский тон и помогает расширять семантику вокруг designer womenswear.',
    positioning:
      'Нишевый дизайнерский бренд для покупателей, которым важны характер, индивидуальность и curated selection.',
    whyItFits: [
      'делает портфель менее однотипным',
      'открывает британский fashion search cluster',
      'хорошо связывается с lookbook и journal content',
    ],
    keywords: ['Sula', 'британская женская одежда', 'дизайнерская женская одежда', 'нишевый fashion'],
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
    country: 'Южная Корея',
    region: 'korea',
    title: 'SOH | Корейская премиальная женская одежда в VN13',
    description:
      'SOH в портфеле VN13: корейская премиальная женская одежда, которая расширяет географию селекции и усиливает modern designer positioning.',
    intro:
      'SOH добавляет азиатский премиальный контекст и делает портфель VN13 более интересным для запросов о contemporary womenswear.',
    positioning:
      'Современный премиальный бренд для клиентов, которым нужен clean, directional and curated wardrobe.',
    whyItFits: [
      'расширяет географию и семантику портфеля',
      'добавляет современный fashion-угол',
      'поддерживает editorial and search visibility',
    ],
    keywords: ['SOH', 'корейская женская одежда', 'премиальная женская одежда', 'дизайнерская одежда'],
    cardImage: '/brands/real/soh-1.jpg',
    heroImage: {
      src: '/brands/real/soh-1.jpg',
      alt: 'SOH charcoal coat look',
    },
    gallery: [{ src: '/brands/real/soh-1.jpg', alt: 'SOH modern directional coat' }],
  },
]

export function getBrandPortfolioItem(slug: string) {
  return brandPortfolio.find((brand) => brand.slug === slug)
}
