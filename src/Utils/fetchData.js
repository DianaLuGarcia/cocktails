export const cocktailOptions = {
  method: "GET",
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  console.log(response.body);
  const data = await response.json();

  return data;
};
