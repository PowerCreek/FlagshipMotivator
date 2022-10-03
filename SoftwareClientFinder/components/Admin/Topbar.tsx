import styles from './Topbar.module.css'

export function TopBar(){
    
    return (
        <div 
            id={"topbar"}
            className={styles.topbar}
        >
            <div 
                id={"topbar-item_1"}
                className={styles.item}
            >A</div>
            <div 
                id={"topbar-item_2"}
                className={styles.item}
            >B</div>
            <div 
                id={"topbar-item_3"}
                className={[styles.item, styles.endAdmin].join(' ')}
            >C</div>
        </div>
    )
}