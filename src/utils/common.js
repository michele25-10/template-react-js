import axios from "axios";

export const ws = async (
    method,
    url,
    params,
    data,
    token
) => {
    if (!method || !url) {
        console.error("Internal Server Error");
        return;
    }

    let headers = {};

    if (token) {
        headers.Authorization = "Bearer " + sessionStorage.getItem("accessToken");
    }

    const result = new Promise((resolve, reject) => {
        axios({
            method,
            url,
            params,
            data,
            headers,
            responseType: "json",
        })
            .then((res) => {
                resolve({ data: res.data, status: res.status });
            })
            .catch((err) => {
                reject({ data: err.response.data, status: err.response.status });
            });
    });

    let apiResponse = {};

    await result
        .then((res) => {
            apiResponse = { error: false, ...res };
        })
        .catch((err) => {
            apiResponse = { error: true, ...err };
        });

    if (apiResponse.status === 401) {
        sessionStorage.clear();
        location.href = "../login";
        gestioneSnackbar(true, "Token scaduto!", "error");
    }

    if (apiResponse.status === 403) {
        sessionStorage.clear();
        location.href = "../login";
        gestioneSnackbar(true, "Non hai i permessi!", "error");
    }

    return apiResponse;
};
