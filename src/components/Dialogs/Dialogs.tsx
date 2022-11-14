import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItem}>
               <div className={s.dialog + ' ' + s.active}>Nina</div>
               <div className={s.dialog}>Vladimr</div>
           </div>

            <div className={s.messages}>
                <div className={s.message}>Hello everyone !</div>
                <div className={s.message}>How are you ?</div>
            </div>
        </div>
    );
};

