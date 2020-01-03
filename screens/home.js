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

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Hoteles"
    /* No more header config here! */
  };

  render() {
    return (
      <View>
      <Card title="BUSCADOR DE HOTELES">
   

            <View style={styles.user}>

              <Icon
                name="hotel"
                type="material"
                color="#00aced"
                size={60}
                onPress={() => this.props.navigation.navigate("Hotel")}
              />             

              </View>


   
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
