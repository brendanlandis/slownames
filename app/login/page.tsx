'use client';
import InputText from '../components/forms/InputText';
import InputPass from '../components/forms/InputPass';

import * as React from 'react';
import ButtonSubmit from '../components/forms/ButtonSubmit';

export default function login() {
    return (
        <main id="login">
            <form id="login-form" className="tiny">
                <div>
                    <InputText
                        id="login-form-login"
                        label="login (user or email)"
                    />
                </div>
                <div>
                    <InputPass id="login-form-password" label="password" />
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
