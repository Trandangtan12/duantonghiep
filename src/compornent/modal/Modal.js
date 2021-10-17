import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const  Modal = ({isOpen , closeModal }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="tw-fixed tw-inset-0 tw-z-10 tw-overflow-y-auto"
          onClose={closeModal}
        >
          <div className="tw-min-h-screen tw-px-4 tw-text-center">
            <Transition.Child
              as={Fragment}
              enter="tw-ease-out tw-duration-300"
              enterFrom="tw-opacity-0"
              enterTo="tw-opacity-100"
              leave="tw-ease-in tw-duration-200"
              leaveFrom="tw-opacity-100"
              leaveTo="tw-opacity-0"
            >
              <Dialog.Overlay className="tw-fixed tw-inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal tw-contents. */}
            <span
              className="tw-inline-block tw-h-screen tw-align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="tw-ease-out tw-duration-300"
              enterFrom="tw-opacity-0 tw-scale-95"
              enterTo="tw-opacity-100 tw-scale-100"
              leave="tw-ease-in tw-duration-200"
              leaveFrom="tw-opacity-100 tw-scale-100"
              leaveTo="tw-opacity-0 tw-scale-95"
            >
              <div className="tw-inline-block tw-w-full tw-max-w-md tw-p-6 tw-my-8 tw-overflow-hidden tw-text-left tw-align-middle tw-transition-all tw-transform tw-bg-white tw-shadow-xl tw-rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900"
                >
                  Payment successful
                </Dialog.Title>
                <div className="tw-mt-2">
                  <p className="tw-text-sm tw-text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className="tw-mt-4">
                  <button
                    type="button"
                    className="tw-inline-flex tw-justify-center tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-blue-900 tw-bg-blue-100 tw-border tw-border-transparent tw-rounded-md hover:tw-bg-blue-200 focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-offset-2 focus-visible:tw-ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal