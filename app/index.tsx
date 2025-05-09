import { StyleSheet, Text, View, Image } from "react-native";
import React, { use, useEffect } from "react";
import { useRouter } from "expo-router";
import { colors } from "@/constants/theme";

const index = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/welcome");
        }, 2000);
    }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splashImage.png")}
        style={styles.container}
        resizeMode="contain"
      />
    </View>
  );
}

export default index;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.neutral900,
    },

    logo: {
        height: "20%",
        aspectRatio: 1,
    }
});
