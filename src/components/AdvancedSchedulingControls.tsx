"use client";

import React from "react";

const AdvancedSchedulingControls = () => {
  return (
    <div className="relative w-full aspect-[1445/832] bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
      {/* Main Background Image (image 92) */}
      <div 
        className="absolute w-[95%] h-[87%] left-[2.4%] top-[5.5%] rounded-lg shadow-[0px_6px_14.4px_rgba(18,39,82,0.35)] bg-cover bg-center"
        style={{ backgroundImage: 'url(/media/scheduling-main.png)' }}
      />

      {/* Header/Logo (image 99) */}
      <div 
        className="absolute w-[19%] h-[9%] left-[1.4%] top-[4%] rounded-lg shadow-[0px_6px_14.4px_rgba(18,39,82,0.35)] bg-cover bg-center z-10"
        style={{ backgroundImage: 'url(/media/scheduling-header.png)' }}
      />

      {/* Sidebar/Controls Group (image 100) */}
      <div 
        className="absolute w-[12.5%] h-[76%] left-[48.5%] top-[20%] rounded-[8.8px] border-[1.1px] border-[#DEE8FC] shadow-[0px_6.6px_15.84px_rgba(18,39,82,0.35)] bg-cover bg-center z-20"
        style={{ backgroundImage: 'url(/media/scheduling-sidebar.png)' }}
      />

      {/* Main Content Group (image 101) */}
      <div 
        className="absolute w-[29%] h-[76%] left-[62%] top-[20%] rounded-[8.8px] border-[1.1px] border-[#DEE8FC] shadow-[0px_6.6px_15.84px_rgba(18,39,82,0.35)] bg-cover bg-center z-20"
        style={{ backgroundImage: 'url(/media/scheduling-content.png)' }}
      />
      
      {/* Floating Status Indicators (image 94, 97, 98) */}
      <div 
        className="absolute w-[8.5%] h-[8.7%] left-[52.5%] top-[32.8%] bg-cover bg-center z-30"
        style={{ backgroundImage: 'url(/media/status-active.png)' }}
      />
    </div>
  );
};

export default AdvancedSchedulingControls;