import Angular from "/images/angular.jpg";
import Bootstrap from "/images/bootstrap5.png";
import Ccsharp from "/images/ccsharp.png";
import KompleWeb from "/images/kompleweb.jpg";
import "./Course.css"

const courseMap = {
    /* Angular: Angular,
    Bootstrap: Bootstrap,
    Ccsharp: Ccsharp,
    KompleWeb: KompleWeb, */
    // Yukarıdaki yapı genel olarak kullanamabilir. Ancak daha kısa yöntem
    //var. Eğer import isimleri ile dizi elman isimleri aynı ise sadece 
    //tek isim ile atama yapılabilinir.
    Angular,
    Bootstrap,
    Ccsharp,
    KompleWeb,
}

function Course({courseName}) {
  return (
    <>
      <div className="courseDiv">
        <img className='course' src={courseMap[courseName]} alt="" />
      </div>
    </>
  );
}

export default Course;
