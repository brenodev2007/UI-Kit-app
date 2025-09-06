import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/button/Button";
import Card, {
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/cards/Cards";
import { BasicTable } from "../components/list/basicTable";
import { SimpleList, IconList } from "../components/list/simpleList";
import { Avatar } from "../components/extras/avatar";
import Loader from "../components/extras/loader";
import Tabs from "../components/nav/tabs";
import Breadcrumbs from "../components/nav/breadcrumbs";
import {
  FaUser,
  FaBell,
  FaCog,
  FaSearch,
  FaPlus,
  FaChartLine,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  // Sample data
  const tableHeaders = ["Product", "Price", "Stock", "Status"];
  const tableData = [
    ["Gaming Laptop", "$4,599.00", "12", "Available"],
    ["Wireless Mouse", "$129.90", "45", "Available"],
    ["Mechanical Keyboard", "$399.00", "8", "Available"],
    ['24" Monitor', "$899.00", "3", "Last units"],
    ["Bluetooth Headset", "$259.90", "0", "Out of stock"],
  ];

  const recentActivities = [
    "New order #1234 received",
    "User John Smith logged in",
    'Product 24" Monitor updated',
    "Payment confirmed for order #1234",
    "New comment on Gaming Laptop product",
  ];

  const statsData = [
    {
      title: "Total Sales",
      value: "$24,589.00",
      icon: <FaShoppingCart />,
      change: "+12%",
    },
    {
      title: "Active Users",
      value: "1,243",
      icon: <FaUser />,
      change: "+5%",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      icon: <FaChartLine />,
      change: "+0.8%",
    },
    {
      title: "Average Rating",
      value: "4.7/5",
      icon: <FaStar />,
      change: "+0.2",
    },
  ];

  const tabsData = [
    {
      id: "dashboard",
      label: "Dashboard",
      content: (
        <div className="space-y-6">
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {statsData.map((stat, index) => (
              <Card key={index} variant="outlined" className="text-center">
                <CardContent>
                  <div className="text-2xl mb-2 text-indigo-500">
                    {stat.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {stat.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <span className="text-sm text-emerald-500">
                    {stat.change}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Products Table */}
          <Card variant="outlined">
            <CardHeader>
              <h1 className="text-black font-bold">Featured Products</h1>
            </CardHeader>
            <CardContent>
              <BasicTable
                headers={tableHeaders}
                data={tableData}
                theme="elegant"
                striped={true}
                hoverEffect={true}
              />
            </CardContent>
          </Card>

          {/* Recent Activities and Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="outlined">
              <CardHeader>
                <h1 className="text-black font-bold">Recent Activities</h1>
              </CardHeader>
              <CardContent>
                <IconList
                  items={recentActivities}
                  icon={<FaBell className="w-3 h-3" />}
                  iconPosition="left"
                  iconColor="text-white"
                  iconBackground="bg-indigo-500"
                  spacing="gap-3"
                />
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardHeader>
                <h1 className="text-black font-bold">Quick Actions</h1>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="primary" className="w-full justify-center">
                    <FaPlus className="mr-2" />
                    <h1 className="font-bold"> New Product</h1>
                  </Button>
                  <Button variant="outline" className="w-full justify-center">
                    <FaChartLine className="mr-2 text-black" />
                    <h1 className="text-black">View Reports</h1>
                  </Button>
                  <Button variant="ghost" className="w-full justify-center">
                    <FaCog className="mr-2 text-gray-600" />
                    <h1 className="text-gray-600">Settings</h1>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "profile",
      label: "Profile",
      content: (
        <div className="space-y-6">
          <Card variant="outlined">
            <CardHeader>
              <h1 className="font-bold">User information</h1>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  name="John Smith"
                  size="lg"
                  rounded="full"
                />
                <div>
                  <h3 className="text-lg font-semibold">John Smith</h3>
                  <p className="text-gray-500">System Administrator</p>
                  <p className="text-gray-500">john.smith@company.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <h1 className="text-black font-bold">Preferences</h1>
            </CardHeader>
            <CardContent>
              <SimpleList
                items={[
                  "Email notifications",
                  "Dark theme",
                  "Language: English",
                  "Time zone: GMT-3",
                  "High contrast mode",
                ]}
                bullet="circle"
                bulletColor="text-black"
                spacing="gap-2"
              />
            </CardContent>
          </Card>
        </div>
      ),
    },
  ];

  const handleSimulateLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-indigo-600">
                Demo<span className="text-indigo-800">App</span>
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <button className="relative p-2 text-gray-600 hover:text-indigo-600">
                <FaBell />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>

              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                name="John Smith"
                size="md"
                rounded="full"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "#" },
            { label: "Dashboard", href: "#" },
          ]}
          homeIcon={true}
        />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">
              Welcome back, John! Here's your store summary.
            </p>
          </div>
          <Button variant="primary" onClick={handleSimulateLoad}>
            {loading ? (
              <Loader variant="spinner" size="sm" color="#ffffff" />
            ) : (
              "Refresh Data"
            )}
          </Button>
        </div>

        {/* Navigation Tabs */}
        <Tabs
          tabs={tabsData}
          defaultActiveTab="dashboard"
          variant="underline"
          size="md"
          className="mb-8"
        />

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center">
              <Loader variant="spinner" size="lg" color="#6366f1" />
              <p className="mt-4 text-gray-700">Loading data...</p>
            </div>
          </motion.div>
        )}

        {/* Simple Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">
              © 2024 DemoApp. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Support
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
