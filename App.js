import React, { useEffect } from 'react';
import StackNavigator from './navigation/StackNavigator';
import { scheduleHydrationReminder } from './utils/notifications';

export default function App() {
  useEffect(() => {
    scheduleHydrationReminder();
  }, []);

  return <StackNavigator />;
}
