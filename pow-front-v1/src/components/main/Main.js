import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAccount } from '../../axios/Axios';
import * as s from './style';

const Main = () => {
    const IMG_BASEURL="https://ehddkfl.herokuapp.com";
    const [data, setData] = useState();
    const history = useHistory()

    const clubClick = (id) => {
        history.push(`/club/${id}`)
    }

    useEffect(()  => {
        getAccount().then((res) => {
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
                    data && data.map((res, index) => {
                        console.log(res)
                        return (<s.Club onClick={() => clubClick(res.id)} key={index}>
                        <img src={`${IMG_BASEURL}/public/profiles/${res.profile_path}`} alt=""/>
                    </s.Club>)
                    })
                }
            </s.Center>
        </s.Main>
    )
}

export default Main;
