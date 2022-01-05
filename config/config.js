const baseUrl = "https://coupon-solicits-1.herokuapp.com";
const accessToken = "54f2785ab5306a340f186cf23cd00556";
const config = {
  login_url: baseUrl + "/users/login",
  register_url: baseUrl + "/users/register",
  changePassword_url: baseUrl + "/users/change_password",
  forgotPassword_url: baseUrl + "/users/forgotPassword",
  hotel_url: baseUrl + "/users/hotels",
  advert_url: baseUrl + "/users/advert",
  updateProfile_url: baseUrl + "/users/me",
  locationApi_url: `http://api.positionstack.com/v1/reverse?access_key=${accessToken}&query=`,
};

export default config;
