'use client';
import React, { useRef } from 'react';
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function news() {
    const editorRef = useRef(null);
    const [startDate, setStartDate] = useState(new Date());

    return (
        <main id="news" className="container mx-auto prose">
            <div className="form-header">
                <h1>
                    News for
                    <label htmlFor="news-form-band">
                        what band is this for?
                    </label>
                    <select className="">
                        <option selected>Star Card</option>
                        <option>Soundgarden</option>
                        <option>Receive</option>
                        <option>Alice in Chains</option>
                    </select>
                </h1>
                <div className="new-or-old">
                    <div className="new-stuff">
                        write new
                        <br />
                        stuff
                    </div>
                    <input
                        type="checkbox"
                        id="new-or-old-toggle"
                        // defaultChecked
                    />

                    <div className="old-stuff">
                        fuck around
                        <br />
                        with old stuff
                    </div>
                </div>
            </div>

            <form id="news-form">
                <div className="news-form-row headline-date">
                    <div className="news-form-input">
                        <label htmlFor="news-form-headline">headline</label>
                        <input
                            type="text"
                            id="news-form-headline"
                            className="form-input"
                            placeholder="headline"
                        />
                    </div>

                    <div className="news-form-input">
                        <label htmlFor="news-form-date">date</label>
                        <DatePicker
                            selected={startDate}
                            id="news-form-date"
                            onChange={(date) => setStartDate(date)}
                        />
                    </div>
                </div>

                <div className="news-form-input">
                    <label htmlFor="news-form-text">text</label>
                    <Editor
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        id="news-form-text"
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

                <div className="news-form-input attachments-wrapper">
                    <label htmlFor="news-form-attachments">
                        You can attach something to this post (like a PDF, or a
                        ZIP file or something), and it'll be linked to at the
                        bottom of the post. Mostly for nerd stuff - scores, max
                        / puredata / vcv patches, MIDI files, MOD files, idk!
                    </label>
                    <input
                        type="file"
                        id="news-form-attachments"
                        className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                    />
                    <label htmlFor="news-form-attachment-link-text">
                        link text
                    </label>
                    <input
                        type="text"
                        id="news-form-attachment-link-text"
                        className="form-input"
                        placeholder="link text (e.g. check out this score)"
                    />
                </div>
                <div className="news-form-input relationship-wrapper">
                    <label htmlFor="news-form-relationship-type">
                        Lastly, is this about the band generally, or a specific
                        thing?
                    </label>
                    <div className="join">
                        <input
                            className="join-item btn"
                            type="radio"
                            name="news-form-relationship-type"
                            aria-label="work"
                        />
                        <input
                            className="join-item btn"
                            type="radio"
                            name="news-form-relationship-type"
                            aria-label="press"
                        />
                        <input
                            className="join-item btn"
                            type="radio"
                            name="news-form-relationship-type"
                            aria-label="show(s)"
                        />
                        <input
                            className="join-item btn"
                            type="radio"
                            name="news-form-relationship-type"
                            aria-label="video"
                        />
                    </div>

                    <label htmlFor="news-form-relationship">relationship</label>
                    <select className="select select-primary" disabled>
                        <option disabled selected>
                            cool, which one?
                        </option>
                        <option>one</option>
                        <option>two</option>
                        <option>three</option>
                        <option>four</option>
                    </select>
                </div>
            </form>

            <div className="news-form-submit-wrapper">
                <button
                    id="news-form-submit"
                    type="submit"
                    value="submit"
                >
                    post this fucker
                </button>
            </div>
        </main>
    );
}
