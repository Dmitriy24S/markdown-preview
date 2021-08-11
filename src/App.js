import React, { useState } from "react";
import marked from "marked";
import DOMPurify from "dompurify";
import initialTextState from "./initial-text-state";

function App() {
  const [templateText, setTemplateText] = useState(initialTextState);
  const markdown = marked(templateText, { breaks: true });
  const handleChange = (e) => {
    setTemplateText(e.target.value);
  };

  // Marked does not sanitize the output HTML
  // DOMPurify to sanitize :

  // const cleanText = DOMPurify.sanitize(templateText);
  // const markdown = marked(cleanText, { breaks: true });

  return (
    <div className="App container">
      <h4 className="m-4">Markdown Preview</h4>
      <div className="row">
        <div className="col-6">
          <h6>Markdown:</h6>
          <textarea
            className="form-control p-2"
            id="editor"
            value={templateText}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-6">
          <h6>Preview:</h6>
          <div
            className="preview rounded p-2 text-black text-left"
            id="preview"
            dangerouslySetInnerHTML={{ __html: markdown }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
