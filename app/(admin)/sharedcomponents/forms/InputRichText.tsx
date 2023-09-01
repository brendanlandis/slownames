'use client';
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import TurndownService from 'turndown';

const turndownService = new TurndownService();

const convertHtmlToMarkdown = (html) => {
    return turndownService.turndown(html);
}

export default function InputRichText({
    id,
    label,
    name,
    height,
    labeldisplay,
    updateRichTextContent,
}) {
    const editorRef = useRef(null);

    const handleEditorChange = (content) => {
        const markdownContent = convertHtmlToMarkdown(content);
        document.getElementById(name)?.setAttribute('value', markdownContent);
        updateRichTextContent(markdownContent);
    };

    return (
        <div>
            <label className={labeldisplay ? '' : 'hidden'} htmlFor={id}>
                {label}
            </label>
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
                    onEditorChange={handleEditorChange}
                />
            </div>
            <textarea id={name} name={name} className="hidden" />
        </div>
    );
}
