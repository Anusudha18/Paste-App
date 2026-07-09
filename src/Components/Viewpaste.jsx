import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ViewPaste() {
  const { id } = useParams();

  const pastes = useSelector((state) => state.paste.pastes);

  const paste = pastes.find((item) => item.id === id);

  if (!paste) {
    return (
      <div className="text-center text-2xl mt-10">
        Paste Not Found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 flex flex-col gap-5">

      <input
        type="text"
        value={paste.title}
        readOnly
        className="border rounded-lg p-3 text-black"
      />

      <textarea
        value={paste.content}
        readOnly
        rows={15}
        className="border rounded-lg p-3 text-black"
      />

      <p className="text-gray-400">
        Created At : {paste.createdAt}
      </p>

    </div>
  );
}

export default ViewPaste;
