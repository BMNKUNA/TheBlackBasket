export const dynamic = 'force-dynamic'
export const revalidate = 0
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MapPin } from 'lucide-react'
import { client } from '@/sanity/client'
import { pastEventsQuery, siteSettingsQuery } from '@/sanity/queries'
import type { PastEvent, SiteSettings } from '@/sanity/types'

async function getPastEventsData() {
  try {
    const [pastEvents, settings] = await Promise.all([
      client.fetch<PastEvent[]>(pastEventsQuery),
      client.fetch<SiteSettings>(siteSettingsQuery),
    ])
    return { pastEvents, settings }
  } catch (error) {
    console.error('[v0] Error fetching past events:', error)
    return { pastEvents: [], settings: null }
  }
}

export const metadata = {
  title: 'Past Events - The Black Basket Travel',
  description: 'Explore our past events and special gatherings that bring our travel community together.',
}

export default async function PastEventsPage() {
  const { pastEvents, settings } = await getPastEventsData()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Past Events Gallery
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              Celebrate community, culture, and connection through our special events and gatherings.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {pastEvents.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {pastEvents.map((event) => (
                  <Card key={event._id} className="overflow-hidden">
                    <CardContent className="p-0">
                      {/* Images Grid */}
                      <div className="grid grid-cols-2 gap-2 p-2">
                        {event.images.slice(0, 4).map((image, index) => (
                          <div
                            key={index}
                            className={`relative overflow-hidden rounded-lg ${
                              index === 0 && event.images.length >= 3
                                ? 'col-span-2 aspect-[16/9]'
                                : 'aspect-square'
                            }`}
                          >
                            <Image
                              src={image.asset.url || "/placeholder.svg"}
                              alt={image.caption || `${event.title} - Image ${index + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                        {event.images.length > 4 && (
                          <div className="relative aspect-square rounded-lg overflow-hidden bg-black/60 flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">
                              +{event.images.length - 4}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Event Info */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(event.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        {event.description && (
                          <p className="text-muted-foreground leading-relaxed">
                            {event.description}
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
                  No past events to display yet. Check back soon!
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
