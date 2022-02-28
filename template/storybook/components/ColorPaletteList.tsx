import React, {FC, memo, useCallback, useMemo} from "react";
import {FlatList} from "react-native";
import {ColorPaletteListItem} from "./ColorPaletteListItem";
import {CommonStyles} from "~/core/theme/commonStyles";
import {Colors} from "~/core/theme/colors";
import {Separator} from "~/common/components/Separator";

interface IProps {
  isPlatformColors: boolean;
}

export const ColorPaletteList: FC<IProps> = memo(({isPlatformColors}) => {
  const renderItem = useCallback(
    ({item}: {item: string}) => {
      return <ColorPaletteListItem key={item} color={item} isPlatformColor={isPlatformColors}/>;
    },
    [isPlatformColors],
  );

  const keyExtractor = useCallback((item: string) => {
    return item;
  }, []);

  const data = useMemo(() => (isPlatformColors ? platformPalette : colorPalette), [isPlatformColors]);

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      style={CommonStyles.flexPlatformBackground}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
    />
  );
});

const platformPalette: string[] = Object.keys(Colors);
const colorPalette: string[] = Object.keys(Colors);
