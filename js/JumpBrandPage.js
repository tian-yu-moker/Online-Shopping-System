
const allProductDescriptions = [
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
];

let brandData;
let brandId;
let headerFirm;
let headerSlogan;
let startStatistic;
let productOneImage;
let productTwoImage;
let productOneName;
let productTwoName;
let productNumber;
let snOne;
let snTwo;

function changePage(targetPage)
{
    let pageId = $(targetPage).attr('id');

    if(pageId == "Apple_Page")
        brandId = "1";
    else if(pageId == "Huawei_Page")
        brandId = "2";
    else if(pageId == "MI_Page")
        brandId = "3";
    else if(pageId == "Samsung_Page")
        brandId = "4";
    else if(pageId == "Lenovo_Page")
        brandId = "5";
    window.location.href='BrandPage.html';
    sessionStorage.setItem('brandPageId', brandId);
}

function loadPage()
{
    brandId = sessionStorage.getItem('brandPageId');

    if(brandId == "1")
    {
        headerFirm = "Apple";
        headerSlogan = "&nbsp;It's a deep year";
        startStatistic = "The expanding universe of Apple";
        productOneImage = "../media/BrandLongImages/010101.png";
        productTwoImage = "../media/BrandLongImages/010102.png";
        snOne = "010101"
        snTwo = "010102";
    }
    else if(brandId == "2")
    {
        headerFirm = "Huawei";
        headerSlogan = "&nbsp;5G now, Huawei now";
        startStatistic = "The expanding universe of Huawei";
        productOneImage = "../media/BrandLongImages/010201.png";
        productTwoImage = "../media/BrandLongImages/010202.png";
        snOne = "010201";
        snTwo = "010202";
    }
    else if(brandId == "3")
    {
        headerFirm = "XiaoMi";
        headerSlogan = "&nbsp;Make everyone enjoy the technology";
        startStatistic = "The expanding universe of XiaoMi";
        productOneImage = "../media/BrandLongImages/020301.png";
        productTwoImage = "../media/BrandLongImages/020302.png";
        snOne = "020301";
        snTwo = "020302";
    }
    else if(brandId == "5")
    {
        headerFirm = "Lenovo";
        headerSlogan = "&nbsp;Lenovo: for those who do";
        startStatistic = "The expanding universe of Lenovo";
        productOneImage = "../media/BrandLongImages/010501.png";
        productTwoImage = "../media/BrandLongImages/010502.png";
        snOne = "010501";
        snTwo = "010502";
    }
    else if(brandId == "4")
    {
        headerFirm = "Samsung";
        headerSlogan = "&nbsp;Do whatever you want when you want to.";
        startStatistic = "The expanding universe of Samsung";
        productOneImage = "../media/BrandLongImages/010401.png";
        productTwoImage = "../media/BrandLongImages/010402.png";
        snOne = "010401";
        snTwo = "010402";
    }

    brandId = sessionStorage.getItem('brandPageId');
    brandData = loadData(brandId);
    sessionStorage.setItem('oneBrandData', brandData);



    productNumber = brandData.length;
    let count = 0;
    for(let i = 0; i < productNumber; i++)
    {
        if(brandData[i].goods_sn == snOne)
        {
            count++;
            productOneName = brandData[i].goods_name;
            if(count == 2)
                break;
        }
        else if(brandData[i].goods_sn == snTwo)
        {
            count++;
            productTwoName = brandData[i].goods_name;
            if(count == 2)
                break;
        }
    }

    for(let i = 0; i < brandData.length; i++)
    {
        for(let j = 0; j < allProductDescriptions.length; j++)
        {
            if(brandData[i].goods_id == allProductDescriptions[j].goods_id)
            {
                brandData[i].description = allProductDescriptions[j];
                break;
            }
        }
    }

    let allData = {
        "headerFirm": headerFirm,
        "headerSlogan": headerSlogan,
        "startStatistic": startStatistic,
        "productOneName": productOneName,
        "productTwoName": productTwoName,
        "productOneImage": productOneImage,
        "productTwoImage": productTwoImage,
        "productNumber": productNumber,
        "snOne": snOne,
        "snTwo": snTwo,
        "brandData": brandData
    }

    return allData;
}

/*
Query API
 */
function loadData(brandId)
{
    let urlMajor = urlJson.url_major + urlJson.goodsInfo;
    let urlAddition = urlJson.url_addition + urlJson.goodsInfo;
    let returnData;
    let submitData = {
        "brand_id": brandId
    };
    submitData = JSON.stringify(submitData);
    console.log(urlMajor);
    console.log(submitData);

    let query = $.ajax({
        url: urlMajor,
        type: 'POST',
        data: submitData,
        dateType: "json",
        async: false,
        success: function (data)
        {
            let response = jQuery.parseJSON(data);
            returnData = response.body;
        },
        fail: function (res)
        {
            console.log(res);
        },
        error: function (res)
        {
            let queryAddition = $.ajax({
                    url: urlAddition,
                    type: 'POST',
                    data: submitData,
                    dateType: "json",
                    async: false,
                    success: function (data) {
                        let response = jQuery.parseJSON(data);
                        returnData = response.body;
                    },
                    fail: function (res) {
                        console.log(res);
                    },
                    error: function (res) {
                        console.log(res);
                    }
                }
            );
        }
    });
    return returnData;
}