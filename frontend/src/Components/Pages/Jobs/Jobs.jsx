import React from "react";
import Card from '../../Shared/Card/Card';
import Sdata from '../../../Data';
const Explore = () => {
    return (
        <>
        
            <div className="container-fluid card">
                <h2>Available Jobs</h2>
                
                <div className="row inner">
                    <div className="col">
                        {Sdata.map((val) => {
                            return (
                                <Card
                                    key={val.id}
                                    productImage={val.productImage}
                                    productName={val.productName}
                                    productDescription={val.productDescription}
                                    productPrice={val.productPrice}
                                        productMadeBy={val.madeBy}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore;