import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  Code2, Database, Webhook, ChevronRight, 
  Check, Copy, Terminal, Zap, ArrowRight,
  Layers, Box, Clock
} from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { Button } from "@/components/ui/button";

// --- Configuration ---

const INTEGRATIONS = [
  {
    id: "webhook",
    name: "Webhook",
    iconType: "component",
    iconComponent: Webhook,
    color: "from-green-400 to-green-600",
    shadow: "shadow-green-500/20",
    description: "Pipe raw JSON data to your warehouse or custom app.",
    code: `POST /api/v1/ingest HTTP/1.1
Host: api.your-warehouse.com
Content-Type: application/json

{
  "event": "visitor_identified",
  "timestamp": "2024-03-20T10:30:00Z",
  "visitor_id": "vid_89234",
  "company": {
    "name": "Acme Corp",
    "domain": "acme.com",
    "employees": 5000
  }
}`
  },
  {
    id: "slack",
    name: "Slack",
    iconType: "image",
    iconSrc: "https://cdn.simpleicons.org/slack/white",
    color: "from-purple-400 to-purple-600",
    shadow: "shadow-purple-500/20",
    description: "Get real-time alerts in your #sales-feed channel.",
    comingSoon: true,
    code: `// Slack Alert Payload
{
  "channel": "#sales-alerts",
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*🔥 Hot Lead Detected: " + company.name + "*"
      }
    },
    {
      "type": "context",
      "elements": [
        { "type": "mrkdwn", "text": "Industry: " + company.industry },
        { "type": "mrkdwn", "text": "Employees: " + company.size }
      ]
    }
  ]
}`
  }
];

// --- Components ---

const CodeBlock = ({ code, language = "json" }: { code: string, language?: string }) => {
  return (
    <div className="relative group">
      <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors">
          <Copy className="h-4 w-4" />
        </button>
      </div>
      <pre className="font-mono text-sm leading-relaxed text-blue-100 overflow-x-auto p-6">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const IntegrationSection = () => {
  const [activeId, setActiveId] = useState("webhook");
  const [isAnimating, setIsAnimating] = useState(false);

  const activeIntegration = INTEGRATIONS.find(i => i.id === activeId) || INTEGRATIONS[0];

  const handleIntegrationChange = (id: string) => {
    if (id === activeId) return;
    setIsAnimating(true);
    setActiveId(id);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="py-32 bg-[#0B0F19] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Content & Navigation */}
          <div>
            <div className="mb-8">
              <SectionBadge icon={Code2} text="Developer Friendly" variant="dark" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Your Data, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Where You Need It.
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
              WebID isn't a silo. Use our native integrations and real-time webhooks to pipe visitor data instantly into your existing stack.
            </p>

            <div className="space-y-3">
              {INTEGRATIONS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => !item.comingSoon && handleIntegrationChange(item.id)}
                  disabled={item.comingSoon}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group text-left relative overflow-hidden",
                    activeId === item.id
                      ? "bg-white/10 border-white/20 shadow-lg"
                      : item.comingSoon 
                        ? "bg-transparent border-transparent opacity-60 cursor-not-allowed"
                        : "bg-transparent border-transparent hover:bg-white/5"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300",
                    activeId === item.id ? `bg-gradient-to-br ${item.color} shadow-lg` : "bg-white/5 group-hover:bg-white/10"
                  )}>
                    {item.iconType === "image" ? (
                      <img src={item.iconSrc} alt={item.name} className="w-6 h-6" />
                    ) : (
                      <item.iconComponent className="w-6 h-6 text-white" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={cn(
                        "font-bold text-base transition-colors",
                        activeId === item.id ? "text-white" : "text-gray-300 group-hover:text-white"
                      )}>
                        {item.name}
                      </div>
                      {item.comingSoon && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-medium text-white/70 border border-white/10">
                          <Clock className="w-3 h-3" /> Coming Soon
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-400 line-clamp-1">
                      {item.description}
                    </div>
                  </div>

                  {!item.comingSoon && (
                    <ChevronRight className={cn(
                      "w-5 h-5 transition-all duration-300 flex-shrink-0",
                      activeId === item.id ? "text-white translate-x-0" : "text-gray-600 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    )} />
                  )}
                </button>
              ))}
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold h-11 px-6">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Stage */}
          <div className="relative">
            {/* Glow behind the card */}
            <div className={cn(
              "absolute -inset-1 bg-gradient-to-r rounded-2xl blur-xl opacity-30 transition-all duration-700",
              activeIntegration.color
            )} />

            <div className="relative bg-[#0F1623] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col h-[600px]">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#0B0F19]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                  <Terminal className="w-3 h-3" />
                  <span>config.json</span>
                </div>
                <div className="w-12" /> {/* Spacer for balance */}
              </div>

              {/* Visual Connection Area */}
              <div className="h-48 relative bg-[#0B0F19]/50 border-b border-gray-800 flex items-center justify-center overflow-hidden">
                {/* Animated Beam */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-md flex items-center justify-between px-12">
                    
                    {/* Source Node */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/50">
                        <Database className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">WebID</span>
                    </div>

                    {/* Connection Line */}
                    <div className="flex-1 h-[2px] bg-gray-800 relative mx-4 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-1/2 animate-[shimmer_2s_infinite_linear]" />
                      {/* Data Packets */}
                      <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-[moveRight_2s_infinite_linear]" />
                      <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-[moveRight_2s_infinite_linear] delay-700" />
                    </div>

                    {/* Destination Node */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500",
                        `bg-gradient-to-br ${activeIntegration.color}`
                      )}>
                        {activeIntegration.iconType === "image" ? (
                          <img src={activeIntegration.iconSrc} alt={activeIntegration.name} className="w-8 h-8" />
                        ) : (
                          <activeIntegration.iconComponent className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{activeIntegration.name}</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Code Editor Area */}
              <div className="flex-1 overflow-hidden relative bg-[#0F1623]">
                <div className={cn(
                  "absolute inset-0 transition-all duration-500",
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                )}>
                  <CodeBlock code={activeIntegration.code} />
                </div>
              </div>

              {/* Status Bar */}
              <div className="px-6 py-3 border-t border-gray-800 bg-[#0B0F19] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>System Operational</span>
                </div>
                <div className="text-gray-500">
                  Last sync: Just now
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes moveRight {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default IntegrationSection;