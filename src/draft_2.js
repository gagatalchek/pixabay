import { useEffect, useState } from "react";

// инпут на хендл чендж
const App = () => {
  const [name, setName] = useState("flower");

  const handleChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  };

  //  use effect на тот же хендл
  useEffect(() => {
    console.log("Наше значение инпута :", name);
  }, [name]);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div>
          <DefaultInput handleChangeName={handleChangeName} />
        </div>
      </div>
    </div>
  );
};
