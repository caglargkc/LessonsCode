import './App.css';

function App() {
  const nameSurname = 'Can Boz';
  const students = 43000;
  const dogruMu = false;
  const date = 'date';
  const url = 'https://picsum.photos/250/250';
  return (
    // <div>
    //   <h1>İsim Soyisim : {nameSurname}</h1>
    //   <p>Öğrenci sayısı : {students}</p>
    //   <p>Doğru mu : {dogruMu}</p>
    //   <input type="text" />

    //   {dogruMu ? <p>Öğrenci sayısı</p> : <p>Kurs sayısı</p>}

    //   <input type={date} />
    //   <img src={url} alt="" />
    // </div>
    <div
      style={{
        width: '250px',
        height: '250px',
        backgroundColor: 'blue',
        fontSize: '30px',
      }}
    ></div>
  );
}

export default App;
