
import { Link } from 'react-router-dom';
import styles from './ArticleCard.module.css'

const ArticleCard = ({ article }) => {
  console.log(styles)
  return (
    <div className={styles["article-card"]}>
      <h3 >
          {article.title}
    
      </h3>
    </div>
  );
};

export default ArticleCard;




