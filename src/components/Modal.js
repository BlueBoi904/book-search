import React, {useState} from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Modal, Button } from "antd";

const Popup = props => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true)
      };
    
     const handleOk = e => {
        console.log(e);
        setVisible(false)
      };
    
      const handleCancel = e => {
        console.log(e);
        setVisible(false)
      };

        return (
          <div>
            <Button type="primary" onClick={showModal}>
              Open Modal
            </Button>
            <Modal
              title="Basic Modal"
              visible={visible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                src="http://books.google.com/books/content?id=39iYWTb6n6cC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                style={{ width: 200, height: 275 }}
              />
            </Modal>
          </div>
        );
}


 

export default Popup;