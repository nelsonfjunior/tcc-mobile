import colors from "@/src/constants/colors";
import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Grupos(){
    return (
        <View style={styles.container}>
            <Text>Grupos</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    }
});