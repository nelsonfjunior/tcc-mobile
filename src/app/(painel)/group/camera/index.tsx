import { StyleSheet, View } from "react-native";
import {
  useCameraDevice,
  useCameraPermission,
  Camera as CameraRNVS,
} from "react-native-vision-camera";

export default function Camera() {
  const device = useCameraDevice("back");
  const { hasPermission } = useCameraPermission();

  if (!hasPermission) return <View></View>;
  if (device == null) return <View></View>;

  return <CameraRNVS style={styles.flex1} device={device} isActive={true} />;
}

const styles = StyleSheet.create({
  flex1: {
    display: "flex",
    flex: 1,
  },
});
