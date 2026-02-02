import { useParams, Link } from "react-router-dom";
import ArticleList from "../components/Articles/ArticleList";

export default function TopicArticlesPage() {
  const { topic_slug } = useParams();

  return (
    <main>
      <Link to="/topics">← Back to topics</Link>
      <h1 style={{ textTransform: "capitalize" }}>Topic: {topic_slug}</h1>

      <ArticleList topic={topic_slug} />
    </main>
  );
}
