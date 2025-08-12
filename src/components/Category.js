import React from 'react'
import { Container,Row,Col,Link,Card,Button} from 'react-bootstrap'

const Category = () => {
    const data=[
       {
        "id":1,
      "title": "Laal Bijli - V neck Strap Kurti",
      "price1": 599,
      "price2": 699,
      "brand": "",
      "fit": "regular", //regular or slim
      "fabric": "cotton", //cotton or georget
      "sleeve": "fullSleeve", //half and full sleeve
      "ocassion": "formal",
      "category": "kurti",
      "other": "",
      "idealFor": "women", //men or women
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 2,
      "discountedPrice": 499,
      "discountedPercent": "10%",
      "coloursAvailable": "",
      "Shipping fee": "Free",
      "size": [
         "XS", "S", "M", "L", "XL", "XXL"
      ],
      "images": [
        "p101.webp",
        "p102.webp",
        "p103.webp",
        "p104.webp"
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
      "id":2,
      "title": "Gulabiya (गुलाबिया) Square Neck Bell Sleeves Kurti",
      "Description": "",
      "price1": 899,
      "price2": 999,
      "brand": "",
      "fit": "Regular", //regular or slim
      "fabric": "Cotton", //cotton or georget
      "sleeve": "FullSleeve", //full or half
      "pattern": "Printed",
      "neckType": "",
      "ocassion": "Casual", //or office wear
      "category": "Kurti",
      "other": "",
      "idealFor": "women", //women or men
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 1,
      "discountedPrice": 599,
      "discountedPercent": "50%",
      "coloursAvailable": "",
      "Shipping fee": "Free",
      "rating": [
        {
          "average": ""
        }
      ],
      "size": [
        "XS", "S", "M", "L", "XL", "XXL"
      ],
      "sizeChart": [
        {
          "size": "",
          "bust": "",
          "shoulder": "",
          "bottomWaist": "",
          "bottomLength": "",
          "topLength": "",
        }
      ],
      "images": [
        "p201.webp",
        "p202.webp",
        "p203.webp",
        "p204.webp",
        "p205.webp"
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
        "id":3,
        "title": "Ziva Pink Peplum Top",
        "Description": "",
        "price1": 499,
        "price2": 299,
        "brand": "",
        "fit": "Regular", //regular or slim
        "fabric": "Cotton", //cotton or georget
        "sleeve": "FullSleeve", //full or half
        "pattern": "Printed",
        "neckType": "",
        "ocassion": "Casual", //or office wear
        "category": "Kurti",
        "other": "",
        "idealFor": "women", //women or men
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "discountedPrice": 399,
        "discountedPercent": "10%",
        "coloursAvailable": "",
        "Shipping fee": "Fre",
        "rating": [
          {
            "average": ""
          }
        ],
        "size": [
          "XS", "S", "M", "L", "XL", "XXL"
        ],
        "sizeChart": [
          {
            "size": "",
            "bust": "",
            "shoulder": "",
            "bottomWaist": "",
            "bottomLength": "",
            "topLength": "",
          }
        ],
        "images": [
          "p301.webp",
          "p302.webp",
          "p303.webp",
          "p304.webp"
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
        "id":4,
        "title": "Vrinda - Square neck Kurti",
        "Description": "",
        "price1": 999,
        "price2": 999,
        "brand": "",
        "fit": "Regular", //regular or slim
        "fabric": "Cotton", //cotton or georget
        "sleeve": "FullSleeve", //full or half
        "pattern": "Printed",
        "neckType": "",
        "ocassion": "Casual", //or office wear
        "category": "Kurti",
        "other": "",
        "idealFor": "women", //women or men
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "discountedPrice": 599,
        "discountedPercent": "50%",
        "coloursAvailable": "",
        "Shipping fee": "Fre",
        "rating": [
          {
            "average": ""
          }
        ],
        "size": [
          "XS", "S", "M", "L", "XL", "XXL"
        ],
        "sizeChart": [
          {
            "size": "",
            "bust": "",
            "shoulder": "",
            "bottomWaist": "",
            "bottomLength": "",
            "topLength": "",
          }
        ],
        "images": [
          "p401.webp",
          "p402.webp",
          "p403.webp",
          "p404.webp"
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
        "id":5,
        "title": "Preet Bell Sleeve Square Neck Kurti",
        "Description": "",
        "price1": 799,
        "price2": 999,
        "brand": "",
        "fit": "Regular", //regular or slim
        "fabric": "Cotton", //cotton or georget
        "sleeve": "FullSleeve", //full or half
        "pattern": "Printed",
        "neckType": "",
        "ocassion": "Casual", //or office wear
        "category": "Kurti",
        "other": "",
        "idealFor": "women", //women or men
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "discountedPrice": 599,
        "discountedPercent": "50%",
        "coloursAvailable": "",
        "Shipping fee": "Fre",
        "rating": [
          {
            "average": ""
          }
        ],
        "size": [
          "XS", "S", "M", "L", "XL", "XXL"
        ],
        "sizeChart": [
          {
            "size": "",
            "bust": "",
            "shoulder": "",
            "bottomWaist": "",
            "bottomLength": "",
            "topLength": "",
          }
        ],
        "images": [
          "p501.webp",
          "p502.webp",
          "p503.webp",
          "p504.webp"
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
        "id":6,
        "title": "Rasrang - V neck Strap Kurti",
        "price1": 199,
        "price2": 999,
        "brand": "",
        "fit": "Regular", //regular or slim
        "fabric": "Cotton", //cotton or georget
        "sleeve": "FullSleeve", //full or half
        "pattern": "Printed",
        "neckType": "",
        "ocassion": "Casual", //or office wear
        "category": "Kurti",
        "other": "",
        "idealFor": "women", //women or men
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "discountedPrice": 599,
        "discountedPercent": "50%",
        "coloursAvailable": "",
        "Shipping fee": "Fre",
        "rating": [
          {
            "average": ""
          }
        ],
        "size": [
          "XS", "S", "M", "L", "XL", "XXL"
        ],
        "sizeChart": [
          {
            "size": "",
            "bust": "",
            "shoulder": "",
            "bottomWaist": "",
            "bottomLength": "",
            "topLength": "",
          }
        ],
        "images": [
          "p601.webp",
          "p602.webp",
          "p603.webp",
          "p604.webp",
          "p605.webp",
          "p606.webp"
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
        "id":7,
        "title": "Noorika Full Sleeves Peplum Top",
        "price1": 899,
        "price2": 999,
        "brand": "",
        "fit": "Regular", //regular or slim
        "fabric": "Cotton", //cotton or georget
        "sleeve": "FullSleeve", //full or half
        "pattern": "Printed",
        "neckType": "",
        "ocassion": "Casual", //or office wear
        "category": "Kurti",
        "other": "",
        "idealFor": "women", //women or men
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "discountedPrice": 599,
        "discountedPercent": "50%",
        "coloursAvailable": "",
        "Shipping fee": "Fre",
        "rating": [
          {
            "average": ""
          }
        ],
        "size": [
          "XS", "S", "M", "L", "XL", "XXL"
        ],
        "sizeChart": [
          {
            "size": "",
            "bust": "",
            "shoulder": "",
            "bottomWaist": "",
            "bottomLength": "",
            "topLength": "",
          }
        ],
        "images": [
          "p701.webp",
          "p702.webp",
          "p703.webp",
          "p704.webp"
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
        "id":8,
        "title": "Ziva Green Peplum Top",
        "price1": 999,
        "price2": 999,
        "brand": "",
        "fit": "Regular", //regular or slim
        "fabric": "Cotton", //cotton or georget
        "sleeve": "FullSleeve", //full or half
        "pattern": "Printed",
        "neckType": "",
        "ocassion": "Casual", //or office wear
        "category": "Kurti",
        "other": "",
        "idealFor": "women", //women or men
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "discountedPrice": 599,
        "discountedPercent": "50%",
        "coloursAvailable": "",
        "Shipping fee": "Fre",
        "rating": [
          {
            "average": ""
          }
        ],
        "size": [
          "XS", "S", "M", "L", "XL", "XXL"
        ],
        "sizeChart": [
          {
            "size": "",
            "bust": "",
            "shoulder": "",
            "bottomWaist": "",
            "bottomLength": "",
            "topLength": "",
          }
        ],
        "images": [
          "p801.webp",
          "p802.webp",
          "p803.webp",
          "p804.webp"
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
        "id": 1,
        "title": "The Sagar Blue Shirt",
        
        "price1": 999,
        "price2": 999,
        "brand": "",
        "fit": "Regular", //regular or slim
        "fabric": "Cotton", //cotton or georget
        "sleeve": "FullSleeve", //full or half
        "pattern": "Printed",
        "neckType": "",
        "ocassion": "Casual", //or office wear
        "category": "Shirt",
        "other": "",
        "idealFor": "Men", //women or men
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "discountedPrice": 599,
        "discountedPercent": "50%",
        "coloursAvailable": "",
        "Shipping fee": "Free",
        "rating": [
          {
            "average": ""
          }
        ],
        "size": [
          "XS", "S", "M", "L", "XL", "XXL"
        ],
        "sizeChart": [
          {
            "size": "",
            "bust": "",
            "shoulder": "",
            "bottomWaist": "",
            "bottomLength": "",
            "topLength": "",
          }
        ],
        "images": [
          "p1001.webp",
          "p1002.webp",
          "p1003.jpg",
          "p1005.webp"
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
        "id": 2,
        "title": "The Rama Leaf Oversize Green Shirt",
        "price1": 299,
        "price2": 999,
        "brand": "",
        "fit": "Regular", //regular or slim
        "fabric": "Cotton", //cotton or georget
        "sleeve": "FullSleeve", //full or half
        "pattern": "Printed",
        "neckType": "",
        "ocassion": "Casual", //or office wear
        "category": "Shirt",
        "other": "",
        "idealFor": "Men", //women or men
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "discountedPrice": 599,
        "discountedPercent": "50%",
        "coloursAvailable": "",
        "Shipping fee": "Free",
        "rating": [
          {
            "average": ""
          }
        ],
        "size": [
          "XS", "S", "M", "L", "XL", "XXL"
        ],
        "sizeChart": [
          {
            "size": "",
            "bust": "",
            "shoulder": "",
            "bottomWaist": "",
            "bottomLength": "",
            "topLength": "",
          }
        ],
        "images": [
          "p2002.webp",
          "p2003.webp",
          "p2004.webp",
          "p2005.webp"
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
        "title": "The Neel Shirt – The Indigo Bloom",
       "price1": 399,
        "price2": 999,
        "brand": "",
        "fit": "Regular", //regular or slim
        "fabric": "Cotton", //cotton or georget
        "sleeve": "FullSleeve", //full or half
        "pattern": "Printed",
        "neckType": "",
        "ocassion": "Casual", //or office wear
        "category": "Shirt",
        "other": "",
        "idealFor": "Men", //women or men
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "discountedPrice": 599,
        "discountedPercent": "50%",
        "coloursAvailable": "",
        "Shipping fee": "Free",
        "rating": [
          {
            "average": ""
          }
        ],
        "size": [
          "XS", "S", "M", "L", "XL", "XXL"
        ],
        "sizeChart": [
          {
            "size": "",
            "bust": "",
            "shoulder": "",
            "bottomWaist": "",
            "bottomLength": "",
            "topLength": "",
          }
        ],
        "images": [
          "p3001.webp",
          "p3002.webp",
          "p3003.jpg",
          "p3005.webp"
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
        "id": 4,
        "title": "The Mayur Green Shirt",
       "price1": 499,
        "price2": 999,
        "brand": "",
        "fit": "Regular", //regular or slim
        "fabric": "Cotton", //cotton or georget
        "sleeve": "FullSleeve", //full or half
        "pattern": "Printed",
        "neckType": "",
        "ocassion": "Casual", //or office wear
        "category": "Shirt",
        "other": "",
        "idealFor": "Men", //women or men
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "discountedPrice": 599,
        "discountedPercent": "50%",
        "coloursAvailable": "",
        "Shipping fee": "Free",
        "rating": [
          {
            "average": ""
          }
        ],
        "size": [
          "XS", "S", "M", "L", "XL", "XXL"
        ],
        "sizeChart": [
          {
            "size": "",
            "bust": "",
            "shoulder": "",
            "bottomWaist": "",
            "bottomLength": "",
            "topLength": "",
          }
        ],
        "images": [
          "p4001.webp",
          "p4002.webp",
          "p4003.jpg",
          "p4005.webp"
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
        "id": 5,
        "title": "The Cherry Red oversize shirt",
       "price1": 599,
        "price2": 999,
        "brand": "",
        "fit": "Regular", //regular or slim
        "fabric": "Cotton", //cotton or georget
        "sleeve": "FullSleeve", //full or half
        "pattern": "Printed",
        "neckType": "",
        "ocassion": "Casual", //or office wear
        "category": "Shirt",
        "other": "",
        "idealFor": "women", //women or men
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "discountedPrice": 599,
        "discountedPercent": "50%",
        "coloursAvailable": "",
        "Shipping fee": "Free",
        "rating": [
          {
            "average": ""
          }
        ],
        "size": [
          "XS", "S", "M", "L", "XL", "XXL"
        ],
        "sizeChart": [
          {
            "size": "",
            "bust": "",
            "shoulder": "",
            "bottomWaist": "",
            "bottomLength": "",
            "topLength": "",
          }
        ],
        "images": [
          "p1001.webp",
          "p1002.webp",
          "p1003.jpg",
          "p1005.webp"
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
        "id": 6,
        "title": "Blue shirt",
        "photo": "blue shirt.jpg",
        "price": 699
      },
      {
        "id": 7,
        "title": "Blue shirt",
        "price1": 999,
        "price2": 999,
        "brand": "",
        "fit": "Regular", //regular or slim
        "fabric": "Cotton", //cotton or georget
        "sleeve": "FullSleeve", //full or half
        "pattern": "Printed",
        "neckType": "",
        "ocassion": "Casual", //or office wear
        "category": "Shirt",
        "other": "",
        "idealFor": "women", //women or men
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "discountedPrice": 599,
        "discountedPercent": "50%",
        "coloursAvailable": "",
        "Shipping fee": "Free",
        "rating": [
          {
            "average": ""
          }
        ],
        "size": [
          "XS", "S", "M", "L", "XL", "XXL"
        ],
        "sizeChart": [
          {
            "size": "",
            "bust": "",
            "shoulder": "",
            "bottomWaist": "",
            "bottomLength": "",
            "topLength": "",
          }
        ],
        "images": [
          "p1001.webp",
          "p1002.webp",
          "p1003.jpg",
          "p1005.webp"
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
        "id": 8,
        "title": "Blue shirt",
       "price1": 999,
        "price2": 999,
        "brand": "",
        "fit": "Regular", //regular or slim
        "fabric": "Cotton", //cotton or georget
        "sleeve": "FullSleeve", //full or half
        "pattern": "Printed",
        "neckType": "",
        "ocassion": "Casual", //or office wear
        "category": "Shirt",
        "other": "",
        "idealFor": "women", //women or men
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 48,
        "discountedPrice": 599,
        "discountedPercent": "50%",
        "coloursAvailable": "",
        "Shipping fee": "Free",
        "rating": [
          {
            "average": ""
          }
        ],
        "size": [
          "XS", "S", "M", "L", "XL", "XXL"
        ],
        "sizeChart": [
          {
            "size": "",
            "bust": "",
            "shoulder": "",
            "bottomWaist": "",
            "bottomLength": "",
            "topLength": "",
          }
        ],
        "images": [
          "p1001.webp",
          "p1002.webp",
          "p1003.jpg",
          "p1005.webp"
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
      }
    ]
  return (
    <div>
        <section>
            <Container>
                <Row>
                {
                    data.map((category)=>{
                        return(
                            <Col md={3}>
                            {/* <Link to={'/buy/' +category.title}> */}
                              <Card style={{ width: '18rem' }}>
                                <Card.Img src={category.images} />
                                <Card.Body>
                                  <Card.Title>{category.title}</Card.Title>
                                  <Card.Text>
                                    <p>Rs.{category.price1}</p>
                                  </Card.Text>
                                  <Button variant="primary">Choose Option</Button>
                                </Card.Body>
                              </Card>
                            {/* </Link> */}
                          </Col>  
                        )
                    }

                    )
                }
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default Category