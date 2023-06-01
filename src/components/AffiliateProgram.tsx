import React from "react";
import { BsFillGiftFill } from "react-icons/bs";
import { FiLink, FiUsers } from "react-icons/fi";
import { LuCopy } from "react-icons/lu";
import Example from "./DepTabs";
import { BiWallet } from "react-icons/bi";
const AffiliteProgram: React.FC = () => {
  return (
    <div className="flex h-full w-[75%] flex-col items-center justify-center gap-8 py-[2rem] pt-[8rem]">
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          AFFILIATE STATISTICS
        </span>
        <div className="w-full border-t border-t-gray-200 pt-6">
          <div className="flex flex-col gap-2 lg:grid lg:grid-cols-4">
            <div className="box-2 flex w-full items-center justify-between rounded-lg bg-cblack p-3">
              <div>
                <span className="text-sm font-light text-gray-500">
                  Level I affiliates
                </span>
                <h1 className="text-lg font-bold text-white">0</h1>
                <span className="text-sm font-light text-gray-500">
                  10% Level 1 commissions
                </span>
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#1c812e5f] p-3 text-3xl text-[#15ca20]">
                <FiUsers />
              </div>
            </div>
            <div className="box-2 flex w-full items-center justify-between rounded-lg bg-cblack p-3">
              <div>
                <span className="text-sm font-light text-gray-500">
                  Level II affiliates
                </span>
                <h1 className="text-lg font-bold text-white">0</h1>
                <span className="text-sm font-light text-gray-500">
                  5% Level 1 commissions
                </span>
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#198ded5a] p-3 text-3xl text-[#0dcaf0]">
                <FiUsers />
              </div>
            </div>
            <div className="box-2 flex w-full items-center justify-between rounded-lg bg-cblack p-3">
              <div>
                <span className="text-sm font-light text-gray-500">
                  Level III affiliates
                </span>
                <h1 className="text-lg font-bold text-white">0</h1>
                <span className="text-sm font-light text-gray-500">
                  1% Level 1 commissions
                </span>
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#f4112858] p-3 text-3xl text-[#fd3550]">
                <FiUsers />
              </div>
            </div>
            <div className="box-2 flex w-full items-center justify-between rounded-lg bg-cblack p-3">
              <div>
                <span className="text-sm font-light text-gray-500">
                  Power bonus received
                </span>
                <h1 className="text-lg font-bold text-white">0 GH/s</h1>
                <span className="text-sm font-light text-gray-500">
                  Read more in the FAQ
                </span>
              </div>
              <div className="flex items-center justify-center rounded-md bg-[#ffc10769] p-3 text-3xl text-[#ffc107]">
                <BiWallet />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          AFFILIATE BONUSES
        </span>
        <div className="w-full border-t border-t-gray-200 pt-6">
          <div className="box-2 flex w-full justify-start rounded-lg bg-cblack">
            <div className="flex h-full w-[10%] items-center justify-center rounded-l-lg bg-red-500 px-1 py-20 text-4xl text-gray-300 text-opacity-30">
              <BsFillGiftFill />
            </div>
            <div className="flex w-[80%] flex-col justify-center gap-2 pl-4 text-white">
              <h1 className="text-lg font-bold">Affiliate bonuses</h1>
              <p className="text-sm">
                Get 1 GH/s for each registration of a new referral and 3 GH/s
                for each new deposit of referrals of the first levels, 2 GH/s
                for each new deposit of referrals of the second level and 1 GH/s
                for each new deposit of referrals of the third level
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          AFFILIATE LINK
        </span>
        <div className="w-full border-t border-t-gray-200 pt-6">
          <div className="box-2 flex w-full justify-start rounded-lg bg-cblack">
            <div className="flex h-full w-[10%] items-center justify-center rounded-l-lg px-1 py-20 text-4xl text-gray-300 text-opacity-30">
              <FiLink />
            </div>
            <div className="flex w-[80%] flex-col justify-center gap-2 pl-4 text-white">
              <h1 className="text-lg font-bold">Your unique affiliate link</h1>
              <p className="text-sm">
                Use this link to invite new members and earn cryptocurrency.
              </p>
              <div className="flex items-center justify-start">
                <input
                  type="text"
                  value="https://cryptofy.ca/ref/278525"
                  placeholder="0.00"
                  readOnly
                  className="w-[95%] rounded-l-md bg-gray-600 bg-opacity-25 p-2 focus:outline focus:outline-4 focus:outline-gray-200"
                />
                <button className="flex h-full w-[5%] items-center justify-center rounded-r-md border-[0.1rem] border-gray-200 p-2 hover:bg-gray-300 hover:bg-opacity-25">
                  <LuCopy />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          AFFILIATE COMMISSIONS
        </span>
        <div className="w-full border-t border-t-gray-200 pt-6">
          <div className="flex flex-col gap-2 lg:grid lg:grid-cols-4">
            <div className="box-2 rounded-lg bg-cblack text-white">
              <div className="border-b border-b-gray-200 p-2">
                <h1 className="font-bold">Earn in Binance Coin</h1>
              </div>
              <div className="flex items-center justify-center py-10 text-sm font-light">
                There is no data for plotting
              </div>
              <div className="flex items-center justify-between border-b border-b-gray-200 p-2 text-xs">
                <p>Total earn in BNB</p>
                <span className="bg-gradient-deepblue rounded-xl px-1 font-bold">
                  0.0000000000000
                </span>
              </div>
            </div>
            <div className="box-2 rounded-lg bg-cblack text-white">
              <div className="border-b border-b-gray-200 p-2">
                <h1 className="font-bold">Earn in Binance Coin</h1>
              </div>
              <div className="flex items-center justify-center py-10 text-sm font-light">
                There is no data for plotting
              </div>
              <div className="flex items-center justify-between border-b border-b-gray-200 p-2 text-xs">
                <p>Total earn in BNB</p>
                <span className="bg-gradient-deepblue rounded-xl px-1 font-bold">
                  0.0000000000000
                </span>
              </div>
            </div>
            <div className="box-2 rounded-lg bg-cblack text-white">
              <div className="border-b border-b-gray-200 p-2">
                <h1 className="font-bold">Earn in Binance Coin</h1>
              </div>
              <div className="flex items-center justify-center py-10 text-sm font-light">
                There is no data for plotting
              </div>
              <div className="flex items-center justify-between border-b border-b-gray-200 p-2 text-xs">
                <p>Total earn in BNB</p>
                <span className="bg-gradient-deepblue rounded-xl px-1 font-bold">
                  0.0000000000000
                </span>
              </div>
            </div>
            <div className="box-2 rounded-lg bg-cblack text-white">
              <div className="border-b border-b-gray-200 p-2">
                <h1 className="font-bold">Earn in Binance Coin</h1>
              </div>
              <div className="flex items-center justify-center py-10 text-sm font-light">
                There is no data for plotting
              </div>
              <div className="flex items-center justify-between border-b border-b-gray-200 p-2 text-xs">
                <p>Total earn in BNB</p>
                <span className="bg-gradient-deepblue rounded-xl px-1 font-bold">
                  0.0000000000000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        {/* TODO: add tabs */}
        <span className="self-start text-base font-bold uppercase text-cblack">
          AFFILIATE DEPOSITS
        </span>
        <div className="w-full overflow-x-scroll border-t border-t-gray-200 pt-6">
          <Example />
        </div>
      </div>
    </div>
  );
};

export default AffiliteProgram;
