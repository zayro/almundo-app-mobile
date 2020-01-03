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
import { Card, Icon, Rating } from "react-native-elements";

import * as axios from "axios";

import Constants from "expo-constants";

import { config } from "../config/enviroment";

export class DetalleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    };

    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;

    console.log("*****************", params.itemId);
    this.loadInfo(itemId);
  }
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.hotel}`
    /* No more header config here! */
  });

  loadInfo(id) {
    axios
      .get(`${config.url}/api/hotel/${id}`)
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

  loadInfos(id) {
    fetch(`${config.url}/api/hotel/${id}`)
      .then(response => response.json())
      .then(info => {
        console.log(info);
        this.setState({
          isLoading: false,
          dataSource: info.hotel
        });
      })
      .catch(error => {
        console.error(error);
      });
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
              <Card key={i}>
                <View style={styles.container} key={i + "views"}>
                  <View style={styles.leftContainer}>
                    <Text style={styles.name_hotel}>{u.name}</Text>
                  </View>
                </View>

                <View style={{ flexDirection: "column" }} key={i + "raiting"}>
                  <View style={styles.leftContainer}>
                    <Rating
                      type="star"
                      ratingCount={4}
                      imageSize={20}
                      startingValue={u.stars}
                    ></Rating>
                  </View>
                </View>

                <View key={i + "street"} style={[styles.leftContainer, styles.icono_space]}>
               
                  <Icon
                    name="marker"
                    type="foundation"
                    color="gray"
                    style={styles.icono}
                    size={20}
                   
                  />
         

                

                <View style={styles.street}>
            <Text style={styles.name_description}>  {u.street} </Text>
                </View>

                </View>

                <View style={styles.container_img}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.map }}
                    PlaceholderContent={<ActivityIndicator />}
                  />
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
  image: { width: 350, height: 250 },
  name_hotel: { fontWeight: "bold", fontSize: 20 },
  name_description: { color: "gray", fontSize: 12 },
  raiting: { textAlign: "left" },
  street: { marginTop: 0,  marginRight: 50 },
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
    justifyContent: "flex-start",
    padding: 3
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "flex-end"
  },
  icono: {
    margin: 5,
    padding:5
  },
  icono_space: {
    margin: 5,
    padding:5
  }  
});
