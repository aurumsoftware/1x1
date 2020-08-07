import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './styles.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const RichText: React.FC<Props> = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [
        'bold',
        'italic',
        'underline',
        'strike',
        { list: 'ordered' },
        { list: 'bullet' },
        'blockquote',
        'link',
        'image',
        'video',
      ],
    ],
  };

  const formats = ['bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'blockquote', 'link', 'image', 'video'];

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
      style={{ border: 0 }}
    />
  );
};

export default RichText;
