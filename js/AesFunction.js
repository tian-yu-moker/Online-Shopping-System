const aseKey = "1234123412ABCDEF"     //秘钥必须为：8/16/32位
const iv = "ABCDEF1234123412";
function encryptOneString(data, aseKey, iv)
{
    return CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(aseKey), {
            iv: iv,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
            }).toString();
}

function decryptOneString(data, aseKey, iv)
{
    return CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(aseKey), {
            iv: iv,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Utf8);
}