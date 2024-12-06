let IS_PROD = true;

const server = IS_PROD ?
    "https://zoomclonebackend-p7dh.onrender.com" :
    "http://localhost:8000"


export default server;