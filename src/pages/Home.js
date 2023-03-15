import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from 'react';


export default function Home(){
    return(
        <main>
            <section className="containerPic">
                <img src="https://img.freepik.com/premium-photo/aerial-drone-top-view-crowd-happy-people-relax-tropical-beach-with-sunset-phuket-thailand_265993-554.jpg?w=2000" alt="beach" className="beach"/>
           </section>

            <section id="hero">
                <img src="https://cdn.shopify.com/s/files/1/0359/7611/8409/products/qy5mkx1gapk0vxwdgpto_5efc1b55-692d-4d43-a352-6e2a1dea072c_900x.jpg?v=1626116277" className="fleur" alt="fleur"/>
                <h1>Welcome to Sainte-Marie Resort!</h1>
                <p>Experience the beauty of the Caribbean at our luxurious resort. Enjoy pure indulgence, relaxation and romance at one of the most sought-after destinations in the world. Remember, the most important thing to do here is to relax! You can count on us to put your health and wellness first throughout your stay.</p>
                <ul><CustomLink to="/rooms" className="cta">Book Now</CustomLink></ul>
            </section>
    
            <section id="about">
                <img src="https://waxmd123.com/wp-content/uploads/2019/12/iStock-1133594107-a.jpg" alt="couple" className="couple"/>
                <h2>About Our Resort</h2>
                <p>Located on the white sandy beaches of the Caribbean, Sainte-Marie Resort offers guests the ultimate tropical getaway. With a variety of accommodations, delicious dining options, and a wide range of activities, there's something for everyone at our resort.</p>
                <i class="fa-regular fa-heart">Spa services</i>
                <i class="fa-solid fa-mug-saucer">In-Room Dinning</i>
                <i class="fa-regular fa-bell">24 Hour Service</i>
            </section>

            <section id="rooms">
                <h2>Accommodations</h2>
                <p>Choose from a variety of room types, each designed with your comfort in mind. All of our rooms feature private balconies with ocean views, and some even include private pools.</p>
                <img src="https://media.cntraveler.com/photos/53dad1ca6dec627b14a0502f/master/w_1024,h_768,c_limit/four-seasons-langkawi-malaysia-108963-3.jpg" alt="resort-room" className="resortroom"/>
            </section>
   
   
        </main>
 

    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}