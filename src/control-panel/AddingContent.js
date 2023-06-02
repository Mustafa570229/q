import { useEffect, useState } from "react";
import { db } from '../firebase';
import { collection, deleteDoc, doc, onSnapshot, setDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import { Alert, Button, Form } from "react-bootstrap";
import { FaTrash } from 'react-icons/fa';
import "./AddingContent.css";

function AddingContent() {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(true);
  const [news, setNews] = useState([]);

  const [newCollection, setNewCollection] = useState('');
  const [CollectionNames, setCollectionNames] = useState([]);
  const [currentCollection, setCurrentCollection] = useState('');
  const [hasData, setHasData] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(false);
    if (newTitle !== '' && newContent !== '') {
      try {
        const date = new Date();
        await setDoc(
          doc(collection(db, newCollection), date.getTime().toString()),
          { title: newTitle, content: newContent, createdAt: serverTimestamp() }
        );
        if (!CollectionNames.some((coll) => coll.name === newCollection)) {
          await setDoc(
            doc(collection(db, 'collection-names'), date.getTime().toString()),
            { name: newCollection, createdAt: serverTimestamp() }
          );
        }

        setNewTitle('');
        setNewContent('');
        setLoading(true);
        setSuccess(false);
      } catch (error) {
        console.log('Adding failed');
      }
      setTimeout(() => setSuccess(true), 3000);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'collection-names'), (snapshot) => {
      setCollectionNames(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (currentCollection !== '') {
      const unsubscribe = onSnapshot(collection(db, currentCollection), (snapshot) => {
        setNews(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
      return () => unsubscribe();
    }
  }, [currentCollection]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, currentCollection, id));
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  const handleDeleteC = async (id, name) => {
    try {
      const collectionRef = collection(db, name);

      const querySnapshot = await getDocs(collectionRef);
      const hasData = querySnapshot.size > 0;
      setHasData(hasData);

      if (!hasData) {
        await deleteDoc(doc(db, 'collection-names', id));
      }
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  return (
    <div className="news-panel">
      <div className="news-upload-panel">

        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label className='adding-head-panel'>Enter collection</Form.Label>
            <Form.Control
              type='text'
              className="mb-5"
              placeholder='Collection Name'
              value={newCollection}
              onChange={(event) => setNewCollection(event.target.value)}
            />

            <Form.Label className='adding-head-panel'>Enter a new Title</Form.Label>
            {!newTitle && !loading && <Alert variant="danger">enter a title</Alert>}
            <Form.Control
              type='text'
              className="mb-5"
              placeholder='Title'
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
            />

            <Form.Label className='adding-head-panel'>Enter a new Content</Form.Label>
            {!newContent && !loading && <Alert variant="danger">enter a Content</Alert>}
            <Form.Control
              as="textarea"
              rows={3}
              placeholder='Content'
              value={newContent}
              onChange={(event) => setNewContent(event.target.value)}
            />
          </Form.Group>
          <div>
            <Button variant="primary" type='submit' className='mb-3'>
              Add to my web page
            </Button>
            {!success && <Alert variant="success">successfully</Alert>}
          </div>
        </Form>
      </div>

      <div className="panel-showing">

        {CollectionNames?.map((collection, index) => (
          <div key={index} className="collections-names">

            <span>{collection.name}</span>
            <span > {collection.createdAt?.toDate().toLocaleString()}</span>

            <span >
              <FaTrash onClick={() => handleDeleteC(collection.id, collection.name)} />
            </span>

          </div>
        ))}
        {hasData && <Alert variant="danger">
          Delete all data in collection.Then remove collection from list.</Alert>}



        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setCurrentCollection(e.target.value)}
        >
          <option >Select a Collection</option>
          {CollectionNames?.map((coll, index) => (
            <option key={index} value={coll.name}>
              {coll.name}
            </option>
          ))}
        </Form.Select>


        <div>
          {news.map((item, index) => (
            <div key={index} className='content-panel'>

              <span >{item.title}</span>
              <span > {item.createdAt?.toDate().toLocaleString()}</span>
              <span>
                <FaTrash onClick={() => handleDelete(item.id)} />
              </span>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AddingContent;