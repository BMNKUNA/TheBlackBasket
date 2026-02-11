'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  phoneNumber: string
}

export function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const message = encodeURIComponent('Hi! I\'m interested in learning more about your travel packages.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      )}
    >
      {isExpanded && (
        <div className="mb-3 animate-in slide-in-from-bottom-5 fade-in">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4 max-w-xs border border-border">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">The Black Basket Travel</p>
                  <p className="text-xs text-muted-foreground">Typically replies instantly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={() => setIsExpanded(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Hi there! How can we help you plan your dream adventure?
            </p>
            <Button
              onClick={handleClick}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Start Chat
            </Button>
          </div>
        </div>
      )}
      
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        size="lg"
        className={cn(
          'h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] text-white transition-transform duration-300',
          isExpanded && 'rotate-0'
        )}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  )
}
