import classNames from 'classnames/bind';
import React from 'react';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import SideBar from './SideBar';

const cx = classNames.bind(styles);

function DefaultLayout(props) {
    const { children } = props;
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
