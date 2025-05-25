import React from "react";
import { Stack } from "expo-router";
import '../../global.css';

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
                name="(painel)/home"
                options={{ headerShown: false }}
                />  
            <Stack.Screen
                name="(painel)/group/[id]" 
                options={{ headerShown: false }}
            />  
        </Stack>
    )
}