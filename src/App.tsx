import "./App.css";
import { SimpleForm } from "./components/smarter/form";
import omsLogo from "./assets/omsLogo.svg";
import fsccLogo from "./assets/fsccLogo.svg";
import { useEffect, useState } from "react";
import { ReusableButton } from "./components/dumb/reusableButton";
import { useDictionary } from "./components/dictionary";
import { LanguageSelector } from "./components/smart/languageSelector";
import { useServices } from "./services.ts/service";

function App() {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );

  const [currentLang, setCurrentLang] = useState<string>("LT");
  const { translate } = useDictionary();

  useEffect(() => {
    localStorage.setItem("token", token ? token : "");
  }, [token]);

  const { loginCall, logoutCall } = useServices();

  async function submitForm(email: string, password: string): Promise<void> {
    console.log(email, password);
    const tok = await loginCall();
    setToken(tok);
  }

  async function logoffCall() {
    await logoutCall(token!);
    setToken("");
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
                  onClick={() => logoffCall()}
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
