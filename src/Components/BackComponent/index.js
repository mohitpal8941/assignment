import React from 'react';
import arrow from '../../ion_arrow-back-outline.svg';
import profile from '../../rectangle.svg';

const BackComponent = () => {
    return (
        <>
            <div className='d-flex flex-wrap justify-content-between mt-3'>
                <div className='d-flex flex-wrap outer-wrapper pointer-event text-center'>
                    <img className='d-block m-auto' src='/assignment/public/ion_arrow-back-outline.svg' />
                </div>
                <div className='outer-wrapper'>
                    <img className='w-100 d-block' src='/assignment/public/rectangle.svg' />
                </div>
            </div>
        </>
    );
}

export default BackComponent;