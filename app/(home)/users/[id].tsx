import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { query } = useLocalSearchParams<{ dataObj? }>();

    return (
        <View>
            <Text>Search: {query ?? "unset"}</Text>
            <Text>User ID - {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
