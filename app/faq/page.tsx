export const dynamic = 'force-dynamic'
export const revalidate = 0
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { client } from '@/sanity/client'
import { faqsQuery, siteSettingsQuery } from '@/sanity/queries'
import type { FAQ, SiteSettings } from '@/sanity/types'

async function getFAQData() {
  try {
    const [faqs, settings] = await Promise.all([
      client.fetch<FAQ[]>(faqsQuery),
      client.fetch<SiteSettings>(siteSettingsQuery),
    ])
    return { faqs, settings }
  } catch (error) {
    console.error('[v0] Error fetching FAQs:', error)
    return { faqs: [], settings: null }
  }
}

export const metadata = {
  title: 'FAQ - The Black Basket Travel',
  description: 'Frequently asked questions about our travel packages and services.',
}

export default async function FAQPage() {
  const { faqs, settings } = await getFAQData()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
              Find answers to common questions about our tours, booking process, and travel services.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            {faqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq._id} value={faq._id}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No FAQs available at the moment. Please contact us for any questions.
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
