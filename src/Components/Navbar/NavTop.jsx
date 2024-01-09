import React from "react";

const NavTop = () => {
  
  
  return (
    <div className="w-52 flex-col justify-start items-center gap-6 flex">
      <div className="w-48 justify-start items-center gap-3 inline-flex">
        <img className="w-10 h-10 rounded" src = '/assets/Navbar/company.svg' />
        <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
          <div className="self-stretch text-white text-[15px] font-">
            Nishyan
          </div>
          <div
            style={{ fontFamily: "Galano Grotesque" }}
            className=" opacity-80 text-white text-xs font-thin underline leading-none"
          >
            Visit store
          </div>
        </div>
        <img className="w-5 h-5" src = '/assets/Arrows/Chevron Down.svg' />
      </div>
      <div className="w-52 grow shrink basis-0 flex-col justify-start items-start flex">
        <div className="w-52 cursor-pointer px-4 py-2 rounded justify-start items-center gap-3 inline-flex">
          <img className="w-5 h-5" src = '/assets/Navbar/Icon (1).svg' />
          <div className="opacity-80 text-white text-sm font-normal leading-tight">
            Home
          </div>
        </div>
        <div className="w-52 cursor-pointer px-4 py-2 rounded justify-start items-center gap-3 inline-flex">
          <img className="w-5 h-5" src = '/assets/Navbar/Icon (2).svg' />
          <div className="opacity-80 text-white text-sm font-normal leading-tight">
            Orders
          </div>
        </div>
        <div className="w-52 cursor-pointer px-4 py-2 rounded justify-start items-center gap-3 inline-flex">
          <img className="w-5 h-5" src = '/assets/Navbar/Icon (3).svg' />
          <div className="opacity-80 text-white text-sm font-normal leading-tight">
            Products
          </div>
        </div>
        <div className="w-52 cursor-pointer px-4 py-2 rounded justify-start items-center gap-3 inline-flex">
          <img className="w-5 h-5" src = '/assets/Navbar/Icon (5).svg' />
          <div className="opacity-80 text-white text-sm font-normal leading-tight">
            Delivery
          </div>
        </div>
        <div className="w-52 cursor-pointer px-4 py-2 rounded justify-start items-center gap-3 inline-flex">
          <img className="w-5 h-5" src = '/assets/Navbar/Icon (6).svg' />
          <div className="opacity-80 text-white text-sm font-normal leading-tight">
            Marketing
          </div>
        </div>
        <div className="w-52 cursor-pointer px-4 py-2 rounded justify-start items-center gap-3 inline-flex">
          <img className="w-5 h-5" src = '/assets/Navbar/Icon (7).svg' />
          <div className="opacity-80 text-white text-sm font-normal leading-tight">
            Analytics
          </div>
        </div>
        <div className="w-52 cursor-pointer px-4 py-2 bg-white bg-opacity-10 rounded justify-start items-start gap-3 inline-flex">
          <img className="w-5 h-5" src = '/assets/Navbar/Icon (8).svg' />
          <div
            style={{ fontFamily: "Galano Grotesque" }}
            className="text-white text-[15px] font-semibold leading-tight"
          >
            Payouts
          </div>
        </div>
        <div className="w-52 cursor-pointer px-4 py-2 rounded justify-start items-center gap-3 inline-flex">
          <img className="w-5 h-5" src = '/assets/Navbar/Icon (9).svg' />
          <div className="opacity-80 text-white text-sm font-normal leading-tight">
            Discounts
          </div>
        </div>
        <div className="w-52 cursor-pointer px-4 py-2 rounded justify-start items-center gap-3 inline-flex">
          <img className="w-5 h-5" src = '/assets/Navbar/Icon (10).svg' />
          <div className="opacity-80 text-white text-sm font-normal leading-tight">
            Audience
          </div>
        </div>
        <div className="w-52 cursor-pointer px-4 py-2 rounded justify-start items-center gap-3 inline-flex">
          <img className="w-5 h-5" src = '/assets/Navbar/Icon (11).svg' />
          <div className="opacity-80 text-white text-sm font-normal leading-tight">
            Appearance
          </div>
        </div>
        <div className="w-52 cursor-pointer px-4 py-2 rounded justify-start items-center gap-3 inline-flex">
          <img className="w-5 h-5" src = '/assets/Navbar/Icon (12).svg' />
          <div className="opacity-80 text-white text-sm font-normal leading-tight">
            Plugins
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
