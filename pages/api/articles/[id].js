import { articles } from "../../../data";

export default ({ query: { id } }, res) => {
  const filtered = articles.filter((article) => article.id === id);

  if (filtered.length) return res.status(200).json(filtered);
  else return res.status(404).json({ message: "Not Found" });
};
