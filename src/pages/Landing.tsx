import { GrFacebookOption, GrLinkedinOption, GrTwitter, GrGooglePlus } from "react-icons/gr"
import NavBar from "../components/global/Navbar";
import Nav2 from "../components/global/Nav2";
import Carousel from "../components/global/Carousel";

function Landing() {
  return (
    <main className="font-muli text-custblack px-3 lg:px-0">
      <div className="hidden lg:flex py-5 justify-start gap-5 pl-10 border-b-[.000000001px] border-[#535a7076]">
        <p className="text-[#535a70]">Call Us: (+84) 939 512 999</p>
        <p className="text-[#535a70]"> info@trxmining.com</p>
        <div className="flex justify-center items-center gap-4">
          <a href="#">
            <GrFacebookOption className="text-[#535a70]" />
          </a>
          <a href="#">
            <GrTwitter className="text-[#535a70]" />
          </a>
          <a href="#">
            <GrLinkedinOption className="text-[#535a70]" />
          </a>
          <a href="#">
            <GrGooglePlus className="text-[#535a70]" />
          </a>
        </div>
      </div>
      <NavBar />
      <Nav2 />
      <section className="w-full pb-32 pt-10 bg-banner bg-custom lg:bg-[180%] lg:bg-contain bg-no-repeat">
        <div className="w-[95%] flex flex-col items-baseline gap-1 lg:w-[40rem] lg:ml-10 lg:mt-20">
          <h1 className="text-darkblue font-bold text-4xl lg:text-7xl w-[80%] lg:w-full mb-10 leading-[3rem]">
            Reliable online Investment for{" "}
            <strong className="text-secondred text-6xl">TRX</strong> Coin.
          </h1>
          <p className="text-[#535a70] text-md font-medium lg:text-lg w-[90%] mb-10 leading-8 text-left">
            It's very easy to earning after registration. Once you have set up
            your account, you can start earning your first coins from our
            TRXcoin Tron Time service!.
          </p>
          {/* <div className="w-full flex flex-col justify-start items-baseline"> */}
          <input
            className="outline-none cornered-border bg-transparent border-2 lg:w-[40rem] px-4 py-4 lg:px-8 lg:py-5 border-primred w-full text-sm lg:text-md"
            type="text"
            placeholder="Enter BTC or TRX Address"
          />
          <button className="btn hover:bg-left cornered-border px-8 py-4 text-white lg:mt-2">
            Start Mining
          </button>
          {/* </div> */}
        </div>
      </section>
      <section className="w-full flex justify-center items-center lg:mt-52">
        <div className="flex flex-col items-baseline lg:items-center gap-12 w-[95%] lg:flex-row">
          <img
            src="https://unxbot.com/unxtem24/trx_v2/assets/img/gallery/inv_team.jpg"
            alt=""
            className="w-full cornered-border-r-b lg:w-[30rem]"
          />
          <div className="flex flex-col justify-center items-baseline gap-12 lg:ml-10">
            <h1 className="text-darkblue font-bold text-[1.6rem] lg:text-4xl">
              Who We Are?
            </h1>
            <p className="text-[#535a70] text-md font-meduim lg:text-lg w-full">
              Trxmining is a best Investment platfrom for trx coin investing. We
              have very experiance team for investing platfrom. And make profit
              easily!
            </p>
            <a
              href="#"
              className="btn cornered-border hover:bg-left px-7 py-5 m-3 text-white"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center py-20 pt-14 lg:h-[30rem]">
        <h1 className="text-darkblue font-bold text-3xl lg:text-5xl">
          What Makes <span className="text-primred">Trxmining</span> Special?
        </h1>
      </section>
      <section className="flex flex-col justify-center gap-3 lg:grid lg:grid-cols-3 lg:grid-rows-1">
        <div className="box-shadow p-3 flex flex-col justify-center items-center gap-2 lg:px-5">
          <img
            className="h-20 w-20"
            src="https://unxbot.com/unxtem24/trx_v2/assets/img/growth.png"
            alt=""
          />
          <h3 className="text-darkblue font-bold text-2xl">
            Guaranteed Profit
          </h3>
          <p className="text-darkblue2 font-light text-md lg:text-lg leading-7 text-center w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            vero ea praesentium! Velit quaerat, est praesentium soluta
          </p>
        </div>
        <div className="box-shadow p-3 flex flex-col justify-center items-center gap-2">
          <img
            className="h-20 w-20"
            src="https://unxbot.com/unxtem24/trx_v2/assets/img/growth.png"
            alt=""
          />
          <h3 className="text-darkblue font-bold text-2xl">
            Guaranteed Profit
          </h3>
          <p className="text-darkblue2 font-light text-sm lg:text-md leading-7 text-center w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            vero ea praesentium! Velit quaerat, est praesentium soluta
          </p>
        </div>
        <div className="box-shadow p-3 flex flex-col justify-center items-center gap-2">
          <img
            className="h-20 w-20"
            src="https://unxbot.com/unxtem24/trx_v2/assets/img/growth.png"
            alt=""
          />
          <h3 className="text-darkblue font-bold text-2xl">
            Guaranteed Profit
          </h3>
          <p className="text-darkblue2 font-light text-sm lg:text-md leading-7 text-center w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            vero ea praesentium! Velit quaerat, est praesentium soluta
          </p>
        </div>
      </section>
      <section className="py-10 flex flex-col justify-center items-center  bg-[#fafafa]">
        <div className="mb-4 lg:mt-32 lg:mb-20">
          <p className="text-[#535a70] text-md font-medium lg:text-lg mt-10 mb-5 text-left lg:text-center">
            Our Investment plan for you
          </p>
          <h1 className="text-darkblue font-bold text-3xl lg:text-4xl mb-20">
            Choose Your Plan Easily!
          </h1>
        </div>
        <div className="w-full  flex flex-col justify-center items-center gap-10 lg:grid grid-cols-3">
          <div className="flex flex-col justify-center items-center gap-5 bg-white p-10">
            <p className="text-[#535a70] text-sm font-light lg:text-md">
              Single Package
            </p>
            <h1 className="text-darkblue font-bold text-2xl">Basic</h1>
            <div>
              <span className="font-bold text-3xl text-secondred">$20.00</span>
              <span className="ml-3 font-semibold text-lg text-[#535a70]">
                /mo
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-[#535a70] font-[300] text-lg">
                20 TRX Min Deposit
              </p>
              <p className="text-[#535a70] font-[300] text-lg">
                199 TRX Max Deposit
              </p>
              <p className="text-[#535a70] font-[300] text-lg">
                6.25% Daily Return
              </p>
              <p className="text-[#535a70] font-[300] text-lg">
                6% Referral Commission
              </p>
              <p className="text-[#535a70] font-[300] text-lg">
                20 DAY After Plan will Expire
              </p>
            </div>
            <a
              href="#"
              className="cornered-border bg-white px-7 py-5 text-primred border-[.01rem] border-secondred hover:bg-primred hover:text-white"
            >
              Select Packages
            </a>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 bg-white p-10">
            <p className="text-[#535a70] text-sm font-light lg:text-md">
              Single Package
            </p>
            <h1 className="text-darkblue font-bold text-2xl">Basic</h1>
            <div>
              <span className="font-bold text-3xl text-secondred">$20.00</span>
              <span className="ml-3 font-semibold text-lg text-[#535a70]">
                /mo
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-[#535a70] font-[300] text-lg">
                20 TRX Min Deposit
              </p>
              <p className="text-[#535a70] font-[300] text-lg">
                199 TRX Max Deposit
              </p>
              <p className="text-[#535a70] font-[300] text-lg">
                6.25% Daily Return
              </p>
              <p className="text-[#535a70] font-[300] text-lg">
                6% Referral Commission
              </p>
              <p className="text-[#535a70] font-[300] text-lg">
                20 DAY After Plan will Expire
              </p>
            </div>
            <a
              href="#"
              className="cornered-border bg-white px-7 py-5 text-primred border-[.01rem] border-secondred hover:bg-primred hover:text-white"
            >
              Select Packages
            </a>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 bg-white p-10">
            <p className="text-[#535a70] text-sm font-light lg:text-md">
              Single Package
            </p>
            <h1 className="text-darkblue font-bold text-2xl">Basic</h1>
            <div>
              <span className="font-bold text-3xl text-secondred">$20.00</span>
              <span className="ml-3 font-semibold text-lg text-[#535a70]">
                /mo
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-[#535a70] font-[300] text-lg">
                20 TRX Min Deposit
              </p>
              <p className="text-[#535a70] font-[300] text-lg">
                199 TRX Max Deposit
              </p>
              <p className="text-[#535a70] font-[300] text-lg">
                6.25% Daily Return
              </p>
              <p className="text-[#535a70] font-[300] text-lg">
                6% Referral Commission
              </p>
              <p className="text-[#535a70] font-[300] text-lg">
                20 DAY After Plan will Expire
              </p>
            </div>
            <a
              href="#"
              className="cornered-border bg-white px-7 py-5 text-primred border-[.01rem] border-secondred hover:bg-gradient-to-r from-red-600 to-orange-500 hover:text-white"
            >
              Select Packages
            </a>
          </div>
        </div>
      </section>
      <section className="px-1 mt-32 flex justify-center items-center">
        <div className="cornered-border-l text-white w-full lg:w-[90%] flex flex-col lg:flex-row gap-10  items-center justify-between px-10 py-16 lg:py-20 bg-img1 bg-center bg-cover">
          <h1 className="font-bold text-2xl lg:text-3xl w-80">
            Get In Our Touch To Subscribe.
          </h1>
          <div className="bg-white cornered-border lg:w-[30rem] py-1 flex justify-between px-1 items-center">
            <input
              type="text"
              className="outline-none bg-transparent px-4 py-4 lg:px-8 lg:py-3 text-sm w[70%] lg:text-md text-custblack"
              placeholder="Enter Email"
            />
            <button className="cornered-border bg-gradient-to-r from-red-600 to-orange-500 px-7 py-3 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <div className="lg:flex justify-center w-full gap-20">
        <section className="flex flex-col justify-center items-baseline gap-4 mt-20 lg:w-[40rem]">
          <h1 className="text-darkblue font-bold text-2xl lg:text-4xl w-[70%] text-left mb-5">
            What Our Clint Think About Us!
          </h1>
          <div className="w-full lg:w-[40rem]">
            <Carousel />
          </div>
        </section>
        <section className="my-20">
          <img
            src="https://unxbot.com/unxtem24/trx_v2/assets/img/gallery/about2.png"
            className="lg:w-20rem] lg:h-[20rem]"
            alt=""
          />
        </section>
      </div>
      <section className="flex flex-col justify-center gap-4 mb-20 bg-[#f8fcff] lg:pt-52">
        <div className="flex flex-col justify-center gap-4 items-center">
          <h6 className="text-secondred font-bold text-2xl lg:text-xl">
            Trxmining Live Records.
          </h6>
          <h1 className="font-bold text-2xl lg:text-5xl text-darkblue lg:mb-20">
            CURRENT STATISTICS.
          </h1>
        </div>
        <div className="flex flex-col justify-start items-center gap-5 lg:grid grid-cols-4 my-20">
          <div className="box-shadow flex flex-col justify-center items-center gap-2 w-full py-4 text-darkblue bg-white">
            <h1 className="font-semibold text-xl">789</h1>
            <h2 className="font-medium text-lg">Total Users</h2>
          </div>
          <div className="box-shadow flex flex-col justify-center items-center gap-2 w-full py-4 text-darkblue bg-white">
            <h1 className="font-semibold text-xl">789</h1>
            <h2 className="font-medium text-lg">Total Users</h2>
          </div>
          <div className="box-shadow flex flex-col justify-center items-center gap-2 w-full py-4 text-darkblue bg-white">
            <h1 className="font-semibold text-xl">789</h1>
            <h2 className="font-medium text-lg">Total Users</h2>
          </div>
          <div className="box-shadow flex flex-col justify-center items-center gap-2 w-full py-4 text-darkblue bg-white">
            <h1 className="font-semibold text-xl">789</h1>
            <h2 className="font-medium text-lg">Total Users</h2>
          </div>
        </div>
      </section>
      <footer className="bg-footer-bg bg-cover px-4 py-20 pb-14 lg:pt-32">
        <div className="flex flex-col gap-10 lg:grid grid-cols-4 grid-rows-1 lg:mb-32 lg:px-20">
          <div className="flex flex-col gap-5">
            <img
              src="https://unxbot.com/unxtem24/trx_v2/assets/img/logo/logo.png"
              alt=""
            />
            <h1 className="text-[#7d767d] font-medium">
              Receive updates and latest news direct from Simply enter.
            </h1>
            <h1 className="text-3xl text-white">
              +156<span className="text-secondred">4585 3569</span>
            </h1>
            <p className="text-[#736e73] font-medium">youremail@gmail.com</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-white font-medium text-xl">OUR SUPPORT</h1>
            <p className="text-[#736e73] font-medium">
              Telegram: @Trxmininghelp
            </p>
            <p className="text-[#736e73] font-medium">
              Gmail: Trxmining.Com@Gmail.Com
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-white font-medium text-xl">QUICK LINK</h1>
            <p className="text-[#736e73] font-medium">Account</p>
            <p className="text-[#736e73] font-medium">Status</p>
            <p className="text-[#736e73] font-medium">Faq</p>
            <p className="text-[#736e73] font-medium">Contact</p>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-white font-medium text-xl">NEWSLATTER</h1>
            <p className="text-[#736e73] font-medium">
              Subscribe now to get daily updates
            </p>
            <div className="flex justify-center items-center h-10 w-[20rem] bg-[#101720] text-sm">
              <input
                type="text"
                placeholder="Email Address"
                className="outline-none bg-transparent w-[75%] pl-3 text-[#736e73]"
              />
              <button className="h-full w-[25%] bg-[#0a0f17] text-primred">
                Send
              </button>
            </div>
          </div>
        </div>
        <hr className="text-[#0e141f]" />
        <div className="pt-10 h-full flex items-center lg:pl-16">
          <p className="text-[#736e73]">
            Copyright ©2023 All rights reserved by{" "}
            <p className="text-secondred">Trxmining</p>
          </p>
          <div>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Landing;

