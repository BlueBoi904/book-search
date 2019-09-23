import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal } from "antd";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  const [visible, setVisible] = useState(false);
  const [popupData, setPopupData] = useState({});

  const showModal = bookData => {
    setVisible(true);
    if (bookData.volumeInfo.imageLinks.thumbnail) {
      setPopupData({
        image: bookData.volumeInfo.imageLinks.thumbnail,
      });
    }
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const book = books.map(item => (
    <BookCard key={item.etag} book={item} showModal={showModal} />
  ));
  return (
    <div>
      <div className="book-list">{book}</div>
      <Modal
        title={popupData.title}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          src={popupData.image}
          style={{ width: 200, height: 275 }}
        />
      </Modal>
    </div>
  );
};

export default BookList;
