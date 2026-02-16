const Contact = () => {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
        Contact Us
      </h1>

      <form className="bg-white shadow-lg rounded-xl p-8 space-y-6">
        <div>
          <label className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:outline-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            rows="4"
            className="w-full border rounded-lg px-4 py-2 focus:outline-blue-500"
            placeholder="Write your message"
          ></textarea>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
