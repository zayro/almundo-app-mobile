import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  SafeAreaView,
  ScrollView
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

import Constants from "expo-constants";

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: [], filter: "", data: [
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
    ] };
  }

  static navigationOptions = {
    title: "Lista de Hoteles"
    /* No more header config here! */
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/hotel")
      .then(info => {
        console.log("******** hotel *********", info.data.hotel);

        this.setState({
          isLoading: false,
          dataSource: info.data.hotel
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };  

  render() {

    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    const users = [
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
    ];

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
        <Input  placeholder='BASIC INPUT' value={.} onChange={this.handleChange}  />
          {filteredData.map((u, i) => {
            return (
              <Card>
                <View key={i}>
                  <View style={styles.container_img}>
                    {u.images.map(x => {
                      return (
                        <Image
                          style={[styles.image]}
                          resizeMode="cover"
                          source={{ uri: x }}
                        />
                      );
                    })}
                  </View>

                  <View style={styles.container}>
                    <View style={styles.leftContainer}>
                      <Text style={styles.name_hotel}>{u.name}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={styles.name_description}>
                        {u.description}
                      </Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: "column" }}>
                    <View style={styles.leftContainer}>
                      <Rating
                        type="star"
                        ratingCount={4}
                        imageSize={20}
                        startingValue={u.stars}
                      ></Rating>
                    </View>

                    <View style={styles.rightContainer}>
                      <Text style={styles.price}> ARS {u.precio} </Text>
                    </View>
                  </View>
                </View>
              </Card>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container_main: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  scrollView: {
    marginHorizontal: 10
  },
  user: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: 400, height: 200 },
  name_hotel: { fontWeight: "bold", fontSize: 20 },
  name_description: { color: "gray", fontSize: 12 },
  raiting: { textAlign: "left" },
  price: {
    color: "#F1C30E",
    fontWeight: "bold",
    fontSize: 18
  },
  container_img: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flexDirection: "column"
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "flex-start"
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "flex-end"
  }
});
