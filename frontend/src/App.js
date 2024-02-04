import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

// API
const API_URL = process.env.API_URL || "http://127.0.0.1:5050";

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    // Axios call
    try {
      const result = await axios.get(`${API_URL}/new-image/${word}`);
      setImages([{ ...result.data, title: word }, ...images]);
    } catch (error) {
      console.log(error);
    }
    setWord("");
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id)); // Keep images where the image id !== delete image id
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container>
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i}>
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome></Welcome>
        )}
      </Container>
    </div>
  );
};

export default App;
