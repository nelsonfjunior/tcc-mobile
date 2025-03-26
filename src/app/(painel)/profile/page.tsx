import { useAuthStore } from "@/src/context/authContext";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";


export default function Profile(){
    const router = useRouter();
    const { isAuthenticated, logout } = useAuthStore();

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace("/");
        }
    }, [isAuthenticated]);
    
    return (
        <View style={styles.container}>
            <Text>Página Perfil</Text>
            <Pressable onPress={logout} style={styles.button}>
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