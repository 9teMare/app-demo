import { Stack } from "expo-router/stack";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";

export default function Layout() {
    return (
        <TamaguiProvider config={config}>
            <Stack
                screenOptions={{
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    presentation: "card",
                    animation: "slide_from_right",
                    gestureEnabled: true,
                }}
            />
        </TamaguiProvider>
    );
}
