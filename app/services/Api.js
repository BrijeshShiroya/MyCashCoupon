import { apiConfig } from './Utils';
const Secrets = {
  API_URL_DEBUG: 'https://resel.co.in/mycc/api/',
  API_URL: 'https://resel.co.in/mycc/api/',
};
const api = apiConfig(__DEV__ ? Secrets.API_URL_DEBUG : Secrets.API_URL);

const home = () => {
  const login = credentials => api.post('login', credentials);
  const register = credentials => api.post('register', credentials);
  const history = (id) => api.post('gethistory', id);
  const config = () => api.get('config');
  const getcoupon = (couponData) => api.post('getcoupon', couponData);
  const brands = type => api.post('listBrands', type);
  const exlusiveProduct = () => api.get('exclusiveProducts');
  const productFilter = filterData => api.post('productfilter', filterData);
  const homeCategories = () => api.get('homeCategories');
  const categories = () => api.get('listCategories');
  const productDetails = id => api.post('getProductById', id);
  const getProductsByBrandId = id => api.post('getProductbyBrandid', id);
  const getProductsByCategoryId = id => api.post('getProductbyCategoryid', id);
  const addToCart = cartData => api.post('cart', cartData);
  const cart = credentials => api.post('cartlist', credentials);
  const cartDelete = id => api.post('cartdelete', id);
  const addOrder = orderData => api.post('orderadd', orderData);
  const orderStatus = orderData => api.post('orderstatus', orderData);
  const myorders = id => api.post('myorders', id);
  const myorder_detail = orderId => api.post('myorder_detail', orderId);
  const addCoupon = couponInfo => api.post('addcoupon', couponInfo);
  const changePassword = passwordInfo =>
    api.post('changepassword', passwordInfo);

  return {
    login,
    register,
    history,
    config,
    getcoupon,
    brands,
    exlusiveProduct,
    history,
    productFilter,
    homeCategories,
    categories,
    productDetails,
    getProductsByBrandId,
    getProductsByCategoryId,
    addToCart,
    cart,
    cartDelete,
    addOrder,
    orderStatus,
    myorders,
    myorder_detail,
    addCoupon,
    changePassword,
  };
};
export default {
  home,
};
