Pages folder -> Route definitions

index.jsx: Homepage of the OCDetect app at the / route.
login.js: Login page at /login using Firebase auth, redirecting to /dashboard upon login.
_app.jsx: Global wrapper for persisting state across all pages, including user authentication.
_middleware.js: Middleware that checks authentication via cookies, redirecting to /login if unauthenticated.

