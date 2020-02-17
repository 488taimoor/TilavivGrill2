import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
// import InputSearch from './InputSearch';
import InputSearch from '../InputSearch';
import {FilterServer} from './FilterServer';
import {Fonts} from '../../utils/Fonts';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class GooglePlacesForNewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      list: [],
      modalVisible: false,
      selectedValue: props.eventLocation ? props.eventLocation : 'Location',
      selectedId: null,
    };
    this.setListofPlaces = this.setListofPlaces.bind(this);
  }
  modalHandler = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };
  setLocationValue = location => {
    // this.props.setValidFlags({locationFlag:false})
    this.setState({
      selectedValue: location,
    });
  };
  selectedValueHandler = (selectedValue, selectedId) => {
    this.setState({selectedValue, selectedId});
    var data = {
      input: selectedId,
      description: selectedValue,
      modalHandler: this.modalHandler,
      setProfileDetails: this.props.setEventData,
      setLocationValue: this.setLocationValue,
      setValidFlags: this.props.setValidFlags,
    };
    FilterServer.EventPlaceDetailsById(data);
    // this.modalHandler()
  };
  searchHandler = searchText => {
    var data = {
      input: searchText,
      setListofPlaces: this.setListofPlaces,
    };
    FilterServer.AutoCompletePlace(data);
    this.setState({searchText});
  };
  setListofPlaces(places) {
    this.setState({
      list: places,
    });
  }
  clearHandlder = () => {
    this.setState({
      searchText: '',
      list: [],
    });
  };
  render() {
    const {inputContainerStyle} = this.props;
    const {selectedValue, modalVisible, selectedId, searchText} = this.state;

    // ! Destructure styles...
    const {
      containerStyle,
      closeTextStyle,
      closeTextTouchStyle,
      inputContainerStyle1,
      filedContainerStyle,
      textStyle,
      btnContainerStyle,
      btnTextStyle,
      modalContainerStyle,
      boxContainerStyle,
    } = styles;
    // !

    return (
      <Fragment>
        <SafeAreaView>
          <TouchableOpacity
            style={[btnContainerStyle, inputContainerStyle]}
            onPress={this.modalHandler}>
            <Icon name="near-me" size={16} color="#909090" />
            <Text
              style={[
                btnTextStyle,
                {color: selectedValue === 'Location' ? '#909090' : '#000'},
              ]}>
              {selectedValue.length > 24
                ? selectedValue.substring(0, 24) + '...'
                : selectedValue}
            </Text>
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.modalHandler();
            }}>
            <View style={modalContainerStyle}>
              <SafeAreaView style={boxContainerStyle}>
                <View style={containerStyle}>
                  <TouchableOpacity
                    style={closeTextTouchStyle}
                    onPress={this.modalHandler}>
                    <Text style={closeTextStyle}>Cancel</Text>
                  </TouchableOpacity>
                  <InputSearch
                    placeholder="Search"
                    iconName="search"
                    iconSize={18}
                    iconColor="#707070"
                    placeholderTextColor="#707070"
                    inputTextColor="#000"
                    autoFocus={true}
                    inputValue={searchText}
                    inputContainerStyle={inputContainerStyle1}
                    onChange={this.searchHandler}
                    onPress={this.clearHandlder}
                  />
                  <Text
                    style={{
                      color: 'red',
                      marginTop: 20,
                      display: this.state.searchText === '' ? 'flex' : 'none',
                    }}>
                    Please Enter Location
                  </Text>

                  <FlatList
                    style={{marginTop: 20}}
                    data={this.state.list}
                    renderItem={({item}) => {
                      //  alert(JSON.stringify(item))
                      return (
                        <TouchableOpacity
                          style={filedContainerStyle}
                          onPress={() =>
                            this.selectedValueHandler(
                              item.description,
                              item.place_id,
                            )
                          }>
                          <Text
                            style={[
                              textStyle,
                              {
                                color:
                                  item.id == selectedId ? '#2C4BFC' : '#909090',
                              },
                            ]}>
                            {item.description}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                    keyExtractor={item => item.id}
                  />
                </View>
              </SafeAreaView>
            </View>
          </Modal>
        </SafeAreaView>
      </Fragment>
    );
  }
}

// ! all styles ...
const styles = StyleSheet.create({
  btnContainerStyle: {
    borderBottomWidth: 0.5,
    borderColor: '#909090',
    paddingBottom: 8,
    flexDirection: 'row',
    borderRadius: 5,
  },
  btnTextStyle: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 14,
    color: '#909090',
    marginLeft: 8,
    flex: 1,
  },
  modalContainerStyle: {
    // padding: 20,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    // justifyContent: "center",
    // alignItems: 'center'
  },
  containerStyle: {
    flex: 1,
    padding: 20,
  },
  inputContainerStyle1: {
    ...Platform.select({
      ios: {
        paddingVertical: 10,
      },
      android: {
        paddingVertical: 5,
      },
    }),
    borderBottomWidth: 0,
    paddingHorizontal: 10,
    // paddingVertical: 10,
    borderRadius: 5,
    // marginHorizontal: 20,
    backgroundColor: 'rgba(142, 142, 147, 0.1)',
  },
  filedContainerStyle: {
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    marginTop: 16,
    borderColor: '#909090',
  },
  textStyle: {
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 16,
    color: '#000',
  },
  boxContainerStyle: {
    // borderWidth: 1,
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  closeTextTouchStyle: {
    marginVertical: 16,
    alignSelf: 'flex-end',
  },
  closeTextStyle: {
    color: '#007AFF',
    fontFamily: Fonts.EncodeSansRegular,
    fontSize: 16,
  },
});
