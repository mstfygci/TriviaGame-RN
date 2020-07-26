import {useCallback, useEffect, useRef} from 'react';

export function useInterval(handler: Function, timeout?: number) {
    const callbackRef = useRef<Function>();
    const idRef = useRef<number>();
    useEffect(() => {
        callbackRef.current = handler;
    }, [handler]);
    useEffect(() => {
        if (timeout != null) {
            const id = setInterval(() => callbackRef.current(), timeout);

            // @ts-ignore
            idRef.current = id;
            return () => {
                clearInterval(id);
            };
        } else {
            idRef.current = null;
        }
    }, [timeout]);
    return useCallback(() => {
        clearInterval(idRef.current);
    }, []);
}
