import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'

export function Features() {
    return (
        <section className="overflow-hidden py-16 md:py-32 bg-white">
            <div className="mx-auto max-w-[1216px] space-y-8 px-6 md:px-12 lg:px-16 xl:px-20 md:space-y-12">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-semibold lg:text-5xl">LinkedIn Ads Optimization</h2>
                    <p className="mt-6 text-lg">Drive more results with precision timing, smart budget controls, and optimal ad frequency.</p>
                </div>
                <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
                    <div className="[perspective:800px]">
                        <div className="[transform:skewY(-2deg)skewX(-2deg)rotateX(6deg)]">
                            <div className="aspect-[88/36] relative">
                                <div className="[background-image:radial-gradient(var(--tw-gradient-stops,at_75%_25%))] to-background z-1 -inset-[4.25rem] absolute from-transparent to-75%"></div>
                                <img src="https://tailark.com/_next/image?url=%2Fmail-upper.png&w=3840&q=75" className="absolute inset-0 z-10" alt="payments illustration dark" width={2797} height={1137} />
                        <img src="https://tailark.com/_next/image?url=%2Fmail-back.png&w=3840&q=75" className="hidden dark:block" alt="payments illustration dark" width={2797} height={1137} />
                        <img src="https://tailark.com/_next/image?url=%2Fmail-back-light.png&w=3840&q=75" className="dark:hidden" alt="payments illustration light" width={2797} height={1137} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Smart Ad Scheduling</h3>
                        </div>
                        <div className="text-muted-foreground text-sm space-y-2">
                            <p>Take control of when your ads appear:</p>
                            <ul className="space-y-1 text-xs">
                                <li>• Schedule ads for peak engagement hours only</li>
                                <li>• Automatically pause campaigns during low-converting periods</li>
                                <li>• Rotate your ads to maximize ad spend</li>
                                <li>• Track performance hour by hour</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Intelligent Frequency Cap</h3>
                        </div>
                        <div className="text-muted-foreground text-sm space-y-2">
                            <p>Prevent ad fatigue and budget waste:</p>
                            <ul className="space-y-1 text-xs">
                                <li>• Set maximum views/clicks limits per company</li>
                                <li>• Automatically stop showing ads to non-converting accounts</li>
                                <li>• Redirect spend to fresh, high-potential prospects</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Smart Audience Tuning</h3>
                        </div>
                        <div className="text-muted-foreground text-sm space-y-2">
                            <p>See exactly which entities view and engage with your ads and optimize targeting in seconds.</p>
                            <ul className="space-y-1 text-xs">
                                <li>• See every company interacting with your ads</li>
                                <li>• Identify which audience segments deliver the best results</li>
                                <li>• Connect your CRM to automatically exclude customers and active prospects</li>
                                <li>• Fine tune targeting based on real data</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">Strategic Account Exclusions</h3>
                        </div>
                        <div className="text-muted-foreground text-sm space-y-2">
                            <p>Clean your audiences instantly.</p>
                            <ul className="space-y-1 text-xs">
                                <li>• Flag and remove competitors, existing clients, and lost opportunities in two clicks</li>
                                <li>• Connect your CRM to automatically exclude customers and active prospects</li>
                                <li>• Use simple thumbs up/down controls to optimize targeting</li>
                                <li>• Push exclusions instantly to your chosen campaigns with one click</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}