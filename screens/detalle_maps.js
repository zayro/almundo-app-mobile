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

import Mapview, { AnimatedRegion, Marker } from "react-native-maps";

import * as axios from "axios";

import Constants from "expo-constants";

export class DetalleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324
      }
    };

    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const hotelName = params ? params.hotel : null;

    console.log("*****************", params.itemId);
    this.loadInfo(itemId);
  }
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.hotel}`
    /* No more header config here! */
  });

  loadInfo(id) {
    axios
      .get(`http://localhost:3000/api/hotel/${id}`)
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

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
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
          {this.state.dataSource.map((u, i) => {
            return (
              <Card>
                <View>
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
                  </View>
                </View>

                <View style={styles.container_img}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.map }}
                  />

                  <Marker coordinate={this.state.coordinate} />
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
  },
  buscador: {
    borderRadius: 5
  }
});
