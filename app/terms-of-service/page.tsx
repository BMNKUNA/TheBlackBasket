import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { PortableText } from '@/components/portable-text'
import { client } from '@/sanity/client'
import { termsOfServiceQuery, siteSettingsQuery } from '@/sanity/queries'
import type { TermsOfService, SiteSettings } from '@/sanity/types'

async function getTermsOfServiceData() {
  try {
    const [termsOfService, settings] = await Promise.all([
      client.fetch<TermsOfService>(termsOfServiceQuery),
      client.fetch<SiteSettings>(siteSettingsQuery),
    ])
    return { termsOfService, settings }
  } catch (error) {
    console.error('[v0] Error fetching terms of service:', error)
    return { termsOfService: null, settings: null }
  }
}

export const metadata = {
  title: 'Terms of Service - The Black Basket Travel',
  description: 'Read our terms of service to understand the terms and conditions of using our travel services.',
}

export default async function TermsOfServicePage() {
  const { termsOfService, settings } = await getTermsOfServiceData()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {termsOfService?.content ? (
              <div className="prose prose-lg max-w-none">
                <PortableText value={termsOfService.content} />
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Terms of service content will be available soon.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer settings={settings || undefined} />
      {settings?.whatsappNumber && (
        <WhatsAppButton phoneNumber={settings.whatsappNumber} />
      )}
    </>
  )
}
