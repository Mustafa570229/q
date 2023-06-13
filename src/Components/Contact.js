import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "../firebase";
import 'animate.css';
import "./Contact.css";

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send');
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (firstName !== "" && lastName !== "" && email !== "" && phone !== "" && message !== "") {
      try {
        const date = new Date();
        await setDoc(doc(collection(db, 'messages'), date.getTime().toString()), {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          email: email,
          message: message,
          createdAt: serverTimestamp()
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setLoading(true);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setButtonText('Sending...')
        setTimeout(() => setButtonText('Send'), 500);
      } catch (error) {
        console.log('Adding failed');
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="contact" id="connect">
      <Container>
        <Row>
          <Col size={12} md={12} className="px-1">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={firstName}
                placeholder="First Name"
                onChange={(event) => setFirstName(event.target.value)}
              />
              {!firstName && !loading && <Alert variant="danger">Enter your first name</Alert>}

              <input
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={(event) => setLastName(event.target.value)}
              />
              {!lastName && !loading && <Alert variant="danger">Enter your last name</Alert>}

              <input
                type="email"
                value={email}
                placeholder="Email Address"
                onChange={(event) => setEmail(event.target.value)}
              />
              {!email && !loading && <Alert variant="danger">Enter your email</Alert>}

              <input
                type="tel"
                value={phone}
                placeholder="Phone No."
                onChange={(event) => setPhone(event.target.value)}
              />
              {!phone && !loading && <Alert variant="danger">Enter your phone number</Alert>}

              <textarea
                rows="3"
                value={message}
                placeholder="Message"
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
              {!message && !loading && <Alert variant="danger">Enter your message</Alert>}

              <button type="submit">
                <span>{buttonText}</span>
              </button>

              {success && <Alert variant="success">Success sending</Alert>}
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
