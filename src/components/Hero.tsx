"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Zap,
  Users,
  TrendingUp,
  Target,
  DollarSign,
  Play
} from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const MetricCard = ({ 
  icon: Icon, 
  iconBg, 
  number, 
  label, 
  className,
  style
}: { 
  icon: any, 
  iconBg: string, 
  number: string, 
  label: string, 
  className?: string,
  style?: React.CSSProperties
}) => (
  <div 
    className={cn(
      "absolute z-20 flex items-center gap-[10px] bg-white p-[12px_16px] rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 animate-in fade-in zoom-in duration-1000 animate-float",
      className
    )}
    style={style}
  >
    <div className={cn("w-9 h-9 rounded-[8px] flex items-center justify-center flex-shrink-0", iconBg)}>
      <Icon className="w-[18px] h-[18px] text-white" />
    </div>
    <div className="flex flex-col">
      <span className="text-[20px] font-bold text-[#0F172A] leading-none">{number}</span>
      <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mt-1">{label}</span>
    </div>
  </div>
);

const Hero = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });

  // Generate stable random values for the data bursts
  const bursts = React.useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      top: 5 + (i * 9),
      delay: i * 0.7,
      duration: 4 + Math.random() * 4,
      color: Math.random() > 0.4 ? "#3875F6" : "rgb(249 115 22)"
    }));
  }, []);

  // Handle mouse movement for parallax
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 40; 
      const y = (clientY / innerHeight - 0.5) * 40;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={ref}
      className="relative min-h-[700px] pt-32 pb-16 w-full flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* High-Energy Digital Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{ 
            backgroundImage: `linear-gradient(#3875F6 1.5px, transparent 1.5px), linear-gradient(90deg, #3875F6 1.5px, transparent 1.5px)`,
            backgroundSize: '80px 80px',
            transform: `perspective(1000px) rotateX(60deg) translateZ(0)`,
            transformOrigin: 'center top'
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_90%)]" />

        <div className="absolute inset-0 overflow-hidden">
          {bursts.map((burst) => (
            <div 
              key={burst.id}
              className="absolute h-[1.5px] opacity-60 animate-data-burst"
              style={{
                width: '450px',
                top: `${burst.top}%`,
                left: '-450px',
                background: `linear-gradient(to right, transparent, ${burst.color}, transparent)`,
                animationDelay: `${burst.delay}s`,
                animationDuration: `${burst.duration}s`,
                willChange: 'transform'
              }}
            />
          ))}
        </div>

        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-[120px] transition-transform duration-1000 ease-out"
          style={{ 
            background: 'radial-gradient(circle, #3875F6 0%, transparent 70%)',
            top: '0%',
            left: '0%',
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`
          }}
        />
        <div 
          className="absolute w-[700px] h-[700px] rounded-full opacity-15 blur-[100px] transition-transform duration-1000 ease-out"
          style={{ 
            background: 'radial-gradient(circle, #FA8C16 0%, transparent 70%)',
            bottom: '0%',
            right: '0%',
            transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`
          }}
        />
      </div>

      {/* Floating Metric Cards */}
      <div className="absolute inset-0 max-w-[1400px] mx-auto pointer-events-none hidden lg:block">
        {/* Left Side Cards */}
        <MetricCard 
          icon={Users}
          iconBg="bg-blue-500"
          number="12,450"
          label="VISITORS IDENTIFIED"
          className="top-[25%] left-[5%]"
          style={{ animationDelay: '0s' }}
        />
        <MetricCard 
          icon={DollarSign}
          iconBg="bg-orange-500"
          number="$4,200"
          label="MONTHLY SAVED"
          className="bottom-[30%] left-[8%]"
          style={{ animationDelay: '1.6s' }}
        />

        {/* Right Side Cards */}
        <MetricCard 
          icon={Target}
          iconBg="bg-purple-500"
          number="94%"
          label="MATCH RATE"
          className="top-[28%] right-[5%]"
          style={{ animationDelay: '0.8s' }}
        />
        <MetricCard 
          icon={TrendingUp}
          iconBg="bg-green-500"
          number="5.8x"
          label="ROAS PROVEN"
          className="bottom-[25%] right-[8%]"
          style={{ animationDelay: '2.4s' }}
        />
      </div>

      <div className="container relative z-10 max-w-[1216px] mx-auto px-6">
        {/* Headline Area */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Sparkles className="h-3 w-3 text-blue-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">LINKEDIN ADS INTELLIGENCE PLATFORM</span>
          </div>

          <h1 className="text-[54px] font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
            LinkedIn Ads Platform for<br />
            <span className="bg-gradient-to-r from-[#3875F6] to-[#60A5FA] bg-clip-text text-transparent">
              Sophisticated Advertisers
            </span>
          </h1>

          <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            DemandSense gives you control and attribution so you can decide where budget goes - and see which companies turn into pipeline without manual tracking.
          </p>

          <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button variant="hero" size="hero" className="group shadow-xl shadow-blue-500/20">
                Start 30-Day Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="hero" className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm">
                <Play className="mr-2 h-4 w-4 fill-current" />
                Watch Demo
              </Button>
            </div>
            
            {/* Social Proof Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {/* Badge 1 */}
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 shadow-sm rounded-lg py-2 px-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">Full-feature. No credit card</span>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 shadow-sm rounded-lg py-2 px-3">
                <img 
                  src="/src/assets/g2.png" 
                  alt="G2 Logo" 
                  className="w-8 h-8 rounded-md object-contain"
                />
                <div className="flex items-baseline gap-0.5">
                  <span className="text-sm font-bold text-gray-900">5.0</span>
                  <span className="text-[10px] text-gray-400">/ 5</span>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 shadow-sm rounded-lg py-2 px-3">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">AI insights and reporting</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes data-burst {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateX(calc(100vw + 450px)); opacity: 0; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-data-burst { animation: data-burst linear infinite; }
        .animate-float { animation: float 3.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;