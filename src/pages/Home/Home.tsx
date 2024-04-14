import React from "react";
import "./Home.css"; // Import your CSS file

const HomePage = () => {
  return (
    <div className="relative flex flex-col justify-center items-center px-12">
      {/* Header */}
      <header className="text-center my-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Merchant Matrix</h1>
        <p className="text-gray-600 text-lg">
          Your all-in-one solution for managing your store efficiently.
        </p>
      </header>

      {/* Features Section */}
      <section className="mb-16 features">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-backgroundPrimary rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-textPrimary">
              Inventory Management
            </h3>
            <p className="text-gray-600">
              Effortlessly manage your inventory, track stock levels, and
              receive low stock alerts.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-backgroundPrimary rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-textPrimary">
              Order Tracking
            </h3>
            <p className="text-gray-600">
              Track orders from placement to delivery, and provide real-time
              updates to your customers.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-backgroundPrimary rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-textPrimary">
              Customer Management
            </h3>
            <p className="text-gray-600">
              Easily manage customer profiles, track purchase history, and send
              personalized offers.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16 benefits">
        <h2 className="text-2xl font-bold mb-4">Benefits</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-600">
            Streamline your operations and save time.
          </li>
          <li className="text-gray-600">
            Improve customer satisfaction with efficient service.
          </li>
          <li className="text-gray-600">
            Increase sales and revenue with targeted marketing strategies.
          </li>
          <li className="text-gray-600">
            Stay organized and in control of your business.
          </li>
        </ul>
      </section>

      {/* User Image */}
      <img
        src="https://img.freepik.com/premium-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503791.jpg"
        alt="User Cartoon"
        className="fixed bottom-0 max-md:hidden right-20 h-32"
      />
    </div>
  );
};

export default HomePage;
