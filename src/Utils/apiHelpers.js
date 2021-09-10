import fetch from "isomorphic-unfetch";

import { readObject } from "./localStorage";
const querystring = require('qs');

const HOST = "https://streambuy.cubiq.digital/api/";
const defaultHeader = { 
    "Content-Type": "application/json"
};

const encodeFormData = data => querystring.stringify(data, { arrayFormat: 'repeat' });

const bodyFormatter = (type, body) => type === "form" ? encodeFormData(body) : JSON.stringify(body);

const isGetRequest = method => method === "GET";

const isPostRequest = method => method === "POST";

const addFormBodyHeader = headers => {
    headers["Content-Type"] = "application/x-www-form-urlencoded";
};

const addXAuthToken = (secure, headers, token) => {
    const privateReq = secure === "private";
    const userToken = token || readObject("user").token;
    if (privateReq && userToken) headers["x-auth-token"] = userToken;
};

const getByApi = (headers, path) => fetch(`${HOST}${path}`, {
    method: "GET",
    headers: headers,
}).then(res => res.body ? res.json() : null);

const postByApi = (headers, path, bodyType, body) => fetch(`${HOST}${path}`, {
    method: "POST",
    headers: headers,
    body: bodyFormatter(bodyType, body),
}).then(res => res.body ? res.json() : null);

export const apiRequest = (path, method, secure, token, bodyType, body) => {
	const headers = defaultHeader;
	addFormBodyHeader(headers);
    addXAuthToken(secure, headers, token);
	if (isGetRequest(method)) return getByApi(headers, path);
    else return postByApi(headers, path, bodyType, body);
};