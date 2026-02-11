import groq from 'groq'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  _id,
  title,
  description,
  email,
  phone,
  address,
  whatsappNumber,
  socialLinks
}`

export const heroQuery = groq`*[_type == "hero"][0]{
  _id,
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage{
    asset->{
      _id,
      url
    }
  }
}`

export const toursQuery = groq`*[_type == "tour"] | order(featured desc, _createdAt desc){
  _id,
  title,
  slug,
  description,
  price,
  duration,
  featured,
  image{
    asset->{
      _id,
      url
    }
  },
  packagePdf{
    asset->{
      _id,
      url,
      originalFilename
    }
  }
}`

export const tourBySlugQuery = groq`*[_type == "tour" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  price,
  duration,
  featured,
  highlights,
  included,
  excluded,
  itinerary,
  image{
    asset->{
      _id,
      url
    }
  },
  gallery[]{
    asset->{
      _id,
      url
    }
  },
  packagePdf{
    asset->{
      _id,
      url,
      originalFilename
    }
  }
}`

export const pastToursQuery = groq`*[_type == "pastTour"] | order(_createdAt desc){
  _id,
  title,
  date,
  location,
  description,
  images[]{
    asset->{
      _id,
      url
    },
    caption
  }
}`

export const pastEventsQuery = groq`*[_type == "pastEvent"] | order(_createdAt desc){
  _id,
  title,
  date,
  location,
  description,
  images[]{
    asset->{
      _id,
      url
    },
    caption
  }
}`

export const faqsQuery = groq`*[_type == "faq"] | order(order asc){
  _id,
  question,
  answer,
  order
}`

export const privacyPolicyQuery = groq`*[_type == "privacyPolicy"][0]{
  _id,
  content
}`

export const termsOfServiceQuery = groq`*[_type == "termsOfService"][0]{
  _id,
  content
}`

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc){
  _id,
  name,
  location,
  rating,
  comment,
  image{
    asset->{
      _id,
      url
    }
  }
}`
