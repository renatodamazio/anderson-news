import axios from "axios";

export default async function getHeadLines(req, res) {
  const { category } = req.query;
  let paramCategory = "";

  if (category !== "undefined") {
    paramCategory = `&category=${category}`;
  }

  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=us${paramCategory}&apiKey=9b43dc2ea7504e6896a3b715145ad59d&result=1`
    )
    .then((resp) => res.status(200).json(resp.data));
}
