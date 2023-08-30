import Cookies from 'js-cookie';

export const removeAllCookies = () => {
    const cookies = Cookies.get();

    Object.keys(cookies).forEach((cookieName) => {
        Cookies.remove(cookieName);
    });
};
