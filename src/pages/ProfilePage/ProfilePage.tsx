import styles from './ProfilePage.module.scss';

export const ProfilePage = (): JSX.Element => (
  <div className={styles.profile}>
    <div className={styles.profile__inner}>
      <h4>Personal account</h4>
      <div className={styles['profile__info-block']}>
        <h6>Personal info</h6>
        <div className={styles['personal-info']} />
      </div>
    </div>
  </div>
);
