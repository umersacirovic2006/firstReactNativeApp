import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.text}>Evo me</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    text: {
        fontSize: '100px'
    }
})