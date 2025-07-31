const Modal = ({ setEntry }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const imageUrl = document.getElementById("image").value;
    const content = document.getElementById("content").value;

    if (!title || !date || !imageUrl || !content) {
      alert("You need to fill in all fields.");
      return;
    }

    const existingEntries = JSON.parse(localStorage.getItem("entry")) || [];
    const isDuplicateDate = existingEntries.some(
      (entry) => entry.date === date
    );
    if (isDuplicateDate) {
      alert("There is already an entry for this date.");
      return;
    }

    const newEntry = {
      id: Date.now(),
      title,
      date,
      imageUrl,
      content,
    };

    setEntry((prev) => [newEntry, ...prev]);
    if (date) {
      console.log();
    }

    document.getElementById("modal").close();
  };

  const handleClose = (e) => {
    e.preventDefault();
    document.getElementById("modal").close();
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div className="flex justify-center">
        <button
          className="btn bg-blue-500 hover:bg-blue-400 mt-4"
          onClick={() => document.getElementById("modal").showModal()}
        >
          Add Entry
        </button>
      </div>
      <dialog id="modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Diary</h3>
          <p className="py-4 text-center">Write whatever you like</p>
          <div className="">
            <form>
              <label>Title:</label>
              <br />
              <input
                id="title"
                name="title"
                type="text"
                className="border p-2 w-full mb-4"
                placeholder="Enter title..."
              />
              <br />
              <label>Date:</label>
              <br />
              <input
                id="date"
                name="date"
                type="date"
                className="border"
                placeholder={new Date()}
                content={new Date()}
              />
              <br />
              <br />
              <label>Image:</label>
              <br />
              <input
                id="image"
                name="image"
                type="text"
                className="border"
                placeholder="image Url"
              />
              <br />
              <br />
              <label>Content:</label>
              <br />
              <textarea
                id="content"
                name="content"
                type="text"
                placeholder="Content here..."
                className="border"
              />
            </form>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded w-full mt-4"
            >
              Submit
            </button>
            <button onClick={handleClose} className="btn w-full mt-2">
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
