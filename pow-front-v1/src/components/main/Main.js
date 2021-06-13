import React, { useEffect, useState } from 'react';
import { getAccountPicture } from '../../axios/Axios';
import * as s from './style';

const Main = () => {
    const IMG_BASEURL="https://ehddkfl.herokuapp.com";
    const [data, setData] = useState();

    useEffect(()  => {
        getAccountPicture().then((res) => {
            setData(res.data.clubs)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    // console.log(data[0].profilePath)
    return(
        <s.Main>
            <s.Center>
                {
                    data && data.map((res) => {
                        console.log(res)
                        return (<s.Club key={res.name}>
                        <img src={`${IMG_BASEURL}/public/profiles/${res.profilePath}`} alt=""/>
                    </s.Club>)
                    })
                }
            </s.Center>
        </s.Main>
    )
}

export default Main;
