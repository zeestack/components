import styles from './app-layout.module.css';

/* eslint-disable-next-line */
export interface AppLayoutProps {}

export function AppLayout(props: AppLayoutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppLayout!</h1>
    </div>
  );
}

export default AppLayout;
