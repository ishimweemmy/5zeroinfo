import React, { useState } from "react";
import Card from "./dashboard/Card";
import { AiOutlineWifi } from "react-icons/ai";
import { BsFillGridFill, BsWifiOff } from "react-icons/bs";
const MainDashboard: React.FC = () => {
  const [cards, setCard] = useState([
    {
      coinType: "Tron",
      amount: 0.000000000123,
      power: 0,
      imgSrc: "tron.svg",
      color: "linear-gradient(to right, #2c5364, #203a43, #0f2027)",
    },
  ]);

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
          power distribution
        </span>
        <div className="flex h-fit w-full flex-col items-center justify-between gap-4 border-t border-t-gray-200 py-4 lg:flex-row">
          {cards.map(
            (
              card: {
                coinType: string;
                amount: number;
                power: number;
                imgSrc: string;
                color: string;
              },
              index: number
            ) => {
              return (
                <Card
                  key={index}
                  coinType={card.coinType}
                  amount={card.amount}
                  power={card.power}
                  imgSrc={card.imgSrc}
                  color={card.color}
                />
              );
            }
          )}
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          Account summary
        </span>
      </div>
      <div onClick={() => setCard}></div>
      <div className="flex w-full grid-cols-2 flex-col items-center justify-center gap-4 border-t border-t-gray-200 py-4 lg:grid lg:grid-cols-3 lg:gap-2">
        <div className="flex w-full items-center justify-between rounded-lg bg-cblack p-3 shadow-md">
          <div>
            <span className="text-sm font-light text-gray-500">
              total power
            </span>
            <h1 className="text-lg font-bold text-white">182 GH/s</h1>
          </div>
          <div className="flex items-center justify-center rounded-md bg-[#1c812e5f] p-3 text-3xl text-[#15ca20]">
            <AiOutlineWifi />
          </div>
        </div>
        <div className="flex w-full items-center justify-between rounded-lg bg-cblack p-3 shadow-md">
          <div>
            <span className="text-sm font-light text-gray-500">
              Unused power
            </span>
            <h1 className="text-lg font-bold text-white">182 GH/s</h1>
          </div>
          <div className="flex items-center justify-center rounded-md bg-[#198ded5a] p-3 text-3xl text-[#0dcaf0]">
            <BsWifiOff />
          </div>
        </div>
        <div className="flex w-full items-center justify-between rounded-lg bg-cblack p-3 shadow-md">
          <div>
            <span className="text-sm font-light text-gray-500">
              Active plan
            </span>
            <h1 className="text-lg font-bold text-white">2%</h1>
          </div>
          <div className="flex items-center justify-center rounded-md bg-[#f4112858] p-3 text-3xl text-[#fd3550]">
            <BsFillGridFill />
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          Coin balances
        </span>
        <div className="w-full border-t border-t-gray-200 py-4">
          <div className="flex w-full flex-col justify-center rounded-xl bg-cblack">
            <div className="flex w-full flex-col items-baseline gap-2 border-b-2  border-gray-200 px-5 py-3 text-white last:border-none lg:flex-row lg:items-center lg:justify-between">
              <div className="flex justify-center gap-2">
                <img
                  src="https://cryptologos.cc/logos/tron-trx-logo.svg?v=014"
                  alt="logo"
                  className="h-14 w-14 rounded-md bg-white p-1"
                />
                <div className="flex flex-col items-baseline justify-start gap-1">
                  <p>000000000000000</p>
                  <p className="text-gray-500">0 GH/z</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1">
                <button className="bg-gradient-moonlit rounded-md px-3 py-[0.4rem] font-medium text-white">
                  Reinvest
                </button>
                <button className="rounded-md border-[0.01rem] border-gray-400 px-3 py-[0.4rem] font-medium text-white hover:bg-slate-500 hover:bg-opacity-20">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          ALL TRANSACTIONS
        </span>
        <div className="flex w-full items-center justify-center border-t border-t-gray-200">
          <div className="w-full overflow-x-scroll">
            <div className="flex w-[60rem] flex-col justify-center rounded-lg bg-cblack text-white shadow-lg lg:w-full">
              <div className="flex justify-between border-b-2 border-b-gray-500 px-10 py-5 text-lg font-bold">
                <h1>System</h1>
                <h1>Time</h1>
                <h1>Amount</h1>
                <h1>Hash</h1>
                <h1>Type</h1>
                <h1>Status</h1>
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

export default MainDashboard;
