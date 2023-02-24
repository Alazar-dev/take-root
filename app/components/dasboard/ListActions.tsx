import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import ActionDescription from './ActionDescription';

export default function ListActions({ actionStatus, actions, navigation, team, person }) {
  return (
    <>
      {actions
        .filter((action) => action.status.includes(actionStatus))
        .filter((action) => action.team.includes(team))
        .filter((action) => action.person.id?.includes(person))
        .map((action) => (
          <TouchableOpacity
            key={action.createdAt}
            // @ts-ignore
            onPress={() => navigation.navigate('TaskDetail', { item: action })}>
            <View style={styles.cardDetail}>
              <ActionDescription userData={action} />
            </View>
          </TouchableOpacity>
        ))}
    </>
  );
}

const styles = StyleSheet.create({
  cardDetail: {
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
  },
});
