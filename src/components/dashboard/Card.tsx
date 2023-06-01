import { Slider } from "@mui/material";
import { AiOutlinePlaySquare } from "react-icons/ai";
import type { FC } from "react";

const card: FC<CurrencyCard> = ({ coinType, amount, power, imgSrc, color }) => {
  return (
    <div
      className={`w-full h-fit rounded-lg p-2 px-4 py-4 relative`}
      style={{ background: color }}
    >
      <div className="w-full grid grid-cols-powerCard ">
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <span className="text-white text-base ">{coinType}</span>
          <span className="text-white text-2xl font-bold ">{amount.toFixed(12)}</span>
          <span className="text-white text-xs uppercase ">
            power {power} gh/s
          </span>
        </div>
        <img src={imgSrc} className="w-16 h-16 self-center" alt="" />
      </div>
      <div className="w-full h-fit flex items-center justify-center gap-2 mt-4 ">
        <AiOutlinePlaySquare className="text-white rotate-180 relative z-50" />
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{ color: "white", zIndex: 50 }}
        />
        <AiOutlinePlaySquare className="text-white relative z-50" />
        <div className="w-full h-12 bg-[#ffffff27] absolute bottom-0"></div>
      </div>
    </div>
  );
};

export default card;
