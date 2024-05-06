import axios from "axios";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import globalStyles from "../../globals";

export default function Page() {
    type ChatTypeObj = ChatType[];

    type ChatType = {
        firstName: string;
        image: string;
        university: string;
        id: number;
        ip: string;
    };

    const [obj, setObj] = useState<ChatTypeObj>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get("https://dummyjson.com/users").then((response) => {
            setObj(response.data.users);
            setIsLoaded(true);
        });
    }, []);

    return (
        <View style={globalStyles.container}>
            <ScrollView>
                {isLoaded && obj ? (
                    obj?.map((dataObj: ChatType, index: number) => (
                        <Link
                            href={{
                                pathname: `/users/${dataObj.id}`,
                                params: dataObj,
                            }}
                            key={index}
                            style={[styles.link, globalStyles.wrapper]}
                        >
                            <View style={styles.wrapper}>
                                <View style={styles.info}>
                                    <View>
                                        <Image
                                            source={dataObj.image}
                                            style={styles.image}
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    </View>
                                    <View>
                                        <View>
                                            <Text style={globalStyles.text}>
                                                {dataObj.firstName}
                                            </Text>
                                            <Text style={globalStyles.text}>
                                                {dataObj.ip}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.unread}>
                                    <Text style={globalStyles.text}>
                                        {dataObj.id}
                                    </Text>
                                </View>
                            </View>
                        </Link>
                    ))
                ) : (
                    <Text>Loading...</Text>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    link: {
        backgroundColor: "brown",
        margin: "5%",
        padding: "2%",
        borderRadius: 50,
    },
    wrapper: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        flexDirection: "row",
        padding: "1%",
    },
    info: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: "#0553",
    },
    unread: {
        flex: 1,
        justifyContent: 'flex-end'
    },
});
