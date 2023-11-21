import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button, Theme, H1 } from "tamagui";
import { useFonts } from "expo-font";
import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function App() {
    const [fontLoaded] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    });

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(fontLoaded);
    }, [fontLoaded]);

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "Home",
                }}
            />
            {isReady && (
                <View className="flex-1 items-center justify-center">
                    <StatusBar style="auto" />
                    <View className="flex-1 flex-col justify-center items-center">
                        <H1 className="font-bold text-lg mb-4">NSWS React Native App Demo</H1>
                        <Theme name="dark_Button">
                            <Link href="/resources" asChild>
                                <Button>Resources</Button>
                            </Link>
                        </Theme>
                    </View>
                </View>
            )}
        </>
    );
}
