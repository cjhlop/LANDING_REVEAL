import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  BarChart3, 
  Globe, 
  Shield, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const Features = () => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  const features = [
    {
      title: "LinkedIn Ads Optimization",
      description:
        "AI-powered campaign optimization that reduces wasted spend by up to 40%. Smart scheduling, frequency capping, and budget controls.",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
      stats: "40% Budget Saved",
      image: "/media/ads-scheduling-interface.png",
    },
    {
      title: "Website Visitor Intelligence",
      description:
        "Identify anonymous B2B visitors and track their journey. Know which companies are researching your solution before they convert.",
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
      stats: "95% Match Rate",
      image: "/media/hover-sidebar.png",
    },
    {
      title: "Revenue Attribution",
      description:
        "Connect every touchpoint to revenue. Prove marketing's impact with multi-touch attribution across LinkedIn, web, and other channels.",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-500",
      stats: "Full Journey Tracking",
      image: "/media/card3.png",
    },
    {
      title: "AI Co-Pilot",
      description:
        "Get instant insights and recommendations. Our AI analyzes your campaigns and suggests optimizations in real-time.",
      icon: Sparkles,
      gradient: "from-green-500 to-emerald-500",
      stats: "Real-time Insights",
      image: "/media/card4.png",
    },
    {
      title: "Audience Segmentation",
      description:
        "Build precise audiences based on firmographics, behavior, and intent signals. Target the right accounts at the right time.",
      icon: Globe,
      gradient: "from-indigo-500 to-blue-500",
      stats: "280M+ Profiles",
      image: "/media/feature-share-smart.png",
    },
    {
      title: "Enterprise Security",
      description:
        "Bank-level encryption, SOC 2 compliance, and dedicated support. Your data is protected with enterprise-grade security.",
      icon: Shield,
      gradient: "from-gray-600 to-gray-800",
      stats: "SOC 2 Certified",
      image: "/media/frequency-cap.png",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white px-6 md:px-16 lg:px-24 xl:px-32 py-24 md:py-32 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 md:mb-28">
          {/* Eyebrow with premium badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm text-blue-600 px-4 py-2 rounded-full text-xs font-semibold mb-8 border border-blue-500/20 shadow-sm">
            <Zap className="h-3.5 w-3.5" />
            PLATFORM CAPABILITIES
          </div>

          {/* Main heading with better animation */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
          >
            Everything You Need to{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Dominate B2B
              </span>
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={headerInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 300 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M1 5.5C50 2.5 100 1 150 2.5C200 4 250 5.5 299 5.5"
                  stroke="url(#gradient-features)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient-features" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A complete platform built for modern B2B marketers who demand results, not just data.
          </motion.p>
        </div>

        {/* Features Grid - Bento-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.title} feature={feature} index={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <button
            onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
            className="group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
          >
            Explore All Features
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

type FeatureCardProps = {
  feature: {
    title: string;
    description: string;
    icon: React.ElementType;
    gradient: string;
    stats: string;
    image: string;
  };
  index: number;
};

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.4 }}
        className={cn(
          "absolute -inset-1 rounded-2xl blur-2xl opacity-0 transition-opacity",
          `bg-gradient-to-r ${feature.gradient}`
        )}
      />

      {/* Card */}
      <div
        className="relative h-full bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:border-gray-300/50"
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Image background with overlay */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Gradient overlay */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-60 mix-blend-multiply",
            feature.gradient
          )} />
          
          {/* Stats badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-900 shadow-lg border border-white/20"
          >
            {feature.stats}
          </motion.div>

          {/* Icon */}
          <motion.div
            animate={{
              y: isHovered ? -5 : 0,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-4 left-4"
          >
            <div className={cn(
              "w-14 h-14 rounded-xl bg-gradient-to-br shadow-xl flex items-center justify-center",
              feature.gradient
            )}>
              <feature.icon className="h-7 w-7 text-white" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-tight">
            {feature.title}
          </h3>

          <p className="text-gray-600 leading-relaxed font-light">
            {feature.description}
          </p>

          {/* Key benefits */}
          <div className="space-y-2 pt-2">
            {[
              "Real-time optimization",
              "Automated workflows",
              "Detailed analytics"
            ].map((benefit, idx) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.4 }}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="font-light">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Learn more link */}
          <motion.button
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors pt-2"
          >
            Learn more
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>

        {/* Shine effect on hover */}
        <motion.div
          animate={{
            x: isHovered ? "100%" : "-100%",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
          style={{ transform: "translateZ(30px)" }}
        />
      </div>
    </motion.div>
  );
};