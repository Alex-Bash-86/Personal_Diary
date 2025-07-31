const ViewModal = ({ entry, onClose, onDelete }) => {
  return (
    <dialog open className="modal">
      <div className="modal-box">
        <h2 className="text-2xl font-bold mb-2">{entry.title}</h2>
        <p className="text-sm text-gray-500 mb-2">{entry.date}</p>
        <img
          src={entry.imageUrl}
          alt="entry"
          className="w-full h-48 object-cover mb-4"
        />
        <p>{entry.content}</p>

        <div className="modal-action flex flex-col gap-2">
          <button className="btn btn-error" onClick={() => onDelete(entry.id)}>
            Delete
          </button>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ViewModal;
