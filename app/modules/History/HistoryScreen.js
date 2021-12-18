import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../assets/icons';
import { CustomHeader, HistoryItem, Loader, WalletBalance } from '../../components';
import strings from '../../constants/Strings';
import HistoryTypes from '../../redux/HistoryRedux';
import styles from './styles/HistoryScreenStyles';

const HistoryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { historyList, fetching } = useSelector(state => state.history)

  useEffect(() => {
    dispatch(HistoryTypes.historyRequest());
  }, [dispatch])

  return (
    <View style={styles.mainContainer}>
      <CustomHeader
        left
        title={strings.history}
        leftIcon={icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <FlatList
        data={historyList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={() => <WalletBalance amount={'5000'} />}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        renderItem={({ item }) => <HistoryItem {...item} />}
      />
      {fetching && <Loader />}
    </View>
  );
};

export default HistoryScreen;
