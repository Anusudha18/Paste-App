import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPaste, updatePaste } from "../redux/pasteSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("id");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = pastes.find((item) => item.id === pasteId);

      if (paste) {
        setTitle(paste.title);
        setContent(paste.content);
      }
    }
  }, [pasteId, pastes]);

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert("Please fill all fields");
      return;
    }

    if (pasteId) {
      dispatch(
        updatePaste({
          id: pasteId,
          title,
          content,
          createdAt: new Date().toLocaleString(),
        })
      );
    } else {
      dispatch(
        addPaste({
          id: Date.now().toString(),
          title,
          content,
          createdAt: new Date().toLocaleString(),
        })
      );
    }

    setTitle("");
    setContent("");

    setSearchParams({});

    navigate("/pastes");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 flex flex-col gap-5">

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-lg p-3 text-black"
      />

      <textarea
        rows="10"
        placeholder="Write your paste here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border rounded-lg p-3 text-black"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
      >
        {pasteId ? "Update Paste" : "Create Paste"}
      </button>

    </div>
  );
}

export default Home;