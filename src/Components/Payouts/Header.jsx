import React from "react";

const Header = () => {
  return (
    <div className="w-full sticky z-50 top-0 h-16 px-8 py-3 bg-white border-b border-zinc-300 justify-between items-center gap-4 inline-flex">
      <div className="flex-1 justify-start items-center gap-4 flex">
        <div
          style={{ fontFamily: "Galano Grotesque" }}
          className="text-zinc-900 text-xl font-semibold"
        >
          Payouts
        </div>

        <div className="justify-start items-center gap-1.5 flex">
          <img className="w-3.5 h-3.5 mt-1" src="/assets/Dashboard/Help.svg" />
          <div
            style={{ fontFamily: "Galano Grotesque" }}
            className="text-neutral-600 text-xs font-normal leading-none"
          >
            How it works
          </div>
        </div>
      </div>
      <div className="w-[400px] self-stretch px-4 py-[9px] bg-zinc-100 rounded-md justify-start items-center gap-2 flex">
        <img className="w-4 h-4" src = '/assets/Dashboard/search.svg' />
        <input type="text" placeholder="Search features, tutorials, etc." className="outline-none w-full bg-zinc-100 text-zinc-500 text-[15px] font-normal leading-snug"/>
          
      </div>
      <div className="flex-1 h-10 justify-end items-start gap-2 flex">
        <div className="justify-start items-start gap-3 flex">
          <div className="w-10 h-10 bg-neutral-200 rounded-full flex justify-center items-center">
            <img className="w-5 h-5" src='/assets/Dashboard/Group.svg' />
          </div>
          <div className="w-10 h-10 relative">
            <img className="w-10 h-10 left-0 top-0 absolute bg-neutral-200 rounded-full" src='/assets/Dashboard/Menu.svg'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
