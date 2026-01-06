const Login = () => {
  return (
    <div className="w-full">
      {/* Login Card */}
      <div className="bg-gradient-to-br from-sky-100 to-purple-100 rounded-2xl shadow-xl p-8 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Mind Spill</h2>
          <p className="text-gray-600">Sign in to access the admin panel</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-surface focus:border-transparent outline-none transition-all"
              placeholder="admin@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-surface focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-surface cursor-pointer text-white font-bold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
