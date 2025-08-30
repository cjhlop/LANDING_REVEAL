import * as React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Link
      to="/"
      aria-label="Demand Sense home"
      className="inline-flex items-center justify-center select-none gap-2"
    >
      {/* Logo icon (24px height) */}
      <div
        className={`logo-icon transition-all duration-700 ease-out ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <img src="/logo.svg" alt="Logo" className="h-6 w-auto" loading="eager" />
      </div>

      {/* Wordmark (18px height) */}
      <div
        className={`logo-text transition-all duration-700 ease-out ${
          isLoaded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
        }`}
        style={{ transitionDelay: isLoaded ? "300ms" : "0ms" }}
      >
        <img
          src="/demand-sense.svg"
          alt="Demand Sense"
          className="h-[18px] w-auto"
          loading="eager"
        />
      </div>
    </Link>
  );
};

export default React.memo(Logo);