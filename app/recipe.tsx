import { Stack, useLocalSearchParams } from "expo-router";
import { View, H4, Image, Paragraph, Text, Separator } from "tamagui";
import { ScrollView } from "tamagui";
import { cardInfo, videoCardInfo } from "../src/constants";
import WebView from "react-native-webview";

export default function Page() {
    const params = useLocalSearchParams();

    const id = parseInt(params.id as string);
    const cardType = params.cardType as "image" | "video";

    const cardData = cardType === "image" ? cardInfo[id] : videoCardInfo[id];

    const { title, description, uri, author, lastUpdated, recipe } = cardData;

    return (
        <View>
            <Stack.Screen
                options={{
                    headerTitle: "Recipes",
                    headerTitleAlign: "center",
                }}
            />
            <ScrollView width="100%">
                {cardType === "video" ? (
                    <WebView style={{ flex: 1, height: 250 }} javaScriptEnabled={true} source={{ uri: uri.link }} allowsFullscreenVideo />
                ) : (
                    <Image
                        width="100%"
                        height="$16"
                        resizeMode="cover"
                        alignSelf="center"
                        source={{
                            uri: uri as string,
                        }}
                    />
                )}

                <View className="flex-1 p-4">
                    <H4 fontSize="$7">{title}</H4>

                    <Paragraph marginVertical="$3">{description}</Paragraph>

                    {author && lastUpdated && recipe && (
                        <View>
                            <View className="w-full flex-row">
                                <Text fontSize="$2">
                                    Recipe by <Text className="font-bold underline">{author}</Text>
                                </Text>
                                <Separator alignSelf="stretch" vertical marginHorizontal={15} borderColor="alt2" />
                                <Text fontSize="$2" theme="alt2">
                                    Updated on {lastUpdated}
                                </Text>
                            </View>

                            <View className="bg-white w-full p-4 rounded-2xl mt-4" rowGap="$3">
                                <View className="w-full flex flex-row gap-24">
                                    <View>
                                        <Text className="font-bold">Prep Time</Text>
                                        <Text>{recipe.prepTime}</Text>
                                    </View>

                                    <View>
                                        <Text className="font-bold">Cook Time</Text>
                                        <Text>{recipe.cookTime}</Text>
                                    </View>
                                </View>

                                <View className="w-full flex flex-row gap-24">
                                    <View>
                                        <Text className="font-bold">Total Time</Text>
                                        <Text>{recipe.totalTime}</Text>
                                    </View>

                                    <View>
                                        <Text className="font-bold">Servings</Text>
                                        <Text>{recipe.serving}</Text>
                                    </View>
                                </View>

                                <View className="w-full flex flex-row gap-24">
                                    <View>
                                        <Text className="font-bold">Yield</Text>
                                        <Text>{recipe.yield}</Text>
                                    </View>
                                </View>
                            </View>

                            <View className="mt-6">
                                <H4 fontSize="$7">Ingredients</H4>
                                {recipe.ingredients.map((step, i) => {
                                    return (
                                        <Text key={i}>
                                            · {step.name}: {step.quantity}
                                        </Text>
                                    );
                                })}
                            </View>

                            <View className="mt-6">
                                <H4 fontSize="$7">Directions</H4>
                                {recipe.directions.map((step, i) => {
                                    return (
                                        <View key={i} className="my-1">
                                            <Text className="font-bold">Step {step.step}</Text>
                                            <Text>{step.instructions}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}
