// TODO re-style the elements on this page
'use client';
import InputText from '../../(admin)/sharedcomponents/forms/InputText';
import InputPass from '../../(admin)/sharedcomponents/forms/InputPass';
import ButtonSubmit from '../../(admin)/sharedcomponents/forms/ButtonSubmit';
import Cookies from 'js-cookie';
import { useState } from 'react';

const axios = require('axios').default;

export default function LoginForm() {
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (event) => {
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
                if (response.status == 200) {
                    window.location.href = '/';
                }
            })
            .catch(function (error) {
                if (!error) {
                    setErrorMessage(
                        `Login didn't work, and the robot won't even say why. Ask Brendan.`
                    );
                } else if (error.response.data.error.message) {
                    setErrorMessage(
                        `Seems like bad user/pass. If you're sure you're typing the right thing, tell Brendan that the robot says: "${error.response.data.error.message}"`
                    );
                } else if (error.message) {
                    setErrorMessage(
                        `Login didn't work. Tell Brendan that the robot says "${error.message}"`
                    );
                } else {
                    setErrorMessage(
                        `Login didn't work. Tell Brendan that the robot says "${error}"`
                    );
                }
            });
    };
    return (
        <form id="loginForm" onSubmit={handleLogin}>
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
                <ButtonSubmit id="loginFormSubmit" label="might as well jump" />
            </div>
        </form>
    );
}
