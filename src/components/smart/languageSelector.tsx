import { useState } from "react";

interface LanguageSelectorProps {
  setLanguage: (code: string) => void;
}

type Language = {
  code: string;
  lang: string;
};

const supportedLanguages = [
  { code: "LT", lang: "Lietuviu" },
  { code: "LV", lang: "Latviu" },
  { code: "EN", lang: "Anglu" },
];

export function LanguageSelector(props: LanguageSelectorProps) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="languageBar">
      <span className="menuChevron" onClick={() => setMenu((m) => !m)}>
        ^
      </span>
      {menu &&
        supportedLanguages.map((x: Language) => (
          <ol key={x.code} onClick={() => props.setLanguage(x.code)}>
            {x.lang}
          </ol>
        ))}
    </div>
  );
}
