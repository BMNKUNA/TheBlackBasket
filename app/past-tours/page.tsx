import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MapPin } from 'lucide-react'
import { client } from '@/sanity/client'
import { pastToursQuery, siteSettingsQuery } from '@/sanity/queries'
import type { PastTour, SiteSettings } from '@/sanity/types'

async function getPastToursData() {
  try {
    const [pastTours, settings] = await Promise.all([
      client.fetch<PastTour[]>(pastToursQuery),
      client.fetch<SiteSettings>(siteSettingsQuery),
    ])
    return { pastTours, settings }
  } catch (error) {
    console.error('[v0] Error fetching past tours:', error)
    return { pastTours: [], settings: null }
  }
}

export const metadata = {
  title: 'Past Tours - The Black Basket Travel',
  description: 'Explore our past tour experiences and see the unforgettable memories we\'ve created with our travelers.',
}

export default async function PastToursPage() {
  const { pastTours, settings } = await getPastToursData()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Past Tours Gallery
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              Relive the magic through our collection of memorable journeys and authentic cultural experiences.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {pastTours.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {pastTours.map((tour) => (
                  <Card key={tour._id} className="overflow-hidden">
                    <CardContent className="p-0">
                      {/* Images Grid */}
                      <div className="grid grid-cols-2 gap-2 p-2">
                        {tour.images.slice(0, 4).map((image, index) => (
                          <div
                            key={index}
                            className={`relative overflow-hidden rounded-lg ${
                              index === 0 && tour.images.length >= 3
                                ? 'col-span-2 aspect-[16/9]'
                                : 'aspect-square'
                            }`}
                          >
                            <Image
                              src={image.asset.url || "/placeholder.svg"}
                              alt={image.caption || `${tour.title} - Image ${index + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                        {tour.images.length > 4 && (
                          <div className="relative aspect-square rounded-lg overflow-hidden bg-black/60 flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">
                              +{tour.images.length - 4}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Tour Info */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3">{tour.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(tour.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{tour.location}</span>
                          </div>
                        </div>
                        {tour.description && (
                          <p className="text-muted-foreground leading-relaxed">
                            {tour.description}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No past tours to display yet. Check back soon!
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
