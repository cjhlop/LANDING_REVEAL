import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  { price: "$149", visitors: "250", traffic: "up to 500" },
  { price: "$210", visitors: "500", traffic: "up to 1,000" },
  { price: "$355", visitors: "1,250", traffic: "up to 2,500" },
  { price: "$765", visitors: "3,500", traffic: "up to 7,000" },
  { price: "$1,520", visitors: "7,500", traffic: "up to 15,000" },
];

const features = [
  "Ad Scheduling",
  "Audience Tuning",
  "Frequency Capability",
  "Advanced Reporting",
];

type ProPlanModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

const ProPlanModal = ({ isOpen, onOpenChange }: ProPlanModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl p-8">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-slate-800">
            DemandSense Basic + Identified Visitors
          </DialogTitle>
          <DialogDescription className="text-center max-w-4xl mx-auto text-base text-slate-600 pt-4">
            Start with a trial that includes 100 credits to explore our
            platform. Before you begin, simply select the plan that will
            activate after your trial ends.
            <br />
            Not sure which plan fits your needs? Select our entry-level package
            with 250 credits, and when your trial concludes, our system will
            analyze your usage and recommend the optimal plan for your traffic
            volume. Your selected plan will only begin billing after your trial
            period ends.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-8">
          <div className="grid grid-cols-6 gap-x-4 text-center">
            <div className="text-left font-semibold text-slate-800">
              Basic Plan + Identified Visitors
            </div>
            {tiers.map((tier) => (
              <div key={tier.price} className="font-bold text-2xl text-blue-600">
                {tier.price}
                <span className="text-sm font-normal text-gray-500">
                  /month
                </span>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="grid grid-cols-6 gap-x-4 text-center items-center py-4 text-slate-700">
            <div className="text-left font-medium">Identified Visitors</div>
            {tiers.map((tier) => (
              <div key={tier.price}>{tier.visitors}</div>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-x-4 text-center items-center py-4 bg-slate-100 rounded-md text-slate-700">
            <div className="text-left font-medium pl-4">
              Monthly Traffic (visitors/month)
            </div>
            {tiers.map((tier) => (
              <div key={tier.price}>{tier.traffic}</div>
            ))}
          </div>
          {features.map((feature, index) => (
            <div
              key={feature}
              className={`grid grid-cols-6 gap-x-4 text-center items-center py-4 text-slate-700 ${
                index % 2 !== 0 ? "bg-slate-100 rounded-md" : ""
              }`}
            >
              <div className={`text-left font-medium ${index % 2 !== 0 ? "pl-4" : ""}`}>{feature}</div>
              {tiers.map((tier) => (
                <div key={tier.price} className="flex justify-center">
                  <Check className="text-blue-500" />
                </div>
              ))}
            </div>
          ))}
          <div className="grid grid-cols-6 gap-x-4 mt-8">
            <div></div>
            {tiers.map((tier) => (
              <div key={tier.price} className="text-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                  Start Now &rarr;
                </Button>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProPlanModal;