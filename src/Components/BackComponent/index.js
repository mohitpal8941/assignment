import React from 'react';
import arrow from '../../ion_arrow-back-outline.svg';
import profile from '../../rectangle.svg';

const BackComponent = () => {
    return (
        <>
            <div className='d-flex flex-wrap justify-content-between mt-3'>
                <div className='d-flex flex-wrap outer-wrapper pointer-event text-center'>
                    <img className='d-block m-auto' src={arrow} />
                </div>
                <div className='outer-wrapper'>
                    <img className='w-100 d-block' src={profile} />
                </div>
            </div>
        </>
    );
}

export default BackComponent;