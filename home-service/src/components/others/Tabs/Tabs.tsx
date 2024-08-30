import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import styles from './tabs.module.css';

const cx = classNames.bind(styles);

export interface TabsData {
  label: string;
}

interface TabsProps {
  tabsData: TabsData[];
  selectedTab: string;
  setSelectedTab: (selectedTab: string) => void;
  children: ReactNode;
}

const Tabs = ({ tabsData, selectedTab, setSelectedTab, children }: TabsProps) => {
  const handleClick = (tabKey: string) => {
    setSelectedTab(tabKey);
  };

  return (
    <>
      <ul className={cx('container')}>
        {tabsData &&
          tabsData.map(({ label }) => (
            <li key={label} className={styles.tabBox}>
              <button
                className={cx('tab', { selected: selectedTab === label })}
                onClick={() => handleClick(label)}
                type="button"
              >
                {label}
              </button>
            </li>
          ))}
      </ul>
      {children}
    </>
  );
};

export default Tabs;
