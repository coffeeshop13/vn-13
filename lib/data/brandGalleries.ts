export interface BrandGalleryImage {
  src: string
  alt: string
  aspectRatio?: number
}

export interface BrandGallery {
  brandId: number
  images: BrandGalleryImage[]
}

export const brandGalleries: Record<number, BrandGalleryImage[]> = {
  // Manuelle Guibal - France
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
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_4892.jpg?v=1769529823',
      alt: 'Manuelle Guibal Ultra Black Coat 2026',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_5199.jpg?v=1769529823',
      alt: 'Manuelle Guibal Coat detail 2026',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/manuelle-guibal-trousers-idrofix-1.jpg?v=1768941605',
      alt: 'Manuelle Guibal Trousers Idrofix 2026',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_4699.jpg?v=1768854104',
      alt: 'Manuelle Guibal Jacket Blue Marine 2026',
      aspectRatio: 3/4
    },
  ],

  // H+ Hannoh Wessel - Italy
  2: [
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/FE611AAD-35D2-45B2-BFD6-09C735088A5B.jpg?v=1769788318',
      alt: 'H+ Hannoh Wessel minimalist design 2026',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_5355.jpg?v=1769788318',
      alt: 'H+ Hannoh Wessel contemporary fashion',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/8F85AAA3-C5DE-40C9-9001-49FD75A36E87.jpg?v=1769788318',
      alt: 'H+ Hannoh Wessel sustainable collection',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_5380.jpg?v=1769788318',
      alt: 'H+ Hannoh Wessel modern silhouette',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_5378.jpg?v=1769788318',
      alt: 'H+ Hannoh Wessel Italian craftsmanship',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_5374.jpg?v=1769788318',
      alt: 'H+ Hannoh Wessel elegant design',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_5367.jpg?v=1769788318',
      alt: 'H+ Hannoh Wessel fashion detail',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_5369.jpg?v=1769788318',
      alt: 'H+ Hannoh Wessel contemporary piece',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_5356.jpg?v=1769788318',
      alt: 'H+ Hannoh Wessel collection 2026',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/IMG_5358.jpg?v=1769788318',
      alt: 'H+ Hannoh Wessel fashion statement',
      aspectRatio: 3/4
    },
  ],

  // Moyuru - Japan
  3: [
    {
      src: 'https://decemberthieves.com/cdn/shop/files/3_10_26_Edits-7.jpg?crop=center&height=3000&v=1773184096&width=2100',
      alt: 'Moyuru Oversized Textured Burnout Vest',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-3.jpg?v=1773184096',
      alt: 'Moyuru architectural design 2026',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-5.jpg?v=1773184096',
      alt: 'Moyuru Japanese avant-garde fashion',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-1.jpg?v=1773184096',
      alt: 'Moyuru asymmetric tailoring',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-9.jpg?v=1773184096',
      alt: 'Moyuru structural design',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-11.jpg?v=1773184096',
      alt: 'Moyuru Art Mix philosophy',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-13.jpg?v=1773184096',
      alt: 'Moyuru contemporary collection',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/moyuru.jpg?v=1772656799',
      alt: 'Moyuru brand aesthetic',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-2.jpg?v=1773184096',
      alt: 'Moyuru sophisticated silhouette',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0043/5952/0330/files/3_10_26_Edits-4.jpg?v=1773184096',
      alt: 'Moyuru innovative fashion',
      aspectRatio: 3/4
    },
  ],

  // Shoto - Italy
  4: [
    {
      src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3762.jpg?v=1771570514',
      alt: 'Shoto SATU 124 WOOD leather shoe',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0770/1484/5064/files/SHOTO_CHELSEA_BOOT_RUBBER_PELUCHE_KAKY_2.jpg?v=1773173455',
      alt: 'Shoto Chelsea Boot Rubber Peluche Kaky',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0770/1484/5064/files/SHOTO_CHELSEA_BOOT_RUBBER_PELUCHE_KAKY_3.jpg?v=1773173455',
      alt: 'Shoto Chelsea Boot detail',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0770/1484/5064/files/SHOTO_BOOT_RUBBER_HORSE_NERO_1.jpg?v=1773036224',
      alt: 'Shoto Boot Rubber Horse Nero',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0770/1484/5064/files/SHOTO_BOOT_RUBBER_HORSE_NERO_2.jpg?v=1773036224',
      alt: 'Shoto black leather boot',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0770/1484/5064/files/SHOTO_SHOE_DUNE_HORSE_NATURAL_1.jpg?v=1772956824',
      alt: 'Shoto Shoe Dune Horse Natural',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0770/1484/5064/files/SHOTO_SHOE_DUNE_HORSE_NATURAL_2.jpg?v=1772956824',
      alt: 'Shoto natural leather shoe detail',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0770/1484/5064/files/SHOTO_SNEAKERS_WHITE_1.jpg?v=1772943424',
      alt: 'Shoto white sneakers',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0770/1484/5064/files/SHOTO_SNEAKERS_WHITE_2.jpg?v=1772943424',
      alt: 'Shoto sneaker design',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0770/1484/5064/files/SHOTO_BOOT_VINTAGE_BROWN_1.jpg?v=1772858424',
      alt: 'Shoto vintage brown boot',
      aspectRatio: 3/4
    },
  ],

  // Post & Co - Italy
  5: [
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_COGNAC_12520.jpg?v=1739745633',
      alt: 'Post & Co Lancaster cognac leather belt',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_COGNAC_12521.jpg?v=1739745633',
      alt: 'Post & Co studded belt detail',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10055_RED_16074.jpg?v=1739662833',
      alt: 'Post & Co red leather belt',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10055_RED_16075.jpg?v=1739662833',
      alt: 'Post & Co red belt buckle',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10088_BLACK_16080.jpg?v=1739662833',
      alt: 'Post & Co black leather belt',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10088_BLACK_16081.jpg?v=1739662833',
      alt: 'Post & Co black belt detail',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10124_COGNAC_17382.jpg?v=1740314833',
      alt: 'Post & Co cognac leather belt collection',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10124_COGNAC_17383.jpg?v=1740314833',
      alt: 'Post & Co Italian craftsmanship',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10132_BLACK_17394.jpg?v=1740315233',
      alt: 'Post & Co black studded belt',
      aspectRatio: 1
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10132_BLACK_17395.jpg?v=1740315233',
      alt: 'Post & Co leather goods',
      aspectRatio: 1
    },
  ],

  // Aequamente - Italy
  6: [
    {
      src: 'https://thedesign.pt/cdn/shop/files/03_1c5c14c7-9e5b-4c64-b7c2-effa5e0a5bca.jpg?v=1706535696',
      alt: 'Aequamente electric blue cotton dress',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/aequamente-trouser-pe26114-3-legno-1.jpg?v=1772154104',
      alt: 'Aequamente wide leg linen trouser 2026',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/aequamente-trouser-pe26114-3-legno-2.jpg?v=1772154104',
      alt: 'Aequamente minimalist design',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/aequamente-waistcoat-pe26119-4-legno-1.jpg?v=1772154104',
      alt: 'Aequamente linen waistcoat',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/aequamente-waistcoat-pe26119-4-legno-2.jpg?v=1772154104',
      alt: 'Aequamente Italian elegance',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/aequamente-top-pe26177-16-legno-1.jpg?v=1772154104',
      alt: 'Aequamente natural materials',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/aequamente-top-pe26177-16-legno-2.jpg?v=1772154104',
      alt: 'Aequamente sustainable fashion',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/aequamente-jacket-ai25164-10-carbone-1.jpg?v=1768765504',
      alt: 'Aequamente jacket carbone',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/aequamente-jacket-ai25164-10-carbone-2.jpg?v=1768765504',
      alt: 'Aequamente craftsmanship detail',
      aspectRatio: 3/4
    },
    {
      src: 'https://houseofvalerie.com/cdn/shop/files/aequamente-top-ai25162-13-natural-1.jpg?v=1768765504',
      alt: 'Aequamente natural top',
      aspectRatio: 3/4
    },
  ],

  // MJ Watson - Italy
  7: [
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7362.jpg?v=1770045296',
      alt: 'MJ Watson 660 Jumper Natural',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7363.jpg?v=1770045296',
      alt: 'MJ Watson knitwear detail',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7364.jpg?v=1770045296',
      alt: 'MJ Watson Italian luxury',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7365.jpg?v=1770045296',
      alt: 'MJ Watson contemporary knitwear',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_1874.jpg?v=1765207413',
      alt: 'MJ Watson collection 2026',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_1875.jpg?v=1765207413',
      alt: 'MJ Watson sophisticated design',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_1876.jpg?v=1765207413',
      alt: 'MJ Watson fashion piece',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_1877.jpg?v=1765207413',
      alt: 'MJ Watson minimalist aesthetic',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_1878.jpg?v=1765207413',
      alt: 'MJ Watson elegant knitwear',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_1879.jpg?v=1765207413',
      alt: 'MJ Watson modern fashion',
      aspectRatio: 3/4
    },
  ],

  // Sula - UK
  8: [
    {
      src: '/brands/sula.jpg',
      alt: 'Sula British fashion',
      aspectRatio: 3/4
    },
    {
      src: '/brands/sula-2.jpg',
      alt: 'Sula contemporary design',
      aspectRatio: 3/4
    },
    {
      src: '/brands/sula-3.jpg',
      alt: 'Sula minimalist collection',
      aspectRatio: 3/4
    },
    {
      src: '/brands/sula-4.jpg',
      alt: 'Sula sustainable fashion',
      aspectRatio: 3/4
    },
    {
      src: '/brands/sula-5.jpg',
      alt: 'Sula artisanal clothing',
      aspectRatio: 3/4
    },
    {
      src: '/brands/sula-6.jpg',
      alt: 'Sula elegant pieces',
      aspectRatio: 3/4
    },
    {
      src: '/brands/sula-7.jpg',
      alt: 'Sula modern silhouettes',
      aspectRatio: 3/4
    },
    {
      src: '/brands/sula-8.jpg',
      alt: 'Sula fashion detail',
      aspectRatio: 3/4
    },
    {
      src: '/brands/sula-9.jpg',
      alt: 'Sula collection 2026',
      aspectRatio: 3/4
    },
    {
      src: '/brands/sula-10.jpg',
      alt: 'Sula British craftsmanship',
      aspectRatio: 3/4
    },
  ],

  // SOH - South Korea
  9: [
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030CoatCharcoal-AllStyleClothing-02.jpg?v=1774929533',
      alt: 'SOH HW030 Charcoal Coat',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030CoatCharcoal-AllStyleClothing-03.jpg?v=1774929533',
      alt: 'SOH minimalist Korean fashion',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030CoatCharcoal-AllStyleClothing-01.jpg?v=1774929533',
      alt: 'SOH contemporary design',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030CoatCharcoal-AllStyleClothing-04.jpg?v=1774929533',
      alt: 'SOH structured silhouette',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHSS030DressBlack-AllStyleClothing-01.jpg?v=1774747533',
      alt: 'SOH SS030 Dress Black',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHSS030DressBlack-AllStyleClothing-02.jpg?v=1774747533',
      alt: 'SOH elegant black dress',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHSS030DressBlack-AllStyleClothing-03.jpg?v=1774747533',
      alt: 'SOH Korean elegance',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHSS030DressBlack-AllStyleClothing-04.jpg?v=1774747533',
      alt: 'SOH sophisticated fashion',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030JacketBlack-AllStyleClothing-01.jpg?v=1774661133',
      alt: 'SOH HW030 Jacket Black',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030JacketBlack-AllStyleClothing-02.jpg?v=1774661133',
      alt: 'SOH modern Korean design',
      aspectRatio: 3/4
    },
  ],
}
