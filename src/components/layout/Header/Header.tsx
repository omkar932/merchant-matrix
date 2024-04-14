import Logo from "../../../logo.png";
import usericon from "../../../assets/user.png";
import "./Header.css";
const Header = () => {
  return (
    <header className="bg-positive fixed w-full py-4 z-20 shadow-lg shadow-gray-400">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <img
          src={Logo} // Replace with your logo file path
          alt="Logo"
          className="w-20 h-10"
        />
        {/* Navigation Menu */}
        <nav className="lg:flex lg:items-center group">
          <div className="text-white flex gap-3 items-center group-hover:text-secondary cursor-pointer transition-colors">
            <img
              src={usericon}
              className="h-fit group-hover:invert-[100%] transition-all"
              alt="home"
            />
            Your Profile
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
