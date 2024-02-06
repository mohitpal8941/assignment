import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import watch from '../../watch.svg';
import BackComponent from '../BackComponent';

const FitnessComponent = (props) => {
    const [active, setActive] = useState({id: null});

    return (
        <>
            <BackComponent />
            {props?.apiData?.heading && <h1 className='fs-5 fw-bold mb-0 py-3' dangerouslySetInnerHTML={{__html: props.apiData?.heading}} />}
            <ul className='scoll'>
                {props.apiData?.list?.length > 0 && props.apiData?.list?.map(
                    (list, idx) => (
                        <li className={`px-3 py-2 ${active?.id === idx ? 'active' : ''} `} key={idx} onClick={() => setActive({id: idx})}>{list.name}</li>
                    )
                )}
            </ul>
            <Row>
                <Col xs='12' lg='6' className='py-4 px-md-2 px-3 d-flex flex-wrap gap-5'>
                    <div className='m-auto card mt-4 col-12 relative'>
                        <div className='first'>
                            <div className='text-orange'>Smart Watch</div>
                            <div className='fs-4 fw-bold white'>Fire Boltt</div>
                        </div>
                        <div className='second white'>Scan the device QR to connect</div>
                        <div className='bg-orange border-radius-35 fs-6 fw-bold pointer-event px-4 py-2 third white'>Scan</div>
                        <div className='img-set-right w-100 text-end'>
                            <img src={watch} alt='watch' />
                        </div>
                    </div>
                    <div className='px-3 d-flex flex-wrap gap-3 col-12'>
                        <Col xs='6' className='align-items-center col-6 d-flex step-container text-center'>
                            <div className='circle relative m-auto text-center'>
                                <div className='fill-border'></div>
                                <div className='w-100 absolute-50'>
                                    <div  className='fs-4 fw-bold'>5,233</div>
                                    <div className='w-100 text-orange'>Steps</div>
                                </div>
                            </div>
                        </Col>
                        <Col className='d-flex flex-wrap gap-3'>
                            <div className='w-100 step-2 relative text-center'>
                                <div className='absolute-50 w-100'>
                                    <div className='w-100 text-orange'>Calories</div>
                                    <div className='w-100 fs-4 fw-bold'>1200 Kcal</div>
                                </div>
                            </div>
                            <div className='w-100 step-2 relative text-center'>
                                <div className='absolute-50 w-100'>
                                    <div className='w-100 text-orange'>Water</div>
                                    <div className='w-100 fs-4 fw-bold'>1.8 Ltrs</div>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col xs='12' lg='6' className='p-4 bg-orange d-flex flex-wrap gap-3 border-radius-top-right-35 border-radius-top-left-35'>
                    {props.apiData?.formHeading && <div className='fs-6 fw-bold w-100 white' dangerouslySetInnerHTML={{__html: props.apiData?.formHeading}} />}
                    <form className='d-flex flex-wrap gap-2'>
                        <div className='w-100'>
                            <input className='w-100 form-wrap px-3' type='text' name='name' placeholder='Name' />
                        </div>
                        <div className='w-half'>
                            <input className='w-100 form-wrap px-3' type='number' name='age' placeholder='Age' />
                        </div>
                        <div className='w-half'>
                            <input className='w-100 form-wrap px-3' type='number' name='height' placeholder='Height' />
                        </div>
                        <div className='w-100'>
                            <select className='w-100 form-wrap px-3' name='name'>
                                <option value=''>Are you a gym member?</option>
                                <option value='Yes'>Yes</option>
                                <option value='No'>No</option>
                            </select>
                        </div>
                        <div className='w-100'>
                            <select className='w-100 form-wrap px-3' name='name'>
                                <option value=''>Do you eat meal?</option>
                                <option value='Yes'>Yes</option>
                                <option value='No'>No</option>
                            </select>
                        </div>
                        <div className='w-100'>
                            <select className='w-100 form-wrap px-3' name='name'>
                                <option value=''>Are you a cyclist?</option>
                                <option value='Yes'>Yes</option>
                                <option value='No'>No</option>
                            </select>
                        </div>
                        <div className='w-100 text-center mt-1 mb-4'>
                            <input type='button' className='bg-black border-0 border-radius-35 fs-6 fw-bold p-3 w-100 white pointer-event' value={'Save Details'} />
                        </div>
                    </form>
                </Col>
            </Row>
        </>
    )
}

export default FitnessComponent;