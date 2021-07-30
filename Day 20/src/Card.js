import React, {useState} from 'react';

const users = [
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




const Card = () => {
    
    const [list, setList] = useState(users);


    
const deleteItem = (id) => {
    console.log(id)
    const updateList = list.filter((elem, index) => {
        return index!==id;
    })
    setList(updateList)
}

        // console.log(items)
        return (

            <div className="main">
                {
                    list.map((items, index) => {
                        return (
                        <div className="card-container" key={index}>
                        <div className="wrapper-card">
                            <div className="Card-container">
                                <div className="card-card">
                                    <h2 className="card-head">{items.recipie}</h2>
                                    <button className="btn" onClick={()=> deleteItem(index)}>Delete</button>
                                    <p className="card-para">{items.calories}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        )
                    })
                }

            </div>

        )
        
 
}

export default Card;