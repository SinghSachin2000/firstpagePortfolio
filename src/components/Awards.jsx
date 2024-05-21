import React, { useState } from 'react';
import photo1 from '../Assets/awa1.png';
import photo2 from '../Assets/awa2.png';
import photo3 from '../Assets/awa3.png';
import photo4 from '../Assets/awa4.png';
import photo5 from '../Assets/awa5.png';
import photo6 from '../Assets/awa6.png';
import photo7 from '../Assets/awa7.png';
import { RxCross2 } from "react-icons/rx";

const Awards = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };
    const handleCrossbtn = () => {
        setShowMore(false);
    };

    return (
        <div>
            <div className='relative'>
                {showMore && (
                    <div className='fixed inset-0 bg-black opacity-50 z-20' onClick={handleShowMore}></div>
                )}
                <div className='w-[400px] h-[200px] bg-white m-10 rounded-2xl p-4 relative '>
                    <div className='font-bold text-slate-600'>AWARDS</div>
                    <div className='flex flex-col items-center'>
                        <div className='flex'>
                            <img src={photo1} alt="" width="90px" height='90px' className='' />
                            <img src={photo2} alt="" width="90px" height='90px' className='mt-2' />
                            <img src={photo3} alt="" width="90px" height='90px' className='' />
                            <img src={photo4} alt="" width="90px" height='90px' className='' />
                        </div>
                        <div className='font-bold text-slate-600'>...</div>
                        <div className='font-bold text-slate-600 cursor-pointer' onClick={handleShowMore}>show more</div>
                    </div>
                </div>

                {showMore && (
                    <div className='fixed inset-0 z-40 flex items-center justify-center'>
                        <div className='w-[500px] h-[600px] bg-white rounded-2xl border border-gray-300 p-4 relative z-50'>

                        <div className='flex justify-between'>
                        <div className='font-bold text-slate-600 mb-4'>AWARDS</div>
                        <RxCross2 className='crossbtn cursor-pointer' onClick={handleCrossbtn} />
                        </div>

                            <div className='flex flex-wrap justify-around'>
                                <div className='p-4'>
                                    <img src={photo1} alt="" width="90px" height='90px' className='' />
                                    <div>2022 Medal ...</div>
                                    <div>2022-12-29</div>
                                </div>
                                <div className='p-4'>
                                    <img src={photo2} alt="" width="90px" height='90px' className='' />
                                    <div>2022 Medal ...</div>
                                    <div>2022-12-29</div>
                                </div>
                                <div className='p-4'>
                                    <img src={photo3} alt="" width="90px" height='90px' className='' />
                                    <div>2022 Medal ...</div>
                                    <div>2022-12-29</div>
                                </div>
                                <div className='p-4'>
                                    <img src={photo4} alt="" width="90px" height='90px' className='' />
                                    <div>2022 Medal ...</div>
                                    <div>2022-12-29</div>
                                </div>
                                <div className='p-4'>
                                    <img src={photo5} alt="" width="90px" height='90px' className='' />
                                    <div>2022 Medal ...</div>
                                    <div>2022-12-29</div>
                                </div>
                                <div className='p-4'>
                                    <img src={photo6} alt="" width="90px" height='90px' className='' />
                                    <div>2022 Medal ...</div>
                                    <div>2022-12-29</div>
                                </div>
                                <div className='p-4'>
                                    <img src={photo7} alt="" width="90px" height='90px' className='' />
                                    <div>2022 Medal ...</div>
                                    <div>2022-12-29</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Awards;
