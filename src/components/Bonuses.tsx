import React from "react";
import { BsFillGiftFill } from "react-icons/bs";

const Bonuses: React.FC = () => {
  return (
    <div className="flex h-full w-[75%] flex-col items-center justify-center gap-8 py-[2rem] pt-[8rem]">
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          RANDOM BONUSES
        </span>
        <div className="w-full border-t border-t-gray-200 pt-6">
          <div className="box-2 flex w-full justify-start rounded-lg bg-cblack">
            <div className="flex h-[18rem] w-[35%] items-center justify-center rounded-l-lg bg-[#ffc107] px-1 py-20 text-4xl text-gray-300 text-opacity-40 lg:h-auto lg:w-[10%]">
              <BsFillGiftFill />
            </div>
            <div className="flex w-[65%] flex-col justify-center gap-2 py-4 pl-4 text-white lg:w-[80%]">
              <h1 className="text-lg font-bold">
                Get a random bonus from 1 to 5 GH/s every six hours
              </h1>
              <p className="text-sm">
                The bonus will be instantly credited to the power balance in
                your account.
              </p>
              <button className="btn-outline-warning self-start rounded-md border-[1px] p-2">
                get bonus
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          BOUNTY
        </span>
        <div className="w-full border-t border-t-gray-200 pt-6">
          <div className="box-2 flex w-full justify-start rounded-lg bg-cblack">
            <div className="flex h-[70rem] w-[35%] items-center justify-center rounded-l-lg bg-red-700 px-1 py-20 text-4xl text-gray-300 text-opacity-30 lg:h-[27.9rem] lg:w-[10%]">
              <img
                src="https://cryptofy.ca/assets/images/youtube.png"
                className="h-10 w-10"
                alt=""
              />
            </div>
            <div className="flex h-full w-[80%] flex-col justify-center gap-2 py-10 pl-4 text-sm text-[#e4e5e6]">
              <h1 className="text-lg font-bold text-white">
                YouTube review campaign
              </h1>
              <p>
                The bonus will be instantly credited to the power balance in
                your account.
              </p>
              <ul className="ml-5 list-disc lg:ml-10">
                <li>Your channel and videos must be public.</li>
                <li>You must have at least 100 subscribers.</li>
                <li>Somewhere in the title name use the word (cryptofy.ca).</li>
                <li>
                  Your review must be original. It's forbidden to copy content,
                  text, visuals etc. from other reviews in any format.
                </li>
                <li>
                  We can reject your review for various reasons: poor
                  video/sound quality, plagiarism, fake audience activity, etc.
                </li>
                <li>
                  We will consider key points like, duration, number of views,
                  likes and comments, and video & sound quality for paying a
                  reward.
                </li>
                <li>
                  Video must contain a HUMAN voice . Videos without your voice
                  wont be accepted.
                </li>
                <li>
                  Repeat the process as much as you want to earn Referral
                  Commission.
                </li>
                <li>ONLY 1 SUBMISSION ALLOWED FOR THIS TASK PER MONTH.</li>
                <li>Maximum of 1 account on Cryptofy for each user.</li>
              </ul>

              <h1 className="text-lg font-bold text-white">
                Make video and get reward
              </h1>
              <p>20 GH/s - 8000 GH/s</p>
              <p>
                Telegram: <a href="#">@cryptofy_agent</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
        <span className="self-start text-base font-bold uppercase text-cblack">
          ALL BONUSES
        </span>
        <div className="w-full border-t border-t-gray-200 pt-6">
          <div className="overflow-x-scroll">
            <div className="flex w-[60rem] flex-col justify-center rounded-lg bg-cblack text-white shadow-lg lg:w-full">
              <div className="grid grid-cols-4 border-b-2 border-b-gray-500 px-10 py-5 text-lg font-bold">
                <h1>Time</h1>
                <h1>Type</h1>
                <h1>Power</h1>
                <h1>Comment</h1>
              </div>
              <div className="flex w-full flex-col justify-start">
                <div className="grid grid-cols-4 border-b-[2px] border-b-gray-500 px-10 py-3 text-sm font-light">
                  <p>2023-05-25 14:12:41</p>
                  <p>Random bonus</p>
                  <p>2 GH/s</p>
                  <p>Random bonus</p>
                </div>
                <div className="grid grid-cols-4 border-b-[2px] border-b-gray-500 px-10 py-3 text-sm font-light">
                  <p>2023-05-25 14:12:41</p>
                  <p>Random bonus</p>
                  <p>2 GH/s</p>
                  <p>Random bonus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonuses;
