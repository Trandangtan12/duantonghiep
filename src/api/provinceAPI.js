import axios from 'axios';
const ProvinceAPI =axios.create({
    baseURL: "https://provinces.open-api.vn/api",
    headers: {
      "Content-Type": "application/json",
    },
  });

export default ProvinceAPI
