import { GetModalService, ModalControls, ModalValues } from '../Functional/ModalService'
import styles from './Topbar.module.css'

export function TopBar(){

    const modalService = GetModalService()

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
            >
                <div className={styles.userAdminSection}
                    onClick={UserAdminClick(modalService)}
                >{
                    GetUserAdminItem(modalService)
                }</div>
            </div>
        </div>
    )
}

function GetUserAdminModal(){
    var count = 0
    return [
        <div className={styles.signinModalItem} key={count++}>sign in content</div>,
        <div className={styles.signinModalItem} key={count++}>sign in content</div>,
        <div className={styles.signinModalItem} key={count++}>sign in content</div>,
    ]
}

function UserAdminClick(modalService: ModalValues){
return ()=>{
    modalService?.open!(
        {
            id: 'userRegistrationModal1',
            title: 'Sign in',
            modalClass: styles.signinModal,
            options: [ModalControls.EXIT_CROSS],
            element: GetUserAdminModal(),
            close: ()=>{alert('closed the modal')}
        }
    )}
}

function GetUserAdminItem(modalService : ModalValues){
    var UserAdminItem = (<div>User</div>)

    return UserAdminItem
}