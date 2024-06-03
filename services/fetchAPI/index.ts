const baseURL = "https://recruitment-api.vercel.app";

const postAPI = async (
  path: string,
  body: Record<string, any>,
  method: string = "POST",
  headers: Record<string, string> = { "Content-Type": "application/json" }
) => {
  const URL = `${baseURL}${path}`;
  try {
    if (!URL) {
      throw new Error("URL bulunamadı!");
    }
    const data = await fetch(`${URL}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
      cache: "no-store",
    })
      .then((res) => {
        if (res.url.includes("/notification") && res.redirected) {
          return (window.location.href = res.url);
        } else {
          return res.json();
        }
      })
      .catch((err) => console.log(err));

    return data;
  } catch (err) {
    throw new Error(`API request failed: ${err}`);
  }
};

const getAPI = async (
  path: string,
  token: string,
  headers: Record<string, string> = { "Content-Type": "application/json" }
) => {
  const URL = `${baseURL}${path}`;

  // Authorization header'ı ekle
  headers = { ...headers, Authorization: `${token}` };

  const data = await fetch(URL, {
    method: "GET",
    headers: headers,
    cache: "no-store",
  })
    .then((res) => {
      if (res.redirected) {
        // bazı yerlerde window'u bulamıyor kontrol et
        //return window.location.href = res.url;
      } else {
        return res.json();
      }
    })
    .catch((err) => console.log(err));

  return data;
};

export { getAPI, postAPI };
