import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { List } from 'react-native-paper';
import Header from '../layouts/Header';
import { CustomTextField } from '../components/TextFields';

export default function FAQ() {
  return (
    <ScrollView style={{ backgroundColor: '#fafafa' }}>
      <Header label="Frequently Asked Questions" />
      <List.Section style={styles.listSection}>
        <List.Accordion
          title="How To Add A Team Member"
          titleStyle={styles.titleStyle}>
          <CustomTextField
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sit sit in viverra. Nec maecenas nunc orci phasellus auctor."
            alignSelf="center"
            paddingTop={10}
          />
          <View style={styles.imageContainer}>
            <Image source={require('../assets/faq.png')} />
          </View>
          <CustomTextField
            label="Nulla arcu, gravida quis justo euismod id sit massa pellentesque. Adipiscing turpis erat risus, blandit convallis egestas. Vitae nisl lorem enim mollis sagittis, velit sed.
Facilisi scelerisque varius elementum viverra nibh ante nunc. Parturient lacus nascetur mauris tellus a suspendisse. Cras vulputate velit arcu a ac amet, cras sem aliquet."
            paddingBottom={10}
            paddingTop={10}
          />
        </List.Accordion>

        <List.Accordion
          title="How To Add People"
          titleStyle={styles.titleStyle}>
          <CustomTextField
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sit sit in viverra. Nec maecenas nunc orci phasellus auctor."
            alignSelf="center"
            paddingTop={10}
          />
          <View style={styles.imageContainer}>
            <Image source={require('../assets/faq.png')} />
          </View>
          <CustomTextField
            label="Nulla arcu, gravida quis justo euismod id sit massa pellentesque. Adipiscing turpis erat risus, blandit convallis egestas. Vitae nisl lorem enim mollis sagittis, velit sed.
Facilisi scelerisque varius elementum viverra nibh ante nunc. Parturient lacus nascetur mauris tellus a suspendisse. Cras vulputate velit arcu a ac amet, cras sem aliquet."
            paddingBottom={10}
            paddingTop={10}
          />
        </List.Accordion>
        <List.Accordion
          title="How To A New Task"
          titleStyle={styles.titleStyle}>
          <CustomTextField
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sit sit in viverra. Nec maecenas nunc orci phasellus auctor."
            alignSelf="center"
            paddingTop={10}
          />
          <View style={styles.imageContainer}>
            <Image source={require('../assets/faq.png')} />
          </View>
          <CustomTextField
            label="Nulla arcu, gravida quis justo euismod id sit massa pellentesque. Adipiscing turpis erat risus, blandit convallis egestas. Vitae nisl lorem enim mollis sagittis, velit sed.
Facilisi scelerisque varius elementum viverra nibh ante nunc. Parturient lacus nascetur mauris tellus a suspendisse. Cras vulputate velit arcu a ac amet, cras sem aliquet."
            paddingBottom={10}
            paddingTop={10}
          />
        </List.Accordion>
        <List.Accordion
          title="How To Manage People"
          titleStyle={styles.titleStyle}>
          <CustomTextField
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sit sit in viverra. Nec maecenas nunc orci phasellus auctor."
            alignSelf="center"
            paddingTop={10}
          />
          <View style={styles.imageContainer}>
            <Image source={require('../assets/faq.png')} />
          </View>
          <CustomTextField
            label="Nulla arcu, gravida quis justo euismod id sit massa pellentesque. Adipiscing turpis erat risus, blandit convallis egestas. Vitae nisl lorem enim mollis sagittis, velit sed.
Facilisi scelerisque varius elementum viverra nibh ante nunc. Parturient lacus nascetur mauris tellus a suspendisse. Cras vulputate velit arcu a ac amet, cras sem aliquet."
            paddingBottom={10}
            paddingTop={10}
          />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    marginBottom: 100,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleStyle: {
    color: '#21C17C',
    fontSize: 16,
    fontWeight: '700',
  },
});
