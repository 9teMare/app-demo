import { Stack } from "expo-router";
import { Text, FlatList } from "react-native";
import { XStack, ScrollView, View } from "tamagui";
import { ItemCard } from "../src/components/ItemCard";
import { cardInfo, videoCardInfo } from "../src/constants";

function CardTray({
    data,
    title,
    cardType,
    numberOfCards = 4,
    height = 290,
    button,
}: {
    data: typeof cardInfo | typeof videoCardInfo;
    title: string;
    cardType: "video" | "image";
    numberOfCards?: number;
    height?: number;
    button?: boolean;
}) {
    return (
        <View className="flex-1 justify-center p-4 gap-2">
            <Text className="text-lg font-black">{title}</Text>
            <ScrollView horizontal>
                <XStack space paddingVertical="$1">
                    {Array.from({ length: numberOfCards }).map((_, i) => {
                        if (cardType === "image") {
                            return (
                                <ItemCard
                                    key={i}
                                    id={data[i].id}
                                    title={data[i].title}
                                    description={data[i].description}
                                    uri={data[i].uri}
                                    button={button}
                                    cardProps={{
                                        width: 230,
                                        height: height,
                                        borderRadius: "$6",
                                    }}
                                    cardType={cardType}
                                />
                            );
                        }
                        return (
                            <ItemCard
                                key={i}
                                id={data[i].id}
                                title={data[i].title}
                                description={data[i].description}
                                uri={data[i].uri}
                                button={button}
                                cardProps={{
                                    width: 230,
                                    height: height,
                                    borderRadius: "$6",
                                }}
                                cardType={cardType}
                            />
                        );
                    })}
                </XStack>
            </ScrollView>
        </View>
    );
}

export default function Page() {
    return (
        <View className="flex-1 justify-center items-center">
            <Stack.Screen
                options={{
                    headerTitle: "Resources",
                    headerTitleAlign: "center",
                }}
            />
            <ScrollView>
                <CardTray data={cardInfo} title="Upcoming Events" button cardType="image" />
                <CardTray data={cardInfo} title="Yummy Recipes" height={180} cardType="image" />
                <CardTray data={videoCardInfo} title="Exciting Exercises" height={180} cardType="video" />
            </ScrollView>
        </View>
    );
}
