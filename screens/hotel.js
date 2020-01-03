import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Dimensions
} from "react-native";
import {
  Button,
  ThemeProvider,
  Header,
  Card,
  ListItem,
  Icon,
  Divider,
  Rating,
  AirbnbRating,
  Input
} from "react-native-elements";

import * as axios from "axios";

import {config} from "../config/enviroment"

import { styles } from '../style/index';

export class HotelScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      dataSourceDefault: [],
      filter: "",
      text: "",
      data: [
        {
          name: "Hotel Havana",
          description: "Precio Por Noche",
          images: ["https://source.unsplash.com/random/800x400/?hotel"],
          stars: 3,
          price: 34.51
        },
        {
          name: "Hotel Ramblas",
          description: "Precio Por Noche",
          images: ["https://source.unsplash.com/random/800x400/?resort"],
          stars: 2,
          price: 53000
        },
        {
          name: "Hotel Decaron",
          description: "Precio Por Noche",
          images: ["https://source.unsplash.com/random/800x400/?home"],
          stars: 4,
          price: 46200
        }
      ]
    };

    console.log('width',Dimensions.get('window').width);
    console.log('height', Dimensions.get('window').height);
  }

  static navigationOptions = {
    title: "Lista de Hoteles",
    /*
      headerTitleStyle: {color:'black'},
      headerStyle: {backgroundColor:'white'},
      headerTintColor: 'orange'
     */     
    /* No more header config here! */
  };

  componentDidMount() {
    axios
      .get(`${config.url}/api/hotel`)
      .then(info => {
        //console.log("******** hotel *********", info.data.hotel);

        this.setState({
          isLoading: false,
          dataSource: info.data.hotel,
          dataSourceDefault: info.data.hotel
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  findSearch = (text) => {
    console.log(text);

    const filteredData = this.state.dataSourceDefault.filter(function(info) {
      const itemData = info.name.toLowerCase();
      const textData = text.toLowerCase();
      //return itemData.indexOf(textData) > 1 ;
      return itemData.includes(textData); 
    });    
    this.setState({ 
      text: text,
      dataSource: filteredData
     });
  }

  render() {

/*     const { filter, data } = this.state;

    const lowercasedFilter = this.state.filter.toString().toLowerCase();

    const filteredData = this.state.dataSource.filter(function(info) {
      const result = info.name.toLocaleLowerCase().includes(lowercasedFilter);     
      return result;
    }); */

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.container_main}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.buscador}>
            <Card>
              <Input
                placeholder="BUSCAR HOTELES"
                rightIcon={
                  <Icon name="search" type="material" size={24} color="orange" />
                }
                
                onChangeText = {(text) => this.findSearch(text)}
                value = {this.state.text}
                
              />
            </Card>
          </View>

          {this.state.dataSource.map((u, i) => {
            return (
              <Card key={i}>
                <TouchableHighlight key={i}
                  onPress={ () => {
                    /* 1. Navigate to the Details route with params */
                    //console.log('------------ send detail --------',u._id)
                    this.props.navigation.navigate("Detalle", {
                      itemId: u._id,
                      hotel: u.name
                    });
                  }}
                >
                  <View key={i+'view_image'}>
                    <View style={styles.container_img}>
                      {u.images.map(x => {
                        return (
                          <Image key={i+'image'}
                            style={[styles.image]}
                            resizeMode="cover"
                            source={{ uri: x }}
                          />
                        );
                      })}
                    </View>

                    <View style={styles.container} key={i+'text'}>
                      <View style={styles.leftContainer}>
                        <Text style={styles.name_hotel}>{u.name}</Text>
                      </View>
                      <View style={styles.rightContainer}>
                        <Text style={styles.name_description}>
                          {u.description}
                        </Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: "column" }} key={i+'rank'}>
                      <View style={styles.leftContainer}>
                        <Rating
                          type="star"
                          ratingCount={4}
                          imageSize={20}
                          startingValue={u.stars}
                        ></Rating>
                      </View>

                      <View style={styles.rightContainer} key={i+'precio'}>
                        <Text style={styles.price}> ARS {u.price} </Text>
                      </View>
                    </View>
                  </View>
                </TouchableHighlight>
              </Card>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
