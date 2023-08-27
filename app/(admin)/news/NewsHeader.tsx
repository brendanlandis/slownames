'use client';
import React, { useState } from 'react';
import InputSelect from '../sharedcomponents/forms/InputSelect';
import NewOrOld from '../sharedcomponents/NewOrOld';
import AddNewNews from './AddNewNews';
import ViewOldNews from './ViewOldNews';

export default function NewsForm() {
    const [showNewNews, setShowNewNews] = useState(false);

    function toggleNewNews() {
        setShowNewNews(!showNewNews);
    }
    return (
        <>
            <div className="form-header">
                <h1>
                    News for
                    <span>
                        <InputSelect
                            id="news-form-band"
                            label="what band is this for?"
                            options={['Star Card', 'Receive', 'Receiver']}
                            labeldisplay={false}
                        />
                    </span>
                </h1>
                <NewOrOld
                    isChecked={showNewNews}
                    onToggle={toggleNewNews}
                />
            </div>
            {showNewNews ? (
                // show the grid of old news items
                <ViewOldNews />
            ) : (
                // show the form to add a new news item
                <AddNewNews />
            )}
        </>
    );
}
