import "./App.css";
import { SimpleForm } from "./components/smarter/form";
import omsLogo from "./assets/omsLogo.svg";
import fsccLogo from "./assets/fsccLogo.svg";
import { useEffect, useState } from "react";
import { ReusableButton } from "./components/dumb/reusableButton";
import { useDictionary } from "./components/dictionary";
import { LanguageSelector } from "./components/smart/languageSelector";

function App() {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );

  const [currentLang, setCurrentLang] = useState<string>("LT");
  const { translate } = useDictionary();

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
        <div className="backgroundContainer" />
        <div className="mainContent">
          <LanguageSelector setLanguage={setCurrentLang} />
          <div>
            <img src={omsLogo} />
          </div>
          <h3>{translate(currentLang, "Greetings")}</h3>
          <div className="formContainer">
            {token ? (
              <>
                <div>
                  <span className="bold">El. pastas: </span>
                  <span>{token}</span>
                </div>
                <ReusableButton
                  className="primary"
                  onClick={() => setToken("")}
                >
                  Logout
                </ReusableButton>
              </>
            ) : (
              <SimpleForm
                onSubmit={(email, password) => submitForm(email, password)}
              />
            )}
          </div>
          <div className="m-3">
            <img src={fsccLogo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
