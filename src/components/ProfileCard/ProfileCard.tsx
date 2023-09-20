import { TextInput } from '../UI/inputs/TextInput/TextInput';
import styles from './ProfileCard.module.scss';

export const ProfileCard = (props: any): JSX.Element => {
  const { cardInfo, isEdit } = props; // это типизировать говно?))))))

  return (
    <div className={styles['info-card']}>
      {cardInfo.map((item: any) => (
        <div className={styles.item}>

          <span className={styles.item__name}>
            {Object.keys(item)[0]}
          </span>

          {isEdit
            ? (
              <TextInput
                size="small"
                placeholder=""
                label=""
                value={item[Object.keys(item)[0]]}
              />
            )
            : <span>{item[Object.keys(item)[0]]}</span>}
        </div>
      ))}
    </div>
  );
};
