import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import HeaderBar from '../components/Header/HeaderBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

const dataExample = [
  {
    name: 'NCT-Tshirt',
    price: 'Rp.150.000',
    color: 'Black',
    size: 'XL',
    status: 'Sold Out',
  },
  {
    name: 'Ikon-Tshirt',
    price: 'Rp.170.000',
    color: 'Black',
    size: 'XL',
    status: 'Ready',
  },
  {
    name: 'GOT7-Tshirt',
    price: 'Rp.250.000',
    color: 'Black',
    size: 'XL',
    status: 'Ready',
  },
  {
    name: 'Blackpink-Tshirt',
    price: 'Rp.89.000',
    color: 'Black',
    size: 'XL',
    status: 'Sold Out',
  },
  {
    name: 'BTS-Tshirt',
    price: 'Rp.200.000',
    color: 'Black',
    size: 'XL',
    status: 'Ready',
  },
  {
    name: 'EXO-Tshirt',
    price: 'Rp.110.000',
    color: 'Black',
    size: 'XL',
    status: 'Ready',
  },
];

const Item = ({navigation}) => {
  const [status, setStatus] = useState('All');
  const [data, setData] = useState(dataExample);
  const setStatusFilter = status => {
    if (status != 'All') {
      setData([...dataExample.filter(e => e.status == status)]);
    } else {
      setData(dataExample);
    }

    setStatus(status);
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemLogo}>
          <Image
            style={styles.itemImage}
            source={require('../assets/clothing.png')}
          />
        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <View style={styles.itemcolorsize}>
            <Text style={styles.itemColor}>Color: {item.color}</Text>
            <Text style={styles.itemSize}>Color: {item.size}</Text>
          </View>
        </View>
        <View
          style={[
            styles.itemStatus,

            {
              backgroundColor:
                item.status == 'Ready' ? '#E5848E' : '#69C080',
            },
          ]}>
          <Text style={[styles.itemStatusText]}>{item.status}</Text>
        </View>
      </View>
    );
  };
  const separator = () => {
    return <View style={{height: 1, backgroundColor: '#F1F1F1'}} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar goBack={() => navigation.goBack()} />
      <View style={styles.conFilter}>
        <View style={styles.listTab}>
          <TouchableOpacity
            style={[
              styles.btnTab,
              status == 'All' && styles.btnTabActive,
              {borderTopLeftRadius: 5, borderBottomLeftRadius: 5},
            ]}
            onPress={() => setStatusFilter('All')}>
            <Text
              style={[styles.textTab, status == 'All' && styles.textTabActive]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setStatusFilter('Sold Out')}
            style={[styles.btnTab, status == 'Sold Out' && styles.btnTabActive]}>
            <Text
              style={[
                styles.textTab,
                status == 'Sold Out' && styles.textTabActive,
              ]}>
              Sold Out
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setStatusFilter('Ready')}
            style={[
              styles.btnTab,
              status == 'Ready' && styles.btnTabActive,
              {borderTopRightRadius: 5, borderBottomRightRadius: 5},
            ]}>
            <Text
              style={[
                styles.textTab,
                status == 'Ready' && styles.textTabActive,
              ]}>
              Ready
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dateFilterContainer}>
          <View style={styles.dateFilter}>
          </View>
          <View style={styles.dateFilter}>
          </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={(e, i) => i.toString()}
          ItemSeparatorComponent={separator}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemStatus: {
    backgroundColor: 'green',
    position: 'absolute',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    right: 12,
    top: 10,
  },
  itemStatusText: {
    color: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemLogo: {
    padding: 10,
  },

  itemColor: {
    fontWeight: '500',
  },
  itemSize: {
    fontWeight: '500',
    marginLeft: 40,
  },
  itemcolorsize: {
    flexDirection: 'row',
  },

  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
  },
  itemPrice: {
    fontWeight: 'bold',
    marginVertical: 4,
    fontSize: 17,
  },

  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
  },

  dateFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  textFrom: {
    color: 'gray',
  },
  textDate: {
    color: '#222',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  listTab: {
    flexDirection: 'row',
    borderRadius: 10,
    alignSelf: 'center',
  },

  btnTab: {
    width: Dimensions.get('window').width / 3.6,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#EBEBEB',
    padding: 10,
    justifyContent: 'center',
  },
  btnTabActive: {
    backgroundColor: '#E6838D',
  },

  textTabActive: {
    color: '#fff',
  },

  textTab: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
  },

  conFilter: {
    flex: 1,
    marginTop: 20,
  },
});
