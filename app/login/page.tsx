'use client';
import InputText from '../components/forms/InputText';
import InputPass from '../components/forms/InputPass';

import * as React from 'react';
import ButtonSubmit from '../components/forms/ButtonSubmit';

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
