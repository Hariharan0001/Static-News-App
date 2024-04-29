import React, { useState, useEffect } from "react";
import Body from "./Body";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import value from "./Data"; // Assuming Data is a functional component
import "./index.css";

function App() {
  const [datas, setData] = useState([]);
  const [category, setCategory] = useState("sport");
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, [category,searchFilter]);

  async function fetchData() {
    let filteredData;
    try {
      if(category=='all'){
        filteredData=value;
      }
      else{
      filteredData = value.filter((data) =>
      data.category === category &&
      (data.title.toLowerCase().includes(searchFilter.toLowerCase()) || 
       data.content.toLowerCase().includes(searchFilter.toLowerCase()))
      );
    }
      setData(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function handlesetCategory(val) {
    setCategory(val);
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={12}>
          <Header setCategory={handlesetCategory} setSearchFilter={setSearchFilter}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Body val={datas} /> {/* Render Body if data is available */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;

