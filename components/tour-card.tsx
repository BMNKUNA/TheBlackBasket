import Image from 'next/image'
import Link from 'next/link'
import { Clock, Download, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Tour } from '@/sanity/types'

interface TourCardProps {
  tour: Tour
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        {tour.image?.asset?.url && (
          <Image
            src={tour.image.asset.url || "/placeholder.svg"}
            alt={tour.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        )}
        {tour.featured && (
          <Badge className="absolute top-4 right-4 bg-secondary text-black">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="flex-1 p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{tour.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
          {tour.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{tour.duration}</span>
          </div>
        </div>
        <div className="text-2xl font-bold text-primary">
          R {tour.price.toLocaleString()}
          <span className="text-sm font-normal text-muted-foreground"> / person</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button asChild className="flex-1">
          <Link href={`/tours/${tour.slug.current}`}>View Details</Link>
        </Button>
        {tour.packagePdf?.asset?.url && (
          <Button variant="outline" size="icon" asChild className="bg-transparent">
            <a
              href={tour.packagePdf.asset.url}
              download={tour.packagePdf.asset.originalFilename || `${tour.title}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              title="Download Package PDF"
            >
              <Download className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
