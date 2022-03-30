import React,{Component,useEffect} from 'react';

function Footer(){
    return(
        <div className="footerWeb">
        <div className="FWimage">
            <a><img className="FWimage2" width="142" alt="image not available"
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" /></a>
        </div>
        <div className="FWcr">© 2022 Swiggy</div>
        <div className="FWsocial">
            <a className="facebook" href="https://www.facebook.com/swiggy.in" target="_blank">
                <img className="" width="24" height="24" alt=""
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc" />
            </a>
            <a className="pinterest" href="https://pinterest.com/swiggyindia" target="_blank">
                <img className="" width="24" height="24" alt=""
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd" />
            </a>
            <a className="insta" href="https://instagram.com/swiggyindia/" target="_blank">
                <img className="" width="24" height="24" alt=""
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh" />
            </a>
            <a className="twitter" href="https://twitter.com/swiggy_in" target="_blank">
                <img className="" width="24" height="24" alt=""
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv" />
            </a>
        </div>

    </div>
    );
}



export default Footer;