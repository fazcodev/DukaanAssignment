import React from "react";
import NavTop from "./NavTop";
const Navbar = () => {
  return (
    <div className="w-56 min-h-screen px-2.5 py-4 bg-slate-800 flex-col justify-between items-center inline-flex">
      <NavTop />
      <div className="w-full px-0.5">
        <div className="px-1.5 py-1 w-full bg-slate-700 rounded flex-col justify-start items-start gap-2.5 flex">
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="p-1.5 bg-white bg-opacity-10 rounded gap-2.5 flex">
              <div className="w-6 h-6 relative">
                <img
                  className="absolute"
                  src="/assets/Navbar/wallet.svg"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="opacity-80 text-white text-[13px] font-normal leading-none">
                Available credits
              </div>
              <div className="text-white text-base font-medium leading-normal">
                222.10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
