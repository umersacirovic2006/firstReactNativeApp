import React from "react";
import { Stack } from "expo-router";

const HomeLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: "Home Page",
                }}
            />
            <Stack.Screen
                name="users/[id]"
                options={{
                    headerTitle: "User Page",
                }}
            />
        </Stack>
    );
};

export default HomeLayout;
