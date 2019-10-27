import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../constants/Colors'

import List from '../../components/List/List'
let marginTop = 0;

if (Platform.OS === "android") {
  /// android에서 상태바만큼 margin
  marginTop = Constants.statusBarHeight;
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={[styles.container, marginTop]}>
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>대회정보</Text>
          </View>
          <View style={styles.serachBar}>
            <AntDesign
              name="search1"
              size={23}
              style={{ marginBottom: -3 }}
              color={Colors.default}/>
            <TextInput style={styles.input} placeholder="찾고싶은 대회를 입력하세요"/>
            </View>
          <View style={styles.listContainer}>
            <List />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 10
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000"
  },
  input: {
    marginLeft: 15

  },
  listContainer: {
    padding: 10
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30,
    paddingLeft: 20
  },
  serachBar: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40
  }
 
});
