'use client';
import React, { useState } from 'react';
import NewOrOld from '../sharedcomponents/NewOrOld';
import PostsForm from './PostsForm';
import ViewOldPosts from './ViewOldPosts';
import WhichBand from '../sharedcomponents/WhichBand';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function PostsHeader() {
    const [showNewPosts, setShowNewPosts] = useState(false);

    function toggleNewPosts() {
        setShowNewPosts(!showNewPosts);
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div className="form-header">
                <h1>
                    Posts for
                    <span>
                        <WhichBand />
                    </span>
                </h1>
                <NewOrOld isChecked={showNewPosts} onToggle={toggleNewPosts} />
            </div>
            {showNewPosts ? (
                // show the grid of old posts
                <ViewOldPosts />
            ) : (
                // show the form to add a new post or edit an existing one
                <PostsForm />
            )}
        </QueryClientProvider>
    );
}
