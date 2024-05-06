import React from "react";
import { Tabs } from "expo-router";

const RootLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="(home)"
                options={{
                    headerShown: false,
                    title: "Home",
                }}
            />
            <Tabs.Screen
                name="(user)"
                options={{
                    headerShown: false,
                    title: "User",
                }}
            />
            <Tabs.Screen
                name="(settings)"
                options={{
                    headerShown: false,
                    title: "Settings",
                }}
            />
        </Tabs>
    );
};

export default RootLayout;
