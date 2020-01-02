import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button, ThemeProvider, Header, Card, ListItem , Icon} from 'react-native-elements';

const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  
 ];

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Hoteles',
    /* No more header config here! */
  };

    render() {
      return (


<Card title="CARD WITH DIVIDER">
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
            
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card>


      )
    }
}

const styles = StyleSheet.create({
  user: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  image: {  alignItems: 'center', justifyContent: 'center' },
  name: {  alignItems: 'center', justifyContent: 'center' },
});
