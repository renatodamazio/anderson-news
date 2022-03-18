import axios from "axios";

export default async function getNews(req, res) {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=648aeed9c8a14834a065c3f2b3a0f55f&sortBy=publishedAt"
    )
    .then((resp) => res.status(200).json(resp.data));
}
