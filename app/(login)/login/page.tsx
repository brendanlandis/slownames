import * as React from 'react';
import LoginLayout from '../layout';
import LoginForm from './LoginForm';

export default function Login() {
    return (
        <main id="login" className="tiny">
            <LoginForm />
        </main>
    );
}

Login.getLayout = (page) => {
    return <LoginLayout>{page}</LoginLayout>;
};
