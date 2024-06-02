import React, { useState } from 'react';
import RichTextEditor from "react-rte";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
const Editor = () => {
      const [editorState, setEditorState] = useState(RichTextEditor.createEmptyValue());
      const navigate = useNavigate();
      const onChange = (value) => {
          setEditorState(value);
          console.log(editorState.toString('html'));
      }

      const convertToBase64 = (str) => {
        const bytes = new TextEncoder().encode(str);
          let binary = '';
          for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          // const encodedString = btoa(unescape(encodeURIComponent(myString)));
          return btoa(binary);
      }

      const createURL = () => {
        // convert the editorState.toString('html') to base64 encoding string
        // and then create a URL with that string
        console.log(convertToBase64(editorState.toString('html')));
        navigate("/" + convertToBase64(editorState.toString('html')));
      }
      return <div>
         <RichTextEditor value={editorState} onChange={onChange}></RichTextEditor>
         <Button variant="contained" color="primary" onClick={createURL}>Create URL</Button>
      </div>;
}
export default Editor
