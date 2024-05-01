const axios = require('axios')

const baseUrl = "https://script.google.com/macros/s/AKfycbyd5wGKzsNbP5fwwfUvRlCcmkqVd7Tx8ljj2I-oZTP1OEO4H3kp-cDpMCTjrv_yjzBk/exec"

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json"
    }
})

exports.getData = async (wa) => {
    console.log(">>>", wa)
    try{
        const response = await axiosInstance.get();
        let responseStr = ""
        response.data.data.forEach(element => {
            if(element.wa.toString() === wa) {
                responseStr += `Nama : ${element.nama}\nJenis Servis : ${element.jenis_servis} (${element.banyak_barang})\nHarga : Rp.${element.total_bayar}\nStatus : ${element.status}\n\n`
            }
            
        });
        if(responseStr=== "") {
            responseStr = "Anda tidak punya orderan servis di toko servis komputer kami."
        }

        return responseStr
    } catch(error) {
        console.log('>>>>', error)
    }
}