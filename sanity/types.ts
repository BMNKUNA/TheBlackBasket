export interface SiteSettings {
  _id: string
  title: string
  description: string
  email: string
  phone: string
  address: string
  whatsappNumber: string
  socialLinks?: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
  }
}

export interface Hero {
  _id: string
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage?: {
    asset: {
      _id: string
      url: string
    }
  }
}

export interface Tour {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  price: number
  duration: string
  featured: boolean
  highlights?: string[]
  included?: string[]
  excluded?: string[]
  itinerary?: Array<{
    day: number
    title: string
    description: string
  }>
  image?: {
    asset: {
      _id: string
      url: string
    }
  }
  gallery?: Array<{
    asset: {
      _id: string
      url: string
    }
  }>
  packagePdf?: {
    asset: {
      _id: string
      url: string
      originalFilename: string
    }
  }
}

export interface PastTour {
  _id: string
  title: string
  date: string
  location: string
  description: string
  images: Array<{
    asset: {
      _id: string
      url: string
    }
    caption?: string
  }>
}

export interface PastEvent {
  _id: string
  title: string
  date: string
  location: string
  description: string
  images: Array<{
    asset: {
      _id: string
      url: string
    }
    caption?: string
  }>
}

export interface FAQ {
  _id: string
  question: string
  answer: string
  order: number
}

export interface PrivacyPolicy {
  _id: string
  content: any // Portable Text
}

export interface TermsOfService {
  _id: string
  content: any // Portable Text
}

export interface Testimonial {
  _id: string
  name: string
  location: string
  rating: number
  comment: string
  image?: {
    asset: {
      _id: string
      url: string
    }
  }
}
