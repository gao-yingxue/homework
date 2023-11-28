import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';

const VideoPlayer: React.FC = () => {
  const videoPlayer = useRef<Video>(null);
  const [paused, setPaused] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const onSliderValueChange = (value: number) => {
    if (videoPlayer.current) {
      videoPlayer.current.seek(value);
    }
  };

  const onSliderSlidingComplete = (value: number) => {
    if (videoPlayer.current) {
      videoPlayer.current.seek(value);
    }
  };

  const onProgress = (data: {
    currentTime: number;
    playableDuration: number;
    seekableDuration: number;
  }) => {
    setCurrentTime(data.currentTime);
    setDuration(data.seekableDuration);
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoPlayer}
        source={require('./test.mp4')}
        style={styles.video}
        paused={paused}
        onProgress={onProgress}
      />
      <TouchableOpacity
        onPress={onPlayPausePress}
        style={styles.playPauseButton}>
        <Text>{paused ? 'Play' : 'Pause'}</Text>
      </TouchableOpacity>
      <View style={styles.controls}>
        <Text>{formatTime(currentTime)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onValueChange={onSliderValueChange}
          onSlidingComplete={onSliderSlidingComplete}
        />
        <Text>{formatTime(duration)}</Text>
      </View>
    </View>
  );
};
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 200,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: '100%',
  },
  playPauseButton: {
    marginTop: 10,
  },
  slider: {
    width: '80%',
    marginTop: 10,
  },
});

export default VideoPlayer;
