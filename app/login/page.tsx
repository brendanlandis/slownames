'use client';

import * as React from 'react';
// import { useState } from 'react';
// import { setToken, unsetToken } from '../lib/auth';

export default function Login() {
    // const [data, setData] = useState({
    //     identifier: '',
    //     password: '',
    // });

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const data = await fetch(
    //         `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 identifier: data.identifier,
    //                 password: data.password,
    //             }),
    //         }
    //     );
    //     setToken(data);
    // };

    // const logout = () => {
    //     unsetToken();
    // }

    // const handleChange = (e) => {
    //     setData({ ...data, [e.target.name]: e.target.value });
    // };

    return (
        <main className="container mx-auto smallcontainer">
            <div className="login-form-container">
                <form id="login-form">
                    <div className="login-form-input">
                        <label htmlFor="login-form-login">login</label>
                        <input
                            id="login-form-login"
                            type="text"
                            // onChange={handleChange}
                            placeholder="login (user or email)"
                        />
                    </div>
                    <div className="login-form-input">
                        <label htmlFor="login-form-password">password</label>
                        <input
                            id="login-form-password"
                            type="password"
                            // onChange={handleChange}
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
            {/* <div>
                or, <Link href="/login" onClick={logout}>logout</Link>
            </div> */}
        </main>
    );
}
