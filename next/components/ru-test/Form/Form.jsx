import * as React from "react";
import * as styles from './Form.module.css';

import Loader from '../../ui/Loader/Loader';
import useForm from '../../../utils/use-form';
import sendFormToTg from '../../../utils/api';

import skypeImg from '../../../images/icon/skype.svg';
import tgImg from '../../../images/icon/tg.svg';
import emailImg from '../../../images/icon/email.svg';


export default function Form() {
  const [ isActive, setIsActive ] = React.useState(false);
  const [ isSend, setIsSend ] = React.useState(false)
  const [ isLoading, setIsLoading ] = React.useState(false);

  const { values, isValid, handleReset, handleChange } = useForm()



  const handleSubmit = (evt) => {
    evt.preventDefault()
    setIsLoading(true);
    const message = `email - ${values.email}, tg - ${values.tg || '---'}, skype - ${values.skype || '---'}`
    sendFormToTg(message)
      .then(data => {
        console.log(data);
        setIsLoading(false);
        setIsSend(true);
        handleReset()
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <section id='form' className={styles.container}>
      {
        isSend
          ? <div className={styles.messageContainer}>
              <p className={styles.message}>Ссылка на трансляцию и дополнительная информация через пару минут будут у вас на почте!</p>
            </div>
          : <div className={styles.formContainer}>
              <h2 className={styles.title}>Принять участие</h2>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                  <img className={styles.icon} src={emailImg} alt="email icon" />
                  <input
                    className={styles.input}
                    type="email"
                    name='email'
                    placeholder='Почта'
                    value={values?.email}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <img className={styles.icon} src={tgImg} alt="tg icon" />
                  <input
                    className={styles.input}
                    type="text"
                    name='tg'
                    placeholder='Телеграм'
                    value={values?.tg}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <img className={styles.icon} src={skypeImg} alt="skype icon" />
                  <input
                    className={styles.input}
                    type="text"
                    name='skype'
                    placeholder='Скайп'
                    value={values?.skype}
                    onChange={handleChange}
                  />
                </div>
                <button
                  // disabled={!isActive}
                  disabled={!isValid}
                  type='submit'
                  className={`${styles.sendButton} ${isValid ? styles.buttonIsActive : ''}`}
                >
                  <div id='glow-animation' />
                  {
                    isLoading
                      ? <Loader />
                      : <span>Записаться</span>
                  } 
                </button>
              </form>
            </div>
        }
    </section>
  )
}