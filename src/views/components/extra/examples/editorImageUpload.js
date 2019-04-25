import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";

class ImageUpload extends Component {
   uploadImageCallBack = (file) => {
      return new Promise((resolve, reject) => {
         const xhr = new XMLHttpRequest();
         xhr.open("POST", "https://api.imgur.com/3/image");
         xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
         const data = new FormData();
         data.append("image", file);
         xhr.send(data);
         xhr.addEventListener("load", () => {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
         });
         xhr.addEventListener("error", () => {
            const error = JSON.parse(xhr.responseText);
            reject(error);
         });
      });
   }
   render() {
      return (
         <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            toolbar={{
               inline: { inDropdown: true },
               list: { inDropdown: true },
               textAlign: { inDropdown: true },
               link: { inDropdown: true },
               history: { inDropdown: true },
               image: {
                  uploadCallback: this.uploadImageCallBack,
                  alt: { present: true, mandatory: true }
               }
            }}
         />
      );
   }
}

export default ImageUpload;
