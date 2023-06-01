import { Dialog, Transition } from "@headlessui/react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Fragment } from "react";
import { AiFillEye } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const loginModal = ({ isOpen, handleClose }: {
    isOpen: boolean,
    handleClose: () => void,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
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
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all">
                <div className="flex h-fit w-full items-center justify-between border-b border-gray-200 px-8 py-4">
                  <span className="text-xl font-bold text-cblack">Login</span>
                  <IconButton onClick={handleClose}>
                    <GrFormClose className="cursor-pointer text-2xl text-cblack" />
                  </IconButton>
                </div>
                <div className="flex h-fit w-full flex-col items-center justify-center gap-2 px-8 py-4">
                  <div className="w-full">
                    <span className="text-sm text-cblack">Email Address</span>
                    <TextField
                      placeholder="Enter Email"
                      InputProps={{
                        sx: {
                          "& input": {
                            color: "white",
                          },
                          "& label": { color: "white" },
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <MdOutlineMailOutline className="text-cblack" />
                          </InputAdornment>
                        ),
                      }}
                      required
                      fullWidth
                      name="username"
                      value=""
                      helperText=""
                      error={false}
                      autoComplete="off"
                      size="small"
                    />
                  </div>
                  <div className="w-full">
                    <span className="text-sm text-cblack">Enter Password</span>
                    <TextField
                      placeholder="Enter Password"
                      InputProps={{
                        sx: {
                          "& input": {
                            color: "white",
                          },
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <RiLockPasswordFill className="text-cblack" />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment
                            position="start"
                            className="cursor-pointer"
                          >
                            <AiFillEye className="text-cblack" />
                          </InputAdornment>
                        ),
                      }}
                      required
                      fullWidth
                      name="password"
                      value=""
                      helperText=""
                      error={false}
                      type="password"
                      autoComplete="off"
                      size="small"
                    />
                  </div>
                  <button className="btn hover:cornered-border m-3 w-full px-6 py-3 text-white hover:bg-left">
                    Log in
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default loginModal;