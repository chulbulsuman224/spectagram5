import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";


export default function DashboardScreen() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}