'use client';
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
export default function InputRichText({ id, label }) {
    const editorRef = useRef(null);
    return (
        <div class="richtext-wrapper">
            <label htmlFor={id}>{label}</label>
            <Editor
                onInit={(evt, editor) => (editorRef.current = editor)}
                id={id}
                apiKey="jr29emxgaj2jlfq8pyn1sp6ovembx5mg9wuipy1qgwwy54mh"
                init={{
                    height: 500,
                    menubar: false,
                    plugins:
                        'link template codesample charmap anchor toc advlist lists checklist wordcount charmap linkchecker emoticons',
                    toolbar:
                        'formatselect | bold italic underline strikethrough | ' +
                        'link | alignleft aligncenter alignright alignjustify |' +
                        'numlist bullist | charmap emoticons | removeformat',
                }}
            />
        </div>
    );
}
