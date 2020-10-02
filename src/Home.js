import React from 'react';
import "./Home.css";
import Product from "./product";


function Home() {
    return (
        <div className="home">
           <img className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/ServiceMktg/1500x600_Hero-Tall_np._CB403152874_.jpg" 
           alt=""
           />
        <div className="home_row">
        <Product
        id="12321341"
        titile="SSapiens: A Brief History of Humankinds"
        price={700}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/41yu2qXhXXL._SX324_BO1,204,203,200_.jpg"
        />
        <Product
        id="12341341"
        titile="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
        price={3700}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/619iTNHSCGL._SL1500_.jpg"
        />
        </div>

        <div className="home_row">
        <Product
        id="1232341"
        titile="
        Roll over image to zoom in
        JBL Flip 3 Stealth Waterproof Portable Bluetooth Speaker with Rich Deep Bass (Black), Without Mic"
        price={300}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/81DRhqE04BL._SL1500_.jpg"
        />
        <Product
        id="12321341"
        titile="HONOR Magic Watch 2 (46mm, Charcoal Black) 14-Days Battery, SpO2, BT Calling & Music Playback, AMOLED Touch Screen, Personalized Watch Faces, 15 Workout Modes, Sleep & HR Monitor, Smart Assistant"
        price={200}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/81nzfMLOgaL._SL1500_.jpg"
        />
        <Product
        id="12321341"
        titile="SSapiens: A Brief History of Humankinds"
        price={700}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/41yu2qXhXXL._SX324_BO1,204,203,200_.jpg"
        />
        </div>

        <div className="home_row">
        <Product
        id="12321341"
        titile="Samsung 138 cm (55 Inches) Wondertainment Series Ultra HD LED Smart TV UA55TUE60AKXXL (Titan Gray) (2020 model)"
        price={700}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/81a5%2BITwX4L._SL1500_.jpg"
        />
       
        </div>



        </div>
    )
}

export default Home
