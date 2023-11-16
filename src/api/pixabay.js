const BASE_URL = "https://pixabay.com/api";
const API_KEY = "40669261-95a13fed62b4ab55cb2ded4f1";
// https://pixabay.com/api/?key=40669261-95a13fed62b4ab55cb2ded4f1& q=yellow+flowers &image_type=photo

export const getImages = (name) => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&pretty=true`
  );
};
