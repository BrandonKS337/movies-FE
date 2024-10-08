import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:8080', // NOTE: Provides base address for API endpoints that client app calls
    headers: { "ngrok-skip-browser-warning": "true"} // NOTE: Needed because during dev phase the tech used to call the endpoints is called ngrok and client http will be blocked without using this to bypass cors errors.
});