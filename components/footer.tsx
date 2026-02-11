import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'
import type { SiteSettings } from '@/sanity/types'

interface FooterProps {
  settings?: SiteSettings
}

export function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="The Black Basket Travel"
              width={180}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-300 max-w-md">
              {settings?.description || 'Curating authentic travel experiences that celebrate culture, connection, and the beauty of our world.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-sm text-gray-300 hover:text-secondary transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/past-tours" className="text-sm text-gray-300 hover:text-secondary transition-colors">
                  Past Tours
                </Link>
              </li>
              <li>
                <Link href="/past-events" className="text-sm text-gray-300 hover:text-secondary transition-colors">
                  Past Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-secondary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-300 hover:text-secondary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-secondary">Get in Touch</h3>
            <ul className="space-y-3">
              {settings?.email && (
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                  <a href={`mailto:${settings.email}`} className="text-sm text-gray-300 hover:text-secondary transition-colors">
                    {settings.email}
                  </a>
                </li>
              )}
              {settings?.phone && (
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                  <a href={`tel:${settings.phone}`} className="text-sm text-gray-300 hover:text-secondary transition-colors">
                    {settings.phone}
                  </a>
                </li>
              )}
              {settings?.address && (
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    {settings.address}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-gray-400">
              © {currentYear} The Black Basket Travel. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-xs text-gray-400 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-xs text-gray-400 hover:text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
