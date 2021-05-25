
const allProductDescription = [
    {
        "goods_id": 1,
        "description1": "RTX2060",
        "description2": "Core i7-8750H",
        "description3": "512GB SSD NVMe",
    },
    {
        "goods_id": 2,
        "description1": "512GB + 1T",
        "description2": "Core i7-10710u",
        "description3": "IPS FHD",
    },
    {
        "goods_id": 3,
        "description1": "16GB + 512T",
        "description2": "Core i5-10210U",
        "description3": " MX250",
    },
    {
        "goods_id": 4,
        "description1": "16GB + 512GB",
        "description2": "Core i5-10210U",
        "description3": " LPDDR3 2133MHz",
    },
    {
        "goods_id": 5,
        "description1": "8GB + 256GB",
        "description2": "Snapdragon 8cx",
        "description3": " LPDDR4X",
    },
    {
        "goods_id": 6,
        "description1": "8GB + 512GB",
        "description2": "Core i5-7200U",
        "description3": " 2160x1440 Screen",
    },
    {
        "goods_id": 7,
        "description1": "64GB + 2T",
        "description2": "Intel Core i9",
        "description3": " AMD Radeon Pro",
    },
    {
        "goods_id": 8,
        "description1": "16GB + 256GB",
        "description2": "Intel Core i7",
        "description3": " 2560x1600 Screen",
    },
    {
        "goods_id": 9,
        "description1": "2532x1170 Screen",
        "description2": "A14 Bionic Chip",
        "description3": "5G goes 12",
    },
    {
        "goods_id": 10,
        "description1": "5.4 Inch Screen",
        "description2": "A14 Bionic Chip",
        "description3": "5G goes 12 mini",
    },
    {
        "goods_id": 11,
        "description1": "Porsche design",
        "description2": "Kylin 990",
        "description3": "Leica Camera",
    },
    {
        "goods_id": 12,
        "description1": "Kylin 990 Chip",
        "description2": "Leica Camera",
        "description3": "90Hz Screen"
    },
    {
        "goods_id": 13,
        "description1": "Snapdragon 865",
        "description2": "Triple Camera",
        "description3": "120HZ Screen"
    },
    {
        "goods_id": 14,
        "description1": "Snapdragon 865",
        "description2": "Fold Screen",
        "description3": "5G"
    },
    {
        "goods_id": 15,
        "description1": "Snapdragon 865",
        "description2": "90HZ Screen",
        "description3": "108MP Camera"
    },
    {
        "goods_id": 16,
        "description1": "Snapdragon 765G",
        "description2": "6.57 AMOLED",
        "description3": "48MP Camera"
    },
    {
        "goods_id": 17,
        "description1": "Snapdragon 720G",
        "description2": "5020mAh Battery",
        "description3": "6.67 AMOLED"
    },
    {
        "goods_id": 18,
        "description1": "A12 Chip",
        "description2": "Apple Pencil 1",
    },
    {
        "goods_id": 19,
        "description1": "A12Z Chip",
        "description2": "Apple Pencil 2",
    },
    {
        "goods_id": 20,
        "description1": "A12Z Chip",
        "description2": "7.2 Inch Screen",
    },
    {
        "goods_id": 21,
        "description1": "Kylin 990 Chip",
        "description2": "8GB + 256GB",
    },
    {
        "goods_id": 22,
        "description1": "Kylin 980 Chip",
        "description2": "M-Pen Lite",
    },
    {
        "goods_id": 23,
        "description1": "Snapdragon 855",
        "description2": "6GB + 128GB",
    },
    {
        "goods_id": 24,
        "description1": "Snapdragon 670 Chip",
        "description2": "2560×1600 Screen",
    },
    {
        "goods_id": 25,
        "description1": "Snapdragon 865+ Chip",
        "description2": "Samsung S-Pen",
    },
    {
        "goods_id": 26,
        "description1": "Wireless Earphone",
        "description2": "Hey Siri!",
    },
    {
        "goods_id": 27,
        "description1": "System in Package",
        "description2": "Noise Reduction",
    },
    {
        "goods_id": 28,
        "description1": "Wireless Headphone",
        "description2": "20h endurance",
    },
    {
        "goods_id": 29,
        "description1": "AI Voice Assistant",
        "description2": "Noise Reduction",
    },
    {
        "goods_id": 30,
        "description1": "Bluetooth 5.2",
        "description2": "410mAh*2 Battery",
    },
    {
        "goods_id": 31,
        "description1": "Hand Operation",
        "description2": "580 mAh Battery",
    },
    {
        "goods_id": 32,
        "description1": "Cheap Wireless Earphone",
        "description2": "Popular for young",
    },
    {
        "goods_id": 33,
        "description1": "Bluetooth 4.2",
        "description2": "3h Endurance",
    },
    {
        "goods_id": 34,
        "description1": "A10X Chip",
        "description2": "4K Screen",
    },
    {
        "goods_id": 35,
        "description1": "GPS",
        "description2": "Healthy Manager",
    },
    {
        "goods_id": 36,
        "description1": "S5 SiP Chip",
        "description2": "Hey Siri!",
    },
    {
        "goods_id": 37,
        "description1": "A8 Chip",
        "description2": "Apple Music",
    },
    {
        "goods_id": 38,
        "description1": "Small Loudspeaker",
        "description2": "Hey Siri!",
    },
    {
        "goods_id": 39,
        "description1": "Stay Healthy",
        "description2": "SOS Alarm",
    },
    {
        "goods_id": 40,
        "description1": "Intel Core i7",
        "description2": "16GB + 2T SSD",
        "description3": "Only 1.09kg",
    }
]


let returnData;
let allLaptop = [];
let allMobile = [];
let allTablet = [];
let allEarphone = [];
let allOthers = [];

function loadingMainPage()
{
    let allProducts = loadAllProducts().body;
    let length = allProducts.length;
    for(let i = 0; i < length; i++)
    {
        let oneRecord = allProducts[i];
        let productId = oneRecord.goods_id;
        //Laptops
        if(allProducts[i].category_id == 1)
        {
            for(let j = 0; j < allProductDescription.length; j++)
            {
                if(allProductDescription[j].goods_id == productId)
                {
                    oneRecord.description = allProductDescription[j];
                    break;
                }
            }
            allLaptop.push(oneRecord);
        }
        //Mobile
        else if(allProducts[i].category_id == 2)
        {
            for(let j = 0; j < allProductDescription.length; j++)
            {
                if(allProductDescription[j].goods_id == productId)
                {
                    oneRecord.description = allProductDescription[j];
                    break;
                }
            }
            allMobile.push(oneRecord);
        }
        //Tablet
        else if(allProducts[i].category_id == 3)
        {
            for(let j = 0; j < allProductDescription.length; j++)
            {
                if(allProductDescription[j].goods_id == productId)
                {
                    oneRecord.description = allProductDescription[j];
                    break;
                }
            }
            allTablet.push(oneRecord);
        }
        //Earphone
        else if(allProducts[i].category_id == 4)
        {
            allEarphone.push(oneRecord);
            for(let j = allProductDescription.length - 1; j >= 0; j--)
            {
                if(allProductDescription[j].goods_id == productId)
                {
                    oneRecord.description = allProductDescription[j];
                    break;
                }
            }
        }
        //Others
        else if(allProducts[i].category_id == 5)
        {
            allOthers.push(oneRecord);
            for(let j = allProductDescription.length - 1; j >= 0; j--)
            {
                if(allProductDescription[j].goods_id == productId)
                {
                    oneRecord.description = allProductDescription[j];
                    break;
                }
            }
        }
    }

    //console.log(allLaptop);
    //console.log(allMobile);

    let productData = {
        "laptop": allLaptop,
        "mobile": allMobile,
        "tablet": allTablet,
        "earphone": allEarphone,
        "others": allOthers,
        "all": allProducts
    };
    return productData;
}

function loadAllProducts()
{
    let urlMajor = urlJson.url_major + urlJson.AllGoodsInfoQuery;
    let urlAddition = urlJson.url_addition + urlJson.AllGoodsInfoQuery;

    let query = $.ajax({
        url: urlMajor,
        type: 'POST',
        dateType: "json",
        async: false,
        success: function (res,status,xhr)
        {
            if(xhr.status == '200')
            {
                let response = jQuery.parseJSON(res);
                //console.log(response.status)
                if(response.status == '00')
                    returnData = response;
                else
                    alert("Load unsuccessfully.");
            }
        },
        fail: function(res)
        {
            console.log(res)
        },
        error: function(res)
        {
            let queryAddition =  $.ajax({
                url: urlAddition,
                type: 'POST',
                dateType: "json",
                async: false,
                success: function (res, status, xhr) {
                    if (xhr.status == '200')
                    {
                        let response = jQuery.parseJSON(res);
                        if (response.status == '00')
                        {
                            returnData = response;
                        }
                        else
                            alert("Load unsuccessfully.");
                    }
                },
                fail: function (res)
                {
                    console.log(res)
                },
                error: function (res)
                {
                    console.log(res)
                }
            });
        }
    });
    return returnData;
}