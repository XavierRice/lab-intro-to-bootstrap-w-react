import { useState } from "react";
import images from "../src/images";


export default function Cards({ spot }) {

    console.log(`images.${spot.location}`, images)

    const [postButton, setPostButton] = useState(false);

    return (

        postButton ? (

           
                <div className="card">
                    <img src= {images[`${spot.location}`]} className="card-img-top" alt={spot.location} />
                    <div className="card-body">
                        <h5 className="card-title">{spot.title}</h5>
                        <p className="card-text">{spot.content}</p>
                        <button className="btn btn-primary" onClick={(se) => setPostButton(!postButton)}>{postButton ? "Go to post" : "close"}</button>
                    </div>
                </div>
           

        ) : (
            
                <div className="card">
                    <img src={images[`${spot.location}`]} className="card-img-top" alt={spot.location} />
                    <div className="card-body">
                        <h5 className="card-title">{spot.title}</h5>
                        <h2>{spot.location}</h2>
                        <p className="card-text text-truncate">{spot.content}</p>
                        <button className="btn btn-primary" onClick={(se) => setPostButton(!postButton)}>{!postButton ? "Go to Post" : "Close"}</button>
                    </div>
                </div>
            
        )
    )




}

/*  {
    "id": "63ebd220e80158f7948b8cb4",
    "title": "A Sunny Day in Seattle",
    "content": "Amet proident exercitation minim sint. Culpa pariatur Lorem culpa cupidatat pariatur pariatur sint dolore deserunt. Sint laboris reprehenderit elit duis. Elit dolore laborum elit est cupidatat ipsum Lorem aliqua. Ad ut consequat ad nostrud reprehenderit est laborum pariatur excepteur quis est.\n\nExcepteur proident elit ipsum fugiat. Laboris in Lorem tempor aliqua pariatur nisi eiusmod elit ipsum qui irure in ea laboris. Elit officia sunt ea pariatur laboris voluptate. Ad labore qui nisi Lorem exercitation duis consectetur nulla irure proident qui do nulla excepteur.\n\nEx reprehenderit aliquip id dolor fugiat aute. Est est duis do cupidatat consequat dolore irure. Quis amet anim voluptate minim minim consequat ipsum.",
    "location": "Seattle",
    "createdAt": "2022-04-11T02:58:15.102Z",
    "updatedAt": "2022-04-12T02:58:15.102Z"
  },
  */