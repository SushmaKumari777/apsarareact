import React from 'react'
import { Row, Col } from 'react-bootstrap'

const BuyNow = () => {
    const data = [
        {
            "id": 1,
            "title": "v-neck-kurti",
            "price1": 599,
            "price2":699,
            "brand": "",
            "fit": "regular", //regular or slim
            "fabric": "cotton", //cotton or georget
            "sleeve": "fullSleeve",
            "ocassion": "formal",
            "category": "tshirt",
            "other": "",
            "idealFor": "women", //men or women
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 48,
            "size": [
                "M", "L"
            ],
            "images": [
                "vNeck1.webp",
                "vNeck2.webp",
                "vNeck3.webp",
                "vNeck4.webp"
            ],
            "reviews": [
                {
                    "rating": 3,
                    "comment": "Would not recommend!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Eleanor Collins",
                    "reviewerEmail": "eleanor.collins@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very satisfied!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Lucas Gordon",
                    "reviewerEmail": "lucas.gordon@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Highly impressed!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Eleanor Collins",
                    "reviewerEmail": "eleanor.collins@x.dummyjson.com"
                }
            ]
        },
        {
            "id": 2,
            "title": "v-neck-kurti",
            "price1": 899,
            "price2":999,
            "brand": "",
            "fit": "regular", //regular or slim
            "fabric": "cotton", //cotton or georget
            "sleeve": "fullSleeve",
            "ocassion": "formal",
            "category": "tshirt",
            "other": "",
            "idealFor": "male",
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 48,
            "size": [
                "XS", "S", "M", "L", "XL", "XXL"
            ],
            "sizeChart":[
                {
                    "size":"",
                    "bust":"",
                    "shoulder":"",
                    "bottomWaist":"",
                    "bottomLength":"",
                    "topLength":"",
                    

                }
            ],
            "images": [
                "",
                "",
                "",
                ""
            ],
            "reviews": [
                {
                    "rating": 3,
                    "comment": "",
                    "date": "",
                    "reviewerName": "",
                    "reviewerEmail": ""
                },
                {
                    "rating": 4,
                    "comment": "",
                    "date": "",
                    "reviewerName": "",
                    "reviewerEmail": ""
                },
                {
                    "rating": 5,
                    "comment": "",
                    "date": "",
                    "reviewerName": "",
                    "reviewerEmail": ""
                }
            ]
        },
       
        {
            "id": 3,
            "title": "v-neck-kurti",
            "price": 299
        },
       
        {
            "id": 4,
            "title": "v-neck-kurti",
            "price": 699
        },
        
        {
            "id": 5,
            "title": "v-neck-kurti",
            "price": 399
        },
       
        {
            "id": 6,
            "title": "v-neck-kurti",
            "price": 899
        },
      
        {
            "id": 7,
            "title": "v-neck-kurti",
            "price": 999
        },
       
        {
            "id": 8,
            "title": "v-neck-kurti",
            "price": 599
        },
      



    ]
    return (

        <div>
            <section>
                <Row>
                    {
                        data.map((product) => {
                            <img src={product.images} />
                        }

                        )
                    }
                </Row>
            </section>
        </div>
    )
}

export default BuyNow

