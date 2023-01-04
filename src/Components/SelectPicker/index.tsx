import React, {useState} from 'react';
import {
  Modal,
  View,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '@/Constants/Colors';
import {LAYOUTS} from '@/Constants/Layouts';
import {BaseInput, TBaseInputProps} from '@/Components/Inputs/BaseInput';
import {PressableOpacity} from '@/Components/Buttons/PressableOpacity';
import {Label} from '@/Components/Label';
import {ListSeparator} from '@/Components/ListSeparator';

export type TSelectPickerChildProps<Option> = {
  value: Option | undefined;
} & Omit<
  TSelectPickerProps<Option>,
  'renderItem' | 'value' | 'label' | 'error'
>;

type TSelectPickerProps<Option> = {
  items: Option[];
  onSelect: (item: Option) => void;
  renderItem: (item: Option) => React.ReactNode;
} & Omit<TBaseInputProps, 'onChangeText'>;

export function SelectPicker<Option>({
  items,
  onSelect,
  renderItem,
  ...rest
}: TSelectPickerProps<Option>) {
  const {bottom, left, right} = useSafeAreaInsets();
  const paddingBottom = Math.round(bottom) + LAYOUTS.PADDING;
  const paddingLeft = Math.round(left) + LAYOUTS.PADDING;
  const paddingRight = Math.round(right) + LAYOUTS.PADDING;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalPressHandler = () => {
    setIsModalVisible(prevIsVisible => !prevIsVisible);
  };

  const onItemSelect = (item: Option) => {
    setIsModalVisible(false);
    onSelect(item);
  };

  const renderPressableItem = ({item}: ListRenderItemInfo<Option>) => {
    const itemPressHandler = () => {
      onItemSelect(item);
    };

    return (
      <PressableOpacity onPress={itemPressHandler} style={styles.itemPressable}>
        {renderItem(item)}
      </PressableOpacity>
    );
  };

  return (
    <>
      <BaseInput
        onChangeText={() => {}}
        onPress={modalPressHandler}
        icon="chevronDown"
        {...rest}
      />
      <Modal
        statusBarTranslucent
        transparent
        supportedOrientations={['landscape', 'portrait']}
        animationType="slide"
        visible={isModalVisible}>
        <PressableOpacity
          activeOpacity={1}
          style={styles.modalPressable}
          onPress={modalPressHandler}
        />
        <View style={styles.listTitle}>
          <Label>Select Item</Label>
        </View>
        <FlatList
          style={styles.flatlist}
          contentContainerStyle={[
            styles.flatlistContainer,
            {
              paddingRight,
              paddingBottom,
              paddingLeft,
            },
          ]}
          data={items}
          ItemSeparatorComponent={ListSeparator}
          renderItem={renderPressableItem}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalPressable: {
    height: '25%',
    backgroundColor: COLORS.MODAL_BACKGROUND,
  },
  listTitle: {
    backgroundColor: COLORS.GREY_200,
    paddingTop: 10,
    alignItems: 'center',
  },
  flatlist: {
    backgroundColor: COLORS.GREY_300,
  },
  flatlistContainer: {
    paddingTop: LAYOUTS.PADDING,
  },
  itemPressable: {
    backgroundColor: COLORS.GREY_100,
    borderRadius: 6,
    padding: 10,
  },
});
