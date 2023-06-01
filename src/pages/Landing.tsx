import {
  GrFacebookOption,
  GrLinkedinOption,
  GrTwitter,
  GrGooglePlus,
} from "react-icons/gr";
import NavBar from "../components/global/Navbar";
import Nav2 from "../components/global/Nav2";
import Carousel from "../components/global/Carousel";

function Landing() {
  return (
    <main className="px-3 font-muli text-custblack lg:px-0">
      <div className="hidden justify-start gap-5 border-b-[.000000001px] border-[#535a7076] py-5 pl-10 lg:flex">
        <p className="text-[#535a70]">Call Us: (+84) 939 512 999</p>
        <p className="text-[#535a70]"> info@trxmining.com</p>
        <div className="flex items-center justify-center gap-4">
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
      <section className="bg-custom w-full bg-banner bg-no-repeat pb-32 pt-10 lg:bg-contain lg:bg-[120%]">
        <div className="flex w-[95%] flex-col items-baseline gap-1 lg:ml-10 lg:mt-20 lg:w-[40rem]">
          <h1 className="mb-10 w-[80%] text-4xl font-bold leading-[3rem] text-darkblue lg:w-full lg:text-7xl">
            Reliable online Investment for{" "}
            <strong className="text-6xl text-secondred">TRX</strong> Coin.
          </h1>
          <p className="text-md mb-10 w-[90%] text-left font-medium leading-8 text-[#535a70] lg:text-lg">
            It's very easy to earning after registration. Once you have set up
            your account, you can start earning your first coins from our
            TRXcoin Tron Time service!.
          </p>
          {/* <div className="w-full flex flex-col justify-start items-baseline"> */}
          <input
            className="cornered-border lg:text-md w-full border-2 border-primred bg-transparent px-4 py-4 text-sm outline-none lg:w-[40rem] lg:px-8 lg:py-5"
            type="text"
            placeholder="Enter BTC or TRX Address"
          />
          <button className="btn cornered-border px-8 py-4 text-white hover:bg-left lg:mt-2">
            Start Mining
          </button>
          {/* </div> */}
        </div>
      </section>
      <section className="flex w-full items-center justify-center lg:mt-52">
        <div className="flex w-[95%] flex-col items-baseline gap-12 lg:flex-row lg:items-center">
          <img
            src="https://unxbot.com/unxtem24/trx_v2/assets/img/gallery/inv_team.jpg"
            alt=""
            className="cornered-border-r-b w-full lg:w-[30rem]"
          />
          <div className="flex flex-col items-baseline justify-center gap-12 lg:ml-10">
            <h1 className="text-[1.6rem] font-bold text-darkblue lg:text-4xl">
              Who We Are?
            </h1>
            <p className="text-md font-meduim w-full text-[#535a70] lg:text-lg">
              Trxmining is a best Investment platfrom for trx coin investing. We
              have very experiance team for investing platfrom. And make profit
              easily!
            </p>
            <a
              href="#"
              className="btn cornered-border m-3 px-7 py-5 text-white hover:bg-left"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center py-20 pt-14 lg:h-[30rem]">
        <h1 className="text-3xl font-bold text-darkblue lg:text-5xl">
          What Makes <span className="text-primred">Trxmining</span> Special?
        </h1>
      </section>
      <section className="flex flex-col justify-center gap-3 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:px-10">
        <div className="box-shadow flex flex-col items-center justify-center gap-2 p-3 lg:px-5">
          <img
            className="h-20 w-20"
            src="https://unxbot.com/unxtem24/trx_v2/assets/img/growth.png"
            alt=""
          />
          <h3 className="text-2xl font-bold text-darkblue">
            Guaranteed Profit
          </h3>
          <p className="text-md w-[80%] text-center font-light leading-7 text-darkblue2 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            vero ea praesentium! Velit quaerat, est praesentium soluta
          </p>
        </div>
        <div className="box-shadow flex flex-col items-center justify-center gap-2 p-3 lg:px-5">
          <img
            className="h-20 w-20"
            src="http://www.webtechnologybd.com/html/Ripple/assets/img/icon/services-icon-2.svg"
            alt=""
          />
          <h3 className="text-2xl font-bold text-darkblue">Instant Exchange</h3>
          <p className="text-md w-[80%] text-center font-light leading-7 text-darkblue2 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            vero ea praesentium! Velit quaerat, est praesentium soluta
          </p>
        </div>
        <div className="box-shadow flex flex-col items-center justify-center gap-2 p-3 lg:px-5">
          <img
            className="h-20 w-20"
            src="http://www.webtechnologybd.com/html/Ripple/assets/img/icon/services-icon-3.svg"
            alt=""
          />
          <h3 className="text-2xl font-bold text-darkblue">
            1 Level Affiliates
          </h3>
          <p className="text-md w-[80%] text-center font-light leading-7 text-darkblue2 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            vero ea praesentium! Velit quaerat, est praesentium soluta
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-[#fafafa]  py-10">
        <div className="mb-4 lg:mb-20 lg:mt-32">
          <p className="text-md mb-5 mt-10 text-left font-medium text-[#535a70] lg:text-center lg:text-lg">
            Our Investment plan for you
          </p>
          <h1 className="mb-20 text-3xl font-bold text-darkblue lg:text-4xl">
            Choose Your Plan Easily!
          </h1>
        </div>
        <div className="flex  w-full grid-cols-3 flex-col items-center justify-center gap-10 lg:grid">
          <div className="flex flex-col items-center justify-center gap-5 bg-white p-10">
            <p className="lg:text-md text-sm font-light text-[#535a70]">
              Single Package
            </p>
            <h1 className="text-2xl font-bold text-darkblue">Basic</h1>
            <div>
              <span className="text-3xl font-bold text-secondred">$20.00</span>
              <span className="ml-3 text-lg font-semibold text-[#535a70]">
                /mo
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-lg font-[300] text-[#535a70]">
                20 TRX Min Deposit
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                199 TRX Max Deposit
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                6.25% Daily Return
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                6% Referral Commission
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                20 DAY After Plan will Expire
              </p>
            </div>
            <a
              href="#"
              className="cornered-border hover:bg-btn border-[.01rem] border-secondred bg-white px-7 py-5 text-primred hover:text-white"
            >
              Select Packages
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 bg-white p-10">
            <p className="lg:text-md text-sm font-light text-[#535a70]">
              half Package
            </p>
            <h1 className="text-2xl font-bold text-darkblue">Advanced</h1>
            <div>
              <span className="text-3xl font-bold text-secondred">$25.00</span>
              <span className="ml-3 text-lg font-semibold text-[#535a70]">
                /mo
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-lg font-[300] text-[#535a70]">
                20 TRX Min Deposit
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                199 TRX Max Deposit
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                6.25% Daily Return
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                6% Referral Commission
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                20 DAY After Plan will Expire
              </p>
            </div>
            <a
              href="#"
              className="cornered-border hover:bg-btn border-[.01rem] border-secondred bg-white px-7 py-5 text-primred hover:text-white"
            >
              Select Packages
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 bg-white p-10">
            <p className="lg:text-md text-sm font-light text-[#535a70]">
              Full Package
            </p>
            <h1 className="text-2xl font-bold text-darkblue">Premium</h1>
            <div>
              <span className="text-3xl font-bold text-secondred">$29.00</span>
              <span className="ml-3 text-lg font-semibold text-[#535a70]">
                /mo
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-lg font-[300] text-[#535a70]">
                20 TRX Min Deposit
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                199 TRX Max Deposit
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                6.25% Daily Return
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                6% Referral Commission
              </p>
              <p className="text-lg font-[300] text-[#535a70]">
                20 DAY After Plan will Expire
              </p>
            </div>
            <a
              href="#"
              className="cornered-border hover:bg-btn border-[.01rem] border-secondred bg-white px-7 py-5 text-primred hover:text-white"
            >
              Select Packages
            </a>
          </div>
        </div>
      </section>
      <section className="mt-32 flex items-center justify-center px-1">
        <div className="cornered-border-l flex w-full flex-col items-center justify-between gap-10 bg-img1  bg-cover bg-center px-10 py-16 text-white lg:w-[90%] lg:flex-row lg:py-20">
          <h1 className="w-80 text-2xl font-bold lg:text-3xl">
            Get In Our Touch To Subscribe.
          </h1>
          <div className="cornered-border flex items-center justify-between bg-white px-1 py-1 lg:w-[30rem]">
            <input
              type="text"
              className="w[70%] lg:text-md bg-transparent px-4 py-4 text-sm text-custblack outline-none lg:px-8 lg:py-3"
              placeholder="Enter Email"
            />
            <button className="cornered-border bg-gradient-to-r from-red-600 to-orange-500 px-7 py-3 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <div className="w-full justify-center gap-20 lg:flex">
        <section className="mt-20 flex flex-col items-baseline justify-center gap-4 lg:w-[60rem]">
          <h1 className="mb-5 w-[70%] text-left text-2xl font-bold text-darkblue lg:text-6xl">
            What Our Clint Think About Us!
          </h1>
          <div className="w-full lg:w-[40rem]">
            <Carousel />
          </div>
        </section>
        <section className="my-20">
          <img
            src="https://unxbot.com/unxtem24/trx_v2/assets/img/gallery/about2.png"
            className="lg:h-[30rem] lg:w-[30rem]"
            alt=""
          />
        </section>
      </div>
      <section className="mb-20 flex flex-col justify-center gap-4 bg-[#f8fcff] lg:pt-52">
        <div className="flex flex-col items-center justify-center gap-4">
          <h6 className="text-2xl font-bold text-secondred lg:text-xl">
            Trxmining Live Records.
          </h6>
          <h1 className="text-2xl font-bold text-darkblue lg:mb-20 lg:text-5xl">
            CURRENT STATISTICS.
          </h1>
        </div>
        <div className="my-20 flex grid-cols-4 flex-col items-center justify-start gap-5 lg:grid">
          <div className="box-shadow flex w-full flex-col items-center justify-center gap-2 bg-white py-4 text-darkblue">
            <h1 className="text-xl font-semibold">789</h1>
            <h2 className="text-lg font-medium">Total Users</h2>
          </div>
          <div className="box-shadow flex w-full flex-col items-center justify-center gap-2 bg-white py-4 text-darkblue">
            <h1 className="text-xl font-semibold">789</h1>
            <h2 className="text-lg font-medium">Total Users</h2>
          </div>
          <div className="box-shadow flex w-full flex-col items-center justify-center gap-2 bg-white py-4 text-darkblue">
            <h1 className="text-xl font-semibold">789</h1>
            <h2 className="text-lg font-medium">Total Users</h2>
          </div>
          <div className="box-shadow flex w-full flex-col items-center justify-center gap-2 bg-white py-4 text-darkblue">
            <h1 className="text-xl font-semibold">789</h1>
            <h2 className="text-lg font-medium">Total Users</h2>
          </div>
        </div>
      </section>
      <footer className="bg-footer-bg bg-cover px-4 py-20 pb-14 lg:pt-32">
        <div className="flex grid-cols-4 grid-rows-1 flex-col gap-10 lg:mb-32 lg:grid lg:px-20">
          <div className="flex flex-col gap-5">
            <img
              src="https://unxbot.com/unxtem24/trx_v2/assets/img/logo/logo.png"
              alt=""
            />
            <h1 className="font-medium text-[#7d767d]">
              Receive updates and latest news direct from Simply enter.
            </h1>
            <h1 className="text-3xl text-white">
              +156<span className="text-secondred">4585 3569</span>
            </h1>
            <p className="font-medium text-[#736e73]">youremail@gmail.com</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-medium text-white">OUR SUPPORT</h1>
            <p className="font-medium text-[#736e73]">
              Telegram: @Trxmininghelp
            </p>
            <p className="font-medium text-[#736e73]">
              Gmail: Trxmining.Com@Gmail.Com
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-medium text-white">QUICK LINK</h1>
            <p className="font-medium text-[#736e73]">Account</p>
            <p className="font-medium text-[#736e73]">Status</p>
            <p className="font-medium text-[#736e73]">Faq</p>
            <p className="font-medium text-[#736e73]">Contact</p>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-xl font-medium text-white">NEWSLATTER</h1>
            <p className="font-medium text-[#736e73]">
              Subscribe now to get daily updates
            </p>
            <div className="flex h-10 w-[20rem] items-center justify-center bg-[#101720] text-sm">
              <input
                type="text"
                placeholder="Email Address"
                className="w-[75%] bg-transparent pl-3 text-[#736e73] outline-none"
              />
              <button className="h-full w-[25%] bg-[#0a0f17] text-primred">
                Send
              </button>
            </div>
          </div>
        </div>
        <hr className="text-[#0e141f]" />
        <div className="flex h-full items-center pt-10 lg:pl-16">
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
