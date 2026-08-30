import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="Lab"
        options={{
          title: 'Lab',
          
        }}
      />
      <Tabs.Screen
        name="Schedule"
        options={{
          title: 'Schedule',
         
        }}
      />
      <Tabs.Screen
        name="Assay"
        options={{
          title: 'Assay project',
         
        }}
      />
            <Tabs.Screen
        name="ETH"
        options={{
          title: 'ETH Zurich',
          
        }}
      />
    </Tabs>
  );
}
