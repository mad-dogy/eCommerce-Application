import styles from './Logo.module.scss';
import LogoIcon from '../../assets/logo.svg'

export const Logo = (): JSX.Element => {
	return (
		<div className={styles.logo}>
			<div>{'Supernatural'}</div>
			<LogoIcon />
		</div>
	)
}