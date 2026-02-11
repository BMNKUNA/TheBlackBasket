import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { FounderSection } from '@/components/founder-section'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { client } from '@/sanity/client'
import { heroQuery, siteSettingsQuery } from '@/sanity/queries'
import type { Hero, SiteSettings } from '@/sanity/types'

async function getHomeData() {
  try {
    const [hero, settings] = await Promise.all([
      client.fetch<Hero>(heroQuery),
      client.fetch<SiteSettings>(siteSettingsQuery),
    ])
    return { hero, settings }
  } catch (error) {
    console.error('[v0] Error fetching home data:', error)
    return { hero: null, settings: null }
  }
}

export default async function Page() {
  const { hero, settings } = await getHomeData()

  return (
    <>
      <Header />
      <main>
        <HeroSection hero={hero || undefined} />
        <AboutSection />
        <FounderSection />
      </main>
      <Footer settings={settings || undefined} />
      {settings?.whatsappNumber && (
        <WhatsAppButton phoneNumber={settings.whatsappNumber} />
      )}
    </>
  )
}
