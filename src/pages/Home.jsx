import { Link } from "react-router-dom";
import ekta10 from "../assets/ekta/gallery (10).jpeg";
import ekta32 from "../assets/ekta/gallery (32).jpg";
import ekta24 from "../assets/ekta/gallery (24).jpeg";

const Home = () => {
  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Empowering Communities, Transforming Lives
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          Ekata Bahuudeshiya Seva Bhavi Sanstha works towards education,
          healthcare, and social welfare to build a stronger and united society.
        </p>
        <Link to="/contact">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Support Our Mission
          </button>
        </Link>
      </section>

      {/* Our Initiatives Section */}
      {/* Our Work Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700">
            Our Work in Action
          </h2>
          <p className="text-gray-600 mt-4">
            A glimpse of our activities and media coverage.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <img
            src={ekta10}
            alt="NGO Activity"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />

          <img
            src={ekta32}
            alt="Food Distribution"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />

          <img
            src={ekta24}
            alt="Media Coverage"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
        </div>

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View More
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700">
            Our Key Initiatives
          </h2>
          <p className="text-gray-600 mt-4">
            We focus on meaningful programs that create real impact.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              alt="Education Support"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Education Support
              </h3>
              <p className="text-gray-600">
                Providing educational materials, scholarships, and mentoring
                programs for underprivileged children.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
              alt="Food Distribution"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Food Distribution
              </h3>
              <p className="text-gray-600">
                Organizing food drives and distributing essential supplies to
                families in need.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309"
              alt="Healthcare Camps"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Healthcare Camps
              </h3>
              <p className="text-gray-600">
                Conducting free medical camps and awareness programs for rural
                and underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-blue-600 py-16 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Impact</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="mt-2">Children Supported</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">1000+</h3>
            <p className="mt-2">Meals Distributed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="mt-2">Health Camps</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">200+</h3>
            <p className="mt-2">Volunteers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
