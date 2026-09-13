import sharp from 'sharp'

const cardImages = [
  {
    input: 'public/brands/aequamente-lookbook/aequamente-main.jpg',
    output: 'public/brands/aequamente-lookbook/aequamente-card-v20260913.webp',
    width: 780,
  },
  {
    input: 'public/brands/real/manuelle-guibal-1.jpg',
    output: 'public/brands/real/manuelle-guibal-card-v20260913.webp',
    width: 640,
  },
]

for (const image of cardImages) {
  await sharp(image.input)
    .resize({ width: image.width })
    .webp({ quality: 80, effort: 6 })
    .toFile(image.output)
}
