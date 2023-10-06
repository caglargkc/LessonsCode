
import SearchHeader from "./SearchHeader.jsx"
import "./App.css";
import searchImages from './api'
import ImageList from "./components/ImageList.jsx";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    debugger;
    const result = await searchImages(term);
    setImages(result);
    
  }

  return (
    <>
      <div className="App">
        <SearchHeader search={handleSubmit}/>
        <ImageList imagesPlaceholder={images} />
      </div>
    </>
  );
}

export default App;
