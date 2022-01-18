import css from './Dialogs.module.css'

const Dialogs = () =>{
    return(
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                <div className={css.dialog + ' ' + css.active}>Alex</div>
                <div className={css.dialog}>Miha</div>
                <div className={css.dialog}>Toha</div>
                <div className={css.dialog}>Baby</div>
            </div>

             <div className={css.messages}>
                 <div className={css.message}>Hello</div>
                 <div className={css.message}>Hi</div>
                 <div className={css.message}>Go sex</div>
                 <div className={css.message}>Omg</div>
             </div>
        </div>
    )
}

export default Dialogs;