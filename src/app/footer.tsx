const Footer = () => {
    return (
      <footer className="bg-gray-50 py-10">
        {/* Footer Grid */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 
            className="text-2xl font-semibold text-gray-700 mb-4"> <span className="text-teal-500 w-20 h-10"></span><img src="logo.png" alt="comfortylogo" />Comforty </h2>
            <p className="text-gray-500 mb-4">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
  
          {/* Category */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Category</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-teal-500">Sofa</a></li>
              <li><a href="#" className="hover:text-teal-500">Armchair</a></li>
              <li><a href="#" className="hover:text-teal-500">Wing Chair</a></li>
              <li><a href="#" className="hover:text-teal-500">Desk Chair</a></li>
              <li><a href="#" className="hover:text-teal-500">Wooden Chair</a></li>
              <li><a href="#" className="hover:text-teal-500">Park Bench</a></li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Support</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-teal-500">Help & Support</a></li>
              <li><a href="#" className="hover:text-teal-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-teal-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-500">Help</a></li>
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Newsletter</h3>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded focus:outline-none"
              />
            </div>
            <button className="w-full md:w-auto bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
              Subscribe
            </button>
            <p className="text-gray-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t mt-8">
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm text-center md:text-left">
            <p> 2021 - Blogy - Designed & Developed by ASIM SHAH</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-2 md:mt-0 font-semibold">
              <span>PayPal</span>
              <span>MasterCard</span>
              <span>VISA</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  