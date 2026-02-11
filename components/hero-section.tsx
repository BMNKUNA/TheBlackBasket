import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import type { Hero } from '@/sanity/types'

interface HeroSectionProps {
  hero?: Hero
}

export function HeroSection({ hero }: HeroSectionProps) {
  const title = hero?.title || 'Where Dreams Meet Destinations'
  const subtitle = hero?.subtitle || 'Curating authentic African travel experiences that celebrate culture, connection, and the beauty of our world. Your dreams are valid.'
  const ctaText = hero?.ctaText || 'View Our Packages'
  const ctaLink = hero?.ctaLink || '/tours'

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,204,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,204,0,0.05),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 text-balance">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 text-pretty leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-base px-8">
              <Link href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 bg-transparent border-white text-white hover:bg-white hover:text-black">
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-sm text-gray-300">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">50+</div>
            <div className="text-sm text-gray-300">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">10+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">98%</div>
            <div className="text-sm text-gray-300">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
