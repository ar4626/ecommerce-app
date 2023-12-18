export const base_url = "https://ecommerce-app-api-u6rm.onrender.com/api/"

const getTokenFromLocalStorage = localStorage?.getItem('customer')
  ? JSON.parse(localStorage?.getItem('customer'))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage?.token || "" // Use optional chaining here
    }`,
    Accept: "application/json",
  },
};  