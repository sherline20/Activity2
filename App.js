import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/Ionicons";
import Icons1 from "react-native-vector-icons/Foundation";
import Icons2 from "react-native-vector-icons/FontAwesome";
import Icons3 from "react-native-vector-icons/MaterialIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.body1}>
          <View style={styles.col}>
            <Image
              style={styles.images}
              source={require("./a/a/1.jpg")}
              resizeMode="stretch"
            />
            <View style={styles.col1}>
            <Text style={styles.Text}>Ouch level: 101</Text>
            <Icon name="dots-three-horizontal" size={15} color="black" />
            </View>
          </View>
          <View style={styles.col}>
            <Image
              style={styles.images}
              source={require("./a/a/2.jpg")}
              resizeMode="stretch"
            />
             <View style={styles.col1}>
             <Text style={styles.Text}> </Text>
            <Icon name="dots-three-horizontal" size={15} color="black" />
            </View>
          </View>
          <View style={styles.col}>
            <Image
              style={styles.images}
              source={require("./a/a/3.jpg")}
              resizeMode="stretch"
            />
             <View style={styles.col1}>
             <Text style={styles.Text}>&lt;3</Text>
            <Icon name="dots-three-horizontal" size={15} color="black" />
            </View>
           
          </View>
        </View>
        <View style={styles.body2}>
        <View style={styles.col}>
            <Image
              style={styles.images1}
              source={require("./a/a/4.jpg")}
              resizeMode="stretch"
            />
           <View style={styles.col1}>
           <Text style={styles.Text}>Get the We Heart It app!</Text>
            <Icon name="dots-three-horizontal" size={15} color="black" />
            </View>
           
          </View>
          <View style={styles.col}>
            <Image
              style={styles.images1}
              source={require("./a/a/5.jpg")}
              resizeMode="stretch"
            />
          </View>
        </View>
      </View>
      <View style={styles.foot}>
        <View style={styles.foot1}>
          <Icons1 name="home" size={20} color="black" />
          <Text style={styles.title}>Home</Text>
        </View>
        <View style={styles.foot1}>
          <Icons2 name="search" size={20} color="#777777" />
          <Text style={styles.title1}>Search</Text>
        </View>
        <View style={styles.foot1}>
          <Icons3 name="add" size={25} color="#777777" />
          <Text style={styles.title1}>Create</Text>
        </View>
        <View style={styles.foot1}>
          <Icons name="chatbubble-ellipses-sharp" size={20} color="#777777" />
          <Text style={styles.title1}>Notifications</Text>
        </View>
        <View style={styles.foot1}>
          <Icons name="person" size={20} color="#777777" />
          <Text style={styles.title1}>Saved</Text>
        
          </View>
        </View>
      
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  foot: {},
  body1: {
    flex: 1,
    flexDirection: "column",
  },
  body2: {
    flex: 1,
    flexDirection: "column",
  },
  images: {
    width: 160,
    height: 185,
  },
  images1: {
    width: 170,
    height: 290,
  },
  Text:{
    fontSize: 10,
    flex: 1
  },
  col1:{
    flexDirection: 'row',
    paddingRight: 10,
    alignItems: 'center'
  },
  foot: {
    height: 60,
    paddingTop: 5,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  foot1: {
    alignItems: "center",
    justifyContent: "center",
  },
  title1:{
    color: '#777777'
  }
});
