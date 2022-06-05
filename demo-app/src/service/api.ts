import axios from "axios";

const url = window.location.hostname === "localhost"?"http://localhost:8080/":"<URL SERVIDOR>";

export const api = axios.create({
    baseURL:url
})