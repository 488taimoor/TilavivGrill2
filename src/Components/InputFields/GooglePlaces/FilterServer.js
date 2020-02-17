//import { ROOT_URL } from '../../constants/config';
//import store from "../../Store/store";
const key='AIzaSyDTxaRRLvASzHrTZ_Dj_DIV2LRe0f9TNkE'
export const FilterServer = {

  AutoCompletePlace: AutoCompletePlace,
  PlaceDetailsById:PlaceDetailsById,
  EventPlaceDetailsById:EventPlaceDetailsById
   
}

function EventPlaceDetailsById(data){
  postData = {
    method: 'GET',
  //  body: JSON.stringify(data),// data containing user email and password https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyDTxaRRLvASzHrTZ_Dj_DIV2LRe0f9TNkE&place_id=ChIJ2QeB5YMEGTkRYiR-zGy-OsI
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
 var errormsg = "Server response error. Please try again !";
  fetch('https://maps.googleapis.com/maps/api/place/details/json?key='+key+'&place_id='+data.input, postData) //Signup User API
    .then((response) => response.json())
    .then((responseJson) => {
    //  alert(JSON.stringify(responseJson.result.address_components))
      var addesses=responseJson.result.address_components
      var item=  addesses.find((items)=>{

        return (JSON.stringify(items.types).includes('\"locality\",\"political\"'))

      })
      var city=null;
      if(item.long_name)
        city=item.long_name
        else
         city=responseJson.result.address_components[0].long_name
      console.warn(responseJson)
      console.warn('city:', item)

      var country=responseJson.result.address_components[responseJson.result.address_components.length-1].long_name
      console.warn('country:', country)
      const location={
        city:city,
        country:country,
        description:data.description
      }
      data.setProfileDetails({location:JSON.stringify(location)})
      data.setLocationValue(data.description)
      data.setValidFlags({currentLocation:false})
      data.modalHandler()
    //  data.setListofPlaces(responseJson.predictions)
    })
    .catch((error) => {
      //alert(error)
      errormsg = "Connection Problem:" + error;
   
     // store.dispatch({type:EditProfileActions.EditProfile.ERROR, error:errormsg})
      
    });
}

function PlaceDetailsById(data){
  postData = {
    method: 'GET',
  //  body: JSON.stringify(data),// data containing user email and password https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyDTxaRRLvASzHrTZ_Dj_DIV2LRe0f9TNkE&place_id=ChIJ2QeB5YMEGTkRYiR-zGy-OsI
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
 var errormsg = "Server response error. Please try again !";
  fetch('https://maps.googleapis.com/maps/api/place/details/json?key='+key+'&place_id='+data.input, postData) //Signup User API
    .then((response) => response.json())
    .then((responseJson) => {
    //  alert(JSON.stringify(responseJson.result.address_components))
      var addesses=responseJson.result.address_components
      var item=  addesses.find((items)=>{

        return (JSON.stringify(items.types).includes('\"locality\",\"political\"'))

      })
      var city=null;
      if(item.long_name)
        city=item.long_name
        else
         city=responseJson.result.address_components[0].long_name

      console.warn('city:', item)

      var country=responseJson.result.address_components[responseJson.result.address_components.length-1].long_name
      console.warn('country:', country)
      const location={
        city:city,
        country:country,
        description:data.description
      }
      data.setProfileDetails({currentLocation:JSON.stringify(location)})
      data.setLocationValue(data.description)
      data.setValidFlags({currentLocation:false})
      data.modalHandler()
    //  data.setListofPlaces(responseJson.predictions)
    })
    .catch((error) => {
      //alert(error)
      errormsg = "Connection Problem:" + error;
   
     // store.dispatch({type:EditProfileActions.EditProfile.ERROR, error:errormsg})
      
    });
}
function AutoCompletePlace(data){
 // store.dispatch({type:EditProfileActions.EditProfile.LOADING})
  postData = {
    method: 'GET',
  //  body: JSON.stringify(data),// data containing user email and password
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
 var errormsg = "Server response error. Please try again !";
  fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?key='+key+'&input='+data.input, postData) //Signup User API
    .then((response) => response.json())
    .then((responseJson) => {
      data.setListofPlaces(responseJson.predictions)
    })
    .catch((error) => {
     // alert(error)
      errormsg = "Connection Problem:" + error;
   
     // store.dispatch({type:EditProfileActions.EditProfile.ERROR, error:errormsg})
      
    });
}
