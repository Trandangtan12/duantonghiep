import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import React, { Fragment, useRef, useState } from 'react';
export const SearchBox = () => {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)
  
    return (
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="tw-fixed tw-z-10 tw-inset-0 tw-overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
          <div className="tw-flex tw-items-end tw-justify-center tw-min-h-screen tw-pt-4 tw-px-4 tw-pb-20 tw-text-center sm:tw-block sm:tw-p-0">
            <Transition.Child
              as={Fragment}
              enter="tw-ease-out tw-duration-300"
              enterFrom="tw-opacity-0"
              enterTo="tw-opacity-100"
              leave="tw-ease-in tw-duration-200"
              leaveFrom="tw-opacity-100"
              leaveTo="tw-opacity-0"
            >
              <Dialog.Overlay className="tw-fixed tw-inset-0 tw-bg-gray-500 tw-bg-opacity-75 tw-transition-opacity" />
            </Transition.Child>
  
            {/* This element is to trick the browser into centering the modal tw-contents. */}
            <span className="tw-hidden sm:tw-inline-block sm:tw-align-middle sm:tw-h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="tw-ease-out tw-duration-300"
              enterFrom="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95"
              enterTo="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100"
              leave="tw-ease-in tw-duration-200"
              leaveFrom="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100"
              leaveTo="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95"
            >
              <div className="tw-inline-block tw-align-bottom tw-bg-white tw-rounded-lg tw-text-left tw-overflow-hidden tw-shadow-xl tw-transform tw-transition-all sm:tw-my-8 sm:tw-align-middle sm:tw-max-w-lg sm:tw-w-full">
                <div className="tw-bg-white tw-px-4 tw-pt-5 tw-pb-4 sm:tw-p-6 sm:tw-pb-4">
                  <div className="sm:tw-flex sm:tw-items-start">
                    <div className="tw-mx-auto tw-flex-shrink-0 tw-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-rounded-full tw-bg-red-100 sm:tw-mx-0 sm:tw-h-10 sm:tw-w-10">
                      <ExclamationIcon className="tw-h-6 tw-w-6 tw-text-red-600" aria-hidden="true" />
                    </div>
                    <div className="tw-mt-3 tw-text-center sm:tw-mt-0 sm:tw-ml-4 sm:tw-text-left">
                      <Dialog.Title as="h3" className="tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900">
                        Deactivate account
                      </Dialog.Title>
                      <div className="tw-mt-2">
                        <p className="tw-text-sm tw-text-gray-500">
                          Are you sure you want to deactivate your account? All of your data will be permanently removed.
                          This action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tw-bg-gray-50 tw-px-4 tw-py-3 sm:tw-px-6 sm:tw-flex sm:tw-flex-row-reverse">
                  <button
                    type="button"
                    className="tw-w-full tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-shadow-sm tw-px-4 tw-py-2 tw-bg-red-600 tw-text-base tw-font-medium tw-text-white hover:tw-bg-red-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-red-500 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="tw-mt-3 tw-w-full tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-4 tw-py-2 tw-bg-white tw-text-base tw-font-medium tw-text-gray-700 hover:tw-bg-gray-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500 sm:tw-mt-0 sm:tw-ml-3 sm:tw-w-auto sm:tw-text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    )
}
