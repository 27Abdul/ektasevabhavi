const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-white text-lg font-semibold">
            Ekata Bahuudeshiya Seva Bhavi Sanstha
          </h2>
          <p className="mt-3 text-sm">
            Working towards community development and social upliftment.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">Contact</h3>
          <p className="text-sm">Email: sameerkhanpatel786@gmail.com</p>
          <p className="text-sm">Phone: +91 9657935720</p>
        </div>
      </div>

      <div className="text-center text-sm py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Ekata Bahuudeshiya Seva Bhavi Sanstha. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
