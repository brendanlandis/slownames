'use client';
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
export default function InputRichText({ id, label, height, labeldisplay }) {
    const editorRef = useRef(null);
    return (
        <div>
            <label className={labeldisplay ? '' : 'hidden'} htmlFor={id}>{label}</label>
            <div className={'richtext-wrapper height-' + height}>
                <Editor
                    // @ts-ignore
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    id={id}
                    apiKey="jr29emxgaj2jlfq8pyn1sp6ovembx5mg9wuipy1qgwwy54mh"
                    init={{
                        height: height,
                        menubar: false,
                        placeholder: label,
                        plugins:
                            'link codesample charmap anchor advlist lists wordcount charmap emoticons',
                        toolbar:
                            'formatselect | bold italic underline strikethrough | ' +
                            'link | alignleft aligncenter alignright |' +
                            'numlist bullist | charmap emoticons | removeformat',
                    }}
                />
            </div>
        </div>
    );
}
