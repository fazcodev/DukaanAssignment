import React from "react";

const Overview = () => {
  return (
    <div className="w-full mb-7 flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div
          style={{ fontFamily: "Galano Grotesque" }}
          className="text-zinc-900 text-lg font-semibold leading-7"
        >
          Overview
        </div>
        <div className="justify-start items-start flex border-[1.5px] rounded-md px-3 py-2 gap-2">
          {/* <div className="w-[137px] h-8 left-0 top-0 absolute bg-white rounded border border-zinc-300" /> */}
          <div
            style={{ fontFamily: "Galano Grotesque" }}
            className=" text-neutral-600 text-lg font-normal leading-none"
          >
            This Month
          </div>
          <img className="w-5 h-5" src="/assets/Arrows/arrow.svg" />
        </div>
      </div>
      <div className="self-stretch justify-start items-start gap-2 inline-flex">
        <div className="flex-1 shadow bg-sky-700 rounded-lg flex-col justify-center items-center inline-flex">
          <div className="self-stretch h-36 p-5 bg-sky-700 rounded-t-lg flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-center gap-2 flex">
              <div className="text-white text-base font-normal leading-normal">
                Next Payout
              </div>
              <img className="w-4 h-4 text-white" src = '/assets/Dashboard/HelpWhite.svg' />
            </div>

            <div className="self-stretch justify-between items-end inline-flex">
              <div
                style={{ fontFamily: "Galano Grotesque" }}
                className="text-white text-3xl font-medium leading-9"
              >
                ₹2,312.23
              </div>
              <div className="justify-between items-center flex text-white text-right">
                <div className="underline">23 orders</div>
                <img
                  className="w-6 h-6"
                  src="/assets/Arrows/Chevron Right.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch px-5 py-2 bg-sky-800 rounded-lg justify-between items-start inline-flex">
            <div
              style={{ fontFamily: "Galano Grotesque" }}
              className=" text-zinc-100 text-sm font-normal leading-tight"
            >
              Next payout date:
            </div>
            <div
              style={{ fontFamily: "Galano Grotesque" }}
              className="text-zinc-100 text-sm font-semibold leading-tight "
            >
              Today, 04:00PM
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-28 justify-center items-center gap-6 flex">
          <div className="grow shrink basis-0 p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-20 flex-col justify-start items-start gap-4 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-neutral-600 text-base font-normal leading-normal">
                  Amount Pending
                </div>
                <img className="w-4 h-4 text-white" src = '/assets/Dashboard/Help.svg' />
              </div>
              <div className="self-stretch justify-between items-end inline-flex">
                <div
                  style={{ fontFamily: "Galano Grotesque" }}
                  className="text-3xl font-medium leading-9"
                >
                  ₹92,312.20
                </div>
                <div className="justify-between items-center flex text-sky-700 text-right">
                  <div className="underline">13 orders</div>
                  <img
                    className="w-6 h-6"
                    src="/assets/Arrows/Chevron RightBlue.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-28 justify-center items-center gap-6 flex">
          <div className="grow shrink basis-0 p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-20 flex-col justify-start items-start gap-4 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-neutral-600 text-base font-normal leading-normal">
                  Amount Processed
                </div>
                <img className="w-4 h-4 text-white" src = '/assets/Dashboard/Help.svg' />
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="self-stretch justify-between items-end inline-flex">
                  <div
                    style={{ fontFamily: "Galano Grotesque" }}
                    className="text-3xl font-medium leading-9"
                  >
                    ₹23,92,312.23
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
