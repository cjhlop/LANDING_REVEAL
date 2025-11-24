import React, { useState, useEffect, Suspense, useRef } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { 
  Users, Building2, Zap, BarChart3, ArrowRight, 
  Check, Lock, Globe, Fingerprint, ScanFace, 
  Code2, Database, Network, ChevronRight, Target, Webhook, Activity, Mail, Phone, Linkedin, CheckCircle2,
  Flame, TrendingDown, Sliders, Layers, CreditCard, MousePointerClick, Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

// --- Micro-Components ---

const SectionBadge = ({ 
  icon: Icon, 
  text, 
  variant = "default",
  className 
}: { 
  icon: React.ElementType, 
  text: string, 
  variant?: "default" | "dark" | "outline",
  className?: string 
}) => {
  const variants = {
    default: "bg-blue-50 text-blue-700 border-blue-100",
    dark: "bg-blue-950/50 text-blue-400 border-blue-800",
    outline: "bg-white text-gray-600 border-gray-200"
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-widest shadow-sm select-none",
      variants[variant],
      className
    )}>
      <Icon className="h-3.5 w-3.5" />
      {text}
    </div>
  );
};

const PulseDot = () => (
  <span className="relative flex h-2.5 w-2.5 mr-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
  </span>
);

const DataPoint = ({ label, value, delay }: { label: string, value: string, delay: number }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn(
      "flex items-center justify-between py-2 border-b border-gray-100 last:border-0 transition-all duration-500",
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
    )}>
      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</span>
      <span className="text-sm font-semibold text-gray-900">{value}</span>
    </div>
  );
};

const LiveIntentVisual = () => {
  // Use state to keep random values stable after hydration
  const [bars] = useState(() => 
    Array.from({ length: 8 }).map((_, i) => ({
      key: i,
      duration: 1.5 + Math.random(), // Random duration between 1.5s and 2.5s
      delay: i * 0.15,
      scanDuration: 2 + Math.random()
    }))
  );

  return (
    <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Gradient Masks */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10" />
      
      {/* Animated Bars Container */}
      <div className="absolute bottom-0 right-0 flex items-end gap-2 p-8 opacity-60 transform translate-y-4 translate-x-4">
        {bars.map((bar) => (
          <div 
            key={bar.key}
            className="w-8 md:w-12 bg-gradient-to-t from-green-900/20 to-green-500 rounded-t-sm relative overflow-hidden"
            style={{
              height: '120px',
              transformOrigin: 'bottom',
              animation: `equalizer ${bar.duration}s ease-in-out infinite alternate`,
              animationDelay: `${bar.delay}s`
            }}
          >
            {/* Top Glow Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)]" />
            
            {/* Inner Scan Line */}
            <div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent"
              style={{
                animation: `scan ${bar.scanDuration}s linear infinite`,
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes equalizer {
          0% { transform: scaleY(0.3); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 1; }
          100% { transform: scaleY(0.6); opacity: 0.6; }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};

const IdentityRevealCard = ({ active }: { active: boolean }) => {
  const [stage, setStage] = useState(0);
  const [typedName, setTypedName] = useState("");
  const fullName = "Sarah Jenkins";

  useEffect(() => {
    if (active) {
      // Reset
      setStage(1);
      setTypedName("");
      
      // Sequence
      const t1 = setTimeout(() => setStage(2), 400); // Avatar pop
      
      // Typing effect
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex <= fullName.length) {
          setTypedName(fullName.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setStage(3); // Job title fade in
        }
      }, 50); // Speed of typing

      // Details slide in
      const t2 = setTimeout(() => setStage(4), 1400);

      return () => {
        clearTimeout(t1);
        clearInterval(typeInterval);
        clearTimeout(t2);
      };
    } else {
      setStage(0);
      setTypedName("");
    }
  }, [active]);

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-5 w-72 transform transition-all duration-500">
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar */}
        <div className={cn(
          "w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md transition-all duration-500",
          stage >= 2 ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}>
          SJ
        </div>
        
        <div>
          {/* Name */}
          <div className="h-6 flex items-center">
            <span className="font-bold text-gray-900 text-lg leading-none">
              {typedName}
              {stage === 2 && <span className="animate-pulse text-blue-500">|</span>}
            </span>
          </div>
          {/* Job Title */}
          <div className={cn(
            "text-sm text-blue-600 font-medium transition-all duration-500",
            stage >= 3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          )}>
            VP of Marketing
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3">
        <div className={cn(
          "flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg transition-all duration-500 delay-0",
          stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Mail className="h-4 w-4 text-gray-400" />
          <span className="truncate">sarah.j@techflow.io</span>
          <CheckCircle2 className="h-3 w-3 text-green-500 ml-auto" />
        </div>
        
        <div className={cn(
          "flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg transition-all duration-500 delay-100",
          stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Phone className="h-4 w-4 text-gray-400" />
          <span>+1 (555) 019-2834</span>
        </div>

        <div className={cn(
          "flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg transition-all duration-500 delay-200",
          stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Linkedin className="h-4 w-4 text-[#0A66C2]" />
          <span className="text-blue-600">/in/sarahjenkins</span>
        </div>
      </div>
      
      {/* Match Badge */}
      <div className={cn(
        "absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg transition-all duration-500 delay-500",
        stage >= 4 ? "scale-100 opacity-100" : "scale-0 opacity-0"
      )}>
        100% MATCH
      </div>
    </div>
  );
};

const IndividualIdentityCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
          <Fingerprint className="h-7 w-7" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Individual Identity</h3>
        <p className="text-lg text-gray-600 max-w-md">
          Stop guessing. See the exact names, job titles, and verified contact details of the people browsing your site right now.
        </p>
      </div>
      
      {/* Visual decoration */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Card Container */}
      <div className={cn(
        "absolute right-8 bottom-8 md:right-12 md:bottom-12 transition-all duration-500 ease-out",
        isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <IdentityRevealCard active={isHovered} />
      </div>
    </div>
  );
};

const IdentificationDemo = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[4/5] md:aspect-square bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="text-xs font-mono text-gray-400">visitor_session_id: 8x92...</div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Stage 1: The Visit */}
        <div className={cn("transition-opacity duration-500", step >= 0 ? "opacity-100" : "opacity-30")}>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Globe className="h-5 w-5" /></div>
            <div>
              <div className="text-sm font-bold text-gray-900">New Visit Detected</div>
              <div className="text-xs text-gray-500">IP: 66.249.70.12 • San Francisco, CA</div>
            </div>
          </div>
        </div>

        {/* Stage 2: The Company */}
        <div className={cn("transition-all duration-500 delay-100", step >= 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4")}>
          <div className="relative pl-4 border-l-2 border-blue-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><Building2 className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-bold text-gray-900">Company Matched</div>
                <div className="text-xs text-gray-500">Stripe, Inc. • SaaS • 5000+ Employees</div>
              </div>
            </div>
            {step >= 1 && (
              <div className="mt-3 bg-gray-50 rounded-lg p-3 space-y-2">
                <DataPoint label="Revenue" value="$10B+" delay={100} />
                <DataPoint label="Tech Stack" value="AWS, React, Salesforce" delay={300} />
              </div>
            )}
          </div>
        </div>

        {/* Stage 3: The Person */}
        <div className={cn("transition-all duration-500 delay-200", step >= 2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4")}>
          <div className="relative pl-4 border-l-2 border-purple-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-50 rounded-lg text-green-600"><ScanFace className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-bold text-gray-900">Profile Identified</div>
                <div className="text-xs text-gray-500">High Intent Signal • 3rd Visit</div>
              </div>
            </div>
            {step >= 2 && (
              <div className="mt-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-white shadow-lg transform transition-all hover:scale-105 cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg font-bold">
                      JD
                    </div>
                    <div>
                      <div className="font-bold">John Doe</div>
                      <div className="text-xs text-blue-100">VP of Engineering</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-400/20 text-green-100 hover:bg-green-400/30 border-0">
                    Decision Maker
                  </Badge>
                </div>
                <div className="space-y-2 text-sm text-blue-50">
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400" /> john.doe@stripe.com</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400" /> +1 (555) 012-3456</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400" /> linkedin.com/in/johndoe</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-300 ease-linear" style={{ width: `${((step + 1) / 3) * 100}%` }} />
    </div>
  );
};

const LeadScoringDemo = () => {
  const [fitScore, setFitScore] = useState(30);
  const [engagementScore, setEngagementScore] = useState(20);
  
  // Fit Controls
  const [isTargetIndustry, setIsTargetIndustry] = useState(false);
  const [isDecisionMaker, setIsDecisionMaker] = useState(false);
  const [isTargetSize, setIsTargetSize] = useState(false);

  // Engagement Controls
  const [visitedPricing, setVisitedPricing] = useState(false);
  const [downloadedEbook, setDownloadedEbook] = useState(false);
  const [returnVisitor, setReturnVisitor] = useState(false);

  useEffect(() => {
    let newFit = 30;
    if (isTargetIndustry) newFit += 25;
    if (isDecisionMaker) newFit += 30;
    if (isTargetSize) newFit += 15;
    setFitScore(Math.min(newFit, 100));

    let newEng = 20;
    if (visitedPricing) newEng += 35;
    if (downloadedEbook) newEng += 25;
    if (returnVisitor) newEng += 20;
    setEngagementScore(Math.min(newEng, 100));
  }, [isTargetIndustry, isDecisionMaker, isTargetSize, visitedPricing, downloadedEbook, returnVisitor]);

  const totalScore = Math.round((fitScore + engagementScore) / 2);
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-gray-400";
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-gray-300";
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left: Controls */}
        <div className="lg:col-span-7 p-8 border-b lg:border-b-0 lg:border-r border-gray-100 bg-gray-50/50">
          <div className="space-y-8">
            
            {/* Fit Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Building2 className="h-5 w-5" /></div>
                <h4 className="font-bold text-gray-900">Fit Scoring (Who they are)</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Industry Match (SaaS)</span>
                  <Switch checked={isTargetIndustry} onCheckedChange={setIsTargetIndustry} />
                </div>
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Decision Maker (VP+)</span>
                  <Switch checked={isDecisionMaker} onCheckedChange={setIsDecisionMaker} />
                </div>
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Company Size (500+)</span>
                  <Switch checked={isTargetSize} onCheckedChange={setIsTargetSize} />
                </div>
              </div>
            </div>

            {/* Engagement Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Zap className="h-5 w-5" /></div>
                <h4 className="font-bold text-gray-900">Engagement Scoring (What they do)</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Visited Pricing Page</span>
                  <Switch checked={visitedPricing} onCheckedChange={setVisitedPricing} />
                </div>
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Downloaded E-book</span>
                  <Switch checked={downloadedEbook} onCheckedChange={setDownloadedEbook} />
                </div>
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Return Visitor (3+ sessions)</span>
                  <Switch checked={returnVisitor} onCheckedChange={setReturnVisitor} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Score Output */}
        <div className="lg:col-span-5 p-8 flex flex-col items-center justify-center bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white opacity-50" />
          
          <div className="relative z-10 text-center space-y-8 w-full">
            
            {/* Total Score Circle */}
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-48 h-48 transform -rotate-90">
                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100" />
                <circle 
                  cx="96" cy="96" r="88" 
                  stroke="currentColor" strokeWidth="12" 
                  fill="transparent" 
                  strokeDasharray={552}
                  strokeDashoffset={552 - (552 * totalScore) / 100}
                  className={cn("transition-all duration-1000 ease-out", getScoreColor(totalScore))}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={cn("text-5xl font-bold transition-colors duration-300", getScoreColor(totalScore))}>
                  {totalScore}
                </span>
                <span className="text-sm text-gray-400 font-medium uppercase tracking-wider mt-1">Lead Score</span>
              </div>
            </div>

            {/* Breakdown Bars */}
            <div className="space-y-4 w-full max-w-[200px] mx-auto">
              <div>
                <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
                  <span>Fit</span>
                  <span>{fitScore}/100</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-500 ease-out" 
                    style={{ width: `${fitScore}%` }} 
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
                  <span>Engagement</span>
                  <span>{engagementScore}/100</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-orange-500 transition-all duration-500 ease-out" 
                    style={{ width: `${engagementScore}%` }} 
                  />
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300",
              totalScore >= 80 ? "bg-green-100 text-green-700" : 
              totalScore >= 50 ? "bg-yellow-100 text-yellow-700" : 
              "bg-gray-100 text-gray-600"
            )}>
              {totalScore >= 80 ? <Flame className="h-4 w-4" /> : <Activity className="h-4 w-4" />}
              {totalScore >= 80 ? "HOT LEAD" : totalScore >= 50 ? "WARM LEAD" : "COLD LEAD"}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

const UseCasesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const DURATION = 10000; // 10 seconds
  const UPDATE_INTERVAL = 50; // Update every 50ms for smooth bar

  const cases = [
    {
      id: "sales",
      title: "For Sales",
      description: "Stop cold calling. Reach out to prospects who just visited your pricing page with perfect timing.",
      icon: Users,
      color: "blue",
      image: "/media/ads-scheduling-list.png",
      floating: (
        <>
          {/* Floating Card 1 - Left */}
          <div 
            className="absolute -left-12 top-1/3 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-64 animate-float-slow z-20"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">High Intent Alert</div>
                <div className="text-xs text-gray-500">Microsoft • Pricing Page</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="default" className="w-full h-8 text-xs bg-blue-600 hover:bg-blue-700">Sync to CRM</Button>
            </div>
          </div>

          {/* Floating Card 2 - Bottom Right */}
          <div 
            className="absolute -right-8 -bottom-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-56 animate-float-slower z-20"
            style={{ transform: "translateZ(60px)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Lead Qualified</div>
                <div className="text-xs text-gray-500">Score: 92/100</div>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: "marketing",
      title: "For Marketing",
      description: "Retarget high-intent visitors on LinkedIn and verify if your campaigns are reaching the right ICP.",
      icon: Target,
      color: "purple",
      image: "/media/audience-tuning.webp",
      floating: (
        <>
          {/* Floating Card 1 - Top Right */}
          <div 
            className="absolute -right-12 top-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-64 animate-float-slow z-20"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Audience Match</div>
                <div className="text-xs text-gray-500">ICP: SaaS &gt; 500 Employees</div>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
              <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <div className="text-xs text-right text-purple-600 font-medium">85% Match Rate</div>
          </div>

          {/* Floating Card 2 - Bottom Left */}
          <div 
            className="absolute -left-8 bottom-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-60 animate-float-slower z-20"
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Retargeting Active</div>
                <div className="text-xs text-gray-500">Campaign: Q3 Nurture</div>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: "revops",
      title: "For RevOps",
      description: "Enrich your CRM automatically. Push clean, verified data directly into Salesforce or HubSpot.",
      icon: BarChart3,
      color: "orange",
      image: "/media/feature-share-smart.png",
      floating: (
        <>
          {/* Floating Card 1 - Center */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-xl shadow-2xl border border-gray-100 w-72 animate-float-slow z-30"
            style={{ transform: "translateZ(80px) translateX(-50%) translateY(-50%)" }}
          >
            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-orange-600" />
                <span className="font-bold text-gray-900 text-sm">CRM Enrichment</span>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-[10px]">Live</Badge>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">New Accounts</span>
                <span className="font-medium text-gray-900">+124</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Contacts Enriched</span>
                <span className="font-medium text-gray-900">+850</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Data Accuracy</span>
                <span className="font-medium text-green-600">99.8%</span>
              </div>
            </div>
          </div>
        </>
      )
    }
  ];

  useEffect(() => {
    setProgress(0);
    
    progressInterval.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActiveIndex(current => (current + 1) % cases.length);
          return 0;
        }
        return prev + (100 / (DURATION / UPDATE_INTERVAL));
      });
    }, UPDATE_INTERVAL);

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [activeIndex]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const activeCase = cases[activeIndex];

  return (
    <section className="py-32 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-8">
            <SectionBadge icon={Target} text="Limitless Applications" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            One Platform, <br />
            <span className="text-blue-600">Endless Applications</span>
          </h2>
          <p className="text-xl text-gray-600">
            WebID isn't just a tool; it's the engine that powers your entire go-to-market strategy.
          </p>
        </div>

        {/* Selector Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cases.map((item, index) => {
            const isActive = index === activeIndex;
            const Icon = item.icon;
            
            return (
              <div 
                key={item.id}
                onClick={() => handleManualSelect(index)}
                className={cn(
                  "relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden group",
                  isActive 
                    ? "bg-white border-blue-200 shadow-lg scale-[1.02]" 
                    : "bg-gray-50 border-transparent hover:bg-white hover:border-gray-200"
                )}
              >
                {/* Progress Bar for Active Item */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 h-1 bg-blue-100 w-full">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                <div className="flex items-center gap-3 mb-3">
                  <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    isActive ? `bg-${item.color}-100 text-${item.color}-600` : "bg-gray-200 text-gray-500 group-hover:bg-gray-300"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={cn(
                    "font-bold text-lg transition-colors",
                    isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"
                  )}>
                    {item.title}
                  </h3>
                </div>
                <p className={cn(
                  "text-sm leading-relaxed transition-colors",
                  isActive ? "text-gray-600" : "text-gray-500"
                )}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3D Visual Area */}
        <div className="relative h-[700px] w-full flex items-center justify-center perspective-[2000px] mt-10">
          
          {/* 3D Container */}
          <div 
            className="relative w-full max-w-[1100px] transition-all duration-700 ease-out"
            style={{
              transform: "rotateX(15deg) rotateY(-12deg) rotateZ(4deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Main Image Card - No Shadow, No Border */}
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={activeCase.image} 
                alt={`${activeCase.title} Interface`} 
                className="w-full h-auto object-cover"
                key={activeCase.image} 
              />
              
              {/* Reflection/Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>

            {/* Dynamic Floating Elements */}
            {activeCase.floating}
            
          </div>
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-orange-500/5 blur-3xl -z-10" />
        </div>

      </div>
    </section>
  );
};

const WebsiteVisitors = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-white">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-purple-50/50 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left: Copy */}
            <div ref={heroRef} className="space-y-8">
              <div className={cn(
                "transition-all duration-700",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <SectionBadge icon={ScanFace} text="WebID™ Technology" />
              </div>

              <h1 className={cn(
                "text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-[1.1] transition-all duration-700 delay-100",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Unmask Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Hidden Pipeline
                </span>
              </h1>

              <p className={cn(
                "text-xl text-gray-600 max-w-xl leading-relaxed transition-all duration-700 delay-200",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                97% of your traffic is anonymous. We reveal the companies and decision-makers visiting your site, so you can sell to the people who are already buying.
              </p>

              <div className={cn(
                "flex flex-wrap gap-4 transition-all duration-700 delay-300",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <Button size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-lg shadow-xl hover:shadow-blue-500/20 transition-all">
                  Start Identifying Free
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-gray-200 hover:bg-gray-50 text-lg">
                  View Live Demo
                </Button>
              </div>

              <div className={cn(
                "flex items-center gap-6 text-sm text-gray-500 pt-4 transition-all duration-700 delay-400",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> GDPR Compliant</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> No Credit Card</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> 5-Min Setup</div>
              </div>
            </div>

            {/* Right: Visual Demo */}
            <div className={cn(
              "relative transition-all duration-1000 delay-300",
              heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              {/* Decorative blobs behind the card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              
              <IdentificationDemo />
            </div>
          </div>
        </section>

        {/* --- PROBLEM / SOLUTION TICKER --- */}
        <section className="w-full bg-gray-900 text-white py-12 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-gray-400 font-mono text-sm uppercase tracking-widest">
              Trusted by growth teams at
            </div>
            <div className="flex items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder logos for design fidelity */}
              <div className="text-xl font-bold">ACME Corp</div>
              <div className="text-xl font-bold">GlobalTech</div>
              <div className="text-xl font-bold">Nebula</div>
              <div className="text-xl font-bold">Vertex</div>
              <div className="text-xl font-bold hidden md:block">Horizon</div>
            </div>
          </div>
        </section>

        {/* --- DEEP DIVE FEATURES (Bento Grid) --- */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="flex justify-center mb-8">
                <SectionBadge icon={Layers} text="Deep Intelligence" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                More Than Just an IP Address
              </h2>
              <p className="text-xl text-gray-600">
                We combine identity resolution, behavioral tracking, and machine learning to build a complete picture of your visitors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
              
              {/* Feature 1: The Person (Large) - REPLACED WITH INTERACTIVE COMPONENT */}
              <IndividualIdentityCard />

              {/* Feature 2: The Company */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-purple-200">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Firmographics</h3>
                <p className="text-gray-600">
                  Filter traffic by revenue, industry, and tech stack to instantly spot your Ideal Customer Profile (ICP).
                </p>
              </div>

              {/* Feature 3: WFH Detection */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-200">
                  <Network className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">WFH Detection</h3>
                <p className="text-gray-600">
                  Our proprietary graph identifies decision-makers even when they're browsing from home networks or coffee shops.
                </p>
              </div>

              {/* Feature 4: Intent (Large) - UPDATED WITH DYNAMIC VISUAL */}
              <div className="md:col-span-2 bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="relative z-20">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-900/50">
                      <Zap className="h-7 w-7" />
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-medium animate-pulse">
                      <Activity className="h-3 w-3" />
                      Live Signal
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Buying Intent Signals</h3>
                  <p className="text-lg text-gray-300 max-w-md">
                    Know who's ready to buy. We track page depth, time-on-site, and return visits to score every lead automatically.
                  </p>
                </div>
                
                {/* Dynamic Visualizer */}
                <LiveIntentVisual />
              </div>

            </div>
          </div>
        </section>

        {/* --- USE CASES (New Interactive Section) --- */}
        <UseCasesSection />

        {/* --- LEAD SCORING SECTION (NEW) --- */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex justify-center mb-8">
                <SectionBadge icon={Sliders} text="Intelligent Scoring" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Separate the Browsers from the Buyers
              </h2>
              <p className="text-xl text-gray-600">
                Not all traffic is equal. Our dual-scoring engine ranks every visitor based on <strong>Fit</strong> (who they are) and <strong>Engagement</strong> (what they do), so you can focus on the hottest leads.
              </p>
            </div>

            <LeadScoringDemo />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-blue-600 mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Firmographic Fit</h3>
                <p className="text-gray-600 text-sm">Score based on industry, revenue, employee count, and tech stack to match your ICP.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-orange-600 mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Behavioral Intent</h3>
                <p className="text-gray-600 text-sm">Track high-value actions like pricing page visits, content downloads, and return frequency.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 mb-4">
                  <TrendingDown className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Decay</h3>
                <p className="text-gray-600 text-sm">Scores automatically decrease over time if a lead goes cold, keeping your pipeline fresh.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- DEVELOPER / INTEGRATION SECTION --- */}
        <section className="py-32 bg-gray-950 text-white relative overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              <div>
                <div className="mb-8">
                  <SectionBadge icon={Code2} text="Developer Friendly" variant="dark" />
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  Your Data, <br />
                  <span className="text-blue-400">Where You Need It.</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  WebID isn't a silo. Use our real-time Webhooks to pipe visitor data instantly into your CRM, Slack, or custom data warehouse.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <Database className="h-6 w-6 text-blue-400" />
                    <div>
                      <div className="font-bold">CRM Sync</div>
                      <div className="text-sm text-gray-400">Salesforce, HubSpot, Pipedrive</div>
                    </div>
                    <ChevronRight className="ml-auto h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <Webhook className="h-6 w-6 text-purple-400" />
                    <div>
                      <div className="font-bold">Real-time Webhooks</div>
                      <div className="text-sm text-gray-400">JSON payloads for custom workflows</div>
                    </div>
                    <ChevronRight className="ml-auto h-5 w-5 text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Code Block Visual */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30" />
                <div className="relative bg-gray-900 rounded-xl border border-gray-800 p-6 font-mono text-sm shadow-2xl">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-auto text-xs text-gray-500">POST /webhook/visitor</div>
                  </div>
                  <div className="space-y-1 text-gray-300">
                    <div><span className="text-purple-400">const</span> <span className="text-blue-400">visitor</span> = {"{"}</div>
                    <div className="pl-4"><span className="text-blue-300">"ip"</span>: <span className="text-green-400">"66.249.70.12"</span>,</div>
                    <div className="pl-4"><span className="text-blue-300">"company"</span>: {"{"}</div>
                    <div className="pl-8"><span className="text-blue-300">"name"</span>: <span className="text-green-400">"Stripe"</span>,</div>
                    <div className="pl-8"><span className="text-blue-300">"domain"</span>: <span className="text-green-400">"stripe.com"</span></div>
                    <div className="pl-4">{"},"}</div>
                    <div className="pl-4"><span className="text-blue-300">"person"</span>: {"{"}</div>
                    <div className="pl-8"><span className="text-blue-300">"name"</span>: <span className="text-green-400">"John Doe"</span>,</div>
                    <div className="pl-8"><span className="text-blue-300">"email"</span>: <span className="text-green-400">"john@stripe.com"</span></div>
                    <div className="pl-4">{"}"}</div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- CREDIT SYSTEM FAQ --- */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex justify-center mb-8">
              <SectionBadge icon={CreditCard} text="Transparent Credits" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-12">Transparent Pricing Logic</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-xl border border-gray-200 bg-gray-50">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-full text-green-600 mt-1"><Check className="h-4 w-4" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900">1 Credit = 1 Identification</h3>
                    <p className="text-gray-600 mt-1">You only use a credit when we successfully identify a person or a company. Anonymous traffic is free.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-gray-200 bg-white">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-full text-blue-600 mt-1"><Users className="h-4 w-4" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Person + Company Match</h3>
                    <p className="text-gray-600 mt-1">If we find both the individual and their company, it still only costs <strong>1 credit</strong>.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-gray-200 bg-white">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-100 rounded-full text-gray-600 mt-1"><Lock className="h-4 w-4" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Smart Suppression</h3>
                    <p className="text-gray-600 mt-1">We automatically filter out ISPs, universities, and bots so you don't pay for junk data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <CTASection 
          eyebrow="Ready to see who's watching?"
          title="Turn Your Website into a Lead Magnet"
          subtitle="Join 1000+ B2B companies using WebID to uncover their hidden pipeline."
          primaryLabel="Start Free Trial"
          secondaryLabel="Book a Demo"
        />
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default WebsiteVisitors;