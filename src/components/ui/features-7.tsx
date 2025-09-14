import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

const slides = [
    {
        id: 0,
        image: '/media/ads-scheduling.webp',
        alt: 'Smart Ad Scheduling Dashboard'
    },
    {
        id: 1,
        image: '/media/frequency-cap.webp',
        alt: 'Intelligent Frequency Cap Interface'
    },
    {
        id: 2,
        image: '/media/audience-tuning.webp',
        alt: 'Smart Audience Tuning Analytics'
    },
    {
        id: 3,
        image: '/media/audience-tuning-exclusion.webp',
        alt: 'Strategic Account Exclusions Dashboard'
    }
]

const features = [
    {
        icon: Zap,
        title: "Smart Ad Scheduling",
        description: "Take control of when your ads appear:",
        bullets: [
            "Schedule ads for peak engagement hours only",
            "Automatically pause campaigns during low-converting periods",
            "Rotate your ads to maximize ad spend",
            "Track performance hour by hour"
        ]
    },
    {
        icon: Cpu,
        title: "Intelligent Frequency Cap",
        description: "Prevent ad fatigue and budget waste:",
        bullets: [
            "Set maximum views/clicks limits per company",
            "Automatically stop showing ads to non-converting accounts",
            "Redirect spend to fresh, high-potential prospects"
        ]
    },
    {
        icon: Lock,
        title: "Smart Audience Tuning",
        description: "See exactly which entities view and engage with your ads and optimize targeting in seconds.",
        bullets: [
            "See every company interacting with your ads",
            "Identify which audience segments deliver the best results",
            "Connect your CRM to automatically exclude customers and active prospects",
            "Fine tune targeting based on real data"
        ]
    },
    {
        icon: Sparkles,
        title: "Strategic Account Exclusions",
        description: "Clean your audiences instantly.",
        bullets: [
            "Flag and remove competitors, existing clients, and lost opportunities in two clicks",
            "Connect your CRM to automatically exclude customers and active prospects",
            "Use simple thumbs up/down controls to optimize targeting",
            "Push exclusions instantly to your chosen campaigns with one click"
        ]
    }
]

export function Features() {
    const [activeSlide, setActiveSlide] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const SLIDE_DURATION = 10000 // 10 seconds

    const nextSlide = useCallback(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length)
        setProgress(0)
    }, [])

    const goToSlide = useCallback((index: number) => {
        setActiveSlide(index)
        setProgress(0)
    }, [])

    // Auto-advance slides
    useEffect(() => {
        if (isPaused) return

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    nextSlide()
                    return 0
                }
                return prev + (100 / (SLIDE_DURATION / 100))
            })
        }, 100)

        return () => clearInterval(interval)
    }, [nextSlide, isPaused])

    // Reset progress when slide changes
    useEffect(() => {
        setProgress(0)
    }, [activeSlide])

    return (
        <section className="overflow-hidden py-16 md:py-32 bg-white">
            <div className="mx-auto max-w-[1216px] space-y-8 px-6 md:px-12 lg:px-16 xl:px-20 md:space-y-12">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-semibold lg:text-5xl">LinkedIn Ads Optimization</h2>
                    <p className="mt-6 text-lg">Drive more results with precision timing, smart budget controls, and optimal ad frequency.</p>
                </div>
                
                {/* Image Slider */}
                <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12">
                    <div className="[perspective:800px]">
                        <div className="[transform:skewY(-2deg)skewX(-2deg)rotateX(6deg)]">
                            <div className="aspect-[88/36] relative overflow-hidden rounded-2xl">
                                <div className="[background-image:radial-gradient(var(--tw-gradient-stops,at_75%_25%))] to-background z-1 -inset-[4.25rem] absolute from-transparent to-75%"></div>
                                {slides.map((slide, index) => (
                                    <img
                                        key={slide.id}
                                        src={slide.image}
                                        alt={slide.alt}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                                            index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Cards with Progress Bars */}
                <div 
                    className="relative mx-auto grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        const isActive = index === activeSlide
                        const currentProgress = isActive ? progress : (index < activeSlide ? 100 : 0)
                        
                        return (
                            <div
                                key={index}
                                className={`relative space-y-3 p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                                    isActive 
                                        ? 'border-blue-500 bg-blue-50 shadow-lg scale-105' 
                                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                                }`}
                                onClick={() => goToSlide(index)}
                            >
                                {/* Progress Bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-t-lg overflow-hidden">
                                    <div 
                                        className={`h-full transition-all duration-100 ease-linear ${
                                            isActive ? 'bg-blue-500' : 'bg-gray-400'
                                        }`}
                                        style={{ width: `${currentProgress}%` }}
                                    />
                                </div>

                                <div className="flex items-center gap-2 pt-2">
                                    <Icon className={`size-4 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
                                    <h3 className={`text-sm font-medium ${isActive ? 'text-blue-900' : 'text-gray-900'}`}>
                                        {feature.title}
                                    </h3>
                                </div>
                                
                                <div className={`text-sm space-y-2 ${isActive ? 'text-blue-800' : 'text-gray-600'}`}>
                                    <p>{feature.description}</p>
                                    <ul className="space-y-1 text-xs">
                                        {feature.bullets.map((bullet, bulletIndex) => (
                                            <li key={bulletIndex}>• {bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === activeSlide 
                                    ? 'bg-blue-500 scale-125' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}