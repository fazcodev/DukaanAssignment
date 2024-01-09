import React from "react";
import Header from "./Header";
import Overview from "./Overview";
import Transactions from "./Transactions";
const Payouts = ()=>{

    return (
        <div className="w-full">
            <Header/>
            <div className="p-7 flex-col justify-between">
                <Overview/>
                <Transactions/>
            </div>
        </div>
    )
}

export default Payouts