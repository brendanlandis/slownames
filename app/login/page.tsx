export default function Login() {
    return (
        <main className="container mx-auto smallcontainer">
            <div className="login-form-container">
                <form id="login-form">
                    <div className="login-form-input">
                        <label htmlFor="login-form-login">login</label>
                        <input
                            id="login-form-login"
                            type="text"
                            placeholder="login (user or email)"
                        />
                    </div>
                    <div className="login-form-input">
                        <label htmlFor="login-form-password">password</label>
                        <input
                            id="login-form-password"
                            type="password"
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
