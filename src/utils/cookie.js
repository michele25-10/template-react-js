export const getCookie = (name) => {
    const decodedCookies = {};
    document.cookie.split(";").forEach((cookie) => {
        const parts = cookie.split("=");
        const cookieName = decodeURIComponent(parts.shift().trim());
        const cookieValue = decodeURIComponent(parts.join("=").trim());
        decodedCookies[cookieName] = cookieValue;
    });
    return decodedCookies[name];
};

export const setCookie = (
    name,
    value,
    expirationDays
) => {
    const date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
};

export const deleteCookie = (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};