import { Heart, Globe, Users, Shield } from 'lucide-react'

const features = [
  {
    name: 'Authentic Experiences',
    description: 'We curate genuine cultural experiences that go beyond typical tourist attractions, connecting you with local communities.',
    icon: Heart,
  },
  {
    name: 'Expert Local Knowledge',
    description: 'Over 10 years of firsthand experience exploring Africa and building relationships with local communities.',
    icon: Globe,
  },
  {
    name: 'Personalized Itineraries',
    description: 'Every journey is uniquely designed based on your interests, budget, and travel style.',
    icon: Users,
  },
  {
    name: '24/7 Support',
    description: 'From planning to your return home, we\'re available around the clock to ensure your journey is smooth.',
    icon: Shield,
  },
]

export function AboutSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Choose The Black Basket Travel
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We're not just a travel company—we're your partners in creating life-changing adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative group">
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
