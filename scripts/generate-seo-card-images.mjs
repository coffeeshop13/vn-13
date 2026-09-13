import sharp from 'sharp'

const cardImages = [
  {
    input: 'public/brands/aequamente-lookbook/aequamente-main.jpg',
    output: 'public/brands/aequamente-lookbook/aequamente-card-v20260913-q70.webp',
    width: 780,
  },
  {
    input: 'public/brands/real/manuelle-guibal-1.jpg',
    output: 'public/brands/real/manuelle-guibal-card-v20260913-q70.webp',
    width: 640,
  },
  {
    input: 'public/brands/shoto/659033416_18583709092038082_3052003841669754962_n.jpg',
    output: 'public/brands/shoto/shoto-card-v20260913-q70.webp',
    width: 780,
  },
  {
    input: 'public/brands/hannoh-lookbook/hannoh-11.jpg',
    output: 'public/brands/hannoh-lookbook/hannoh-card-v20260913-q70.webp',
    width: 780,
  },
  {
    input: 'public/brands/moyuru.jpg',
    output: 'public/brands/moyuru-card-v20260913-q70.webp',
    width: 780,
  },
  {
    input: 'public/brands/post-and-co/belt-collection.seo.webp',
    output: 'public/brands/post-and-co/belt-collection-card-v20260913-q70.webp',
    width: 780,
  },
]

for (const image of cardImages) {
  await sharp(image.input)
    .resize({ width: image.width })
    .webp({ quality: 70, effort: 6 })
    .toFile(image.output)
}
