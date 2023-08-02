// TODO re-style the elements on this page

'use client';
import * as React from 'react';
import InputText from '../components/forms/InputText';
import InputPass from '../components/forms/InputPass';
import ButtonSubmit from '../components/forms/ButtonSubmit';
import Cookies from 'js-cookie';
import { useState } from 'react';

const axios = require('axios').default;

// POST A NEW ARTIST
// axios
//     .post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/artists`, {
//         data: {
//             name: 'Bwip',
//         },
//     })
//     .then(function (response) {
//         console.log('wow the post response');
//         console.log(response);
//         console.log('that\'s all you get');
//     })
//     .catch(function (error) {
//         console.log('wow the post error');
//         console.log(error);
//         console.log('that\'s all you get');
//     });

// GET ARTISTS
// axios
//     .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/artists`)
//     .then(function (response) {
//         console.log('wow the get response');
//         console.log(response.data);
//         console.log("that's all you get");
//     })
//     .catch(function (error) {
//         console.log('wow the get error');
//         console.log(error);
//         console.log("that's all you get");
//     })
//     .finally(function () {
//         console.log('yay!');
//     });

export default function login() {
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        axios
            .post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`, {
                identifier: event.target.loginFormLogin.value,
                password: event.target.loginFormPassword.value,
            })
            .then(function (response) {
                console.log(response);
                Cookies.set('username', response.data.user.username, {
                    sameSite: 'strict',
                    expires: 7,
                });
                Cookies.set('accessToken', response.data.jwt, {
                    sameSite: 'strict',
                    expires: 7,
                });
                // if (response.status == 200) {
                //     window.location.href = '/';
                // }
            })
            .catch(function (error) {
                setErrorMessage(
                    `Probably a bad user or pass. The robot says: "${error.response.data.error.message}"`
                );
            });
    };

    return (
        <main id="login" className="tiny">
            <form id="loginForm" onSubmit={handleSubmit}>
                <div>
                    <InputText
                        id="loginFormLogin"
                        label="login (user or email)"
                        labeldisplay={false}
                    />
                </div>
                <div>
                    <InputPass
                        id="loginFormPassword"
                        label="password"
                        labeldisplay={false}
                    />
                </div>
                <div id="errors">{errorMessage}</div>
                <div className="submit-wrapper">
                    <ButtonSubmit
                        id="loginFormSubmit"
                        label="might as well jump"
                    />
                </div>
            </form>
        </main>
    );
}
