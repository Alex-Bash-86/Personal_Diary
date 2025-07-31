import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Card from "./components/Card";
import ViewModal from "./components/ViewModal"; // hinzufügen

const App = () => {
  const [entry, setEntry] = useState(
    JSON.parse(localStorage.getItem("entry")) || []
  );
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    localStorage.setItem("entry", JSON.stringify(entry));
  }, [entry]);

  const handleDelete = (id) => {
    setEntry((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Modal setEntry={setEntry} />
      {selectedEntry && (
        <ViewModal
          entry={selectedEntry}
          onClose={() => setSelectedEntry(null)}
          onDelete={(id) => {
            handleDelete(id);
            setSelectedEntry(null);
          }}
        />
      )}
      <div className="entry">
        {entry.map(({ id, imageUrl, title, date, content }) => (
          <Card
            key={id}
            id={id}
            imageUrl={imageUrl}
            title={title}
            date={date}
            content={content}
            onDelete={handleDelete}
            onClick={() =>
              setSelectedEntry({ id, imageUrl, title, date, content })
            }
          />
        ))}
      </div>
    </>
  );
};

export default App;
