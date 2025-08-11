import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text } from "react-native";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const handleLogoutPress = () => {
    console.log("Logout");
  };

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerTitle: "",
          headerRight: () => (
            <Pressable
              onPress={handleLogoutPress}
              style={styles.logoutContainer}
            >
              <Text style={styles.logout}>Logout</Text>
            </Pressable>
          ),
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  logoutContainer: {
    height: 30,
  },
  logout: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
});
