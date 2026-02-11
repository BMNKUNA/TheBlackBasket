import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Clock, 
  Download, 
  CheckCircle, 
  XCircle,
  ArrowLeft,
  Mail,
  Phone
} from 'lucide-react'
import { client } from '@/sanity/client'
import { tourBySlugQuery, siteSettingsQuery } from '@/sanity/queries'
import type { Tour, SiteSettings } from '@/sanity/types'

async function getTourData(slug: string) {
  try {
    const [tour, settings] = await Promise.all([
      client.fetch<Tour>(tourBySlugQuery, { slug }),
      client.fetch<SiteSettings>(siteSettingsQuery),
    ])
    return { tour, settings }
  } catch (error) {
    console.error('[v0] Error fetching tour:', error)
    return { tour: null, settings: null }
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { tour } = await getTourData(slug)
  
  if (!tour) {
    return {
      title: 'Tour Not Found',
    }
  }

  return {
    title: `${tour.title} - The Black Basket Travel`,
    description: tour.description,
  }
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { tour, settings } = await getTourData(slug)

  if (!tour) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Image */}
        <div className="relative h-[400px] lg:h-[500px] w-full">
          {tour.image?.asset?.url && (
            <Image
              src={tour.image.asset.url || "/placeholder.svg"}
              alt={tour.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">
              <Button variant="ghost" asChild className="mb-4 text-white hover:text-white hover:bg-white/20 bg-transparent">
                <Link href="/tours">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Tours
                </Link>
              </Button>
              <div className="flex items-center gap-3 mb-2">
                {tour.featured && (
                  <Badge className="bg-secondary text-black">Featured</Badge>
                )}
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">
                {tour.title}
              </h1>
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{tour.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <section>
                <h2 className="text-2xl font-bold mb-4">About This Tour</h2>
                <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
              </section>

              {/* Highlights */}
              {tour.highlights && tour.highlights.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                  <ul className="space-y-2">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* What's Included/Excluded */}
              <div className="grid sm:grid-cols-2 gap-6">
                {tour.included && tour.included.length > 0 && (
                  <section>
                    <h3 className="text-xl font-bold mb-4">What's Included</h3>
                    <ul className="space-y-2">
                      {tour.included.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {tour.excluded && tour.excluded.length > 0 && (
                  <section>
                    <h3 className="text-xl font-bold mb-4">What's Excluded</h3>
                    <ul className="space-y-2">
                      {tour.excluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              {/* Itinerary */}
              {tour.itinerary && tour.itinerary.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
                  <div className="space-y-4">
                    {tour.itinerary.map((day, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold flex-shrink-0">
                              {day.day}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">{day.title}</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {day.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* Gallery */}
              {tour.gallery && tour.gallery.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {tour.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={image.asset.url || "/placeholder.svg"}
                          alt={`${tour.title} - Image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-primary mb-1">
                        R {tour.price.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground">per person</p>
                    </div>
                    
                    <Separator className="my-6" />

                    <div className="space-y-3">
                      {tour.packagePdf?.asset?.url && (
                        <Button 
                          variant="outline" 
                          className="w-full bg-transparent" 
                          asChild
                        >
                          <a
                            href={tour.packagePdf.asset.url}
                            download={tour.packagePdf.asset.originalFilename || `${tour.title}.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download Package
                          </a>
                        </Button>
                      )}
                      <Button className="w-full" asChild>
                        <Link href="/contact">Book This Tour</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Need Help?</h3>
                    <div className="space-y-3 text-sm">
                      {settings?.email && (
                        <a 
                          href={`mailto:${settings.email}`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          {settings.email}
                        </a>
                      )}
                      {settings?.phone && (
                        <a 
                          href={`tel:${settings.phone}`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                          {settings.phone}
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer settings={settings || undefined} />
      {settings?.whatsappNumber && (
        <WhatsAppButton phoneNumber={settings.whatsappNumber} />
      )}
    </>
  )
}
