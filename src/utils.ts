export const getQuery = () => {
    const searchParams = window.location.search.slice(1);
    const result:Record<string,string> = {};
    if (searchParams) {
      const params = new URLSearchParams(window.location.search.slice(1));
      for (const [key, value] of params.entries()) {
        result[key] = value;
      }
    }
  
    return result;
  };