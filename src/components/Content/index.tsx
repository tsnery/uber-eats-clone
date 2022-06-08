import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { menu } from '../mock/menu';
import * as Styles from './styles'

const { height } = Dimensions.get("window");

export function Content() {
  return (
    <React.Fragment>
      <Styles.Placeholder/>
      <View style={styles.section}>
        <Styles.Paragraph>$$ • Asiatisch • Koreanisch • Japanisch</Styles.Paragraph>
        <Styles.Info>
          <Styles.Paragraph>Opens at 11:30 AM</Styles.Paragraph>
          <Styles.Ratings>
            <Icon name="star" color="#f4c945" size={24} style={styles.icon} />
            <Styles.Paragraph>(186)</Styles.Paragraph>
          </Styles.Ratings>
        </Styles.Info>
      </View>
      <Styles.Divider />
      <View style={styles.section}>
        <Styles.Title>Restaurant info</Styles.Title>
        <Styles.Info>
          <Styles.Paragraph>Europaallee 48, Zürich, Zürich 8004</Styles.Paragraph>
          <Styles.Link>More info</Styles.Link>
        </Styles.Info>
      </View>
      <Styles.Divider />
      {menu.map(({ name, products: menuItems }, index) => (
        <View
          style={styles.section}
          key={index}
        >
          <Styles.Title size={24}>{name}</Styles.Title>
          {menuItems.map(({ title, description, price }, j) => (
            <Styles.Item key={j}>
              <Styles.Title size={24}>{title}</Styles.Title>
              <Styles.Description numberOfLines={2}>
                {description}
              </Styles.Description>
              <Styles.Price>{price}</Styles.Price>
            </Styles.Item>
          ))}
        </View>
      ))}
      <View style={{ height }}/>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 16,
  },
  icon: {
    marginRight: 8,
  },
})
