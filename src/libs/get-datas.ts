export const getDatas = async <T>(
  apiToken: string,
  apiUrl: string,
): Promise<T> => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`,
    },
  };

  const res = await fetch(apiUrl, options);

  const movies: T = await res.json();

  return movies;
};
