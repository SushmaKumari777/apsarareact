import React from 'react'
import '../App.css'

import { Container, Row, Col, Card } from 'react-bootstrap'
// import wm1 from '../images/wm1.webp'
// import wm2 from '../images/wm2.webp'
// import wm3 from '../images/wm3.webp'
// import wm4 from '../images/wm4.webp'
// import m1 from '../images/m1.jpg'
// import m2 from '../images/m2.jpg'
// import m3 from '../images/m3.webp'
// import m4 from '../images/m4.webp'
// import pooh from '../images/pooh.webp'
// import naina from '../images/naina.webp'
// import geet from '../images/geet.webp'
// import aisa from '../images/aisa.webp'
// import halfstyle from '../images/half style.webp'
// import desi from '../images/desi.webp'
// import sanskari from '../images/sanskari.webp'
// import all from '../images/allrounder.webp'

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router'

import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/desi.webp'
import video from '../images/menuvideo.mp4'

// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../images/aisa.webp';


const Home = () => {
  // -------------------Women section------------------------
  const data = [
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
        <Row>
          <Col>
            <video width="100%" height="100%" autoPlay muted loop>
              <source src={video} type="video/mp4" />
            </video>
          </Col>
        </Row>
      </section>
      <section className='latestw'>
        <Row>
          <h2>Latest Arrivals</h2>
          {
            data.map((pooh) => {
              return (
                <Col md={3}>
                  <Link to={'/buy/' +pooh.title}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img src={pooh.images[0]} />
                      <Card.Body>
                        <Card.Title>{pooh.title}</Card.Title>
                        <Card.Text>
                          <p>Rs.{pooh.price1}</p>
                        </Card.Text>
                        <Button variant="primary">Choose Option</Button>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            }
            )
          }
        </Row>
      </section>
      {/* <section className='latestm'>
        <Row>
          <h2>Latest Arrivals</h2>
          {
            mens.map((men) => {
              return (
                <Col md={3}>
                  <Link to={'/buy/' + men.id}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img src={men.images} />
                      <Card.Body>
                        <Card.Title>{men.title}</Card.Title>
                        <Card.Text>
                          <p>Rs.{men.price1}</p>
                        </Card.Text>
                        <Button variant="primary">Choose Option</Button>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            }
            )
          }
        </Row>
      </section> */}
      {/* <section className='womencollections' >
        <Row>
          {
            collections.map((women) => {
              return (
                <Col md={3}>
                  <img src={women.photo} />
                  <p>{women.title}</p>
                </Col>

              )
            }
            )
          }
        </Row>
      </section> */}


      {/* ------------------------Latest Arrivals Women Section----------------------- */}
      {/* <section>
        <Container>
          <Row>
            <Col>
              <video width="100%" height="100%" autoPlay muted loop>
                <source src={video} type="video/mp4" />
              </video>
            </Col>
          </Row>
        </Container>
      </section>
      <Row>
        <Col>
          <video width="100%" height="100%" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </Col>
      </Row>
      <section className='latestw'>
        <Container>
          <Row>
            <Col>
              <h2>Latest Arrivals</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className='product'>
                <img src={wm1} alt='' />
                <p><b>Rs. 599.00</b></p>
                <Button className='btn'><Link to="/strapkurti">Choose Button</Link></Button>
              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm2} alt='' />
                <p><b>Rs. 599.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm3} alt='' />
                <p><b>Rs. 599.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm4} alt='' />
                <p><b>Rs. 599.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm4} alt='' />
                <p><b>Rs. 599.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm3} alt='' />
                <p><b>Rs. 599.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm2} alt='' />
                <p><b>Rs. 599.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={wm1} alt='' />
                <p><b>Rs. 599.00</b></p>
                <Button className='btn'>Choose Option</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      {/*------ -------- Latest Arrivals Men Section-----------------*/}
      {/* <section className='latestm'>
        <Container>
          <Row>
            <Col>
              <h2>Latest Arrivals</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className='product'>
                <img src={m1} alt='' />
                <p><b>Rs. 799.00</b></p>
              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m2} alt='' />
                <p><b>Rs. 799.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m3} alt='' />
                <p><b>Rs. 799.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m4} alt='' />
                <p><b>Rs. 799.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m4} alt='' />
                <p><b>Rs. 799.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m3} alt='' />
                <p><b>Rs. 799.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m2} alt='' />
                <p><b>Rs. 799.00</b></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='product'>
                <img src={m1} alt='' />
                <p><b>Rs. 799.00</b></p>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* <section className='womencollections'>
        <Container>
          <Row>
            <Col>
              <h2>Women Collections</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className='productc'>
                <img src={pooh} alt='' />
                <p><Link to="/pooh">Pooh</Link></p>
              </div>
            </Col>
            <Col md={3}>
              <div className='productc'>
                <img src={naina} alt='' />
                <p><Link to="/naina">Naina</Link></p>
              </div>
            </Col>
            <Col md={3}>
              <div className='productc'>
                <img src={geet} alt='' />
                <p><Link to="/geet">Geet</Link></p>
              </div>
            </Col>
            <Col md={3}>
              <div className='productc'>
                <img src={aisa} alt='' />
                <p><Link to="/aisa">Aisa</Link></p>
              </div>
            </Col>
          </Row>

        </Container>
      </section> */}
      {/* <section className='mencollections'>
        <Container>
          <Row>
            <Col>
              <h2>Men Collections</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className='productc' >

                <img src={halfstyle} alt='' />
                <p><Link to="/halfstyle">Half Style Street Look</Link></p>


              </div>
            </Col>

            <Col md={3}>
              <div className='productc'>
                <img src={desi} alt='' />
                <p><Link to="/desi">The Desi Formals</Link></p>


              </div>
            </Col>
            <Col md={3}>
              <div className='productc'>
                <img src={sanskari} alt='' />
                <p><Link to="/sanskari">The Sanskari drips</Link></p>

              </div>
            </Col>
            <Col md={3}>
              <div className='productc'>
                <img src={all} alt='' />
                <p><Link to="/allm">All Collections</Link></p>

              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* <section className='slidearea'>
        <Container>
          <Row>
            <Col>
              <h1>हमारी नहीं हमारी अप्सराओ की सुनो</h1>
            </Col>

          </Row>
          <Row>
            <Col>

            </Col>
          </Row>
          <Carousel>
            <Carousel.Item>
              <img src={slide1} alt='' />
              <ExampleCarouselImage text="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage text="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage text="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section> */}

    </div>
  )
}

export default Home
