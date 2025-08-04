import React from 'react'
import { Row, Col } from 'react-bootstrap'

const BuyNow = () => {
    const data = [
        {
            "id": 1,
            "title": "v-neck-kurti",
            "brand":"",
            "fit":"regular", //regular or slim
            "price": 599,
            "fabric":"cotton", //cotton or georget
            "sleeve":"fullSleeve",
            "ocassion":"formal",
            "category": "tshirt",
            "other":"",
            "idealFor": "male",
            "size":[
                "M","L"
            ],
            "images": [
                "vNeck1.webp",
                "vNeck2.webp",
                "vNeck3.webp",
                "vNeck4.webp"
            ]
        },
        {
            "id": 2,
            "title": "v-neck-kurti",
            "price": 899
        },
        {
            "images": [
                "rasrang1.webp",
                "rasrang2.webp",
                "rasrang3.webp",

            ]
        },
        {
            "id": 3,
            "title": "v-neck-kurti",
            "price": 299
        },
        {
            "images": [
                "sideCut1.webp",
                "sideCut2.webp",
                "sideCut3.webp",

            ]
        },
        {
            "id": 4,
            "title": "v-neck-kurti",
            "price": 699
        },
        {
            "images": [
                "vNeck1.webp",
                "vNeck2.webp",
                "vNeck3.webp",
                "vNeck4.webp"
            ]
        },
        {
            "id": 5,
            "title": "v-neck-kurti",
            "price": 399
        },
        {
            "images": [
                "vNeck1.webp",
                "vNeck2.webp",
                "vNeck3.webp",
                "vNeck4.webp"
            ]
        },
        {
            "id": 6,
            "title": "v-neck-kurti",
            "price": 899
        },
        {
            "images": [
                "vNeck1.webp",
                "vNeck2.webp",
                "vNeck3.webp",
                "vNeck4.webp"
            ]
        },
        {
            "id": 7,
            "title": "v-neck-kurti",
            "price": 999
        },
        {
            "images": [
                "vNeck1.webp",
                "vNeck2.webp",
                "vNeck3.webp",
                "vNeck4.webp"
            ]
        },
        {
            "id": 8,
            "title": "v-neck-kurti",
            "price": 599
        },
        {
            "images": [
                "vNeck1.webp",
                "vNeck2.webp",
                "vNeck3.webp",
                "vNeck4.webp"
            ]
        }



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

