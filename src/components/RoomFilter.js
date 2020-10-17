import React from 'react'
import {useContext} from 'react'
import { RoomContext } from '../context'
import Title from './title'

const getUnique = (items, value) =>{
    return [... new Set(items.map(item=>item[value]))];
};

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {handleChange, type, capacity, price, maxPrice, minPrice, maxSize, minSize, pets,breakfast}= context;
    // for unique type
    let types = getUnique(rooms,"type");
    types = ["all",...types];
    types = types.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    // for unique capacity
    let people = getUnique(rooms, "capacity");
    people = people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="Search room" />
            <form className="filter-form"> 
                <div className="form-group">
                    <label htmlFor="type">Room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
                </div>
                <div className="form-group">    
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{people}</select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">price ${price}</label>
                    <input type="range" min={minPrice} max={maxPrice} name="price" value={price} id="price" className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="size">range</label>
                    <div className="size-inputs">
                        <input type="number" id="size" name="minSize" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" id="size" name="maxSize" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form> 
        </section>
    )
}
