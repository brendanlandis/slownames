'use client';
import * as React from 'react';
import { TextField } from '@mui/material';

export default function YourBand() {
    return (
        <form id="primaryartist-form">
            <div className="primaryartist-form-input">
                <TextField
                    id="outlined-basic"
                    label="band name"
                    variant="outlined"
                />
            </div>
        </form>
    );
}
