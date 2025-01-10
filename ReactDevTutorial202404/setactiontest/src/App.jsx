import React, { useState } from 'react';

function App() {
  const [actionSubmit, setActionSubmit] = useState(false);
  const [actionSuccess, setActionSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setActionSubmit(true);
    setActionSuccess(false); // Başlangıçta başarıyı false yap

    // Simüle edilmiş bir API çağrısı
    setTimeout(() => {
      setActionSubmit(false); // İşlem tamamlandığında submit durumunu false yap
      setActionSuccess(true); // İşlem başarılı olduğunda başarı durumunu true yap
    }, 2000);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Form Submit Example</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit" disabled={actionSubmit}>
          {actionSubmit ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {actionSuccess && <p style={{ color: 'green' }}>Action was successful!</p>}
    </div>
  );
}

export default App;
