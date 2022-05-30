import React from 'react';
import Header from '~/components/Layout/components/Header';
import SideBar from './SideBar';

function DefaultLayout(props) {
    const {children} = props
    return (
        <div>
            <Header />
            <div className='container'>
                <SideBar />
                <div className='content'>{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout;
