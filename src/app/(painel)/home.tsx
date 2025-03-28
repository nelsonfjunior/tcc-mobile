import colors from "@/src/constants/colors";
import { useAuthStore } from "@/src/context/authContext";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";


export default function Home(){
    const router = useRouter();
    const { logout } = useAuthStore();

    async function handleLogout() {
        await logout();
        router.replace("/");
    }
    
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Pressable onPress={handleLogout} style={styles.button}>
                <Text style={styles.buttonText}>Sair</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    button: {
        backgroundColor: "red", 
        padding: 10, 
        marginTop: 20 
    },
    buttonText: { 
        color: "white", 
        fontWeight: "bold" 
    },
});