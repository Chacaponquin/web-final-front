import axios from "axios";
import { useEffect, useMemo } from "react";
import { GetProps, PostProps } from "../interfaces/fetch";
import { useEnv } from "../../env/hooks";
import { useUser } from "../../../../user/hooks";

export default function useFetch() {
  const { getToken } = useUser();
  const { API_ROUTE } = useEnv();

  const axiosInstance = useMemo(() => {
    const token = getToken();

    return axios.create({
      baseURL: API_ROUTE,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }, []);

  useEffect(() => {
    axiosInstance.interceptors.request.use(undefined, (error) => {
      Promise.reject(error);
    });
  }, []);

  async function get<T>(props: GetProps<T>): Promise<void> {
    return axiosInstance
      .get<T>(props.url)
      .then((data) => {
        if (props.onSuccess) {
          props.onSuccess(data.data);
        }
      })
      .catch((error) => {
        if (props.onError) {
          props.onError(error);
        }
      })
      .finally(() => {
        if (props.onFinally) {
          props.onFinally();
        }
      });
  }

  async function post<T, B>(
    props: PostProps<T, B> & { url: string }
  ): Promise<void> {
    return axiosInstance
      .post<T>(props.url, props.body)
      .then((data) => {
        if (props.onSuccess) {
          props.onSuccess(data.data);
        }
      })
      .catch((error) => {
        if (props.onError) {
          props.onError(error);
        }
      })
      .finally(() => {
        if (props.onFinally) {
          props.onFinally();
        }
      });
  }

  return { get, post };
}
