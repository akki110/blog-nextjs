import { UsersIcon, MessageCircleMore } from "lucide-react";

const Dashboard = () => {
  const blogData = {
    totalBlogs: 12,
    icon: <UsersIcon className="w-6 h-6" />,
  };

  const commentData = {
    totalComments: 12,
    icon: <MessageCircleMore className="w-6 h-6" />,
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">
                {blogData.totalBlogs}
              </p>
            </div>
            <div className="bg-blue-100 rounded-full p-3">
              <span className="text-2xl">{blogData.icon}</span>
            </div>
          </div>
          <p className="text-sm text-green-600 mt-4">
            Blogs Added {blogData.totalBlogs}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Comments
              </p>
              <p className="text-3xl font-bold text-gray-800 mt-2">
                {commentData.totalComments}
              </p>
            </div>
            <div className="bg-green-100 rounded-full p-3">
              <span className="text-2xl">{commentData.icon}</span>
            </div>
          </div>
          <p className="text-sm text-green-600 mt-4">
            Comments Added {commentData.totalComments}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
