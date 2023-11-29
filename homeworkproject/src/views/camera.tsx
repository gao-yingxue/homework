import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

const CameraScreen: React.FC = () => {
  const cameraRef = useRef<RNCamera>(null);
  const [isRecording, setRecording] = useState(false);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data);
    }
  };

  const toggleRecording = async () => {
    if (cameraRef.current) {
      if (isRecording) {
        const data = await cameraRef.current.stopRecording();
        console.log(data);
      } else {
        const data = await cameraRef.current.recordAsync();
        console.log(data);
      }
      setRecording(!isRecording);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.container}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={takePicture} style={{padding: 16}}>
          <Text style={styles.title}>拍照</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleRecording} style={{padding: 16}}>
          <Text style={styles.title}>
            {isRecording ? '停止录制' : '开始录制'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  controls: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    color: 'pink',
  },
});

export default CameraScreen;
