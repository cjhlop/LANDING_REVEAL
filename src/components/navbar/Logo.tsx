import * as React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link
      to="/"
      aria-label="PalmUI home"
      className="inline-flex items-center justify-center select-none"
    >
      <span className="font-grotesk font-bold text-[24px] leading-[30px] tracking-[-0.4px] text-gray-900">
        palm
      </span>
      <span className="font-grotesk font-bold text-[24px] leading-[30px] tracking-[-0.4px] text-gray-900 ml-1">
        ui
      </span>
    </Link>
  );
};

export default React.memo(Logo);