import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removePaste } from "../redux/pasteSlice";

function Paste() {
  const pastes = useSelector((state) => state.paste.pastes);

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPastes = useMemo(() => {
    return pastes.filter((paste) =>
      paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [pastes, searchTerm]);

  const handleDelete = (id) => {
    dispatch(removePaste(id));
  };

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    alert("Copied Successfully");
  };

  return (
    <div className="max-w-5xl mx-auto mt-10">

      <input
        type="text"
        placeholder="Search Paste..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border rounded-lg p-3 mb-6 text-black"
      />

      <div className="space-y-5">

        {filteredPastes.length === 0 ? (
          <h2 className="text-center text-xl">
            No Pastes Found
          </h2>
        ) : (
          filteredPastes.map((paste) => (
            <div
              key={paste.id}
              className="border rounded-xl p-5 bg-gray-800"
            >
              <h2 className="text-2xl font-bold">
                {paste.title}
              </h2>

              <p className="mt-3 whitespace-pre-wrap">
                {paste.content.length > 150
                  ? paste.content.slice(0, 150) + "..."
                  : paste.content}
              </p>

              <p className="mt-3 text-sm text-gray-400">
                {paste.createdAt}
              </p>

              <div className="flex gap-3 mt-5 flex-wrap">

                <Link
                  to={`/?id=${paste.id}`}
                  className="bg-yellow-500 px-4 py-2 rounded"
                >
                  Edit
                </Link>

                <Link
                  to={`/pastes/${paste.id}`}
                  className="bg-green-600 px-4 py-2 rounded"
                >
                  View
                </Link>

                <button
                  onClick={() => handleCopy(paste.content)}
                  className="bg-blue-600 px-4 py-2 rounded"
                >
                  Copy
                </button>

                <button
                  onClick={() => handleDelete(paste.id)}
                  className="bg-red-600 px-4 py-2 rounded"
                >
                  Delete
                </button>

              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Paste;