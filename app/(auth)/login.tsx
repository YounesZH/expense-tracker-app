import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, spacingY, spacingX } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import ScreenWrapper from "@/components/ScreenWrapper";
import BackButton from "@/components/BackButton";
import Typo from "@/components/Typo";
import Input from "@/components/input";
const login = () => {
  return (
    <ScreenWrapper>
        <View style={styles.container}>
            <BackButton iconSize={28} />

            <View style={{gap: 5, marginTop: spacingY._20}}>
                <Typo size={30} fontWeight={"800"}>
                    Hey,
                </Typo>
                 <Typo size={30} fontWeight={"800"}>
                    Welcome Back!
                </Typo>

            </View>

            {/* form */}
            <View style={styles.form}>
                <Typo size={16} color={colors.textLighter}>
                    Login to track your finances
                </Typo>

            {/* input */}    
             <Input />
            </View>
        </View>
    </ScreenWrapper>
  )
    };

export default login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20,
    },
    WelcomeText: {
        fontSize: verticalScale(20),
        fontWeight: "bold",
        color: colors.text,
    },
    form: {
        gap: spacingY._20,
    },
    forgotPassword: {
        textAlign: "right",
        fontWeight: "500",
        color: colors.text,
    },
    footer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    footerText:{
        textAlign: "center",
        fontSize: verticalScale(15),
        color: colors.text,
    },
});