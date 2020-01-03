import {
    StyleSheet,
    Dimensions
} from "react-native";

import Constants from "expo-constants";

export const styles = StyleSheet.create({
    user: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    name: {
        alignItems: "center",
        justifyContent: "center"
    },
    container_main: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    },
    scrollView: {
        marginHorizontal: 5
    },
    image: {
        width: Dimensions.get('window').width - 50,
        height: 150
    },
    name_hotel: {
        fontWeight: "bold",
        fontSize: 20
    },
    name_description: {
        color: "gray",
        fontSize: 12
    },
    raiting: {
        textAlign: "left"
    },
    price: {
        color: "#F1C30E",
        fontWeight: "bold",
        fontSize: 18
    },
    container_img: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -10
    },
    container: {
        flexDirection: "column"
    },
    leftContainer: {
        flex: 1,
        flexDirection: "row",
        alignContent: "space-between",
        justifyContent: "flex-start",
        paddingTop: 5

    },
    rightContainer: {
        flex: 1,
        flexDirection: "row",
        alignContent: "space-between",
        justifyContent: "flex-end",
        marginTop: -20
    },
    buscador: {
        borderRadius: 5
    }

});