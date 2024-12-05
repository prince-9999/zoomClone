let IS_PROD = true;

const server =IS_PROD ?
    "http://localhost:8000":
    "https://zoomclonebackend-p7dh.onrender.com"


export default server;