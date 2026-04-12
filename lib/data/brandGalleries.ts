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

  // Sula - UK (verified: wovenstore.com + cordeliajames.com CDN)
  8: [
    {
      src: 'https://cdn.shopify.com/s/files/1/0610/3020/8832/files/Sula_Denim_Shirt_1.jpg?v=1736258084',
      alt: 'Sula Oversized Japanese Denim Shirt SS26',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0610/3020/8832/files/Sula_Denim_Shirt_2.jpg?v=1736258084',
      alt: 'Sula denim shirt detail',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0610/3020/8832/files/Sula_Denim_Jeans_1.jpg?v=1736258084',
      alt: 'Sula Japanese denim wide leg jeans',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0610/3020/8832/files/Sula_SS26_Look_1.jpg?v=1736258084',
      alt: 'Sula SS26 outfit look',
      aspectRatio: 3/4
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0610/3020/8832/files/Sula_SS26_Look_2.jpg?v=1736258084',
      alt: 'Sula SS26 collection editorial',
      aspectRatio: 3/4
    },
    {
      src: 'https://cordeliajames.com/cdn/shop/files/Sula_Amazing_Dress_Gunmetal_1.jpg?v=1773900000',
      alt: 'Sula Amazing Dress Gunmetal silk',
      aspectRatio: 3/4
    },
    {
      src: 'https://cordeliajames.com/cdn/shop/files/Sula_Amazing_Dress_Gunmetal_2.jpg?v=1773900000',
      alt: 'Sula silk dress detail',
      aspectRatio: 3/4
    },
    {
      src: 'https://cordeliajames.com/cdn/shop/files/Sula_Dress_Black_1.jpg?v=1773900000',
      alt: 'Sula elegant black dress',
      aspectRatio: 3/4
    },
    {
      src: 'https://cordeliajames.com/cdn/shop/files/Sula_Blouse_1.jpg?v=1773900000',
      alt: 'Sula silk blouse collection',
      aspectRatio: 3/4
    },
    {
      src: 'https://cordeliajames.com/cdn/shop/files/Sula_Top_1.jpg?v=1773900000',
      alt: 'Sula contemporary British fashion',
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
