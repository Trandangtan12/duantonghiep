import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { UserApi } from "../../../../service/userService";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();
    const history = useHistory()
    const [error, setError] = useState("")
    const password = useRef({})
    password.current = watch("password")
    const [loading, setLoading] = useState("")
    const onHandleSubmit = async (data, e) => {
        const newUser = {
            ...data,
            gender: "Nam"
        }
        try {
            await UserApi.signup(newUser)
                .then(dataUser => {
                    if (dataUser.data.error) {
                        setError(dataUser.data.error);
                    } else {
                       setLoading("Đã gửi mail xác thực! Hãy vào hộp thư mail của bạn và xác nhận!!!")
                    }
                })

        } catch (err) {
            setError(err.response.data.message);
        }
    }
    const [showPassword, setShowPassword] = useState(false)
    const onShowPassword = () => {
        if (showPassword) {
            setShowPassword(false)
        } else {
            setShowPassword(true)
        }
    }
    return (
        <div>
            <div className="tw-flex tw-justify-center tw-bg-gray-100">
                <div className="container tw-w-[50rem] sm:tw-mt-10 sm:tw-mb-10 tw-my-auto tw-max-w-md tw-border-2 tw-border-gray-200 tw-p-3 tw-bg-white tw-rounded-lg tw-shadow-2xl">
                    {/* header */}
                    <div className="tw-text-center tw-m-6">
                        <h1 className="tw-text-3xl tw-font-semibold tw-text-gray-700 tw-mb-2">
                            Đăng kí
                        </h1>
                        <div
                            style={{ display: error ? "block" : "none" }}
                            className="tw-block tw-bg-red-200 tw-text-red-500 tw-border tw-border-red-light tw-w-full tw-p-3 tw-rounded tw-mb-4"
                        >
                            {error}
                        </div>
                        <div
                            style={{ display: loading ? "block" : "none" }}
                            className="tw-block tw-bg-green-200 tw-text-green-600 tw-border tw-border-red-light tw-w-full tw-p-3 tw-rounded tw-mb-4"
                        >
                            {loading}
                        </div>


                    </div>
                    {/* sign-in */}
                    <div className="tw-m-6">
                        <form className="tw-mb-4" onSubmit={handleSubmit(onHandleSubmit)}>
                            <div className="tw-mb-6">
                                <label
                                    htmlFor="email"
                                    className="tw-block tw-mb-2 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400"
                                >
                                    * Email
                                </label>
                                <input
                                autoFocus="autofocus"
                                    {...register("email", {
                                        required: ("Bạn chưa điền email!!!"), pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Email không hợp lệ',
                                        },
                                    })}
                                    type="text"
                                    id=""
                                    className="tw-w-full tw-px-3 tw-py-2 tw-placeholder-gray-300 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-ring focus:tw-ring-indigo-100 focus:tw-border-indigo-300 dark:tw-bg-gray-700 dark:tw-text-white dark:tw-placeholder-gray-500 dark:tw-border-gray-600 dark:focus:tw-ring-gray-900 dark:focus:tw-border-gray-500"
                                />
                                <span className="tw-text-red-500 tw-italic">{errors.email?.message}</span>
                            </div>

                            <div className="tw-flex">
                            <div className="tw-mb-6 tw-mr-4">
                                <label
                                    htmlFor="email"
                                    className="tw-block tw-mb-2 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400"
                                >
                                    * Họ tên
                                </label>
                                <input
                                    {...register("name", {
                                        required: ("Bạn chưa điền Họ tên!!!")
                                    })}
                                    type="text"
                                    name="name"
                                    id=""
                                    className="tw-w-full tw-px-3 tw-py-2 tw-placeholder-gray-300 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-ring focus:tw-ring-indigo-100 focus:tw-border-indigo-300 dark:tw-bg-gray-700 dark:tw-text-white dark:tw-placeholder-gray-500 dark:tw-border-gray-600 dark:focus:tw-ring-gray-900 dark:focus:tw-border-gray-500"
                                />
                                <span className="tw-text-red-500 tw-italic">{errors.name?.message}</span>
                            </div>
                            <div className="tw-mb-6">
                                <label
                                    htmlFor="email"
                                    className="tw-block tw-mb-2 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400"
                                >
                                    * Số điện thoại
                                </label>
                                <input
                                    {...register("phone_number", {
                                        required: ("Bạn chưa điền số điện thoại!!!")
                                    })}
                                    type="text"
                                    id=""
                                    className="tw-w-full tw-px-3 tw-py-2 tw-placeholder-gray-300 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-ring focus:tw-ring-indigo-100 focus:tw-border-indigo-300 dark:tw-bg-gray-700 dark:tw-text-white dark:tw-placeholder-gray-500 dark:tw-border-gray-600 dark:focus:tw-ring-gray-900 dark:focus:tw-border-gray-500"
                                />
                                <span className="tw-text-red-500 tw-italic">{errors.phone_number?.message}</span>
                            </div>
                            </div>

                            <div className="tw-mb-6">
                                <label
                                    htmlFor="password"
                                    className="tw-block tw-mb-2 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400"
                                >
                                    * Mật khẩu
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", { required: ("Bạn chưa nhập mật khẩu!!!") })}
                                    id=""
                                    className="tw-w-full tw-px-3 tw-py-2 tw-placeholder-gray-300 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-ring focus:tw-ring-indigo-100 focus:tw-border-indigo-300 dark:tw-bg-gray-700 dark:tw-text-white dark:tw-placeholder-gray-500 dark:tw-border-gray-600 dark:focus:tw-ring-gray-900 dark:focus:tw-border-gray-500"
                                />
                                <span className="tw-text-red-500 tw-italic">{errors.password?.message}</span>

                            </div>
                            <div className="tw-mb-6">
                                <label
                                    htmlFor="password"
                                    className="tw-block tw-mb-2 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400"
                                >
                                    *Nhập Lại Mật khẩu
                                </label>
                                <input
                                    {...register("re_password", {
                                        required: ("Bạn chưa nhập lại mật khẩu!!!"),
                                        validate: value => value === password.current || "Mật khẩu không khớp -_-"
                                    })}
                                    type={showPassword ? "text" : "password"}
                                    id=""
                                    className="tw-w-full tw-px-3 tw-py-2 tw-placeholder-gray-300 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-ring focus:tw-ring-indigo-100 focus:tw-border-indigo-300 dark:tw-bg-gray-700 dark:tw-text-white dark:tw-placeholder-gray-500 dark:tw-border-gray-600 dark:focus:tw-ring-gray-900 dark:focus:tw-border-gray-500"
                                />
                                <span className="tw-text-red-500 tw-italic">{errors.re_password?.message}</span>
                                <div className="tw-mt-3 tw-flex tw-items-center">
                                    <input onClick={onShowPassword} type="checkbox" className="tw-mr-1" /><span className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">Show password</span>

                                </div>
                            </div>
                            <div className="tw-mb-6">
                                <button
                                    type="submit"

                                    className="tw-w-full tw-px-3 tw-py-4 tw-text-white tw-bg-green-600 tw-rounded-md hover:tw-bg-green-700 focus:tw-outline-none tw-duration-100 tw-ease-in-out"
                                >
                                    Đăng ký
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
