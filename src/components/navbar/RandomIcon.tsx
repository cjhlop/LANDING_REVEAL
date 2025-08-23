import * as React from "react";
import {
  Star,
  Sparkles,
  Rocket,
  Flame,
  Heart,
  Diamond,
  Crown,
  Circle,
} from "lucide-react";

type RandomIconProps = {
  className?: string;
  title?: string;
};

const ICONS = [Star, Sparkles, Rocket, Flame, Heart, Diamond, Crown, Circle];

const RandomIcon: React.FC<RandomIconProps> = ({ className, title }) => {
  const Icon = React.useMemo(
    () => ICONS[Math.floor(Math.random() * ICONS.length)],
    [],
  );

  return (
    <span title={title}>
      <Icon className={className} aria-hidden={true} />
    </span>
  );
};

export default React.memo(RandomIcon);