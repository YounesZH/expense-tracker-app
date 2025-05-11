import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from "react-native";

const Home = () => {
    return(
        <ScreenWrapper>
            <Typo>Home</Typo>
            <Button onPress={() => router.push("/profile")}>
                <Text>Go to Profile</Text>
            </Button>
        </ScreenWrapper>
    )
}


export default Home

const styles = StyleSheet.create({})