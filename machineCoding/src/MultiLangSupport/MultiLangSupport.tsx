import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

export default function MultiLangSupport() {
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();

  const handleLangChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  return (
    <>
      <p>
        <label htmlFor="language" style={{ fontWeight: "bold" }}>
          Select a language :
        </label>
      </p>
      <select id="language" value={lang} onChange={handleLangChange}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="fr">French</option>
      </select>
      <div>
        <h4>{t("heading")}</h4>
        <p>{t("description")}</p>
      </div>
    </>
  );
}
