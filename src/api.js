import { apiRequest } from "./Utils/apiHelpers";

export const getEvent = id => apiRequest(`event/${id}`, "GET");

export const getCountries = () => apiRequest('countries', "GET");

export const login = (phone, recaptcha, orgId) =>  apiRequest('customers/login', "POST", "public", null ,"form", {
    phone: phone,
    recaptcha: recaptcha,
    organization_id: orgId,
});

export const validateToken = (code, token) => 
    apiRequest('customers/validate_code', "POST", "private", token, "form", {
        code: code,
    });

export const createUser = (
    recaptcha, organization_id, email, name, lastname, document_type, document_number, phone, guid
    ) => apiRequest('customers', "POST", "public", "form", {
        recaptcha: recaptcha,
        organization_id: organization_id,
        email: email,
        name: name, 
        lastname: lastname,
        document_type: document_type,
        document_number: document_number,
        phone: phone,
        guid: guid,
});

export const getUser = () => apiRequest('customers/me', "POST", "private");

