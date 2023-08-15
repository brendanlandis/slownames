- make some Receive art with this: https://aniso.studiofreight.com/

+ First goal is get data populating in the dropdown.
- Then adjust the permissions in Strapi to only allow authenticated users to do that.
- then figure out how to send that get request authenticatedly
- Then figure out how to load the page authenticatedly
- Then figure out how to send a post request authenticatedly (i.e. change the user's primary band)
- Then do the other stuff on the page

- So, I'm in SettingsForm.tsx, trying to get a db call of artists going.
- Eventually I'll want to make this call only if I have a valid token, but first let's get the call going.
- I'm trying to make the call asynchronously, but I think I can only do that in server components. So, I might need to split this up.
- The open tabs are:
    - https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
    - https://axios-http.com/docs/example
    - https://chat.openai.com/?model=text-davinci-002-render-sha


Once this is done, I'll need to make sure I have a valid token each time I load a page, or make a db call.







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
