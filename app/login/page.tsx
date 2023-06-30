'use client';

import * as React from 'react';

export default function login() {
    return (
        <main className="container mx-auto smallcontainer">
            <div className="login-form-container">
                <form id="login-form">
                    <div className="login-form-input">
                        <label htmlFor="login-form-login">
                            login (user or email)
                        </label>
                        <input
                            type="text"
                            id="login-form-login"
                            className="form-input"
                            placeholder="login (user or email)"
                        />
                    </div>
                    <div className="login-form-input">
                        <label htmlFor="login-form-password">password</label>
                        <input
                            type="password"
                            id="login-form-password"
                            className="form-input "
                            placeholder="password"
                        />
                    </div>
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
