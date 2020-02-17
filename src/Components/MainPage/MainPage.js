import React, { Fragment, useState, useContext } from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import colors from "../../utils/Colors";
import MainPageCard from "../Cards/MainPageCard";
import fontSize from "../../utils/FontSize";
import InputSearch from "../InputFields/InputSearch";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import { withNavigation } from "react-navigation";
import NavigationBar from "../NavigationBar/NavigationBar";
import { MainPageContext } from "../../Contexts/MainPageContext";
import Loading from "../../utils/Loading";
import { ProductsContext } from "../../Contexts/ProductsContext";
const MainPage = props => {
  const [searchValue, setSearchValue] = useState("");
  const [locationID, setLocationID] = useState("");
  const { categories, mainPagedispatch } = useContext(MainPageContext);
  const { products, productsDispatch } = useContext(ProductsContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const searchHandler = searchValue => {
    console.log("this is input text", searchValue);
    setSearchValue(searchValue);

    if (searchValue) {
      let searchedData = products.data.filter(t => {
        let constants = t.products.filter(p => {
          console.log(p.title, searchValue);
          return p.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        if (constants.length != 0) {
          console.log("this is contant", constants);
          return constants;
        }
      });

      setFilterProducts(searchedData);
    } else {
      console.log("im here");
      setFilterProducts([]);
    }
  };
  const emptyHandler = () => {
    setSearchValue("");
  };

  // console.log("categories............:", categories);
  // console.log("locationID GEt:" + locationID);
  const { textStyle, inputContainerStyle, searchContainerStyle } = styles;
  return (
    <Fragment>
      <CarouselSlider />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondaryColor }}>
        <InputSearch
          iconName="search"
          iconSize={18}
          iconColor={colors.iconColor}
          placeholder="Search"
          inputTextColor={colors.primaryColor}
          inputValue={searchValue}
          onChange={searchHandler}
          onPress={emptyHandler}
          containerStyle={searchContainerStyle}
          inputContainerStyle={inputContainerStyle}
        />
        <ScrollView
          style={{ backgroundColor: colors.secondaryColor }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {categories.state === "LOADING" ? (
            <Loading />
          ) : searchValue ? (
            filterProducts.map(p =>
              // console.log("p.....", p),
              p.products.map(res => (
                <MainPageCard
                  key={res._id}
                  categoryName={res.title}
                  imageUrl={res.imageUrl}
                  onPress={() => {
                    props.navigation.navigate("DishOptions");
                  }}
                />
              ))
            )
          ) : (
            categories.data.map((category, index) => (
              <MainPageCard
                key={category.category._id}
                categoryName={category.category.categoryName}
                imageUrl={category.category.imageUrl}
                onPress={() => {
                  props.navigation.navigate("ProductsPage");
                }}
              />
            ))
          )}
        </ScrollView>
      </SafeAreaView>
      <NavigationBar />
    </Fragment>
  );
};

export default withNavigation(MainPage);
const styles = StyleSheet.create({
  textStyle: {
    color: colors.primaryColor,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor
  },
  searchContainerStyle: {
    paddingHorizontal: 16,
    // paddingVertical: 1,
    backgroundColor: colors.iconColor
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
    backgroundColor: colors.secondaryColor
    // marginHorizontal: 16,
  }
});
