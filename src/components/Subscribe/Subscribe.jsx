import styles from './Subscribe.module.css';

export function Subscribe() {
  return (
    <section className={styles.subscribeSection}>
      <div className="container">
        <div className={styles.textContainer}>
          <h2 className={styles.sectionTitle}>Письма с домашним теплом</h2>
          <p className={styles.sectionDescription}>
            Новые коллекции, идеи для дома и приятные предложения. Без спешки и лишних писем.
          </p>
        </div>

        <form className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Ваша электронная почта"
              className={styles.emailInput}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Подписаться
            </button>
          </div>
          <p className={styles.privacyPolicy}>
            Нажимая «Подписаться», вы соглашаетесь с политикой конфиденциальности.
          </p>
        </form>
      </div>

    </section>
  );
}
