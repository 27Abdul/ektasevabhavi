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
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Support Our Mission
        </button>
      </section>

      {/* Our Initiatives Section */}
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
