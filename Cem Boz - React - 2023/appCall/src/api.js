import axios from "axios";


const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID _3D56iFP7cHaPqtx2XSfDt0IuGfenNeKHrp1UlQ69HM",
    },
    params: {
      query: term,
    },
  });
  debugger;
  return response.data.results;
};
export default searchImages;
