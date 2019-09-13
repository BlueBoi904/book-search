import React, {useState} from 'react';
import BookCard from './BookCard';
import "antd/dist/antd.css";
import { Modal} from "antd";




const BookList = ({books}) => {
    const [visible, setVisible] = useState(false);
    const [popupData, setPopupData] = useState({});

    const showModal = (bookData) => {
        setVisible(true)
        setPopupData({
            image: bookData.volumeInfo.imageLinks.smallThumbnail,
            title: bookData.volumeInfo.title
        })
      };
    
     const handleOk = e => {
        setVisible(false)
      };
    
      const handleCancel = e => {
        setVisible(false)
      };

    const book = books.map((book) => {

         return <BookCard key={book.etag} book={book} showModal={showModal}/>
        })


    return (
        
        <div className='book-list'>
            <div>
            {book}
            </div>
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
    )
}

export default BookList;
