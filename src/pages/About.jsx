import j1 from "../assets/journey/j (1).jpeg";
import j2 from "../assets/journey/j (2).jpeg";
import j3 from "../assets/journey/j (3).jpeg";
import j4 from "../assets/journey/j (4).jpeg";
import j5 from "../assets/journey/j (5).jpeg";
import j6 from "../assets/journey/j (6).jpeg";
import j7 from "../assets/journey/j (7).jpeg";
import j8 from "../assets/journey/j (8).jpeg";
import j9 from "../assets/journey/j (9).jpeg";
import j10 from "../assets/journey/j (10).jpeg";
import j11 from "../assets/journey/j (11).jpeg";
import j12 from "../assets/journey/j (12).jpeg";
import j13 from "../assets/journey/j (13).jpeg";
import j14 from "../assets/journey/j (14).jpeg";
import j15 from "../assets/journey/j (15).jpeg";
import j16 from "../assets/journey/j (16).jpeg";
import j17 from "../assets/journey/j (17).jpeg";
import j18 from "../assets/journey/j (18).jpeg";
import j19 from "../assets/journey/j (19).jpeg";
import j20 from "../assets/journey/j (20).jpeg";
import j21 from "../assets/journey/j (21).jpeg";
import j22 from "../assets/journey/j (22).jpeg";
import j23 from "../assets/journey/j (23).jpeg";
import j24 from "../assets/journey/j (24).jpeg";
import j25 from "../assets/journey/j (25).jpeg";
import j26 from "../assets/journey/j (26).jpeg";
import j27 from "../assets/journey/j (27).jpeg";

const About = () => {
  const journeyImages = [
    j1,
    j2,
    j3,
    j4,
    j5,
    j6,
    j7,
    j8,
    j9,
    j10,
    j11,
    j12,
    j13,
    j14,
    j15,
    j16,
    j17,
    j18,
    j19,
    j20,
    j21,
    j22,
    j23,
    j24,
    j25,
    j26,
    j27,
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          About Ekata Bahuudeshiya Seva Bhavi Sanstha
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          Dedicated to serving humanity and building stronger communities
          through compassion, unity, and action.
        </p>
      </section>

      {/* Story Section */}
      {/* <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src={aboutImg}
          alt="NGO Work"
          className="rounded-xl shadow-lg w-full h-80 object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Journey</h2>
          <p className="text-gray-600 mb-4">
            Ekata Bahuudeshiya Seva Bhavi Sanstha was established with the
            vision of creating positive change in society. We work tirelessly to
            support underprivileged families, educate children, and provide
            healthcare assistance in rural areas.
          </p>
          <p className="text-gray-600">
            Through dedication and collective effort, we continue to expand our
            reach and create meaningful impact.
          </p>
        </div>
      </section> */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">
          Our Journey in Action
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {journeyImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={img}
                alt={`Journey ${index + 1}`}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white font-semibold">Ekata Seva Activity</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To empower communities by providing access to education,
              healthcare, and essential resources while promoting unity and
              sustainable development.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              A society where every individual has equal opportunities, dignity,
              and access to basic human rights.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-12">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Compassion
            </h3>
            <p className="text-gray-600">
              We believe in serving humanity with empathy and kindness.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Integrity
            </h3>
            <p className="text-gray-600">
              Transparency and accountability guide all our actions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Unity</h3>
            <p className="text-gray-600">
              We work together with communities to achieve sustainable change.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Impact So Far</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p>Children Supported</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">1000+</h3>
            <p>Meals Distributed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p>Health Camps</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">200+</h3>
            <p>Volunteers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
