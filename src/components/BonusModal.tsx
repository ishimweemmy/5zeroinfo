import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { GrFormClose } from "react-icons/gr";

const BonusModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        className="btn-outline-warning self-start rounded-md border-[1px] p-2"
        onClick={openModal}
      >
        get bonus
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
                <Dialog.Panel className="popup-background w-full max-w-lg transform overflow-hidden p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={closeModal}
                    className="absolute right-4 top-3 text-white"
                  >
                    <GrFormClose className="cursor-pointer text-2xl text-cblack" />
                  </button>
                  <div className="flex flex-col items-center gap-5 p-10">
                    <h1 className="text-3xl font-bold text-white">
                      Limited Time Deposit Bonus
                    </h1>
                    <h1 className="text-6xl font-bold text-yellow-500">
                      300% Bonus
                    </h1>
                    <h2 className="text-white">Available for</h2>
                    <div className="flex items-center justify-center gap-3 ">
                      <div className="flex flex-col items-center justify-center bg-gray-950 bg-opacity-75 p-4 text-white">
                        <p>Minutes</p>
                        <h1 className="text-6xl">06</h1>
                      </div>
                      <p className="text-4xl font-bold text-white">:</p>
                      <div className="flex flex-col items-center justify-center bg-gray-950 bg-opacity-75 p-4 text-white">
                        <p>Second</p>
                        <h1 className="text-6xl">55</h1>
                      </div>
                    </div>
                    <button className="rounded-sm bg-yellow-400 p-4 text-xl font-semibold text-gray-900">
                      Deposit Now
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
};

export default BonusModal;
