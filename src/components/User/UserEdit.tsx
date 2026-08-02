import React, { ChangeEvent, use, useEffect, useState } from "react"
import { UserEditProps } from "../../models/UserEditProps"
import { User } from "../../models/User"
import UserService from "../../service/UserService"

export const UserEdit = ({
    open,
    user,
    onClose,
    onSave
}: UserEditProps) => {
    const [updateFormData, setUpdateFormData] = useState<User | null>(null)

    useEffect(() => {
        setUpdateFormData(user)
    }, [user])

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>{
        if(!updateFormData) return

        // const name = e.target.name
        // const value = e.target.value

        const { name, value} = e.target
        setUpdateFormData((prev)=>({
            ...prev!, [name]: value
        }));
    }

    const handleOnSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!updateFormData) return

        const status = await UserService.updateUser(updateFormData)
        if (status === 204) {
            alert("User Details Updated Successfully")
            onSave()
            onClose()
        } else {
            alert("User Details Update Failed")
        }


    }

    if (!open || !updateFormData) return null



    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl">

                {/* Header */}
                <div className="border-b px-6 py-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Edit User
                    </h2>
                    <p className="text-sm text-gray-500">
                        Update user information.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleOnSubmit} className="p-6 space-y-5">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={updateFormData.firstName}
                            onChange={handleOnChange}
                            placeholder="Enter full name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={updateFormData.lastName}
                            onChange={handleOnChange}
                            placeholder="Enter full name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={updateFormData.email}
                            // onChange={handleOnChange}
                            placeholder="Enter email address"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={updateFormData.password}
                            onChange={handleOnChange}
                            placeholder="Enter new password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Role
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={updateFormData.role}
                            onChange={handleOnChange}
                            placeholder="Enter new role"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border border-gray-300 px-5 py-2 text-gray-700 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}