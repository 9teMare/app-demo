import { Link } from "expo-router";
import { Button, Card, CardProps, Paragraph, Image, Text, View } from "tamagui";
import YoutubePlayer from "react-native-youtube-iframe";

export function ItemCard({
    id,
    title,
    uri,
    description,
    button,
    cardType = "image",
    cardProps,
}: {
    id: number;
    title: string;
    uri: string | { videoId: string; link: string };
    description: string;
    button: boolean;
    cardType?: "video" | "image";
    cardProps?: CardProps;
}) {
    const renderCard = () => {
        return (
            <Card
                elevate
                elevation={1}
                size="$4"
                style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                {...cardProps}
                {...(!button && { pressStyle: { scale: 0.95 }, animation: "bouncy" })}
            >
                <Card.Background height={cardType == "image" ? "50%" : "65%"} position="relative" borderTopLeftRadius="$6" borderTopRightRadius="$6">
                    {cardType === "video" ? (
                        <YoutubePlayer
                            width={(cardProps.width as number) ?? 100}
                            height={200}
                            videoId={(uri as { videoId: string; link: string }).videoId}
                        />
                    ) : (
                        <Image
                            width="100%"
                            height="100%"
                            resizeMode="cover"
                            alignSelf="center"
                            source={{
                                uri: uri as string,
                            }}
                        />
                    )}
                </Card.Background>

                <View height="$12" width="100%" padding="$3" overflow="hidden" display="flex" flexDirection="column" justifyContent="space-between">
                    <View maxHeight={button ? "$6" : "$3"}>
                        <Text userSelect="none" fontWeight="700">
                            {title}
                        </Text>
                        {cardType == "image" && (
                            <Paragraph theme="alt2" whiteSpace="nowrap" textOverflow="ellipsis" userSelect="none" lineHeight={20}>
                                {description}
                            </Paragraph>
                        )}
                    </View>

                    {button && (
                        <Link href={{ pathname: "recipe", params: { id, cardType } }} asChild>
                            <Button
                                height="$2.5"
                                width="$11"
                                borderRadius="$6"
                                pressStyle={{ scale: 0.95 }}
                                animation="bouncy"
                                backgroundColor="$blue8"
                                color="white"
                            >
                                View Event
                            </Button>
                        </Link>
                    )}
                </View>
            </Card>
        );
    };

    return (
        <>
            {button ? (
                renderCard()
            ) : (
                <Link href={{ pathname: "recipe", params: { id, cardType } }} asChild>
                    {renderCard()}
                </Link>
            )}
        </>
    );
}
