export const fetchCountries = async (value: string) => {
  const fake = () => {
    return fetch(`https://restcountries.com/v3.1/name/${value}`)
      .then((response: any) => response.json())
      .then((d: any) => {
        const data = d.map((item: any) => ({
          value: item?.cca2,
          label: item?.name?.common,
        }));
        return data;
      });
  };
  if (value) {
    return fake();
  } else {
    return [];
  }
};
