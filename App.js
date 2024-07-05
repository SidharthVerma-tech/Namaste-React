import ReactDOM from 'react-dom/client'
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const restaurants = [
                  {
                    "info": {
                      "id": "905360",
                      "name": "Brij Walk ( Taste Of Agra )",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/7/d312bdf0-6aa5-4056-978b-024e89fe1866_905360.jpg",
                      "locality": " SSL Plot No - 16A/5 Market NIT -5",
                      "areaName": "New Industrial Township",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Snacks",
                        "Sweets"
                      ],
                      "avgRating": 3.4,
                      "veg": true,
                      "parentId": "526071",
                      "avgRatingString": "3.4",
                      "totalRatingsString": "6",
                      "promoted": true,
                      "adTrackingId": "cid=15043567~p=0~adgrpid=15043567#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=905360~eid=8fc06b9a-f192-4f49-9a18-c8f876bab306~srvts=1720147230331~collid=45995",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-05 20:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=905360",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "34419",
                      "name": "Chaudhary's",
                      "cloudinaryImageId": "4581019a1db5d5e7ce6a30484b820cdd",
                      "locality": "Sector 15",
                      "areaName": "Sector 15",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Snacks",
                        "Beverages",
                        "Fast Food",
                        "Desserts",
                        "Indian",
                        "Italian",
                        "Punjabi",
                        "Burgers",
                        "Salads",
                        "Momos",
                        "Rolls & Wraps",
                        "Thalis",
                        "Afghani",
                        "Street Food",
                        "Mughlai",
                        "Home Food",
                        "Chaat",
                        "Chettinad"
                      ],
                      "avgRating": 3.9,
                      "parentId": "452981",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-05 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹150",
                        "discountTag": "SAVE BIG"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.8",
                          "ratingCount": "500+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=34419",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "466929",
                      "name": "Cheesecake & Co.",
                      "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
                      "locality": "Sector 15",
                      "areaName": "Sector 15",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.5,
                      "parentId": "387417",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-05 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹75 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.7",
                          "ratingCount": "10+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=466929",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "39337",
                      "name": "BTW",
                      "cloudinaryImageId": "v1wx4ym0jui9bzky2lzu",
                      "locality": "Kc Road",
                      "areaName": "NIT",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "Desserts",
                        "Sweets"
                      ],
                      "avgRating": 4,
                      "parentId": "10314",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-06 01:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "FREE ITEM"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=39337",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "842890",
                      "name": "Dosa Coffee",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/4/25973b71-b7aa-4a65-868f-5bf439629802_842890.jpg",
                      "locality": "Sector 16_FBD",
                      "areaName": "Sector 15",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "South Indian",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "11653",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "100+",
                      "promoted": true,
                      "adTrackingId": "cid=15011090~p=3~adgrpid=15011090#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=842890~eid=a244ac96-9464-4321-963d-e982a0e9ac34~srvts=1720147230331~collid=45995",
                      "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 4.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "4.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-05 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=842890",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "829742",
                      "name": "Samosa Party",
                      "cloudinaryImageId": "d8d4e708a41f011361c949d44990d5e0",
                      "locality": "Sector 79",
                      "areaName": "HUDA Staff Colony",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Fast Food",
                        "Snacks",
                        "Beverages",
                        "Chaat",
                        "North Indian",
                        "Street Food",
                        "Sweets",
                        "Desserts",
                        "Punjabi",
                        "Bakery"
                      ],
                      "avgRating": 4.3,
                      "parentId": "6364",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "50+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 4.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-05 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=829742",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "353657",
                      "name": "Chaayos Chai+Snacks=Relax",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_353657.JPG",
                      "locality": "Sector 15",
                      "areaName": "Sector 15",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets"
                      ],
                      "avgRating": 4.4,
                      "parentId": "281782",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-12 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "description": "",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹90"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "100+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=353657",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "263954",
                      "name": "Chai Point",
                      "cloudinaryImageId": "znobbbace3njt7oxau2f",
                      "locality": "Adb Pwd Colony",
                      "areaName": "Sector 16",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "South Indian",
                        "Punjabi",
                        "Chaat",
                        "Indian",
                        "American",
                        "Fast Food",
                        "Desserts",
                        "Cafe",
                        "Healthy Food",
                        "Home Food",
                        "North Indian"
                      ],
                      "avgRating": 4.3,
                      "parentId": "1607",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-12 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹90"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=263954",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "46200",
                      "name": "Sethi Dhaba",
                      "cloudinaryImageId": "e818cf7cb41183037d9f29109dbe4085",
                      "locality": "Block G",
                      "areaName": "NIT",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Tandoor",
                        "Biryani",
                        "Snacks",
                        "Beverages",
                        "Desserts",
                        "Home Food",
                        "Indian",
                        "Fast Food",
                        "Punjabi",
                        "Afghani",
                        "Mughlai",
                        "Street Food",
                        "Thalis",
                        "Momos",
                        "Rolls & Wraps",
                        "Chaat"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "parentId": "15972",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "10K+",
                      "promoted": true,
                      "adTrackingId": "cid=14758499~p=4~adgrpid=14758499#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=46200~eid=4e0dae59-b973-4c71-9f5a-7e7db4aa82b8~srvts=1720147230331~collid=45995",
                      "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 4.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "4.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-05 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=46200",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "65081",
                      "name": "Theobroma",
                      "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
                      "locality": "Shopping Centre Market",
                      "areaName": "Sector 15",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "parentId": "1040",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-06 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              },
                              {
                                "attributes": {
                                  "imageId": "newg.png",
                                  "description": "Gourmet"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=65081",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "523315",
                      "name": "Enchante By Chai Point",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/16/cbbd74b1-3a88-42ec-a9e5-a799f29be0f5_523315.jpg",
                      "locality": "Adb Pwd Colony",
                      "areaName": "Sector 16",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "South Indian",
                        "Punjabi",
                        "Chaat",
                        "Indian",
                        "American",
                        "Fast Food",
                        "Desserts",
                        "Cafe",
                        "Healthy Food",
                        "Home Food",
                        "North Indian"
                      ],
                      "avgRating": 4.2,
                      "parentId": "312141",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10+",
                      "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-12 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹90"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=523315",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "619121",
                      "name": "Great Indian Khichdi by EatFit",
                      "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
                      "locality": "Neelam Bata Chowk",
                      "areaName": "Sector 31",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Indian",
                        "Home Food",
                        "Healthy Food",
                        "Snacks"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "319582",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 8.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "8.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-05 23:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "description": "",
                                  "shortDescription": "brand",
                                  "fontColor": "#7E808C"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=619121",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "21283",
                      "name": "RP's Standard Punjabi Khana",
                      "cloudinaryImageId": "jxryzlgvfxj6wa0nyfhv",
                      "locality": "NIT",
                      "areaName": "Fruit Garden",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Snacks",
                        "Indian",
                        "Beverages",
                        "Desserts",
                        "Punjabi",
                        "Tandoor",
                        "Mughlai",
                        "Thalis",
                        "Chaat",
                        "Pastas",
                        "Italian"
                      ],
                      "avgRating": 4.2,
                      "parentId": "16167",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "5K+",
                      "promoted": true,
                      "adTrackingId": "cid=15046077~p=9~adgrpid=15046077#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=21283~eid=69618995-4809-4a20-9bab-fa439d6c81f2~srvts=1720147230331~collid=45995",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-05 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=21283",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "619124",
                      "name": "HRX by EatFit",
                      "cloudinaryImageId": "d8d85afa5c5e92461d30ff2ca867a587",
                      "locality": "Defence Colony",
                      "areaName": "Sector 31",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Keto",
                        "Pastas"
                      ],
                      "avgRating": 4.4,
                      "parentId": "335529",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 8.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "8.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-05 23:45:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "description": "",
                                  "shortDescription": "brand"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=619124",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "695601",
                      "name": "IGP Cakes",
                      "cloudinaryImageId": "cc84d172c8acb034e61ffaeb2d2557e3",
                      "locality": "Basement Sainik colony",
                      "areaName": "NIT_FBD",
                      "costForTwo": "₹299 for two",
                      "cuisines": [
                        "Desserts",
                        "Bakery"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "parentId": "392350",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 52,
                        "lastMileTravel": 7.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "7.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-06 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹649",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=695601",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "619122",
                      "name": "Ghar ka Khana by EatFit",
                      "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
                      "locality": "Neelam Bata Chowk",
                      "areaName": "Sector 31",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Home Food",
                        "North Indian",
                        "Healthy Food",
                        "Thalis",
                        "Desserts",
                        "Indian",
                        "Punjabi"
                      ],
                      "avgRating": 4.2,
                      "parentId": "422576",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 8.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "8.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-07-05 23:45:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "description": "",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=619122",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  }
        ]
const ResItem = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, avgRating} = resData?.info;
    console.log(cloudinaryImageId)
    return (
        <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
           <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(', ')} </h5>
            <h5>Rating : {avgRating}</h5>
            <h5>Delivery Time :{resData.info.sla.deliveryTime}</h5>
        </div>
    )
}
const Body = () => {
    return (
        <div className='body'>
            <div className='Search'>
                <input type="text" placeholder='search'/>
            </div>
            <div className='res-container'>
               {
                restaurants.map((rests)=><ResItem key={rests.info.id} resData={rests}/>)
               }
                
                
                
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)