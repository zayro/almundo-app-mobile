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

const users = [
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  }
];

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Hoteles"
    /* No more header config here! */
  };

  render() {
    return (
      <View>
      <Card title="BUSCADOR DE HOTELES">
        {users.map((u, i) => {
          return (

            <View key={i} style={styles.user}>

              <Icon
                name="hotel"
                type="material"
                color="#00aced"
                size={60}
                onPress={() => this.props.navigation.navigate("Hotel")}
              />             

              </View>

              


          );
        })}
      </Card>

      <Divider style={{ backgroundColor: 'blue' }} />

      <Button
                title="Buscar"
                type="outline"
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0
                }}
                onPress={() => this.props.navigation.navigate("Hotel")}
              />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  user: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { alignItems: "center", justifyContent: "center" },
  name: { alignItems: "center", justifyContent: "center" }
});
