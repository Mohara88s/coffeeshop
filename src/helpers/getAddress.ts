import axios from 'axios';

export const getAddress = async (lat: number, lon: number) => {
  const response = await axios.get(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
    { headers: { 'User-Agent': 'CoffeeShopApp' } },
  );
  return response.data.display_name;
};
