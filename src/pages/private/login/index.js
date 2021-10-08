import React from "react";

const LoginAdmin = () => {
  return (
    <>
      {/* Container */}
      <div className="container tw-mx-auto">
        <div className="tw-flex tw-justify-center tw-px-6 tw-my-12">
          {/* Row */}
          <div className="tw-w-full xl:tw-w-3/4 lg:tw-w-11/12 tw-flex">
            {/* Col */}
            <div
              className="tw-w-full tw-h-auto tw-bg-gray-400 tw-hidden lg:tw-block lg:tw-w-1/2 tw-bg-cover tw-rounded-l-lg"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/K4mSJ7kc0As/600x800")',
              }}
            />
            {/* Col */}
            <div className="tw-w-full lg:tw-w-1/2 tw-bg-white tw-p-5 tw-rounded-lg lg:tw-rounded-l-none">
              <h3 className="tw-pt-4 tw-text-2xl tw-text-center">
                Welcome Back!
              </h3>
              <form className="tw-px-8 tw-pt-6 tw-pb-8 tw-mb-4 tw-bg-white tw-rounded">
                <div className="tw-mb-4">
                  <label
                    className="tw-block tw-mb-2 tw-text-sm tw-font-bold tw-text-gray-700"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-leading-tight tw-text-gray-700 tw-border tw-rounded tw-shadow tw-appearance-none focus:tw-outline-none focus:tw-shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="tw-mb-4">
                  <label
                    className="tw-block tw-mb-2 tw-text-sm tw-font-bold tw-text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="tw-w-full tw-px-3 tw-py-2 tw-mb-3 tw-text-sm tw-leading-tight tw-text-gray-700 tw-border tw-border-red-500 tw-rounded tw-shadow tw-appearance-none focus:tw-outline-none focus:tw-shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="tw-text-xs tw-italic tw-text-red-500">
                    Please choose a password.
                  </p>
                </div>
                <div className="tw-mb-4">
                  <input
                    className="tw-mr-2 tw-leading-tight"
                    type="checkbox"
                    id="checkbox_id"
                  />
                  <label className="tw-text-sm" htmlFor="checkbox_id">
                    Remember Me
                  </label>
                </div>
                <div className="tw-mb-6 tw-text-center">
                  <button
                    className="tw-w-full tw-px-4 tw-py-2 tw-font-bold tw-text-white tw-bg-blue-500 tw-rounded-full hover:tw-bg-blue-700 focus:tw-outline-none focus:tw-shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>
                <hr className="tw-mb-6 tw-border-t" />
                <div className="tw-text-center">
                  <a
                    className="tw-inline-block tw-text-sm tw-text-blue-500 tw-align-baseline hover:tw-text-blue-800"
                    href="./register.html"
                  >
                    Create an Account!
                  </a>
                </div>
                <div className="tw-text-center">
                  <a
                    className="tw-inline-block tw-text-sm tw-text-blue-500 tw-align-baseline hover:tw-text-blue-800"
                    href="./forgot-password.html"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;
