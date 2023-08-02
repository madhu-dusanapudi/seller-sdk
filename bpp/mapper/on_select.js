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
var temp={
    "provider": {
        "id": "SIVA-ONDC-STORE-865"
    },
    "provider_location": {
        "id": "SIVA-ONDC-STORE-865-LOC-1"
    },
    "items": [
        {
            "fulfillment_id": "PROVIDER-FULFILLMENT-1",
          "id": "Musk123",
            "quantity": {
                "count": 1
            }
        },
        {
          "fulfillment_id": "PROVIDER-FULFILLMENT-2",
        "id": "ganesh",
          "quantity": {
              "count": 1
          }
      }
    ],
    "billing": {
        "name": "ONDC buyer",
        "address": {
            "name": "My house #",
            "door": "B005 aaspire heights",
            "building": "My building name",
            "locality": "My street name",
            "city": "Bengaluru",
            "state": "Karnataka",
            "country": "IND",
            "area_code": "560037"
        },
        "email": "nobody@nomail.com",
        "phone": "9886098860",
        "created_at": "2023-02-03T09:00:00.000Z",
        "updated_at": "2023-02-03T09:00:00.000Z"
    },
    "fulfillments": [
        {
            "id": "PROVIDER-FULFILLMENT-1",
            "type": "Delivery",
            "provider_id": "SIVA-ONDC-STORE-865",
            "tracking": false,
            "end": {
                "location": {
                    "gps": "12.9492953,77.7019878",
                    "address": {
                        "name": "My house #",
                        "door": "B005 aaspire heights",
                        "building": "My building name",
                        "locality": "My street name",
                        "city": "Bengaluru",
                        "state": "Karnataka",
                        "country": "IND",
                        "area_code": "560037"
                    }
                },
                "contact": {
                    "phone": "9886098860"
                }
            }
        }
    ],
    "quote": {
        "price": {
          "currency": "INR",
          "value": "89.00"
        },
        "breakup": [
          {
            "@ondc/org/item_id": "Musk123",
            "@ondc/org/item_quantity": {
              "count": 1
            },
            "title": "Muskmelon",
            "@ondc/org/title_type": "item",
            "price": {
              "currency": "INR",
              "value": "80.00"
            },
            "item": {
              "qty_available":"100",
                "qty_maximum":"100",
              "price": {
                "currency": "INR",
                "value": "80.00"
              }
            }
          },
          {
            "@ondc/org/item_id": "Musk123",
            "title": "Tax",
            "@ondc/org/title_type": "tax",
            "price": {
              "currency": "INR",
              "value": "4.00"
            }
          },
          {
            "@ondc/org/item_id": "PROVIDER-FULFILLMENT-1",
            "title": "Packing charges",
            "@ondc/org/title_type": "packing",
            "price": {
              "currency": "INR",
              "value": "5.00"
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
      },
    "payment": {
        "@ondc/org/buyer_app_finder_fee_type": "percent",
        "@ondc/org/buyer_app_finder_fee_amount": "3",
        "@ondc/org/settlement_details": [
            {
                "settlement_counterparty": "seller-app",
                "settlement_phase": "sale-amount",
                "settlement_type": "upi",
                "beneficiary_name": "xxxxx",
                "upi_address": "gft@oksbi",
                "settlement_bank_account_no": "XXXXXXXXXX",
                "settlement_ifsc_code": "XXXXXXXXX",
                "bank_name": "xxxx",
                "branch_name": "xxxx"
            }
        ]
    }
}
export default temp


