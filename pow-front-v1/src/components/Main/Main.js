import React, { Component } from 'react';
import * as s from './style';
import rosie from '../Img/rosie.JPG';
class Main extends Component {
    render() {
        return(
            <s.Main>
                <s.Center>
                    <s.Line>
                        <s.Club>
                            <img src={rosie} alt=""/>
                        </s.Club>
                        <s.Club/>
                        <s.Club/>
                        <s.Club/>
                    </s.Line>
                    <s.Line>
                        <s.Club/>
                        <s.Club/>
                        <s.Club/>
                        <s.Club/>
                    </s.Line>
                </s.Center>
            </s.Main>
        )
    }
}

export default Main;
