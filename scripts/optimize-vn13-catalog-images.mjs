import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const sourceDir = '/Volumes/Public/VN13'
const outputDir = 'public/brands/vn13-catalog'

const images = [
  ['DSCF6007.jpg', 'vn13-designer-womenswear-collection.webp', 2000],
  ['DSCF6065.jpg', 'vn13-black-jacket-white-layered-dress.webp', 1600],
  ['DSCF6071.jpg', 'vn13-black-jacket-trousers-white-dress-look.webp', 1600],
  ['DSCF6085.jpg', 'vn13-black-layered-designer-dress.webp', 1600],
  ['DSCF6098.jpg', 'vn13-black-white-oversize-shirts.webp', 1600],
  ['DSCF6094.jpg', 'vn13-black-sheer-oversize-shirt.webp', 1600],
  ['DSCF6099.jpg', 'vn13-black-designer-shirt.webp', 1600],
  ['DSCF6022.jpg', 'vn13-black-textured-designer-coat.webp', 1600],
  ['DSCF6110.jpg', 'vn13-white-patchwork-trousers-detail.webp', 1600],
  ['DSCF6105.jpg', 'vn13-white-oversize-designer-shirt.webp', 1600],
  ['DSCF6104.jpg', 'vn13-white-shirt-natural-buttons-detail.webp', 1600],
  ['DSCF6053.jpg', 'vn13-black-textured-fringe-vest.webp', 1600],
  ['DSCF6056.jpg', 'vn13-blue-floral-designer-dress.webp', 1600],
  ['DSCF6024.jpg', 'vn13-black-coat-label-detail.webp', 1600],
  ['DSCF6061.jpg', 'vn13-black-cropped-jacket-floral-dress.webp', 1600],
  ['DSCF6035.jpg', 'vn13-black-leather-vest-trousers-look.webp', 1600],
  ['DSCF6043.jpg', 'vn13-black-leather-trousers-detail.webp', 1600],
  ['DSCF6054.jpg', 'vn13-black-leather-fringe-vest-detail.webp', 1600],
  ['DSCF6059.jpg', 'vn13-blue-floral-dress-sleeve-detail.webp', 1600],
  ['DSCF6076.jpg', 'vn13-black-jacket-patch-pocket-detail.webp', 1600],
  ['DSCF6078.jpg', 'vn13-black-jacket-collar-label-detail.webp', 1600],
  ['DSCF6081.jpg', 'vn13-black-designer-trousers-waist-detail.webp', 1600],
  ['DSCF6084.jpg', 'vn13-black-trousers-patch-pocket-detail.webp', 1600],
  ['DSCF6075.jpg', 'vn13-black-jacket-natural-buttons-detail.webp', 1600],
  ['DSCF6102.jpg', 'vn13-black-shirt-brand-label-detail.webp', 1600],
  ['DSCF6091.jpg', 'vn13-black-dress-sheer-hem-detail.webp', 1600],
  ['DSCF6092.jpg', 'vn13-black-dress-neckline-detail.webp', 1600],
  ['DSCF6101.jpg', 'vn13-black-shirt-cuff-detail.webp', 1600],
]

await fs.mkdir(outputDir, { recursive: true })

for (const [source, output, width] of images) {
  await sharp(path.join(sourceDir, source))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6, smartSubsample: true })
    .toFile(path.join(outputDir, output))
}
