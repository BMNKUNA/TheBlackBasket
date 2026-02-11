import { Quote } from 'lucide-react'

export function FounderSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute -top-6 -left-6 text-secondary opacity-20">
              <Quote className="h-16 w-16" />
            </div>

            <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12">
              {/* FIXED QUOTES */}
              <blockquote className="text-2xl lg:text-3xl font-medium text-center mb-8 text-balance">
                {'"Every journey is a story"'}
              </blockquote>

              <div className="text-center mb-8">
                <p className="text-lg font-semibold mb-1">Rejoice</p>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Born with wanderlust in her heart and a passion for authentic cultural experiences,
                  Rejoice founded The Black Basket Travel with a simple yet powerful belief: your dreams are valid.
                </p>

                <p>
                  After years of exploring the hidden gems of Africa and beyond, she realized that travel
                  is more than just visiting places—it{"'"}s about creating transformative experiences that
                  celebrate the beauty of diverse cultures and forge meaningful connections.
                </p>

                <p>
                  With over a decade of experience in curating bespoke travel experiences, Rejoice has
                  helped hundreds of travelers discover the magic of authentic adventures, from the pristine
                  beaches of Zanzibar to the bustling markets of Marrakech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
