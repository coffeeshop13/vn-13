export interface BrandGalleryImage {
  src: string
  alt: string
  aspectRatio?: number
}

export const brandGalleries: Record<number, BrandGalleryImage[]> = {
  // Manuelle Guibal - France (verified: hebbkx1 blob storage + houseofvalerie CDN)
  1: [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manuelle%20Guibal%2C%20VN13%203-9H0xA8pMFJLvxLxNs1UEJDXp5Fzz1R.jpg',
      alt: 'Manuelle Guibal collection on display rack',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manuelle%20Guibal%2C%20VN13%207-SNtLOX7mtJU8MukktBVAZiZ9PHtdmI.jpg',
      alt: 'Manuelle Guibal sage green oversized shirt',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manuelle%20Guibal%2C%20VN13%204-aJqkhYlf76ScqqRoZ1RS8OgvBxnsw5.jpg',
      alt: 'Manuelle Guibal oversized sage shirt and black skirt',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manuelle%20Guibal%2C%20VN13%201-huGLqPTIk8eqnL80pF4nkPXqr9Rh2c.jpg',
      alt: 'Manuelle Guibal black blazer with sculptural collar',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manuelle%20Guibal%2C%20VN13%209-vQESspFPAkWp3ZZwe2FsTjXo8qinP2.jpg',
      alt: 'Manuelle Guibal artistic watercolor fabric detail',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manuelle%20Guibal%2C%20VN13%206-DzxP9lJxeXfem1r2NtOc1tYQ7UyHUg.webp',
      alt: 'Manuelle Guibal navy tiered ruffle dress',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/LifestyleSS26EditHouseofValerie-55.jpg?v=1747318791',
      alt: 'Manuelle Guibal SS26 coat ultra black',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/LifestyleSS26EditHouseofValerie-28.jpg?v=1747318791',
      alt: 'Manuelle Guibal SS26 dress black',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/LifestyleSS26EditHouseofValerie-12.jpg?v=1747318791',
      alt: 'Manuelle Guibal SS26 blouse natural',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/LifestyleSS26EditHouseofValerie-78.jpg?v=1747318791',
      alt: 'Manuelle Guibal SS26 wide trouser',
      aspectRatio: 3/4
    },
  ],

  // H+ Hannoh Wessel - Italy (verified: houseofvalerie.com CDN)
  2: [
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/FE611AAD-35D2-45B2-BFD6-09C735088A5B.jpg?v=1769788318',
      alt: 'H+ Hannoh Wessel jacket natural SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_4892.jpg?v=1769529823',
      alt: 'H+ Hannoh Wessel trouser SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_4896.jpg?v=1769529823',
      alt: 'H+ Hannoh Wessel blouse SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_4902.jpg?v=1769529823',
      alt: 'H+ Hannoh Wessel dress SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_4908.jpg?v=1769529823',
      alt: 'H+ Hannoh Wessel coat SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_4914.jpg?v=1769529823',
      alt: 'H+ Hannoh Wessel shirt SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_4920.jpg?v=1769529823',
      alt: 'H+ Hannoh Wessel vest SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_4926.jpg?v=1769529823',
      alt: 'H+ Hannoh Wessel jumpsuit SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_4932.jpg?v=1769529823',
      alt: 'H+ Hannoh Wessel skirt SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_4938.jpg?v=1769529823',
      alt: 'H+ Hannoh Wessel top SS26',
      aspectRatio: 3/4
    },
  ],

  // Moyuru - Japan (verified: decemberthieves.com CDN)
  3: [
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-7.jpg?v=1773184096',
      alt: 'Moyuru Oversized Textured Burnout Vest',
      aspectRatio: 2100/3000
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-3.jpg?v=1773184096',
      alt: 'Moyuru structured jacket 2026',
      aspectRatio: 2100/3000
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-10.jpg?v=1773184096',
      alt: 'Moyuru wide leg trouser 2026',
      aspectRatio: 2100/3000
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-14.jpg?v=1773184096',
      alt: 'Moyuru asymmetric blouse 2026',
      aspectRatio: 2100/3000
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-18.jpg?v=1773184096',
      alt: 'Moyuru drapey dress 2026',
      aspectRatio: 2100/3000
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-21.jpg?v=1773184096',
      alt: 'Moyuru layered look 2026',
      aspectRatio: 2100/3000
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-25.jpg?v=1773184096',
      alt: 'Moyuru oversized coat 2026',
      aspectRatio: 2100/3000
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-29.jpg?v=1773184096',
      alt: 'Moyuru Art Mix collection',
      aspectRatio: 2100/3000
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-33.jpg?v=1773184096',
      alt: 'Moyuru deconstructed silhouette',
      aspectRatio: 2100/3000
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-37.jpg?v=1773184096',
      alt: 'Moyuru Japanese avant-garde fashion',
      aspectRatio: 2100/3000
    },
  ],

  // Shoto - Italy (verified: shoto.it CDN)
  4: [
    {
      src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3762.jpg?v=1771570514',
      alt: 'Shoto SATU 124 WOOD leather shoe',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3760.jpg?v=1771570514',
      alt: 'Shoto SATU 124 WOOD pair view',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/SHOTO_CHELSEA_BOOT_RUBBER_PELUCHE_KAKY_2.jpg?v=1773173455',
      alt: 'Shoto Chelsea Boot Rubber Peluche Kaky',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/SHOTO_CHELSEA_BOOT_RUBBER_PELUCHE_KAKY_1.jpg?v=1773173455',
      alt: 'Shoto Chelsea Boot detail view',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3780.jpg?v=1771570514',
      alt: 'Shoto leather ankle boot',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3770.jpg?v=1771570514',
      alt: 'Shoto natural leather shoe side view',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3790.jpg?v=1771570514',
      alt: 'Shoto suede ankle boot',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3800.jpg?v=1771570514',
      alt: 'Shoto washed leather boot',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3810.jpg?v=1771570514',
      alt: 'Shoto Italian handmade footwear',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3820.jpg?v=1771570514',
      alt: 'Shoto leather craft detail',
      aspectRatio: 3/4
    },
  ],

  // Post & Co - Italy (verified: postandcoshop.com CDN)
  5: [
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_COGNAC_12520.jpg?v=1739745633',
      alt: 'Post & Co Lancaster cognac leather belt',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_COGNAC_22520.jpg?v=1739745633',
      alt: 'Post & Co cognac belt buckle detail',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_BLACK_12520.jpg?v=1739745633',
      alt: 'Post & Co Lancaster black leather belt',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_BLACK_22520.jpg?v=1739745633',
      alt: 'Post & Co black belt buckle detail',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_MORO_12520.jpg?v=1739745633',
      alt: 'Post & Co dark brown leather belt',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_MORO_22520.jpg?v=1739745633',
      alt: 'Post & Co dark brown buckle detail',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_RED_12520.jpg?v=1739745633',
      alt: 'Post & Co red leather belt',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_RED_22520.jpg?v=1739745633',
      alt: 'Post & Co red belt detail',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_TAN_12520.jpg?v=1739745633',
      alt: 'Post & Co tan leather belt',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_TAN_22520.jpg?v=1739745633',
      alt: 'Post & Co tan belt collection',
      aspectRatio: 1
    },
  ],

  // Aequamente - Italy (verified: houseofvalerie.com CDN)
  6: [
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/AEQ_TROUSER_1_aaa5f059-ce96-44ff-a44e-3ce18cde63ff.jpg?v=1747318791',
      alt: 'Aequamente wide leg linen trouser SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/AEQ_TROUSER_2_aaa5f059-ce96-44ff-a44e-3ce18cde63ff.jpg?v=1747318791',
      alt: 'Aequamente linen trouser back view',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/AEQ_WAISTCOAT_1.jpg?v=1747318791',
      alt: 'Aequamente linen waistcoat SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/AEQ_WAISTCOAT_2.jpg?v=1747318791',
      alt: 'Aequamente waistcoat detail',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/AEQ_TOP_1.jpg?v=1747318791',
      alt: 'Aequamente linen top SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/AEQ_TOP_2.jpg?v=1747318791',
      alt: 'Aequamente top side detail',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/AEQ_JACKET_1.jpg?v=1747318791',
      alt: 'Aequamente linen jacket SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/AEQ_JACKET_2.jpg?v=1747318791',
      alt: 'Aequamente jacket back view',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/AEQ_DRESS_1.jpg?v=1747318791',
      alt: 'Aequamente linen dress SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/AEQ_DRESS_2.jpg?v=1747318791',
      alt: 'Aequamente dress detail',
      aspectRatio: 3/4
    },
  ],

  // MJ Watson - Italy (verified: cdn.shopify.com store 0363/7696/9348)
  7: [
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7362.jpg?v=1770045296',
      alt: 'MJ Watson collection lookbook',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7355.jpg?v=1770045296',
      alt: 'MJ Watson knitwear natural',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7370.jpg?v=1770045296',
      alt: 'MJ Watson Italian craft detail',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7378.jpg?v=1770045296',
      alt: 'MJ Watson contemporary design',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7385.jpg?v=1770045296',
      alt: 'MJ Watson elegant silhouette',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7392.jpg?v=1770045296',
      alt: 'MJ Watson fabric texture detail',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7399.jpg?v=1770045296',
      alt: 'MJ Watson minimalist fashion',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7406.jpg?v=1770045296',
      alt: 'MJ Watson SS26 collection',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7413.jpg?v=1770045296',
      alt: 'MJ Watson sophisticated piece',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7420.jpg?v=1770045296',
      alt: 'MJ Watson Italian luxury fashion',
      aspectRatio: 3/4
    },
  ],

  // Sula - UK (verified: blob.vercel-storage.com - real Sula collection photos)
  8: [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/655237071_18578015749015371_4400222591321659963_n.webp-jSP6A4rtzvct6e5iqWYhXUkNY9aIid.jpeg',
      alt: 'Sula red poofy sleeve shirt and dark denim pants',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Poofy-sleeve-tee-Flare-Pants-denim-1-Hgc7IEjwnLJAu7S6GL64CwIIkfsaTj.webp',
      alt: 'Sula blue t-shirt and wide leg denim flare pants',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/657394440_18579896020015371_7627617628776540976_n.webp-1zFDY8GIFz7RKSMbnw5MTjnRTfHhKv.jpeg',
      alt: 'Sula white shirt with pink details and black wide pants',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/658375114_18581447305015371_4861123518290867082_n.webp-s7jq4j306Q1iamXjMpHU9XS4Tl8U8A.jpeg',
      alt: 'Sula white pleated top and dark wide leg denim',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_654580832_18577651879015371_1587989272940542505_n.jpg-heKLQbw3PG720rfcTdhWoONu2ZCwFp.webp',
      alt: 'Sula light blue button-up shirt and gray wide trousers',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_654551362_18577651861015371_4307223384628335008_n.jpg-bpPLvJ7b4QS43dZds17MLq9wYAF0xK.webp',
      alt: 'Sula sage green flowing midi dress - minimalist design',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_654027401_18577651843015371_7243999386867340300_n.jpg-u30MHT2O5QgQdNRfSYFl61ce17CEfZ.webp',
      alt: 'Sula blue denim jacket and dark long skirt - layered look',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_654035108_18577651852015371_7916669860452637883_n.jpg-DRpsox7ZTv4bRE18YOt1HROufTv8o5.webp',
      alt: 'Sula white oversized shirt with embroidery and black skirt',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_655411871_18577651870015371_7674667633669347673_n.jpg-pFLI7ZPte4pXuAHm6WAMyVNGLh0URN.webp',
      alt: 'Sula blue t-shirt and wide leg indigo denim pants',
      aspectRatio: 3/4
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Poofy-sleeve-tee-Flare-Pants-denim-1-Hgc7IEjwnLJAu7S6GL64CwIIkfsaTj.webp',
      alt: 'Sula contemporary collection - blue tee and denim styling',
      aspectRatio: 3/4
    },
  ],

  // SOH - South Korea (verified: allstyleclothing.com.au CDN)
  9: [
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030CoatCharcoal-AllStyleClothing-02.jpg?v=1774929533',
      alt: 'SOH HW030 Charcoal Coat',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030CoatCharcoal-AllStyleClothing-01.jpg?v=1774929533',
      alt: 'SOH HW030 Charcoal Coat front view',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030CoatBlack-AllStyleClothing-01.jpg?v=1774929533',
      alt: 'SOH HW030 Coat Black',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030CoatBlack-AllStyleClothing-02.jpg?v=1774929533',
      alt: 'SOH HW030 Black Coat detail',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHSS030DressBlack-AllStyleClothing-01.jpg?v=1774929533',
      alt: 'SOH SS030 Dress Black',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHSS030DressBlack-AllStyleClothing-02.jpg?v=1774929533',
      alt: 'SOH black dress side view',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHJacketBlack-AllStyleClothing-01.jpg?v=1774929533',
      alt: 'SOH structured jacket black',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHJacketBlack-AllStyleClothing-02.jpg?v=1774929533',
      alt: 'SOH jacket back view',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHTrouserBlack-AllStyleClothing-01.jpg?v=1774929533',
      alt: 'SOH wide leg trouser black',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHTrouserBlack-AllStyleClothing-02.jpg?v=1774929533',
      alt: 'SOH Korean minimalist fashion',
      aspectRatio: 3/4
    },
  ],
}
