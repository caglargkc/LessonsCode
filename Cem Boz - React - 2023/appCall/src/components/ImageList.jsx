import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceholder }) {
  debugger;
  return (
    <div className="imageList">
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
}
export default ImageList;
