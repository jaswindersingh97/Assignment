import React, { useState } from 'react'
import Style from './ProductPage.module.css';
import NavBar from './../Components/NavBar';
function ProductPage({Product}) {
    const [selectedImg,setSelectedImg]=useState(0);
    console.log(Product)
  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <NavBar/>
      </div>
      <div className={Style.body}>
        <div className={Style.left}>
            <div className={Style.Images}>
                <div className={Style.imgleft}>
                    {Product.product_photos.map((item,index)=>(
                        <div key={index} className={Style.clickingImg}>
                            <img onClick={()=>setSelectedImg(index)} src={item} alt='clickingImage'/>
                        </div>
                    ))}
                </div>
                <div className={Style.imgright}>
                    <div className={Style.fullImg}>
                        <img src={Product.product_photos[selectedImg]}></img>
                    </div>
                </div>
            </div>
            <div className={Style.buttons}>
                <button>buyNow</button>
                <button>Add To Cart</button>
            </div>
        </div>
        <div className={Style.right}>
            <h1>{Product.product_title}</h1>
            <span className={Style.rating}>{Product.product_rating}</span>
            <span className={Style.Price}>{Product.offer.price}</span>
            <div className={Style.description}>
                <h3>description</h3>
                <p>{Product.product_description}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
