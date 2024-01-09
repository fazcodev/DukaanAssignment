import React from "react";
import OrderEntry from "./OrderEntry";
const orders = [
  {
    id: 1,
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    date: "Today, 08:45 PM",
    amount: "₹1,125.00",
  },
  {
    id: 2,
    orderId: "#281209",
    status: "Processing",
    transactionId: "131634495747",
    date: "Yesterday, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 3,
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    date: "12 Jul 2023, 03:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 4,
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    date: "12 Jul 2023, 03:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 5,
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    date: "12 Jul 2023, 03:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: 6,
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    date: "12 Jul 2023, 03:00 PM",
    amount: "₹1,125.00",
  },
];
const Transactions = () => {
  return (
    <div className="w-full flex-col justify-start items-start gap-6 inline-flex">
      <div className="flex-col justify-start items-start gap-6 flex">
        <div
          style={{ fontFamily: "Galano Grotesque" }}
          className="text-zinc-900 text-lg font-semibold leading-7"
        >
          Transactions | This Month
        </div>
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="px-4 py-1.5 bg-neutral-200 rounded-3xl justify-start items-center gap-2.5 flex">
            <div className="text-zinc-500 text-sm font-medium leading-tight">
              Payouts (22)
            </div>
          </div>
          <div className="px-4 py-1.5 bg-sky-700 rounded-3xl justify-start items-center gap-1.5 flex">
            <div className="text-white text-sm font-medium leading-tight">
              Refunds (6)
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-3 pt-3 pb-2 bg-white rounded-lg shadow flex-col justify-start">
        <div className="flex-col justify-start gap-3 flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="px-4 py-2.5 bg-white rounded border border-zinc-300 justify-start items-end gap-2 flex">
              <img className="w-3.5 h-3.5" src="/assets/Dashboard/search.svg" />
              <div
                style={{ fontFamily: "Galano Grotesque" }}
                className="text-neutral-400 text-sm font-normal leading-tight"
              >
                Order ID or transaction ID
              </div>
            </div>
            <div className="justify-end items-center gap-4 flex">
              <div className="px-3 py-1.5 bg-white border rounded  border-zinc-300 justify-start items-center gap-1.5 flex">
                <div className="text-neutral-600 text-base font-normal leading-normal">
                  Sort
                </div>
                <img className="w-4 h-4" src="/assets/Button/Sort.svg" />
              </div>

              <div className="w-9 h-9 rounded border border-zinc-300 flex justify-center items-center">
                <img className="w-5 h-5" src="/assets/Button/download.svg" />
              </div>
            </div>
          </div>
          <div className="px-3 py-2.5 bg-zinc-100 rounded justify-between items-center inline-flex">
            <div className="w-36 justify-start items-start inline-flex text-neutral-600 text-sm font-medium leading-tight">
              Order ID
            </div>
            <div className="w-36 justify-start items-start inline-flex text-neutral-600 text-sm font-medium leading-tight">
              Status
            </div>
            <div className="w-36 justify-start items-start inline-flex text-neutral-600 text-sm font-medium leading-tight">
              Transaction ID
            </div>
            <div className="w-36 justify-start items-start inline-flex text-neutral-600 text-sm font-medium leading-tight">
              Refund date
            </div>
            <div className="w-36 justify-end items-start inline-flex text-neutral-600 text-sm font-medium leading-tight">
              Order amount
            </div>
          </div>
        </div>
        {orders.map((order, idx) => (
          <OrderEntry key={order.id} order={order} last = {idx == orders.length-1} />
        ))}
      </div>
    </div>
  );
};
export default Transactions;
