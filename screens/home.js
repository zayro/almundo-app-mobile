import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  Button,
  ThemeProvider,
  Header,
  Card,
  ListItem,
  Divider,
  Icon
} from "react-native-elements";

import { styles } from "../style/index";

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Hoteles"
    /* No more header config here! */
  };

  render() {
    return (
      <Card title="BUSCADOR DE HOTELES">
        <View>
          <View style={styles.container}>
            <Icon
              name="hotel"
              type="material"
              color="#00aced"
              size={60}
              onPress={() => this.props.navigation.navigate("Hotel")}
            />
          </View>

          <Divider style={{ backgroundColor: "blue" }} />

          <View style={styles.container}>
            <Button
              title="Buscar"
              type="solid"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0
              }}
              onPress={() => this.props.navigation.navigate("Hotel")}
            />
          </View>
        </View>
      </Card>
    );
  }
}
