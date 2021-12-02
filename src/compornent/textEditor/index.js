import React, { useEffect, useState } from "react";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import htmlToDraft from "html-to-draftjs";
const TextEditor = ({ label, setValue, fieldName , defaultValueProps }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setValue(
      fieldName,
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };
  function toHtml(es) {
    return draftToHtml(convertToRaw(es.getCurrentContent()))
  }
  useEffect(() => {
    if (toHtml(editorState) === defaultValueProps) return
    setEditorState(
      EditorState.push(
        editorState,
        ContentState.createFromBlockArray(
          htmlToDraft(defaultValueProps || ''),
        ),
      ),
    )
  }, [defaultValueProps])

  return (
    <div className="tw-mb-3">
      <label
        className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
        htmlfor="grid-password"
      >
        {label}
      </label>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        editorStyle={{
          border: `1px solid #40966a `,
          borderRadius: "5px",
          padding: "10px",
          minHeight: "200px",
        }}
        placeholder={"Nhập nội dung  ..."}
      />
    </div>
  );
};

export default TextEditor;
