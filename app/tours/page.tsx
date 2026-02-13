export const dynamic = 'force-dynamic'
export const revalidate = 0
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { TourCard } from '@/components/tour-card'
import { client } from '@/sanity/client'
import { toursQuery, siteSettingsQuery } from '@/sanity/queries'
import type { Tour, SiteSettings } from '@/sanity/types'


async function getToursData() {
  try {
    const [tours, settings] = await Promise.all([
      client.fetch<Tour[]>(toursQuery),
      client.fetch<SiteSettings>(siteSettingsQuery),
    ])
    return { tours, settings }
  } catch (error) {
    console.error('[v0] Error fetching tours:', error)
    return { tours: [], settings: null }
  }
}

export const metadata = {
  title: 'Tours & Packages - The Black Basket Travel',
  description: 'Explore our curated travel packages and find your next adventure.',
}

export default async function ToursPage() {
  const { tours, settings } = await getToursData()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Our Tours & Packages
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              {
                'Discover authentic African experiences curated with care. Each package is designed to immerse you in local culture and create unforgettable memories.'
              }
            </p>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {tours.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {tours.map((tour) => (
                  <TourCard key={tour._id} tour={tour} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  {'No tours available at the moment. Please check back soon!'}
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
