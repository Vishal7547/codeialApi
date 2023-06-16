import styles from '../styles/home.module.css';

const Comment = ({ comment }) => {
  console.log('user comment:', comment);
  return (
    <div className={styles.postCommentsItem}>
      <div className={styles.postCommentHeader}>
        <span className={styles.postCommentAuthor}>{comment.user.name}</span>
        <span className={styles.postCommentTime}>a minute ago</span>
        <span className={styles.postCommentLikes}>22</span>
        <span className={styles.postCommentLikes}>delete</span>
      </div>
      <div className={styles.postCommentContent}>{comment.content}</div>
    </div>
  );
};
export default Comment;
