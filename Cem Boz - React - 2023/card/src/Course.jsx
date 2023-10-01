import React from "react";

/* export const Course = () => {
  return (
    <div>Course</div>
  )
} */
/*
 * Aşağıda yorum satırına alınarak bir çok yöntem mevcut.
 * Ayrıca onenote ekran görüntüleri mevcut.
 */
function Course({ image, title, description }) {
  //bu en profosyonel kullanıım.

  //const title =props.title;
  //const description =props.description;
  //const {title,description} = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="kurslarım" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>
        <div className="content">
          {description}
          <br />
        </div>
      </div>
    </div>
  );
}

export default Course;
