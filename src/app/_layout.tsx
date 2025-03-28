import React from "react";
import { Stack } from "expo-router";

export default function MainLayout(){
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="(auth)/signup/signup"
                options={{ headerShown: false }}
            /> 
            <Stack.Screen
                name="(painel)"
                options={{ headerShown: false }}
            />  
        </Stack>
    )
}