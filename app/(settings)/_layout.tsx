import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const UserLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: "Welcome to the rice fields mf",
                }}
            />
        </Stack>
    );
};

export default UserLayout;
