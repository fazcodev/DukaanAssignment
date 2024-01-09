import React from "react";

const OrderEntry = ({ order, last }) => {
  return (
    <div className={`w-full h-12 px-3 py-2.5 bg-white justify-between inline-flex ${!last ? 'border-b-[1.5px]': ''}`}>
      <div className="w-36 bg-white items-center inline-flex">
        <div style={{fontFamily: 'Galano Grotesque'}}  className="text-sky-700 text-sm font-semibold leading-tight">
          {order.orderId}
        </div>
      </div>
      <div className="w-36 bg-white items-center inline-flex">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="justify-start items-center gap-1.5 flex">
            <div
              className={`w-2.5 h-2.5 ${
                order.status == "Processing" ? "bg-neutral-400" : "bg-green-600"
              } rounded-full`}
            />
            <div className="text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
              {order.status}
            </div>
          </div>
        </div>
      </div>
      <div className="w-36 bg-white items-center inline-flex">
        <div style={{fontFamily: 'Galano Grotesque'}}  className=" text-sm font-normal leading-tight">
          {order.transactionId}
        </div>
      </div>
      <div className="w-36 bg-white items-center inline-flex">
        <div style={{fontFamily: 'Galano Grotesque'}}  className=" text-sm font-normal leading-tight">
          {order.date}
        </div>
      </div>
      <div className="w-36 bg-white items-center justify-end inline-flex">
        <div style={{fontFamily: 'Galano Grotesque'}}  className=" text-sm font-normal leading-tight">
          {order.amount}
        </div>
      </div>
    </div>
  );
};

export default OrderEntry;
