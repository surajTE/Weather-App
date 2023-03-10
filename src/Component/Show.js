import React, { useEffect, useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LensBlurRoundedIcon from '@mui/icons-material/LensBlurRounded';
import { IconButton } from '@mui/material';
import axios from 'axios';

const Show = () => {

    // const [obj, setObj] = useState({ curr: '', loct: '' })
    const [obj, setObj] = useState({ curr: '', loct: '' })
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState('Kolhapur')

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {

            const { data } = await axios.get(`http://api.weatherstack.com/current?access_key=62f775534a6ec04ac0d4da8ee7a23518&query=${search}`);
            console.log(data);
            setObj({ curr: data.current, loct: data.location })
            console.log(obj);

        } catch (error) {
            return error.message
        }
    }

    function handleSearch() {
        setCity(search)
        console.log(obj);
        getData()
    }

    return (
        <div className='inner_div'>
            <div className="left_menu p-4">
                <div className='d-flex flex-column align-items-center position-relative'>
                    <IconButton className='position-absolute end-0 top-0' onClick={() => { handleSearch() }}>
                        <SearchRoundedIcon fontSize='small' />
                    </IconButton>
                    <input type="search" placeholder='Search City' className='form-control mb-4 rounded-5' onChange={(e) => { setSearch(e.target.value) }} />
                    <img className='w-75 h-75 rounded-circle' src='https://cdn-icons-png.flaticon.com/512/1779/1779940.png'  alt="" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }} />
                </div>

                <div className='d-flex'>
                    <h1 className='mb-0'>{obj.curr.temperature}</h1><span><sup>oC</sup></span>
                </div>
                <p className='fw-semibold mb-0'>{new Date(obj.loct.localtime).toLocaleString("en", { weekday: "long" })} {new Date(obj.loct.localtime).toLocaleTimeString()}</p>
                {/* <span className='fw-lighter'>12.15</span> */}

                <div className='d-flex flex-column py-3 px-2' style={{ fontWeight: "600" }}>
                    <small className='float-start mb-1'><LensBlurRoundedIcon fontSize='small' /> Mostly Rainy</small>
                    <small className='float-end'><LensBlurRoundedIcon fontSize='small' /> Rainy - 30%</small>
                </div>

                <div className='py-3 px-4 rounded-4 d-flex flex-column justify-content-center' style={{ background: '#6190e8', background: '-webkit-linear-gradient(to right, #6190e8, #a7bfe8)', background: 'linear-gradient(to right, #6190e8, #a7bfe8)', color: "#fff", fontWeight: "600" }}>
                    <h5 className='mb-1'>{obj.loct.name}</h5>
                    <p className='mb-0'>{obj.loct.region}, {obj.loct.country}</p>
                </div>

            </div>
            <div className="right_menu p-4 ">
                <span className='fw-semibold mb-3' style={{ fontFamily: "Roboto, sans-serif", fontSize: '1.3rem', letterSpacing: '.8px' }}>Today</span>
                <div className='d-flex justify-content-evenly align-items-center'>
                    <div className='day_card border p-3 rounded-4'>
                        <small>Sun</small>
                        <img className='w-75' src="https://cdn-icons-png.flaticon.com/512/1779/1779980.png" alt="" />
                        <small>15 <sup>o</sup> -3 <sup>o</sup></small>
                    </div>
                    <div className='day_card border p-3 rounded-4'>
                        <small>Sun</small>
                        <img className='w-75' src="https://cdn-icons-png.flaticon.com/512/1779/1779980.png" alt="" />
                        <small>15 <sup>o</sup> -3 <sup>o</sup></small>
                    </div>
                    <div className='day_card border p-3 rounded-4'>
                        <small>Sun</small>
                        <img className='w-75' src="https://cdn-icons-png.flaticon.com/512/1779/1779980.png" alt="" />
                        <small>15 <sup>o</sup> -3 <sup>o</sup></small>
                    </div>
                    <div className='day_card border p-3 rounded-4'>
                        <small>Sun</small>
                        <img className='w-75' src="https://cdn-icons-png.flaticon.com/512/1779/1779980.png" alt="" />
                        <small>15 <sup>o</sup> -3 <sup>o</sup></small>
                    </div>
                    <div className='day_card border p-3 rounded-4'>
                        <small>Sun</small>
                        <img className='w-75' src="https://cdn-icons-png.flaticon.com/512/1779/1779980.png" alt="" />
                        <small>15 <sup>o</sup> -3 <sup>o</sup></small>
                    </div>
                    <div className='day_card border p-3 rounded-4'>
                        <small>Sun</small>
                        <img className='w-75' src="https://cdn-icons-png.flaticon.com/512/1779/1779980.png" alt="" />
                        <small>15 <sup>o</sup> -3 <sup>o</sup></small>
                    </div>
                    <div className='day_card border p-3 rounded-4'>
                        <small>Sun</small>
                        <img className='w-75' src="https://cdn-icons-png.flaticon.com/512/1779/1779980.png" alt="" />
                        <small>15 <sup>o</sup> -3 <sup>o</sup></small>
                    </div>
                </div>
                <span className='fw-semibold my-3 ' style={{ fontFamily: "Roboto, sans-serif", fontSize: '1.3rem', letterSpacing: '.8px' }}>Today's Highlights</span>
                <div className='week_info d-flex justify-content-evenly align-items-streach flex-wrap'>
                    <div className='highlight_card px-4 py-3 rounded-4'>
                        <small className='fw-semibold'>UV Index</small>
                        <h3 className='mt-2'>{obj.curr.uv}</h3>
                    </div>
                    <div className='highlight_card px-4 py-3 rounded-4'>
                        <small className='fw-semibold'>Wind Status</small>
                        <h3 className='mt-2'>{obj.curr.wind_kph} <small><sub>km/hr</sub></small></h3>
                        <p className='m-0'>{obj.curr.wind_dir}</p>
                    </div>
                    <div className='highlight_card px-4 py-3 rounded-4'>
                        <small className='fw-semibold'>Wind Status</small>
                        <h3 className='mt-2'>7.70 <small><sub>km/hr</sub></small></h3>
                        <p className='m-0'>Direction</p>
                    </div>
                    <div className='highlight_card px-4 py-3 rounded-4'>
                        <small className='fw-semibold'>Humidity</small>
                        <h3 className='mt-2'>{obj.curr.humidity}</h3>
                        <p className='m-0'>Direction</p>
                    </div>
                    <div className='highlight_card px-4 py-3 rounded-4'>
                        <small className='fw-semibold'>Visibility</small>
                        <h3 className='mt-2'>{obj.curr.vis_km} <small><sub>km/hr</sub></small></h3>
                        <p className='m-0'>Average</p>
                    </div>
                    <div className='highlight_card px-4 py-3 rounded-4'>
                        <small className='fw-semibold'>Wind Status</small>
                        <h3 className='mt-2'>7.70 <small><sub>km/hr</sub></small></h3>
                        <p className='m-0'>Direction</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Show
