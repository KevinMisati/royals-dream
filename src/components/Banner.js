import React from 'react'
import classes from "./banner.module.css"
const Banner = () => {
return (
    <div className={classes["banner-container"]}>
        <div className={classes.banner}>
            <div className={classes.title}>
                <h1>WELCOME TO HOWRAH BRIDGE KOLKATA</h1>
                <p>Lorem Ipsum is simply of the printing and industry.</p>
            </div>
            <div className={classes["search-container"]}>
                <div className={classes.search}>
                    
                    <div className={classes["first-part"]}>
                            <div class={classes["select-option"]}>
                            <select className={classes["my-select"]}>
                                <option>search</option>
                                <option>Yogesh singh</option>
                                <option>Sonarika Bhadoria</option>
                                <option>Anil Singh</option>
                                <option>Vishal Sahu</option>
                                <option>Mayank Patidar</option>
                                <option>Vijay Mourya</option>
                                <option>Rakesh sahu</option>
                            </select>
                        </div>

                        <div class={classes["select-option"]}>
                            <select className={classes["my-select"]}>
                                <option>search</option>
                                <option>Yogesh singh</option>
                                <option>Sonarika Bhadoria</option>
                                <option>Anil Singh</option>
                                <option>Vishal Sahu</option>
                                <option>Mayank Patidar</option>
                                <option>Vijay Mourya</option>
                                <option>Rakesh sahu</option>
                            </select>
                        </div>

                        <div class={classes["select-option"]}>
                            <select className={`${classes["my-select"]} ${classes["my-select-last"]}`}>
                                <option>search</option>
                                <option>Yogesh singh</option>
                                <option>Sonarika Bhadoria</option>
                                <option>Anil Singh</option>
                                <option>Vishal Sahu</option>
                                <option>Mayank Patidar</option>
                                <option>Vijay Mourya</option>
                                <option>Rakesh sahu</option>
                            </select>
                        </div>

                    </div>
                        
                    <div className={classes["second-part"]}>

                        <div class={classes["select-option"]}>
                            <select className={classes["my-select"]}>
                                <option>search</option>
                                <option>Yogesh singh</option>
                                <option>Sonarika Bhadoria</option>
                                <option>Anil Singh</option>
                                <option>Vishal Sahu</option>
                                <option>Mayank Patidar</option>
                                <option>Vijay Mourya</option>
                                <option>Rakesh sahu</option>
                            </select>
                        </div>
                        <div class={classes["form-control"]}>
                            <div className={classes.dates}>
                                <div className={classes["select-option"]}>
                                    <input type="text" class="formdate-input form-control" placeholder="From Date" />
                                </div>
                                <div className={classes["select-option"]}>
                                    <input type="text" class="formdate-input " placeholder="To Date" />
                                </div>
                            </div>
                        </div>

                    <div className={classes["third-part"]}>
                        <div class={classes["select-option"]}>
                            <select className={classes["my-select"]}>
                                <option>search</option>
                                <option>Yogesh singh</option>
                                <option>Sonarika Bhadoria</option>
                                <option>Anil Singh</option>
                                <option>Vishal Sahu</option>
                                <option>Mayank Patidar</option>
                                <option>Vijay Mourya</option>
                                <option>Rakesh sahu</option>
                            </select>
                        </div>

                        <div class={classes["select-option"]}>
                            <select className={classes["my-select"]}>
                                <option>search</option>
                                <option>Yogesh singh</option>
                                <option>Sonarika Bhadoria</option>
                                <option>Anil Singh</option>
                                <option>Vishal Sahu</option>
                                <option>Mayank Patidar</option>
                                <option>Vijay Mourya</option>
                                <option>Rakesh sahu</option>
                            </select>
                        </div>
                    </div>
                    
                
                        <button className={classes["filter-search-btn"]}><i class="fa fa-search" aria-hidden="true"></i></button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

)
}

export default Banner