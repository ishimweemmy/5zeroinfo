import React from "react";
import { BiChip, BiTrendingUp } from "react-icons/bi";
import { BsActivity } from "react-icons/bs";
import PaymentModal from "./PaymentModal";

const Deposit: React.FC = () => {
  return (
    <div className="flex h-full w-[75%] flex-col items-center justify-center gap-8 py-[2rem] pt-[8rem]">
      <div className="flex h-fit w-full flex-col items-start justify-center gap-4">
        <span className="text-2xl font-semibold text-cblack lg:text-4xl">
          Hi, ishimweemmanuel2005 👋
        </span>
        <span className="w-full rounded-md border border-cblack bg-gray-200 p-4 text-start text-base font-semibold text-cblack">
          Only today the bonus +5% to the deposit when replenishing from $25
        </span>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          MAKE DEPOSIT
        </span>
        <div className="w-full border-t border-t-gray-200  pt-6">
          <div className="rounded-lg bg-cblack p-4 text-white">
            <div className="flex flex-col border-b border-b-gray-200 lg:grid lg:grid-cols-4">
              <div className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-md bg-gray-500 bg-opacity-25 p-2">
                <img
                  src="https://cryptologos.cc/logos/tron-trx-logo.svg?v=014"
                  className="h-12 w-12 rounded-md bg-white p-1"
                  alt=""
                />
                <p>Binance coin</p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-2 lg:grid lg:grid-cols-2">
              <div className="flex flex-col justify-start gap-2 py-3">
                <div>
                  <p className="mb-1 text-sm">USD amount to invest</p>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full rounded-md bg-gray-600 bg-opacity-25 p-2 focus:outline focus:outline-4 focus:outline-gray-200"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2">
                  <div className="box-2 flex w-full items-center justify-between rounded-lg bg-cblack p-3">
                    <div>
                      <span className="text-sm font-light text-gray-700">
                        Power
                      </span>
                      <h1 className="text-lg font-bold text-white">0 GH/s</h1>
                    </div>
                    <div className="flex items-center justify-center rounded-md bg-[#1c812e5f] p-3 text-3xl text-[#15ca20]">
                      <BiChip />
                    </div>
                  </div>
                  <div className="box-2 flex w-full items-center justify-between rounded-lg bg-cblack p-3">
                    <div>
                      <span className="text-sm font-light text-gray-700">
                        Plan
                      </span>
                      <h1 className="text-lg font-bold text-white">182 GH/s</h1>
                    </div>
                    <div className="flex items-center justify-center rounded-md bg-[#198ded5a] p-3 text-3xl text-[#0dcaf0]">
                      <BsActivity />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-2 py-3">
                <div>
                  <p className="mb-1 text-sm">BNB amount to invest</p>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full rounded-md bg-gray-600 bg-opacity-25 p-2 focus:outline focus:outline-4 focus:outline-gray-200"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2">
                  <div className="box-2 flex w-full items-center justify-between rounded-lg bg-cblack p-3">
                    <div>
                      <span className="text-sm font-light text-gray-700">
                        profit
                      </span>
                      <h1 className="text-lg font-bold text-white">$0.00</h1>
                    </div>
                    <div>
                      <select className="form-select form-select-sm ms-2">
                        <option value="1">Per 1 day</option>
                        <option value="10">Per 10 days</option>
                        <option value="30">Per 30 days</option>
                        <option value="60">Per 60 days</option>
                        <option value="180">Per 180 days</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-center rounded-md bg-[#ffc10769] p-3 text-3xl text-[#ffc107]">
                      <BiTrendingUp />
                    </div>
                  </div>
                  <div className="box-2 flex w-full items-center justify-center rounded-lg bg-cblack p-3">
                    <PaymentModal />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          ALL TRANSACTIONS
        </span>
        <div className="flex w-full items-center justify-center border-t border-t-gray-200  pt-6">
          <div className="w-full overflow-x-scroll">
            <div className="flex w-[60rem] flex-col justify-center rounded-lg bg-cblack text-white shadow-lg lg:w-full">
              <div className="flex justify-between border-b-[2px] border-b-gray-500 px-10 py-5 text-lg font-bold">
                <h1>System</h1>
                <h1>Time</h1>
                <h1>GH/s</h1>
                <h1>Amount</h1>
                <h1>Wallet</h1>
                <h1>Status</h1>
                <h1>Payment</h1>
              </div>
              <div className="flex w-full items-center justify-center p-5">
                <p>You have no transactions yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
