import React from 'react';
import { useState } from 'react';
import Card from './Card';

const Cards = () => {


    const Users = [
        {
            id: "0",
            recipie: "Pizza",
            calories: "you have consumed 56 cals today"
        },
        {
            id: "1",
            recipie: "Burger",
            calories: "you have consumed 69 cals today"
        },
        {
            id: "2",
            recipie: "Coke",
            calories: "you have consumed 500 cals today"
        },
        {
            id: "3",
            recipie: "Browne",
            calories: "you have consumed 180 cals today"
        },
        {
            id: "4",
            recipie: "Fried Rice",
            calories: "you have consumed 90 cals today"
        },
        {
            id: "5",
            recipie: "Lassania",
            calories: "you have consumed 200 cals today"
        },
        {
            id: "6",
            recipie: "Pani Puri",
            calories: "you have consumed 10 cals today"
        },
    ]



    return (
        <div className="Cards-container">
            {/* <div>
                <Card recipie={Users[0].recipie} calories={Users[0].calories} id={Users[0].id} />
                <Card recipie={Users[1].recipie} calories={Users[1].calories} id={Users[1].id} />
                <Card recipie={Users[2].recipie} calories={Users[2].calories} id={Users[2].id} />
                <Card recipie={Users[3].recipie} calories={Users[3].calories} id={Users[3].id} />
                <Card recipie={Users[4].recipie} calories={Users[4].calories} id={Users[4].id} />
                <Card recipie={Users[5].recipie} calories={Users[5].calories} id={Users[5].id} />
                <Card recipie={Users[6].recipie} calories={Users[6].calories} id={Users[6].id} />
            </div> */}

            <div>
                {list.map((item) => (
                    <Card recipie={item.recipie} calories={item.calories} id={item.id} list={list} setList={setList}/>
                ))}
            </div>
        </div>
    )
}

export default Cards;
