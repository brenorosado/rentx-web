import { useCallback, useState } from "react";
import api from "@/services/api";
import { AxiosError, AxiosResponse } from "axios";

type useFetchProps = {
    route: string;
    method: "get" | "post" | "put" | "patch" | "delete";
}

export const useFetch = ({
	route,
	method,
}: useFetchProps) => {
	const [loading, setLoading] = useState<boolean>(false);

	const fetch = useCallback(
		async ({
			params = {},
			payload = {},
		}: {
			params?: object;
			payload?: object;
		}): Promise<AxiosResponse | AxiosError<{ message: string }>> => {
			try {
				setLoading(true);
				return await api[method](route, payload, { params });
			} catch (e) {
				if(e instanceof AxiosError) {
					return e;
				}
				return new AxiosError();
			} finally {
				setLoading(false);
			}
		}, [route]);
    
	return { fetch, loading };
};