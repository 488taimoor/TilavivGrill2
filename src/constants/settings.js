import { AsyncStorage } from "react-native";

// export const ROOT_URL = 'http://13.57.247.65/';

export const appSetting = (appSetting,getData) => {
  
  // const storeData = appSetting.data[0].storeHours;
  console.log("storeData....:", appSetting);
  switch(getData){}
  // return storeData;
};
export const Constants = {
  //base_url: "http://127.0.0.1:3005/",
  base_url: "http://13.57.247.65/",
  store_id: "5e1e22ac3027734d357e2cd1",
  base_image_url:
    "http://web-admin-11122019-development.s3-website-us-west-1.amazonaws.com/public/Stores/"
};

export const storeSettings = {
  storeHours: [],
  appTheme: "",
  about: "",
  appColor: "",
  carouselUrl: []
};
