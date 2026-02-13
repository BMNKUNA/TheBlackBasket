export const dynamic = 'force-dynamic'
export const revalidate = 0
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { PortableText } from '@/components/portable-text'
import { client } from '@/sanity/client'
import { privacyPolicyQuery, siteSettingsQuery } from '@/sanity/queries'
import type { PrivacyPolicy, SiteSettings } from '@/sanity/types'

async function getPrivacyPolicyData() {
  try {
    const [privacyPolicy, settings] = await Promise.all([
      client.fetch<PrivacyPolicy>(privacyPolicyQuery),
      client.fetch<SiteSettings>(siteSettingsQuery),
    ])
    return { privacyPolicy, settings }
  } catch (error) {
    console.error('[v0] Error fetching privacy policy:', error)
    return { privacyPolicy: null, settings: null }
  }
}

export const metadata = {
  title: 'Privacy Policy - The Black Basket Travel',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
}

export default async function PrivacyPolicyPage() {
  const { privacyPolicy, settings } = await getPrivacyPolicyData()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              Your privacy is important to us. Learn how we protect your personal information.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {privacyPolicy?.content ? (
              <div className="prose prose-lg max-w-none">
                <PortableText value={privacyPolicy.content} />
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Privacy policy content will be available soon.
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
