import { useCallback, useEffect, useState } from 'react';

type ApiGetFunction<ARG_TYPE, RESPONSE_TYPE> = (params: ARG_TYPE) => Promise<RESPONSE_TYPE>;

// TODO: Move to separate function
export function useApiFunctionHelper<RESPONSE_TYPE>() {
    const [data, setData] = useState<RESPONSE_TYPE | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown | undefined>(undefined);

    const setErrorString = useCallback((error: unknown) => setError(String(error)), [setError]);

    const handleLoad = useCallback(() => setLoading(false), [setLoading]);

    return {
        data,
        loading,
        error: error ? String(error) : undefined,

        setData,
        onLoad: handleLoad,
        setError: setErrorString,
    };
}

export function getApiHooksCreator<ARG_TYPE, RESPONSE_TYPE>(apiFunction: ApiGetFunction<ARG_TYPE, RESPONSE_TYPE>) {
    return function useApiFunction(params: ARG_TYPE, skip = false) {
        const { data, error, loading, setData, onLoad, setError } = useApiFunctionHelper<RESPONSE_TYPE>();

        useEffect(() => {
            if (!skip) {
                apiFunction(params).then(setData).catch(setError).finally(onLoad);
            }
        }, [setData, setError, onLoad, params, skip]);

        return {
            data,
            loading,
            error,
        };
    };
}
