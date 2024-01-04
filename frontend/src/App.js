import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";

// UNSPLASH KEY TO MAKE REQUESTS
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);

    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`,
    )
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setImages([{ ...data, title: word }, ...images]); // Add new images at the start to show them at the top
      })
      .catch((error) => {
        console.log(error);
      });
    setWord("");
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id)); // Keep images where the image id !== delete image id
  };

  return (
    <div>
      <Header />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container>
        <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i}>
              <ImageCard image={image} deleteImage={handleDeleteImage} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
