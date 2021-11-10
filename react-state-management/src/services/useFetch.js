import { useState, useEffect } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function init() {
          try {
            console.log('In the hook ' + url) // the URL is coming back
            const response = await fetch(baseUrl + url);
            console.log('after call?')
            if (response.ok) {
              console.log('yes ok') // we get an OK response from mock
              const json = await response.json();
              console.log(json) // we get an expected result back
              setData(json);
              console.log('set data') // no error on calling "setData"
              console.log(data) // but data shows null
            } else {
              console.log('else block ' + response)
                throw response;
            }
          } catch (e) {
            console.log(e)
            setError(e);
          } finally {
            setLoading(false);
          }
        }
        init();
      }, [url]);

      return { data, error, loading };
}