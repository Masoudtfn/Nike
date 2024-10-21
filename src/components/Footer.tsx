import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">NIKE</h1>
          <p className="text-gray-400">Innovation and inspiration for every athlete. Just Do It.</p>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg">Shop</h2>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="#">Men&apos;s Shoes</a>
            </li>
            <li>
              <a href="#">Women&apos;s Shoes</a>
            </li>
            <li>
              <a href="#">Kids&apos; Shoes</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg">Support</h2>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="#">Customer Service</a>
            </li>
            <li>
              <a href="#">Size Guide</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Follow Us</h2>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Nike, Inc. All Rights Reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="hover:text-white">
            {" "}
            Terms of Service
          </a>{" "}
          |
          <a href="#" className="hover:text-white">
            {" "}
            Legal
          </a>
        </p>
      </div>
    </footer>
  );
}
