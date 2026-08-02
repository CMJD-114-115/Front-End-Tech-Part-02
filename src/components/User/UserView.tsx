import { useEffect, useState } from "react"
import UserService from "../../service/UserService"
import { User } from "../../models/User"

export const UserView = () => {

    const [user, setUser] = useState<User[]>([])

    const getAllUsers = async () => {
        try {
            const userData = await UserService.getUsers()
            console.log(userData)
            if (userData) setUser(userData)

        } catch (err) {
            console.error(err)
        }

    }
    useEffect(() => {
        getAllUsers()
    }, [])
    return (<>
        <div className="max-w-6xl mx-auto mt-8 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">
                    User Enrollment Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Manage registered users
                </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                User ID
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                First Name
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                Last Name
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                Email
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                Password
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                Role
                            </th>
                            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-gray-700">U001</td>
                            <td className="px-6 py-4 font-medium">Thanura</td>
                            <td className="px-6 py-4 text-gray-600">Silva</td>
                            <td className="px-6 py-4 text-gray-600">thanu@mail.com</td>
                            <td className="px-6 py-4 text-gray-600">t1234</td>
                            <td className="px-6 py-4">
                                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                                    Admin
                                </span>
                            </td>
                            <td className="px-6 py-4 text-center space-x-2">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                    Edit
                                </button>
                                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                                    Delete
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </>)
}