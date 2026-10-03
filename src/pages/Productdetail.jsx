import { useParams, Link } from "react-router-dom";

function Productdetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="grid md:grid-cols-2 gap-8 p-8">

          {/* Mobile Image */}
          <div className="flex items-center justify-center bg-gray-50 rounded-2xl p-8">
            <img
              src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600"
              alt="Mobile Phone"
              className="w-72 h-80 object-contain rounded-xl"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            <p className="text-sm font-bold text-blue-600 uppercase mb-2">
              Premium Mobile
            </p>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Samsung Galaxy Smartphone
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-yellow-500 text-xl">
                ★★★★★
              </span>

              <span className="text-gray-500">
                4.8 (125 Reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-7 mb-6">
              Experience powerful performance, a beautiful display,
              professional camera quality and long-lasting battery
              with this premium smartphone.
            </p>

            {/* Price */}
            <div className="mb-6">

              <span className="text-3xl font-bold text-green-600">
                Rs. 89,999
              </span>

              <span className="ml-3 text-gray-400 line-through">
                Rs. 99,999
              </span>

            </div>

            {/* Specifications */}
            <div className="border-t border-gray-200 pt-5 mb-6">

              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Specifications
              </h2>

              <div className="grid grid-cols-2 gap-4 text-gray-700">

                <p>
                  <span className="font-bold">Brand:</span> Samsung
                </p>

                <p>
                  <span className="font-bold">RAM:</span> 8 GB
                </p>

                <p>
                  <span className="font-bold">Storage:</span> 256 GB
                </p>

                <p>
                  <span className="font-bold">Camera:</span> 50 MP
                </p>

                <p>
                  <span className="font-bold">Battery:</span> 5000 mAh
                </p>

                <p>
                  <span className="font-bold">Display:</span> 6.7 inch
                </p>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-4">

              <button
                className="flex-1 bg-blue-600 hover:bg-blue-700
                text-white font-bold py-3 rounded-xl
                transition duration-300"
              >
                Add to Cart
              </button>

              <button
                className="flex-1 bg-green-600 hover:bg-green-700
                text-white font-bold py-3 rounded-xl
                transition duration-300"
              >
                Buy Now
              </button>

            </div>

            {/* Back Button */}
            <Link
              to="/"
              className="text-center mt-5 text-blue-600
              hover:underline font-semibold"
            >
              ← Back to Home
            </Link>

          </div>

        </div>

        {/* Product ID */}
        <div className="bg-gray-900 text-white text-center py-4">

          <p className="text-lg">
            Product ID:
            <span className="font-bold text-yellow-400 ml-2">
              {id}
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Productdetail;