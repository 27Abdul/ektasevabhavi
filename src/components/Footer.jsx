
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
        {/* NGO Info */}
        <div className="flex-1">
          <h2 className="text-white text-lg font-semibold">
            Ekata Bahuudeshiya Seva Bhavi Sanstha
          </h2>
          <p className="mt-3 text-sm">
            Working towards community development and social upliftment.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-white font-medium mb-3">Contact</h3>
          <p className="text-sm">Email: sameerkhanpatel786@gmail.com</p>
          <p className="text-sm">Phone: +91 9657935720</p>
        </div>

        {/* Address */}
        <div className="flex-1">
          <h3 className="text-white font-medium mb-3">Address</h3>
          <p className="text-sm leading-relaxed">
            Ekata Bahuudeshiya Seva Bhavi Sanstha <br />
            Old Bus Stand <br />
            Taluka: Hadgaon <br />
            District: Nanded <br />
            Maharashtra, India - 431712
          </p>
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
