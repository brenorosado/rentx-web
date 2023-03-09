import { AxiosError } from "axios";
import { useCallback, useState } from "react";
import api from "../services/api";

type useFetchProps = {
    route: string;
    method: "get" | "post" | "put" | "patch" | "delete";
    authRequired: boolean;
}

export const getToken = () => {
    return localStorage.getItem("@rentx_token");
}

export const useFetch = ({
    route,
    method,
    authRequired
}: useFetchProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetch = useCallback(
        async ({ params = {}, payload = {} }) => {
            let response;

            const headers = {
                ...(authRequired && { Authorization: getToken() })
            };

            try {
                setError("");
                setLoading(true);
                response = await api[method](route, payload, { headers, params });
            } catch (e: AxiosError | any) {
                setError(e.response.data.message);
            } finally {
                setLoading(false);
                return response;
            }
    }, [route]);
    
    return { fetch, loading, error };
}