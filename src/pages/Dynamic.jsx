import { useParams } from "react-router";

function Dynamic() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold underline text-blue-600 mb-4">
          This is Dynamic Route
        </h1>

        <h2 className="text-xl font-semibold text-gray-700">
          Product Collection ID is:
          <span className="text-purple-600 ml-2">{id}</span>
        </h2>
      </div>
    </div>
  );
}

export default Dynamic;