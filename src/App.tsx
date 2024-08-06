import "./App.css";
import { SimpleForm } from "./components/smart/form";
import omsLogo from "./assets/omsLogo.svg";
// import background from "./assets/background.svg";
import fsccLogo from "./assets/fsccLogo.svg";
import { useEffect, useState } from "react";
import { ReusableButton } from "./components/dumb/reusableButton";

function App() {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );

  useEffect(() => {
    localStorage.setItem("token", token ? token : "");
  }, [token]);

  async function submitForm(email: string, password: string): Promise<void> {
    console.log(email, password);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const rnd = Math.floor(Math.random() * 10);
    setToken(data[rnd].username);
  }

  return (
    <>
      <div className="screenDivider">
        <div className="backgroundContainer">
          {/* <img src={background} /> */}
        </div>
        <div className="mainContent">
          <div>
            <img src={omsLogo} />
          </div>
          <div className="formContainer">
            {token ? (
              <>
                <div className="m-3">
                  <span className="bold">El. pastas:</span>
                  <span>{token}</span>
                </div>
                <ReusableButton onClick={() => setToken("")}>
                  Atsijungti
                </ReusableButton>
              </>
            ) : (
              <SimpleForm
                onSubmit={(email, password) => submitForm(email, password)}
              />
            )}
          </div>
          <div className="footer">
            <img src={fsccLogo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
