'use client';
import * as React from 'react';
import InputText from '../components/forms/InputText';
import InputPass from '../components/forms/InputPass';
import ButtonSubmit from '../components/forms/ButtonSubmit';

const axios = require('axios').default;

axios
    .post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/artists`, {
        data: {
            name: 'Bwip',
        },
    })
    .then(function (response) {
        console.log('wow the post response');
        console.log(response);
        console.log('that\'s all you get');
    })
    .catch(function (error) {
        console.log('wow the post error');
        console.log(error);
        console.log('that\'s all you get');
    });

axios
    .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/artists`)
    .then(function (response) {
        console.log('wow the get response');
        console.log(response.data);
        console.log('that\'s all you get');
    })
    .catch(function (error) {
        console.log('wow the get error');
        console.log(error);
        console.log('that\'s all you get');
    })
    .finally(function () {
        console.log('yay!');
    });

export default function login() {
    return (
        <main id="login" className="tiny">
            <form id="login-form">
                <div>
                    <InputText
                        id="login-form-login"
                        label="login (user or email)"
                        labeldisplay={false}
                    />
                </div>
                <div>
                    <InputPass
                        id="login-form-password"
                        label="password"
                        labeldisplay={false}
                    />
                </div>
            </form>
            <div className="submit-wrapper">
                <ButtonSubmit
                    id="login-form-submit"
                    label="might as well jump"
                />
            </div>
        </main>
    );
}
