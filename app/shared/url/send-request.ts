export const sendRequest = async () => {
  try {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    console.log("Sending request to:", apiUrl);

    const fetchOptions: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(apiUrl, fetchOptions);
    console.log("Response Status:", response.status);
    console.log("Response Status Text:", response.statusText);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Response Data:", data);

    return {
      response: data,
      error: null,
      loading: false,
    };
  } catch (error) {
    console.error("Request Error:", error);
    return {
      response: null,
      error,
      loading: false,
    };
  }
};
