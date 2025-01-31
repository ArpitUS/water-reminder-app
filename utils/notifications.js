import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export async function scheduleHydrationReminder() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('You need to enable notifications to receive hydration reminders.');
    return;
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Time to Hydrate!",
      body: "Drink some water to stay hydrated 💧",
    },
    trigger: { seconds: 3600, repeats: true }, // Every hour
  });
}
