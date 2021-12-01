import React, { useState } from "react";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { useHistory } from "react-router";
import { NewsService } from "../../../../service/news";
const CreateNews = () => {
  const history = useHistory();
  const [valuesInput, setValuesInput] = useState("");
  console.log(valuesInput);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setValuesInput(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  const handleSubmit = async () => {
    const newData = {
      name: "BAI VIET 1",
      description: valuesInput,
    };
    const res = await NewsService.createNews(newData);
  };
  return (
    <div>
      <div className="tw-rounded-t tw-bg-white tw-mb-0 tw-py-6 ">
        <div className="tw-text-center tw-flex tw-justify-between">
          <span className="tw-uppercase tw-text-2xl">Tạo mới bài viết</span>
          <button
            className="tw-bg-green-600 tw-text-white active:tw-bg-pink-600 tw-font-bold tw-uppercase tw-text-xs tw-px-4 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-md tw-outline-none focus:tw-outline-none tw-mr-1 tw-ease-linear tw-transition-all tw-duration-150"
            type="button"
            onClick={() => {
              history.push("/admin/buses");
            }}
          >
            Quay lại
          </button>
        </div>
      </div>
      <div className="tw-mb-2">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
            editorStyle={{
              border: `1px solid #ea5455 `,
              borderRadius: "5px",
              padding: "10px",
              minHeight: "200px",
            }}
          />
      </div>
      <footer className="">
        <div className="container tw-mx-auto tw-px-4">
          <div className="tw-flex tw-flex-wrap tw-items-center md:tw-justify-end tw-justify-center tw-mb-10 tw-gap-5">
            <button
              type="submit"
              onClick={()=> handleSubmit()}
              className="sm:tw-w-full md:tw-w-full lg:tw-w-[200px] tw-bg-green-600 tw-transform tw-p-3 tw-text-white tw-text-md hover:tw-bg-gray-800 tw-font-bold tw-rounded-lg"
            >
              Tạo mới
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreateNews;
