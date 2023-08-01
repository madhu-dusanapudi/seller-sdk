var temp1= {
  "provider": {
      "id": "SIVA-ONDC-STORE-949"
  },
  "items": [
      {
          "fulfillment_id": "PROVIDER-FULFILLMENT-1",
          "id": "DFS0982"
      }
  ],
  "fulfillments": [
      {
          "id": "PROVIDER-FULFILLMENT-1",
          "@ondc/org/provider_name": "adya store",
          "tracking": false,
          "@ondc/org/category": "Delivery",
          "@ondc/org/TAT": "P7D",
          "state": {
              "descriptor": {
                  "code": "Serviceable"
              }
          }
      }
  ],
  "quote": {
      "price": {
          "currency": "INR",
          "value": "37.75"
      },
      "breakup": [
          {
              "@ondc/org/item_id": "DFS0982",
              "@ondc/org/item_quantity": {
                  "count": 1
              },
              "title": "Dark Fantasy",
              "@ondc/org/title_type": "item",
              "price": {
                  "currency": "AUD",
                  "value": "35.00"
              },
              "item": {
                "qty_available":"100",
                  "qty_maximum":"100",
                "price": {
                  "currency": "AUD",
                  "value": "35.00"
                }
              }
          },
          {
              "@ondc/org/item_id": "DFS0982",
              "title": "Tax",
              "@ondc/org/title_type": "tax",
              "price": {
                  "currency": "INR",
                  "value": "1.75"
              }
          },
          {
              "@ondc/org/item_id": "PROVIDER-FULFILLMENT-1",
              "title": "Packing charges",
              "@ondc/org/title_type": "packing",
              "price": {
                  "currency": "INR",
                  "value": "1.00"
              }
          },
          {
              "@ondc/org/item_id": "PROVIDER-FULFILLMENT-1",
              "title": "Delivery charges",
              "@ondc/org/title_type": "delivery",
              "price": {
                  "currency": "INR",
                  "value": "0.00"
              }
          }
      ],
      "ttl": "P1D"
  }
}
var temp=[
    {
    "serial_number": "",
    "product_template_id": 2442,
    "parent_sku_id": "NuttyYogi483",
    "sku_id": "NuttyYogi483",
    "product_name": "Nutty Yogi Chai Spice 50 gm",
    "attribute_key_values_id": null,
    "attribute_values": [],
    "image_options": [
        {
            "link": "https://storage.googleapis.com/adya_upload_pdf/image/DSCF8876square.jpg",
            "file_name": "DSCF8876square.jpg"
        }
    ],
    "variant_type_id": null,
    "variant_type": {
        "id": 0,
        "lookup_code": "",
        "display_name": ""
    },
    "barcode": "",
    "standard_product_types": null,
    "standard_product_type_id": "",
    "condition_id": null,
    "condition": {
        "id": 0,
        "lookup_code": "",
        "display_name": ""
    },
    "category_id": 1148,
    "category": {
        "id": 1148,
        "name": "Food & Beverages",
        "parent_category_id": null,
        "external_id": 12843,
        "additives_information": "",
        "short_description": "",
        "domain_id": null,
        "category_code": "RET-10-1C-10-12"
    },
    "sub_category_id_1": 1407,
    "sub_category_1": {
        "id": 1407,
        "name": "Healthy Food",
        "parent_category_id": 1148,
        "external_id": 13169,
        "additives_information": "",
        "short_description": "",
        "domain_id": null,
        "category_code": "RET-11-18"
    },
    "sub_category_id_2": 1408,
    "sub_category_2": {
        "id": 1408,
        "name": "Healthy Food ",
        "parent_category_id": 1407,
        "external_id": 13205,
        "additives_information": "",
        "short_description": "",
        "domain_id": null,
        "category_code": "RET-11-18-10"
    },
    "sub_category_id_3": 1412,
    "sub_category_3": {
        "id": 1412,
        "name": "Wrap",
        "parent_category_id": 1408,
        "external_id": 13431,
        "additives_information": "",
        "short_description": "",
        "domain_id": null,
        "category_code": "RET-11-18-10-13"
    },
    "leaf_category_id": 1407,
    "leaf_category": {
        "id": 1407,
        "name": "Healthy Food",
        "parent_category_id": 1148,
        "external_id": 13169,
        "additives_information": "",
        "short_description": "",
        "domain_id": null,
        "category_code": "RET-11-18"
    },
    "description": {
        "data": "India loves its tea and to make it delicious we bring you the Chai Spice. Mix of classic India spices : Cinnamon, Nutmeg, Star Anise, Clove, Ginger and Black Pepper. This one delivers a shot of good health with every spoon\n\n\nSoak in the nourishment of spice in your Chai along with the special blend of masalas, which will make every cup; a special cup of joy!\n\nNutty Yogi presents the Chai Spice to add zing to your hot tea. Drinking Chai will never be the same again.\n"
    },
    "product_dimensions": null,
    "package_dimensions": null,
    "package_material_options": null,
    "vendor_price_list_ids": null,
    "price_list_details": [],
    "shipping_options": null,
    "product_pricing_details": {
        "id": 0,
        "sales_price": 199,
        "cost_price": 0,
        "mrp": 199,
        "tax_options": 0,
        "currency_id": 1,
        "currency": {
            "id": 1,
            "name": "INR",
            "currency_symbol": "₹",
            "currency_code": "INR",
            "is_base_currency": true,
            "exchange_rate": 0,
            "exchange_rate_history": null,
            "auto_update_er": null
        },
        "tax": false,
        "shipping": false,
        "declared_price": 0,
        "payment_method_id": 743,
        "payment_method": {
            "id": 743,
            "lookup_code": "PRE-PAID",
            "display_name": "Pre-Paid"
        }
    },
    "time":{
        "label":"disable",
        "timestamp": "2023-02-03T08:00:30.000Z"
    },
    "fssai_license_no": "12345678901234",
    "inventory_details": 
        {
            "id": 316,
            "channel_code": "ONDC",
            "product_variant_id": 658,
            "product_details": null,
            "physical_location_id": 1307,
            "physical_location": [
                {
                "id": 1307,
                "name": "Default jasjkfhaskdfh",
                "location_id": "SIVA-ONDC-STORE-920-LOC-1",
                "parent_id": null,
                "parent_location": null,
                "child_locations": [],
                "address": {
                    "city": "Bengaluru",
                    "state": "Karnataka",
                    "country": "INDIA",
                    "pin_code": "560102",
                    "address_line_1": "314, 14th B Cross Rd, Sector 6, HSR Layout, Bengaluru, Karnataka 560102",
                    "address_line_2": "e"
                },
                "location_docs": {},
                "latitude": "12.9147816",
                "longitude": "77.6335721",
                "serviceable_area_ids": [
                    {
                        "categories": [
                            {
                                "id": 1408,
                                "label": "Healthy Food "
                            },
                            {
                                "id": 145,
                                "label": "Oils & Ghee"
                            },
                            {
                                "id": 1114,
                                "label": "Snacks & Branded Foods"
                            },
                            {
                                "id": 1092,
                                "label": "Gourmet & World Foods"
                            }
                        ],
                        "serve_pan_india": true
                    }
                ],
                "related_location_id": 915,
                "email": "pallavi@nuttyyogi.com",
                "mobile_number": "9938224585",
                "notes": "Default Virtual Warehouse Location",
                "is_serviceability": true,    
                "product_pricing_details": {
                    "id": 0,
                    "sales_price": 199,
                    "cost_price": 0,
                    "mrp": 199,
                    "tax_options": 0,
                    "currency_id": 1,
                    "currency": {
                        "id": 1,
                        "name": "INR",
                        "currency_symbol": "₹",
                        "currency_code": "INR",
                        "is_base_currency": true,
                        "exchange_rate": 0,
                        "exchange_rate_history": null,
                        "auto_update_er": null
                    },
                    "tax": false,
                    "shipping": false,
                    "declared_price": 0,
                    "payment_method_id": 743,
                    "payment_method": {
                        "id": 743,
                        "lookup_code": "PRE-PAID",
                        "display_name": "Pre-Paid"
                    }
                },
            },
        ],
            "test":[
                {
                    "email": "pallavi@om",
                    "mobile_number": "9938224585"
                },
                {
                    "email": "pallavi@n.com",
                    "mobile_number": "9938224585"
                },
                {
                    "email": "pallavi@ogi.com",
                    "mobile_number": "9938224585"
                }
            ],
            "quantity": 100,
            "on_hand_quantity": 50,
            "planned_in_quantity": 0,
            "planned_out_quantity": 50,
            "created_by": 1188,
            "updated_by": null,
            "is_enabled": true,
            "is_active": true
        }     
    ,
    "status_id": 31,
    "status": {
        "id": 31,
        "lookup_code": "ACTIVE",
        "display_name": "Active"
    },
    "keyword_ids": {},
    "cost_details": {},
    "forecasting_options": {},
    "validation_info": "Valid",
    "package_template_options": {},
    "store_details": {
        "business_name": "",
        "business_address": "",
        "financial_year_start": "2023-01-01T00:23:28Z",
        "financial_year_end": "2024-01-01T00:23:28Z",
        "authorised_signatory": "",
        "authorised_signatory_address": "",
        "std_code_id": null,
        "std_code": {
            "id": 0,
            "lookup_code": "",
            "display_name": ""
        },
        "store_name": "Nutty Yogi",
        "store_description": "Health Food Grocery",
        "serviceable_areas": null,
        "domain_id": 669,
        "domain": {
            "id": 669,
            "lookup_code": "RETAIL",
            "display_name": "Retail"
        },
        "established_on": "2023-05-05T09:41:05.885Z",
        "store_timings": [
            {
                "day": "monday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": true
            },
            {
                "day": "tuesday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": true
            },
            {
                "day": "wednesday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": true
            },
            {
                "day": "thursday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": true
            },
            {
                "day": "friday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": true
            },
            {
                "day": "saturday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": true
            },
            {
                "day": "sunday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": false
            }
        ],
        "seller_apps": [
            "ONDC"
        ],
        "enable_email_notifications": true,
        "enable_phone_notifications": true,
        "store_image": [
            "https://storage.googleapis.com/adya_upload_pdf/imagefile/IGM/SUPPORT/tech/tech1583.jpeg"
        ],
        "store_symbol": "https://storage.googleapis.com/adya_upload_pdf/imagefile/IGM/SUPPORT/tech/tech1020.jpeg"
    },
    "additives_information": "",
    "short_description": "India loves its tea and to make it delicious we bring you the Chai Spice",
    "domain_id": null,
    "domain": {
        "id": 0,
        "lookup_code": "",
        "display_name": ""
    },
    "inventory_detail": {
        "maximum_quantity": 100,
        "available_quantity": 50
    },
    "brand_id": null,
    "brand": {
        "id": 0,
        "brand_name": "",
        "description": "",
        "is_enabled": null,
        "is_active": null,
        "created_by": null,
        "updated_by": null
    },
    "hsn_code": "902",
    "hsn_codes_data": {
        "id": 47,
        "is_enabled": true,
        "is_active": true,
        "created_by": null,
        "CreatedBy": null,
        "updated_by": null,
        "UpdatedBy": null,
        "deleted_by": null,
        "DeletedBy": null,
        "company_id": 0,
        "app_id": null,
        "App": null,
        "sno": "",
        "hsn_code": "902",
        "description": "Tea, whether or not flavoured [other than unprocessed green leaves of tea",
        "cgst_rate": 2.5,
        "igst_rate": 5,
        "sgst_rate": 2.5,
        "created_date": "0001-01-01T00:00:00Z",
        "updated_date": "0001-01-01T00:00:00Z",
        "status": "active"
    },
    "on_hand_quantity": 50,
    "maximum_quantity": 100,
    "provider_id": "SIVA-ONDC-STORE-920",
    "channel": "ONDC",
    "rating_average": 0,
    "rating_count": 0,
    "fulfillment_id": 1,
    "last_sync_date": "2023-06-07T11:02:46.336168Z",
    "product_attributes": null
},
{
    "serial_number": "",
    "product_template_id": 2442,
    "parent_sku_id": "NuttyYogi483",
    "sku_id": "NuttyYogi483",
    "product_name": "Nutty Yogi Chai Spice 50 gm",
    "attribute_key_values_id": null,
    "attribute_values": [],
    "image_options": [
        {
            "link": "https://storage.googleapis.com/adya_upload_pdf/image/DSCF8876square.jpg",
            "file_name": "DSCF8876square.jpg"
        }
    ],
    "time":{
        "label":"disable",
        "timestamp": "2023-02-03T08:00:30.000Z"
    },
    "fssai_license_no": "12345678901234",
    "variant_type_id": null,
    "variant_type": {
        "id": 0,
        "lookup_code": "",
        "display_name": ""
    },
    "barcode": "",
    "standard_product_types": null,
    "standard_product_type_id": "",
    "condition_id": null,
    "condition": {
        "id": 0,
        "lookup_code": "",
        "display_name": ""
    },
    "category_id": 1148,
    "category": {
        "id": 1148,
        "name": "Food & Beverages",
        "parent_category_id": null,
        "external_id": 12843,
        "additives_information": "",
        "short_description": "",
        "domain_id": null,
        "category_code": "RET-10-1C-10-12"
    },
    "sub_category_id_1": 1407,
    "sub_category_1": {
        "id": 1407,
        "name": "Healthy Food",
        "parent_category_id": 1148,
        "external_id": 13169,
        "additives_information": "",
        "short_description": "",
        "domain_id": null,
        "category_code": "RET-11-18"
    },
    "sub_category_id_2": 1408,
    "sub_category_2": {
        "id": 1408,
        "name": "Healthy Food ",
        "parent_category_id": 1407,
        "external_id": 13205,
        "additives_information": "",
        "short_description": "",
        "domain_id": null,
        "category_code": "RET-11-18-10"
    },
    "sub_category_id_3": 1412,
    "sub_category_3": {
        "id": 1412,
        "name": "Wrap",
        "parent_category_id": 1408,
        "external_id": 13431,
        "additives_information": "",
        "short_description": "",
        "domain_id": null,
        "category_code": "RET-11-18-10-13"
    },
    "leaf_category_id": 1407,
    "leaf_category": {
        "id": 1407,
        "name": "Healthy Food",
        "parent_category_id": 1148,
        "external_id": 13169,
        "additives_information": "",
        "short_description": "",
        "domain_id": null,
        "category_code": "RET-11-18"
    },
    "description": {
        "data": "India loves its tea and to make it delicious we bring you the Chai Spice. Mix of classic India spices : Cinnamon, Nutmeg, Star Anise, Clove, Ginger and Black Pepper. This one delivers a shot of good health with every spoon\n\n\nSoak in the nourishment of spice in your Chai along with the special blend of masalas, which will make every cup; a special cup of joy!\n\nNutty Yogi presents the Chai Spice to add zing to your hot tea. Drinking Chai will never be the same again.\n"
    },
    "product_dimensions": null,
    "package_dimensions": null,
    "package_material_options": null,
    "vendor_price_list_ids": null,
    "price_list_details": [],
    "shipping_options": null,
    "product_pricing_details": {
        "id": 0,
        "sales_price": 199,
        "cost_price": 0,
        "mrp": 199,
        "tax_options": 0,
        "currency_id": 1,
        "currency": {
            "id": 1,
            "name": "INR",
            "currency_symbol": "₹",
            "currency_code": "INR",
            "is_base_currency": true,
            "exchange_rate": 0,
            "exchange_rate_history": null,
            "auto_update_er": null
        },
        "tax": false,
        "shipping": false,
        "declared_price": 0,
        "payment_method_id": 743,
        "payment_method": {
            "id": 743,
            "lookup_code": "PRE-PAID",
            "display_name": "Pre-Paid"
        }
    },
    "inventory_details": 
        {
            "id": 316,
            "channel_code": "ONDC",
            "product_variant_id": 658,
            "product_details": null,
            "physical_location_id": 1307,
            "physical_location": [
                {
                "id": 1307,
                "name": "Default jasjkfhaskdfh",
                "location_id": "SIVA-ONDC-STORE-920-LOC-1",
                "parent_id": null,
                "parent_location": null,
                "child_locations": [],
                "address": {
                    "city": "Bengaluru",
                    "state": "Karnataka",
                    "country": "INDIA",
                    "pin_code": "560102",
                    "address_line_1": "314, 14th B Cross Rd, Sector 6, HSR Layout, Bengaluru, Karnataka 560102",
                    "address_line_2": "e"
                },
                "location_docs": {},
                "latitude": "12.9147816",
                "longitude": "77.6335721",
                "serviceable_area_ids": [
                    {
                        "categories": [
                            {
                                "id": 1408,
                                "label": "Healthy Food "
                            },
                            {
                                "id": 145,
                                "label": "Oils & Ghee"
                            },
                            {
                                "id": 1114,
                                "label": "Snacks & Branded Foods"
                            },
                            {
                                "id": 1092,
                                "label": "Gourmet & World Foods"
                            }
                        ],
                        "serve_pan_india": true
                    }
                ],
                "related_location_id": 915,
                "email": "pallavi@nuttyyogi.com",
                "mobile_number": "9938224585",
                "notes": "Default Virtual Warehouse Location",
                "is_serviceability": true,    
                "product_pricing_details": {
                    "id": 0,
                    "sales_price": 199,
                    "cost_price": 0,
                    "mrp": 199,
                    "tax_options": 0,
                    "currency_id": 1,
                    "currency": {
                        "id": 1,
                        "name": "INR",
                        "currency_symbol": "₹",
                        "currency_code": "INR",
                        "is_base_currency": true,
                        "exchange_rate": 0,
                        "exchange_rate_history": null,
                        "auto_update_er": null
                    },
                    "tax": false,
                    "shipping": false,
                    "declared_price": 0,
                    "payment_method_id": 743,
                    "payment_method": {
                        "id": 743,
                        "lookup_code": "PRE-PAID",
                        "display_name": "Pre-Paid"
                    }
                },
            }
        ],
            "test":[
                {
                    "email": "pallavi@om",
                    "mobile_number": "9938224585"
                },
                {
                    "email": "pallavi@n.com",
                    "mobile_number": "9938224585"
                },
                {
                    "email": "pallavi@ogi.com",
                    "mobile_number": "9938224585"
                }
            ],
            "quantity": 100,
            "on_hand_quantity": 50,
            "planned_in_quantity": 0,
            "planned_out_quantity": 50,
            "created_by": 1188,
            "updated_by": null,
            "is_enabled": true,
            "is_active": true
        }     
    ,
    "status_id": 31,
    "status": {
        "id": 31,
        "lookup_code": "ACTIVE",
        "display_name": "Active"
    },
    "keyword_ids": {},
    "cost_details": {},
    "forecasting_options": {},
    "validation_info": "Valid",
    "package_template_options": {},
    "store_details": {
        "business_name": "",
        "business_address": "",
        "financial_year_start": "2023-01-01T00:23:28Z",
        "financial_year_end": "2024-01-01T00:23:28Z",
        "authorised_signatory": "",
        "authorised_signatory_address": "",
        "std_code_id": null,
        "std_code": {
            "id": 0,
            "lookup_code": "",
            "display_name": ""
        },
        "store_name": "Nutty Yogi",
        "store_description": "Health Food Grocery",
        "serviceable_areas": null,
        "domain_id": 669,
        "domain": {
            "id": 669,
            "lookup_code": "RETAIL",
            "display_name": "Retail"
        },
        "established_on": "2023-05-05T09:41:05.885Z",
        "store_timings": [
            {
                "day": "monday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": true
            },
            {
                "day": "tuesday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": true
            },
            {
                "day": "wednesday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": true
            },
            {
                "day": "thursday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": true
            },
            {
                "day": "friday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": true
            },
            {
                "day": "saturday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": true
            },
            {
                "day": "sunday",
                "time": [
                    {
                        "closing_time": "2023-05-05T13:30:00.535Z",
                        "opening_time": "2023-05-05T02:30:00.640Z"
                    }
                ],
                "is_open": false
            }
        ],
        "seller_apps": [
            "ONDC"
        ],
        "enable_email_notifications": true,
        "enable_phone_notifications": true,
        "store_image": [
            "https://storage.googleapis.com/adya_upload_pdf/imagefile/IGM/SUPPORT/tech/tech1583.jpeg"
        ],
        "store_symbol": "https://storage.googleapis.com/adya_upload_pdf/imagefile/IGM/SUPPORT/tech/tech1020.jpeg"
    },
    "additives_information": "",
    "short_description": "India loves its tea and to make it delicious we bring you the Chai Spice",
    "domain_id": null,
    "domain": {
        "id": 0,
        "lookup_code": "",
        "display_name": ""
    },
    "inventory_detail": {
        "maximum_quantity": 200,
        "available_quantity": 50
    },
    "brand_id": null,
    "brand": {
        "id": 0,
        "brand_name": "",
        "description": "",
        "is_enabled": null,
        "is_active": null,
        "created_by": null,
        "updated_by": null
    },
    "hsn_code": "902",
    "hsn_codes_data": {
        "id": 47,
        "is_enabled": true,
        "is_active": true,
        "created_by": null,
        "CreatedBy": null,
        "updated_by": null,
        "UpdatedBy": null,
        "deleted_by": null,
        "DeletedBy": null,
        "company_id": 0,
        "app_id": null,
        "App": null,
        "sno": "",
        "hsn_code": "902",
        "description": "Tea, whether or not flavoured [other than unprocessed green leaves of tea",
        "cgst_rate": 2.5,
        "igst_rate": 5,
        "sgst_rate": 2.5,
        "created_date": "0001-01-01T00:00:00Z",
        "updated_date": "0001-01-01T00:00:00Z",
        "status": "active"
    },
    "on_hand_quantity": 50,
    "maximum_quantity": 100,
    "provider_id": "SIVA-ONDC-STORE-920",
    "channel": "ONDC",
    "rating_average": 0,
    "rating_count": 0,
    "fulfillment_id": 1,
    "last_sync_date": "2023-06-07T11:02:46.336168Z",
    "product_attributes": null
}
]
export default temp


