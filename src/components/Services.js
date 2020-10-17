import { logRoles } from '@testing-library/react'
import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './title'


export default class Services extends Component {
    state={
        services:[
            {
                icons:<FaCocktail/>,
                title:"free cocktails",
                info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            },
            {
                icons:<FaHiking/>,
                title:"Endless hiking",
                info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            },
            {
                icons:<FaShuttleVan/>,
                title:"free shuttle",
                info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            },
            {
                icons:<FaBeer/>,
                title:"strongest beer",
                info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icons}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>     
            </section>
        )
    }
}
