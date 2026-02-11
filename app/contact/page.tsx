/* eslint-disable react/no-unescaped-entities */
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { client } from '@/sanity/client'
import { siteSettingsQuery } from '@/sanity/queries'
import type { SiteSettings } from '@/sanity/types'

async function getContactData() {
  try {
    const settings = await client.fetch<SiteSettings>(siteSettingsQuery)
    return { settings }
  } catch (error) {
    console.error('[v0] Error fetching settings:', error)
    return { settings: null }
  }
}

export const metadata = {
  title: 'Contact Us - The Black Basket Travel',
  description: 'Get in touch with us to start planning your dream African adventure.',
}

export default async function ContactPage() {
  const { settings } = await getContactData()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              {"Ready to start your journey? We're here to help you plan your perfect adventure."}
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
              {/* Contact Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {"Reach out to us through any of the following channels. We typically respond within 24 hours."}
                  </p>
                </div>

                <div className="space-y-4">
                  {settings?.email && (
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Email</h3>
                            <a
                              href={`mailto:${settings.email}`}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {settings.email}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {settings?.phone && (
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Phone</h3>
                            <a
                              href={`tel:${settings.phone}`}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {settings.phone}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {settings?.address && (
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Address</h3>
                            <p className="text-muted-foreground">{settings.address}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {settings?.whatsappNumber && (
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10 flex-shrink-0">
                            <MessageCircle className="h-5 w-5 text-[#25D366]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">WhatsApp</h3>
                            <p className="text-muted-foreground mb-3">Chat with us instantly</p>
                            <Button
                              className="bg-[#25D366] hover:bg-[#20BA5A] text-white w-full sm:w-auto"
                              asChild
                            >
                              <a
                                href={`https://wa.me/${settings.whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Start WhatsApp Chat
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              {/* CTA Card */}
              <div>
                <Card className="bg-black text-white border-0 h-full">
                  <CardContent className="p-8 flex flex-col justify-center h-full">
                    <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {"Your dream African adventure is just a conversation away. Let's create an unforgettable experience tailored to your interests and travel style."}
                    </p>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span className="text-sm text-gray-300">Personalized itineraries</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span className="text-sm text-gray-300">Expert local guidance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span className="text-sm text-gray-300">24/7 support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span className="text-sm text-gray-300">Authentic cultural experiences</span>
                      </li>
                    </ul>

                    <Button variant="secondary" className="w-full" asChild>
                      <a href="/tours">View Our Packages</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
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
