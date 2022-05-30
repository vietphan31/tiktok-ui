import React from 'react';
import Header from '~/components/Layout/components/Header';

function HeaderOnly(props) {
    const {children} = props
    return (
        <div>
            <Header />
            <div className='container'>
                <div className='content'>{children}</div>
            </div>
        </div>
    )
}

export default HeaderOnly;
