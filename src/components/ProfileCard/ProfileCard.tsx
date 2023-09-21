import styles from './ProfileCard.module.scss';

interface ProfileInfoCardProps {
  cardInfo: any[] ;
}

export const ProfileInfoCard = (props: ProfileInfoCardProps): JSX.Element => {
  const { cardInfo } = props;

  return (
    <div className={styles['info-card']}>
      {cardInfo.map((item: any) => (
        <div className={styles.item}>

          <span className={styles.item__name}>
            {Object.keys(item)[0]}
          </span>
          <span>
            {item[Object.keys(item)[0]]}
          </span>
        </div>
      ))}
    </div>
  );
};
