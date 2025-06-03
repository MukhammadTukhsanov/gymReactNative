import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type ButtonType = 'primary' | 'secondary' | 'outline';

interface PrimaryButtonProps {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  type?: ButtonType;
  style?: ViewStyle;
  textStyle?: TextStyle;
  prefixIcon?: any;
}

export default function Button({
  title,
  onPress,
  type = 'primary',
  style,
  textStyle,
  prefixIcon,
}: PrimaryButtonProps) {
  const getButtonStyle = (): ViewStyle[] => {
    switch (type) {
      case 'secondary':
        return [styles.button, styles.secondary];
      case 'outline':
        return [styles.button, styles.outline];
      default:
        return [styles.button, styles.primary];
    }
  };

  const getTextStyle = (): TextStyle[] => {
    switch (type) {
      case 'secondary':
        return [styles.text, styles.textSecondary];
      case 'outline':
        return [styles.text, styles.textOutline];
      default:
        return [styles.text, styles.textPrimary];
    }
  };

  return (
    <TouchableOpacity style={[...getButtonStyle(), style]} onPress={onPress} activeOpacity={0.8}>
      {prefixIcon && <Image source={prefixIcon} />}
      {title && <Text style={[...getTextStyle(), textStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 30,
    gap: 3,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#2bb6a8',
  },
  secondary: {
    backgroundColor: '#5E5CE6',
  },
  outline: {
    backgroundColor: '#303030',
    borderWidth: 2,
    borderColor: 'rgba(43, 182, 169, 0.25)',
  },
  text: {
    fontSize: 14,
  },
  textPrimary: {
    color: '#fff',
  },
  textSecondary: {
    color: '#fff',
  },
  textOutline: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
