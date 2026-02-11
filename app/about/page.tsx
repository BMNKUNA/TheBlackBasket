import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { FounderSection } from '@/components/founder-section'
import { AboutSection } from '@/components/about-section'
import { Heart, Globe2, Users, Sparkles } from 'lucide-react'
import { client } from '@/sanity/client'
import { siteSettingsQuery } from '@/sanity/queries'
import type { SiteSettings } from '@/sanity/types'

async function getAboutData() {
  try {
    const settings = await client.fetch<SiteSettings>(siteSettingsQuery)
    return { settings }
  } catch (error) {
    console.error('[v0] Error fetching settings:', error)
    return { settings: null }
  }
}

export const metadata = {
  title: 'About Us - The Black Basket Travel',
  description: 'Learn about our mission to create authentic African travel experiences that celebrate culture and connection.',
}

const values = [
  {
    name: 'Authentic Experiences',
    description: 'We believe in creating genuine cultural experiences that go beyond typical tourist attractions.',
    icon: Heart,
  },
  {
    name: 'Sustainable Travel',
    description: 'Our partnerships with local businesses ensure your travel contributes positively to destinations.',
    icon: Globe2,
  },
  {
    name: 'Personal Touch',
    description: 'Every itinerary is personally crafted, ensuring attention to detail and experiences tailored to you.',
    icon: Sparkles,
  },
  {
    name: 'Community First',
    description: 'We connect you with local communities and traditions, fostering meaningful relationships.',
    icon: Users,
  },
]

export default async function AboutPage() {
  const { settings } = await getAboutData()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              About The Black Basket Travel
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              Where dreams meet destinations and stories come alive
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <FounderSection />

        {/* Mission & Values */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Mission & Values
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                We believe in creating travel experiences that honor local cultures, support communities, 
                and inspire personal transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.name} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <AboutSection />
      </main>
      <Footer settings={settings || undefined} />
      {settings?.whatsappNumber && (
        <WhatsAppButton phoneNumber={settings.whatsappNumber} />
      )}
    </>
  )
}
