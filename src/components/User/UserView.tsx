export const UserView = () => {
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
                                Name
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                Email
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
                            <td className="px-6 py-4 font-medium">John Doe</td>
                            <td className="px-6 py-4 text-gray-600">john@example.com</td>
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

                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-gray-700">U002</td>
                            <td className="px-6 py-4 font-medium">Jane Smith</td>
                            <td className="px-6 py-4 text-gray-600">jane@example.com</td>
                            <td className="px-6 py-4">
                                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                                    User
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

                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-gray-700">U003</td>
                            <td className="px-6 py-4 font-medium">Michael Brown</td>
                            <td className="px-6 py-4 text-gray-600">michael@example.com</td>
                            <td className="px-6 py-4">
                                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                                    Manager
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

                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-gray-700">U004</td>
                            <td className="px-6 py-4 font-medium">Emily Johnson</td>
                            <td className="px-6 py-4 text-gray-600">emily@example.com</td>
                            <td className="px-6 py-4">
                                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                                    Moderator
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