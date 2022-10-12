import styles from "./ArticleSection.module.css"

export function ArticleSection(){
    return (
        <div className={styles.articleBody}>            
            <div className={styles.articleContent}>
                <div className={styles.articleTitle}>Hello world</div>                
                <div className={styles.article}>Some content</div>
            </div>      
            <div className={styles.articleContent}>
                <div className={styles.articleTitle}>Hello world</div>                
                <div className={styles.article}>Some content</div>
            </div>      
            <div className={styles.articleContent}>
                <div className={styles.articleTitle}>Hello world</div>                
                <div className={styles.article}>Some content</div>
            </div>     
            <div className={styles.articleContent}>
                <div className={styles.articleTitle}>Hello world</div>                
                <div className={styles.article}>Some content</div>
            </div>     
            <div className={styles.articleContent}>
                <div className={styles.articleTitle}>Hello world</div>                
                <div className={styles.article}>Some content</div>
            </div>            
        </div>
    )
}