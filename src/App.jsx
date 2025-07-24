import { useState } from "react";
import Modal from "./components/Modal";
import Card from "./components/Card";

const App = () => {
  const [bla, setBla] = useState(
    JSON.parse(localStorage.getItem("bla")) || [
      {
        id: 1,
        title: "Title 0",
        date: new Date(),
        imageUrl: "url",
        content: "content0",
      },
      {
        id: 2,
        title: "Title 1",
        date: new Date(),
        imageUrl: "url",
        content: "Content1",
      },
    ]
  );

  //   const loadItems = () => {
  //   const items = JSON.parse(localStorage.getItem("todoItems")) || [];
  //   items.forEach((item) => {
  //     const li = createListItem(item);
  //     ul.appendChild(li);
  //   });
  // };
  // loadItems();

  return (
    <>
      <Modal />
      <Card bla={bla} />
      <div className="bla">
        {bla.map(({ imageUrl, title, date, content }, index) => (
          <Card
            key={index}
            imageUrl={imageUrl}
            title={title}
            date={date}
            content={content}
          />
        ))}
      </div>
    </>
  );
};

export default App;
