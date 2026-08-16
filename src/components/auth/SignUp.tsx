import { ChangeEvent, use, useState } from "react";
import { User, UserRole } from "../../models/User";
import UserService from "../../service/UserService";
import AuthService from "../../service/AuthService";

export const SignUp = () => {
    const [user, setUser] = useState<User>({
        userId: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: UserRole.ADMIN
    })
    // Catch Input values
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser((prev) => ({ ...prev, [name]: value }))
    }

    const handleOnSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const token = await AuthService.signUp(user)
        console.log(token)


    }

    return (
        <>

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        className="mx-auto h-10 w-auto"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-blue-400">Register Now to EcoCheck-2026</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleOnSubmit}>
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-blue-400">
                                First Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="firstName"
                                    type="text"
                                    value={user.firstName}
                                    onChange={handleOnChange}
                                    required
                                    className="block w-full rounded-md bg-blue/5 px-3 py-1.5 text-base text-blue outline-1 -outline-offset-1 outline-blue/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="last-name" className="block text-sm/6 font-medium text-blue-400">
                                    Last Name
                                </label>
                                <div className="text-sm">
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="lastName"
                                    type="text"
                                    value={user.lastName}
                                    onChange={handleOnChange}
                                    required
                                    className="block w-full rounded-md bg-blue/5 px-3 py-1.5 text-base text-blue outline-1 -outline-offset-1 outline-blue/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-blue-400">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={user.email}
                                    onChange={handleOnChange}
                                    required
                                    className="block w-full rounded-md bg-blue/5 px-3 py-1.5 text-base text-blue outline-1 -outline-offset-1 outline-blue/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium text-blue-400">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={user.password}
                                    onChange={handleOnChange}
                                    required
                                    className="block w-full rounded-md bg-blue/5 px-3 py-1.5 text-base text-blue outline-1 -outline-offset-1 outline-blue/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-sm/6 font-medium text-blue-400">
                                Role
                            </label>
                            <div className="mt-2">
                                <input
                                    id="role"
                                    name="role"
                                    type="text"
                                    value={user.role}
                                    onChange={handleOnChange}
                                    required
                                    className="block w-full rounded-md bg-blue/5 px-3 py-1.5 text-base text-blue outline-1 -outline-offset-1 outline-blue/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mb-4"
                            >
                                Sign Up
                            </button>
                            <button
                                type="reset"
                                className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                            >
                                Reset
                            </button>
                        </div>
                    </form>

                    {/* <p className="mt-10 text-center text-sm/6 text-gray-400">
                        Not a member?{' '}
                        <a href="#" className="font-semibold text-blue-400 hover:text-blue-300">
                            Meet Our Community
                        </a>
                    </p> */}
                </div>
            </div>
        </>

    )
};