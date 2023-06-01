import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { LuCopy } from "react-icons/lu";
import { GrFormClose } from "react-icons/gr";

export default function PaymentModal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button className="bg-gradient-ibiza w-full rounded-md px-7 py-1 text-lg font-bold lg:w-auto" onClick={openModal}>
        make Deposit
      </button> 

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mt-10 w-full max-w-lg transform overflow-hidden rounded-md bg-white text-left align-middle text-cblack shadow-xl transition-all">
                  <div className="border-grey-500 flex items-center justify-between border-b-[2px] p-3 px-8">
                    <h1 className="text-xl font-bold">Deposit</h1>
                    <button
                      onClick={closeModal}
                      className="absolute right-4 top-3 text-white"
                    >
                      <GrFormClose className="cursor-pointer text-2xl text-cblack" />
                    </button>
                  </div>
                  <div className="px-8 py-3 font-semibold">
                    <h1>Payment coin</h1>
                    <p className="mb-4">TRX (TRX)</p>

                    <p>get power (with the current exchange rate):</p>
                    <p className="mb-4">2657 GH/z</p>

                    <p>Payment coin amount</p>
                    <div className="mb-4 flex w-full items-center justify-start">
                      <input
                        type="text"
                        value="1000"
                        placeholder="0.00"
                        readOnly
                        className="w-[90%] rounded-l-md bg-gray-600 bg-opacity-25 p-2 focus:outline focus:outline-4 focus:outline-gray-200"
                      />
                      <button className="flex h-full w-[10%] items-center justify-center rounded-r-md border-[0.1rem] border-gray-200 p-3 hover:bg-gray-300 hover:bg-opacity-30">
                        <LuCopy />
                      </button>
                    </div>

                    <p>Payment address</p>
                    <div className="mb-4 flex w-full items-center justify-start">
                      <input
                        type="text"
                        value="1000"
                        placeholder="0.00"
                        readOnly
                        className="w-[90%] rounded-l-md bg-gray-600 bg-opacity-25 p-2 focus:outline focus:outline-4 focus:outline-gray-200"
                      />
                      <button className="flex h-full w-[10%] items-center justify-center rounded-r-md border-[0.1rem] border-gray-200 p-3 hover:bg-gray-300 hover:bg-opacity-30">
                        <LuCopy />
                      </button>
                    </div>
                    <div>
                      <img
                        className="mb-4 h-[10rem] w-[10rem]"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEUAAAD///+l2Z/dAAACWElEQVR4nO3XQY4bMQwEwM3/P53TIgEyoJukZryIi0cNRXbpZH997erXdxWfikqalwm3RUgYND+ouSpCwqD5Qc1VEf4kYRKoSDabc99kwqdy3DeZ8Kkc900mfCrHfZMJn8px3+RKePEt2PpA8ywhISEhISEh4UHhv1X0tD4REhISEhIS/hxhMqf1iZCQkJCQkPBWYVKzW8mc5KQ1mTBONivC+S7CfrJZEc53EfaTzepR4ayWWVsn7ynCkyfvKcKTJ+8pwpMn7ynCkyfbiKdqtv2+YISDiYSEhN08pwb9mUhIeFpYTGxlTeYUJy1q8kC9ZISEhISEhP+7MBm9XDZ7u9mtizyEhISEhISE5X/8hDF7oNnA5FZ1nZCQkJCQkLAUtvBJ83JpMbCq5Y5ZoNnSYiDhYscs0GxpMZBwsWMWaLa0GEi42DELNFtaDPxIYetaAUsfMh6YfIrwhISEhISEhOXW1rJWjhZ+GYOQkJCQkJCwFibdS8+x0K0iJCQkJCT8YGHrfitZ0dN6jiRqNYeQkJCQkJAwi5hsTfBFz2xp9ImQkJCQkPCDhcX6VrWSJVmX70JISEhISEg4/QkxTJaETtLPXoGQkJCQkJDwMuupHK1brTyt1yTsZ53dInwxJ1rR8BEObhG+mBOtaPgIB7ceFSZbk1vF+lOVvEKVPukhJNwV4av0SQ8h4a4IX6VPelq3ihzLOdEjEhISEhISEq6FxfXEk+AjBiEhISEhIWEmTGqW7FRz8VKEcRES7poJCZfJCA80D4WzKrIW6VtZZw9ESEhISEhI+Nen36pFX+BZqCWaAAAAAElFTkSuQmCC"
                        alt=""
                      />
                    </div>
                    <div>
                      <p>
                        Blockchain transaction need time. track the status of
                        your transactionon the Checkout page. our support is
                        ready to help you, but first of we all check explorer
                        too.
                      </p>
                    </div>
                  </div>
                  <div className="border-grey-500 flex items-center justify-between border-t-[2px] p-3 px-8">
                    <button className="bg-gradient-ibiza w-full rounded-md px-7 py-1 text-lg font-bold lg:w-auto">
                      make Deposit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
