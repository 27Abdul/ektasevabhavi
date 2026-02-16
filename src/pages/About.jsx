const About = () => {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        About Us
      </h1>

      <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto">
        Ekata Bahuudeshiya Seva Bhavi Sanstha is a non-profit organization
        committed to uplifting underprivileged communities through education,
        healthcare, and social welfare programs.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To create equal opportunities and empower communities through
            sustainable development initiatives.
          </p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-600">
            A society where every individual has access to education,
            healthcare, and basic human rights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
