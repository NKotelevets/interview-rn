import {
  Question1,
  Question2,
  Question3,
  Question4,
} from "@/components/Questions";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Card = {
  id: number;
  title: string;
  content: React.ReactNode;
};

function CardItem({ card }: { card: Card }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{card.title}</Text>
      {card.content}
    </View>
  );
}

export default function ExploreCardsScreen() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const controlsBottomPadding = Math.max(insets.bottom, 8) + tabBarHeight + 8;

  const cards = useMemo<Card[]>(
    () => [
      { id: 1, title: "Question 1", content: <Question1 /> },
      { id: 2, title: "Question 2", content: <Question2 /> },
      {
        id: 3,
        title: "Question 3",
        content: <Question3 />,
      },
      {
        id: 4,
        title: "Question 4",
        content: <Question4 />,
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const canGoBack = currentIndex > 0;
  const canGoNext = currentIndex < cards.length - 1;

  const handleNext = () => {
    if (canGoNext) setCurrentIndex((i) => Math.min(i + 1, cards.length - 1));
  };
  const handleBack = () => {
    if (canGoBack) setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  const handleResult = () => {
    console.log("Result");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentCenter}>
        <CardItem card={cards[currentIndex]} />
        <Text style={styles.counter}>{`${currentIndex + 1} / ${
          cards.length
        }`}</Text>
      </View>

      <View style={[styles.controls, { paddingBottom: controlsBottomPadding }]}>
        <Pressable
          onPress={handleBack}
          disabled={!canGoBack}
          style={({ pressed }) => [
            styles.button,
            !canGoBack && styles.buttonDisabled,
            pressed && canGoBack && styles.buttonPressed,
          ]}
          accessibilityRole="button"
          accessibilityState={{ disabled: !canGoBack }}
        >
          <Text style={styles.buttonText}>PREVIOUS</Text>
        </Pressable>

        <Pressable
          onPress={handleResult}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          accessibilityRole="button"
          accessibilityState={{ disabled: !canGoNext }}
        >
          <Text style={styles.buttonText}>RESULT</Text>
        </Pressable>

        <Pressable
          onPress={handleNext}
          disabled={!canGoNext}
          style={({ pressed }) => [
            styles.button,
            !canGoNext && styles.buttonDisabled,
            pressed && canGoNext && styles.buttonPressed,
          ]}
          accessibilityRole="button"
          accessibilityState={{ disabled: !canGoNext }}
        >
          <Text style={styles.buttonText}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    borderRadius: 12,
    padding: 5,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: "#333",
  },
  counter: {
    marginTop: 10,
    fontSize: 14,
    color: "#666",
  },
  controls: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#0A84FF",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonDisabled: {
    backgroundColor: "#B0B7C3",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
