import React from 'react';

const VectorGroup1 = () => (
  <div className="w-[358px] h-[249px] relative">
    <svg className="absolute top-0 left-0" width="358" height="249" viewBox="0 0 358 249" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.8839 108.052C-15.949 155.513 1.28921 220.24 51.5809 242.833C101.873 265.426 165.048 249.935 194.881 202.474C224.714 155.013 207.476 89.2857 157.184 66.6928C106.892 44.0999 43.7168 60.591 13.8839 108.052Z" fill="#BFDBFE" fillOpacity="0.7"/>
    </svg>
    <svg className="absolute top-0 left-0" width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="29.5" cy="29.5" r="29.5" fill="#FBCFE8" fillOpacity="0.7"/>
    </svg>
  </div>
);

const VectorGroup2 = () => (
  <div className="w-[359px] h-[269px] relative">
    <svg className="absolute top-0 left-0" width="359" height="269" viewBox="0 0 359 269" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M344.836 160.948C374.669 113.487 347.431 47.7593 297.139 25.1664C246.847 2.57348 183.672 18.0647 153.839 65.5258C124.006 112.987 151.244 178.715 201.536 201.308C251.828 223.901 314.003 208.409 344.836 160.948Z" fill="#A7F3D0" fillOpacity="0.7"/>
    </svg>
    <svg className="absolute top-0 left-0" width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="28" cy="27.5" rx="28" ry="27.5" fill="#FDE68A" fillOpacity="0.7"/>
    </svg>
  </div>
);

export const HeroImage = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[675px] h-[562px]">
            {/* image 4 */}
            <img 
                src="/placeholder.svg" 
                alt="Abstract visual element 4" 
                className="absolute top-0 left-0 w-[247px] h-[233px] rounded-2xl object-cover shadow-2xl"
            />
            {/* Vector Group 2 */}
            <div className="absolute" style={{ top: '43px', left: '261px' }}>
                <VectorGroup2 />
            </div>
            {/* Vector Group 1 */}
            <div className="absolute" style={{ top: '244px', left: '55px' }}>
                <VectorGroup1 />
            </div>
            {/* image 3 */}
            <img 
                src="/placeholder.svg" 
                alt="Abstract visual element 3" 
                className="absolute w-[247px] h-[233px] rounded-2xl object-cover shadow-2xl"
                style={{ top: '329px', left: '428px' }}
            />
        </div>
    </div>
  );
};