const restService = {
  GET: {
    findProduct: async (urlApi) => {
      const resp = await fetch(urlApi);
      const data = await resp.json();
      return data;
    },
  },
};

export default restService;
