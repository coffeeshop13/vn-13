import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ExtendedSeoPage from '@/components/ExtendedSeoPage'
import { extendedSeoPages, getExtendedSeoPage } from '@/lib/extended-seo-pages'
import { createMetadata } from '@/lib/seo'

type PageProps = {
  params: Promise<{
    seoSlug: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return extendedSeoPages.map((page) => ({
    seoSlug: page.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { seoSlug } = await params
  const page = getExtendedSeoPage(decodeURIComponent(seoSlug))

  if (!page) {
    return {}
  }

  return createMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
    modifiedTime: page.lastModified,
  })
}

export default async function SeoKeywordPage({ params }: PageProps) {
  const { seoSlug } = await params
  const page = getExtendedSeoPage(decodeURIComponent(seoSlug))

  if (!page) {
    notFound()
  }

  return <ExtendedSeoPage page={page} />
}
