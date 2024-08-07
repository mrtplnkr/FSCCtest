export const useServices = () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const loginCall = async (): Promise<string> => {
    const response = await fetch(`${baseUrl}/users`, {
      method: "get",
      headers: new Headers({
        "content-type": "application/json",
      }),
    });
    const data = await response.json();
    const rnd = Math.floor(Math.random() * 10);
    return data[rnd].email;
  };
  const logoutCall = async (token: string) => {
    const response = await fetch(`${baseUrl}/posts`, {
      method: "get",
      headers: new Headers({
        "content-type": "application/json",
        token,
      }),
    });
    return response;
  };

  return { loginCall, logoutCall };
};
