'use client';
import InputText from '../components/forms/InputText';
import InputPass from '../components/forms/InputPass';

import * as React from 'react';
import ButtonSubmit from '../components/forms/ButtonSubmit';

export default function login() {
    return (
        <main id="login" className="smallcontainer">
            <form id="login-form">
                <div className="form-input-box">
                    <InputText
                        id="login-form-login"
                        label="login (user or email)"
                    />
                </div>
                <div className="form-input-box">
                    <InputPass id="login-form-password" label="password" />
                </div>
            </form>
            <ButtonSubmit id="login-form-submit" label="might as well jump" />
        </main>
    );
}
