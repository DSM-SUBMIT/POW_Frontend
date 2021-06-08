import React from 'react';
import * as s from './style';
import rosie from '../img/rosie.JPG';

const Main = () => {
    return(
        <s.Main>
            <s.Center>
                <s.Club>
                    <img src={rosie} alt=""/>
                </s.Club>
                <s.Club/>
                <s.Club/>
                <s.Club/>
                <s.Club>
                    <img src={rosie} alt=""/>
                </s.Club>
                <s.Club/>
                <s.Club/>
                <s.Club/><s.Club>
                    <img src={rosie} alt=""/>
                </s.Club>
                <s.Club/>
                <s.Club/>
                <s.Club/>
            </s.Center>
        </s.Main>
    )
}

export default Main;
