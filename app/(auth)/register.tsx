import { Pressable, StyleSheet, Text, View } from "react-native";
import React, {useRef} from "react";
import { Alert } from "react-native";
import { colors, spacingY, spacingX } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import ScreenWrapper from "@/components/ScreenWrapper";
import BackButton from "@/components/BackButton";
import Typo from "@/components/Typo";
import Input from "@/components/input";
import * as Icons from "phosphor-react-native";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const register = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const nameRef = useRef("");
    const [isLoading, setIsLoading] = React.useState(false);
    const router = useRouter();

    const handleSubmit = async() => {
        if (!emailRef.current || !passwordRef.current || !nameRef.current) {
            Alert.alert("Sign Up", "Please fill in all fields");
            return;
        }

        console.log("email: ", emailRef.current);
        console.log("name: ", nameRef.current);
        console.log("password: ", passwordRef.current);
        console.log("Logging in...");
    }

  return (
    <ScreenWrapper>
        <View style={styles.container}>
            <BackButton iconSize={28} />

            <View style={{gap: 5, marginTop: spacingY._20}}>
                <Typo size={30} fontWeight={"800"}>
                    Let's
                </Typo>
                 <Typo size={30} fontWeight={"800"}>
                    Get Started!
                </Typo>

            </View>

            {/* form */}
            <View style={styles.form}>
                <Typo size={16} color={colors.textLighter}>
                    Create an account to track your finances
                </Typo>

             <Input 
             placeholder="Enter your name"
             onChangeText={value => nameRef.current = value} 
             icon={
             <Icons.User 
             size={verticalScale(26)} 
             color= {colors.neutral300}
             weight="fill"
             />} />

             <Input 
             placeholder="Enter your email"
             onChangeText={value => emailRef.current = value} 
             icon={
             <Icons.At 
             size={verticalScale(26)} 
             color= {colors.neutral300}
             weight="fill"
             />} />

             <Input 
             placeholder="Enter your password"
             secureTextEntry={true}
             onChangeText={value => passwordRef.current = value}
             icon={
             <Icons.Lock 
             size={verticalScale(26)} 
             color= {colors.neutral300}
             weight="fill"
             />} />

            
                <Button loading={isLoading} onPress={handleSubmit}>
                    <Typo size={21} fontWeight={"700"} color={colors.black}>
                        Sign Up
                    </Typo>
                </Button>
            </View>
           
           {/* footer */}
           <View style={styles.footer}>
                <Typo size={15} color={colors.text}>
                    Already have an account?
                </Typo>
                <Pressable onPress={() => router.navigate("/(auth)/login")}>
                    <Typo size={15} fontWeight={"700"} color={colors.primary}>
                        Login
                    </Typo>
                </Pressable>
           </View>

        </View>
    </ScreenWrapper>
  )
    };

export default register;
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

// Removed conflicting local useRef function
