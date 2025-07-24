const Modal = () => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("modal").showModal()}
      >
        Add Entry
      </button>
      <dialog id="modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Diary</h3>
          <p className="py-4 text-center">Write whatever you like</p>
          <div className="">
            <form>
              <label>Title: </label>
              <br />
              <input
                id="title"
                name="title"
                type="text"
                className="border p-2 w-full mb-4"
                placeholder="Enter title..."
              />
              <br />
              <label>Date: </label>
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
              <label>Image</label>
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
              <button className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded w-full mt-4">
                Submit
              </button>
              <button className="btn w-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
