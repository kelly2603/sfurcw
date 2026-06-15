import React from 'react'
import "./SponsorsStyles.css"
import hmr_img from "./sponsor_images/humaninmotion_img.png"
import slw_img from "./sponsor_images/SolidWorks-Logo.png"
import alt_img from "./sponsor_images/altium_img.png"
import qca_img from "./sponsor_images/qca_img.png"
import man_img from "./sponsor_images/manifold_img.png"
import ram_img from "./sponsor_images/rampxEnegery_img.png"
import mse_img from "./sponsor_images/sfu_mse_img.png"
import fas_img from "./sponsor_images/sfu_fas_img.png"
import hoto_img from "./sponsor_images/hoto_img.png"
import asc_img from "./sponsor_images/asc_img.jpg"
import kac1_img from "./sponsor_images/kac1_img.png"


const Sponsors = () => {

    return (
        <div className='section-container center'>
            {/* <h4>Sponsors</h4> */}
            <p className='subtitle'>Thank you to our sponsors for making all our work possible!</p>
            <div className="sponsors-container">
                <div className="sp">
                    <a href="https://humaninmotion.com/" target="_blank">
                        <img src={hmr_img} alt="HumanInMotion" />
                    </a>
                </div>

                <div className="sp">
                    <a href="https://www.solidworks.com/" target="_blank">
                        <img src={slw_img} alt="SolidWorks" />
                    </a>
                </div>

                <div className="sp">
                    <a href="https://www.altium.com/?srsltid=AfmBOopx6Znlxsxddsbbg2YPwp44bgKtvktkbAzHMs9hzqPzF8pxzezy" target="_blank">
                        <img src={alt_img} alt="Altium" />
                    </a>
                </div>
                
                <div className="sp">
                    <a href="https://qcasystems.com/" target="_blank">
                        <img src={qca_img} alt="QCASystems" />
                    </a>
                </div>

                <div className="sp">
                    <a href="https://www.manifold.com.co/" target="_blank">
                        <img src={man_img} alt="ManifoldTech" />
                    </a>
                </div>
                
                <div className="sp">
                    {/* <a href="https://www.rampxenergy.com/" target="_blank">
                        
                    </a> */}
                    <img src={ram_img} alt="RampXEnergy" />
                </div>

                <div className="sp">
                    <a href="https://www.sfu.ca/fas/schools/mechatronic-systems-engineering.html" target="_blank">
                        <img src={mse_img} alt="SFUMSE" />
                    </a>
                </div>

                <div className="sp">
                    <a href="https://www.sfu.ca/fas.html" target="_blank">
                        <img src={fas_img} alt="SFUFAS" />
                    </a>
                </div>

                <div className="sp">
                    <a href="https://hototools.com/" target="_blank">
                        <img src={hoto_img} alt="HOTO" />
                    </a>
                </div>

                <div className="sp">
                    <a href="https://www.astraconcrete.net/" target="_blank">
                        <img src={asc_img} alt="AstraConcreteLTD" />
                    </a>
                </div>

                <div className="sp">
                    <a href="https://www.kadantcarmanah.com/en" target="_blank">
                        <img src={kac1_img} alt="KadantCarmanah" />
                    </a>
                </div>
            </div>
            <a href="https://donate.sfu.ca/page/149582/donate/1" target="_blank" rel="noopener noreferrer" className="btn">Donate Now</a>

        </div>

    )
}


export default Sponsors