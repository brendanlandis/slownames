'use client';

import * as React from 'react';

export default function Login() {
    return (
        <main className="container mx-auto smallcontainer">
            <div className="login-form-container">
                <form id="login-form">
                    {/* <div className="login-form-input">
                        <TextField
                            id="login-form-login"
                            label="login (user or email)"
                            variant="outlined"
                        />
                    </div>
                    <div className="login-form-input">
                        <TextField
                            id="login-form-password"
                            label="password"
                            variant="outlined"
                            type="password"
                        />
                    </div> */}
                </form>

                <div className="login-form-submit-wrapper">
                    <button id="login-form-submit" type="submit" value="submit">
                        jump!
                    </button>
                </div>
            </div>
        </main>
    );
}
