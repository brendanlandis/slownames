- let's try Strapi's authentication again
    + check out the chatgpt description of how to implement the middleware
    + make the login page work again
        + send user and pass to strapi
        + if they're right, set the cookie
        + if they're wrong, show an error
    + btw also update strapi
    - now recreate the login page
        - create middleware that checks for a basic cookie - say, "name" or something
        - if that cookie is not present, redirect to login
        - if that cookie is present, do whatever you want








TODO after auth stuff:
- news page -> relationship picker is too wide for mobile
- decide on case & tone or whatever for labels sitewide


POTENTIALLY COOL PLUGINS AND STUFF:
- grids for dealing with old stuff: https://ui.toast.com/tui-grid
- comboboxes / autocompletes: https://github.com/downshift-js/downshift
- date picker: https://projects.wojtekmaj.pl/react-date-picker/

















AUTH TODO:

<!-- - successful form submission moves user to '/' -->
<!-- - unsuccessful form submission shows error message -->
- figure out how to check if user is actually logged in
- if user is not logged in, send them to '/login'
- if user is not logged in, hide the nav
- if user is logged in, check if they have a primary band, then send them to the assign page if they don't
- handle other auth stuff, then check this out: https://strapi.io/blog/strapi-security-checklist


BOOKMARKS 4 (looking at access vs refresh tokens):
- https://stateful.com/blog/refresh-tokens-security
- https://strapi.io/blog/how-to-create-a-refresh-token-feature-in-your-strapi-application
- https://javascript.plainenglish.io/next-js-secure-authentication-using-http-only-cookie-graphql-or-rest-a4ef94cec9e8

BOOKMARKS PART 3:
- https://levelup.gitconnected.com/how-to-add-jwt-authentication-to-nextjs-apps-a0dc83bd257d

BOOKMARKS PART 2:
- https://stackoverflow.com/questions/54652685/how-can-i-store-a-jwt-in-cookies-using-axios
- https://authjs.dev/getting-started/credentials-tutorial
- https://forum.strapi.io/t/how-do-i-set-the-jwt-provided-by-strapi-as-http-only/22705
- https://stackoverflow.com/questions/43051291/attach-authorization-header-for-all-axios-requests

BOOKMARKING MY PLACE IN AUTH STUFF:
- https://authjs.dev/guides/providers/custom-provider
- https://stackoverflow.com/questions/76086733/can-i-store-jwt-token-in-local-storage-while-using-next-js
- https://nextjs.org/docs/pages/building-your-application/routing/authenticating
- https://strapi.io/blog/a-beginners-guide-to-authentication-and-authorization-in-strapi
- https://axios-http.com/docs/req_config