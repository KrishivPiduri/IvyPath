export default function () {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Welcome to Your Dashboard</h1>
            <p className="text-lg mb-4">Here you can manage your profile and settings.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Go to Settings
            </button>
        </div>
    )
}