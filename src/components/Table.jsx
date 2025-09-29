import Languages from "./languages";
import Button from "./Button";
import { useState } from "react";

function Table() {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    return (
        <div className="pt-5">
            <div className="d-flex gap-3">
                {Languages.map((language) => (
                    <Button
                        key={language.id}
                        langname={language.title}
                        update={() => setSelectedLanguage(language)}
                        className={selectedLanguage?.title === language.title ? "btn-warning" : ""}
                    />
                ))}
            </div>

            {selectedLanguage?.title && (
                <div className="mt-5 py-4 px-4 border radius-4 rounded">
                    <h3>{selectedLanguage.title}</h3>
                    <p>{selectedLanguage.description}</p>
                </div>
            )}
        </div>
    );
}
export default Table;
