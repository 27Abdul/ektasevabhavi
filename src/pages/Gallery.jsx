import ekta2 from "../assets/ekta/gallery (2).jpeg";
import ekta12 from "../assets/ekta/gallery (12).jpeg";
import ekta3 from "../assets/ekta/gallery (3).jpeg";
import ekta4 from "../assets/ekta/gallery (4).jpeg";
import ekta5 from "../assets/ekta/gallery (5).jpeg";
import ekta6 from "../assets/ekta/gallery (6).jpeg";
import ekta7 from "../assets/ekta/gallery (7).jpeg";
import ekta8 from "../assets/ekta/gallery (8).jpeg";
import ekta9 from "../assets/ekta/gallery (9).jpeg";
import ekta11 from "../assets/ekta/gallery (11).jpeg";
import ekta13 from "../assets/ekta/gallery (13).jpeg";
import ekta14 from "../assets/ekta/gallery (14).jpeg";
import ekta15 from "../assets/ekta/gallery (15).jpeg";
import ekta18 from "../assets/ekta/gallery (18).jpeg";
import ekta19 from "../assets/ekta/gallery (19).jpeg";
import ekta20 from "../assets/ekta/gallery (20).jpeg";
import ekta21 from "../assets/ekta/gallery (21).jpeg";
import ekta22 from "../assets/ekta/gallery (22).jpeg";
import ekta23 from "../assets/ekta/gallery (23).jpeg";
import ekta25 from "../assets/ekta/gallery (25).jpeg";
import ekta26 from "../assets/ekta/gallery (26).jpeg";
import ekta27 from "../assets/ekta/gallery (27).jpeg";
import ekta28 from "../assets/ekta/gallery (28).jpeg";
import ekta29 from "../assets/ekta/gallery (29).jpeg";
import ekta30 from "../assets/ekta/gallery (30).jpeg";

const images = [
  ekta2,
  ekta12,
  ekta3,
  ekta4,
  ekta5,
  ekta6,
  ekta7,
  ekta8,
  ekta9,
  ekta11,
  ekta13,
  ekta14,
  ekta15,
  ekta18,
  ekta19,
  ekta20,
  ekta21,
  ekta22,
  ekta23,
  ekta25,
  ekta26,
  ekta27,
  ekta28,
  ekta29,
  ekta30,
];

const Gallery = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-12">
        Our Work & Media Coverage
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <p className="text-white font-semibold text-lg">View Image</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
