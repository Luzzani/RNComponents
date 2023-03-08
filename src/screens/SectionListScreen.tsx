import React from 'react';
import {View, SectionList, Text, StyleSheet} from 'react-native';
import {casas} from '../DUMMYDATA/dummyData';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ItemSeparetor} from '../components/ItemSeparetor';

export const SectionListScreen = () => {
  return (
    <View style={{...styles.containerApp}}>
      <SectionList
        sections={casas}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <HeaderTitle title={'Total de casas ' + casas.length} />
        )}
        stickySectionHeadersEnabled
        renderSectionHeader={({section: {casa}}) => (
          <View style={style.headerListContainer}>
            <HeaderTitle title={casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <Text>{'Total: ' + section.data.length}</Text>
        )}
        // ItemSeparatorComponent={() => <ItemSeparetor />}
        SectionSeparatorComponent={() => <ItemSeparetor />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export const style = StyleSheet.create({
  headerListContainer: {
    backgroundColor: '#F5F5F5',
  },
});
