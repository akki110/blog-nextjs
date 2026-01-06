const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Users */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">1,234</p>
            </div>
            <div className="bg-blue-100 rounded-full p-3">
              <span className="text-2xl">👥</span>
            </div>
          </div>
          <p className="text-sm text-green-600 mt-4">↑ 12% from last month</p>
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">$45.2K</p>
            </div>
            <div className="bg-green-100 rounded-full p-3">
              <span className="text-2xl">💰</span>
            </div>
          </div>
          <p className="text-sm text-green-600 mt-4">↑ 8% from last month</p>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Orders</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">567</p>
            </div>
            <div className="bg-purple-100 rounded-full p-3">
              <span className="text-2xl">📦</span>
            </div>
          </div>
          <p className="text-sm text-red-600 mt-4">↓ 3% from last month</p>
        </div>

        {/* Active Sessions */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Active Sessions
              </p>
              <p className="text-3xl font-bold text-gray-800 mt-2">89</p>
            </div>
            <div className="bg-yellow-100 rounded-full p-3">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
          <p className="text-sm text-green-600 mt-4">↑ 5% from last hour</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 rounded-full p-2">
                <span>👤</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">New user registered</p>
                <p className="text-sm text-gray-600">john.doe@example.com</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">2 min ago</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 rounded-full p-2">
                <span>💳</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Payment received</p>
                <p className="text-sm text-gray-600">
                  $299.00 from Order #1234
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500">15 min ago</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 rounded-full p-2">
                <span>📧</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">New support ticket</p>
                <p className="text-sm text-gray-600">
                  Ticket #567 - Login issue
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500">1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
