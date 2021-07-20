import {isAndroid, isIos} from "../../core/theme";
import {ActionSheetIOS, ActionSheetIOSOptions, Alert, AlertButton} from "react-native";
import {localization} from "../localization";

export function showActionSheet(options: ActionSheetIOSOptions, onOptionSelected: (optionIndex: number) => void) {
  if (isIos) {
    ActionSheetIOS.showActionSheetWithOptions(options, onOptionSelected);
  } else if (isAndroid) {
    const buttons: AlertButton[] = options.options.map((value, index) => {
      return {
        text: value,
        onPress: () => {
          onOptionSelected(index);
        },
        style: "default",
      };
    });

    Alert.alert(options.title || "", options.message, buttons, {cancelable: true});
  }
}

export function showCommonDialog(title: string, message: string, onAcceptPress: () => void) {
  Alert.alert(
    title,
    message,
    [
      {
        text: localization.common.yes,
        onPress: onAcceptPress,
        style: "default",
      },
      {
        text: localization.common.no,
        style: "default",
      },
    ],
    {
      cancelable: true,
    },
  );
}
