import React, {FC, memo} from "react";
import {StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import {CommonSizes, CommonStyles, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme";
import {localization} from "../localization";
import {platformNativeColor} from "../helpers";

interface IProps {
  onPress?: () => void;
  errorText?: string | null;
}

export const TryAgain: FC<IProps> = memo(({onPress, errorText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{errorText}</Text>
      {onPress != null && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.description}>{localization.errors.tryAgain}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
});

TryAgain.defaultProps = {
  errorText: localization.errors.unknownErrorHasOccurred,
};

const styles = StyleSheet.flatten({
  container: {
    ...CommonStyles.flexCenter,
    padding: CommonSizes.spacing.medium,
  } as ViewStyle,
  title: {
    ...CommonStyles.normalText,
    textAlign: "center",
    marginBottom: CommonSizes.spacing.extraSmall,
  } as TextStyle,
  description: {
    ...CommonStyles.normalText,
    color: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
    textAlign: "center",
    textDecorationLine: "underline",
  } as TextStyle,
});
