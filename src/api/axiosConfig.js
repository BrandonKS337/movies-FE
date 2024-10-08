import axios from 'axios'

export default axios.create({
    baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io', // NOTE: Provides base address for API endpoints that client app calls
    headers: { "ngrok-skip-browser-warning": "true"} // NOTE: Needed because during dev phase the tech used to call the endpoints is called ngrok and client http will be blocked without using this to bypass cors errors.
});