import React from "react";

const Footer = () => {
  return (
    <footer class="tw-bg-white">
      <div class="container tw-mx-auto tw-flex">
        <div class="tw-w-full tw-mx-auto tw-flex tw-flex-wrap">
          <div class="tw-flex tw-w-full md:tw-w-1/2 ">
            <div class="tw-px-8">
              <h3 class="tw-font-bold tw-text-gray-900">About</h3>
              <p class="tw-py-4 tw-text-gray-600 tw-text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse
                consectetur dapibus velit ut lacinia.
              </p>
            </div>
          </div>

          <div class="tw-flex tw-w-full md:tw-w-1/2">
            <div class="tw-px-8">
              <h3 class="tw-font-bold tw-text-gray-900">Social</h3>
              <ul class="list-reset tw-items-center tw-text-sm tw-pt-3">
                <li>
                  <a
                    class="tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-gray-900 hover:text-underline tw-py-1"
                    href="#"
                  >
                    Add social link
                  </a>
                </li>
                <li>
                  <a
                    class="tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-gray-900 hover:text-underline tw-py-1"
                    href="#"
                  >
                    Add social link
                  </a>
                </li>
                <li>
                  <a
                    class="tw-inline-block tw-text-gray-600 tw-no-underline hover:tw-text-gray-900 hover:text-underline tw-py-1"
                    href="#"
                  >
                    Add social link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
