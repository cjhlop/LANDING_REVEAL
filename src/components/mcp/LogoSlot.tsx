"use client";

import * as React from "react";

type LogoSlotProps = {
  src: string;
  name: string;
};

const LogoSlot = ({ src, name }: LogoSlotProps) => {
  const [failed, setFailed] = React.useState(false);

  return (
    <div
      className="w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center p-1.5"
      role="img"
      aria-label={name}
      title={name}
    >
      {failed ? (
        <div
          className="w-full h-full rounded-md bg-gray-100"
          aria-hidden="true"
        />
      ) : (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

export default LogoSlot;