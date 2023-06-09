import React, { useEffect, useState, useRef } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Collapse from 'react-bootstrap/Collapse';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Showing = () => {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState('');
  const [open, setOpen] = useState(true);
  const listRef = useRef(null);
  const [name, setName] = useState('');

  useEffect(() => {
    const storedElement = localStorage.getItem('coll-name');
    if (storedElement) {
      setName(JSON.parse(storedElement));
    }
  }, []);

  useEffect(() => {
    const handleDelete = () => {
      localStorage.removeItem('name');
      setName('');
    };

    const fetchData = async () => {
      try {
        if (name !== '') {
          const querySnapshot = await getDocs(collection(db, name));
          const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setData(newData);
          handleDelete();
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };

    fetchData();
  }, [name]);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
    scrollToTop();
  };

  const selectedContent = data.find((item) => item.id === selectedItemId);

  const scrollToTop = () => {
    window.scrollTo({
      top: 117,
      behavior: 'smooth',
    });
  };

  const handleOutsideClick = ({ target }) => {
    if (listRef.current && !listRef.current.contains(target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="page">
      <div className="text">
        <h4 className="title">{selectedContent ? selectedContent.title : data[0]?.title}</h4>
        <pre className="pre">{selectedContent ? selectedContent.content : data[0]?.content}</pre>
      </div>
      <button
        className={!open ? 'btn1' : 'btn2'}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {!open ? <FaArrowLeft size={30} /> : <FaArrowRight size={30} />}
      </button>
      <Collapse in={open}>
        <div ref={listRef} className="list" id="example-collapse-text">
          <ul className="custom-scrollbar">
            {data.map((item) => (
              <li
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={selectedItemId === item.id ? 'selected' : ''}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
    </div>
  );
};

export default Showing;
