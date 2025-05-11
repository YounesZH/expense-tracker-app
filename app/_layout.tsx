import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: "white",
                },
            }}
        >
            <Stack.Screen name="index" />
        </Stack>
    );
}

export default Layout;

const styles = StyleSheet.create({});