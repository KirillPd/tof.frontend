import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// TODO: Fix error
// import { SEND_NICKNAME, SEND_PHOTOS } from 'react-native-dotenv';
import { SEND_NICKNAME_URL, SEND_PHOTOS_URL } from '../../constants/api';
import styles, { modalStyles, addImage } from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import I18n from '../../i18n';

const PHOTOS_AMOUNT = 10;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNickNameEmpty: true,
      nickname: '',
      photos: new Array(PHOTOS_AMOUNT)
    };
    this.onNickNameDonePress = this.onNickNameDonePress.bind(this);
  }

  render() {
    const { isNickNameEmpty } = this.state;

    return (
      <View style={styles.flex}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.flex}>
            <View style={styles.grid}>
              {this.getPhotoSlots()}
            </View>
            <TouchableOpacity style={[styles.button, styles.buttonScreen]} onPress={() => this.sendPhotos()}>
              <Text style={styles.buttonText}>{I18n.t('button_done')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Modal
          isVisible={isNickNameEmpty}
          backdropOpacity={modalStyles.backdropOpacity}
        >
          <View style={styles.modalWrapper}>
            <View style={styles.modalBody}>
              <KeyboardAwareScrollView>
                <TextInput
                  style={styles.input}
                  placeholder={I18n.t('input_nickname')}
                  returnKeyType={'done'}
                  onChangeText={(text) => {
                    this.setNickname(text);
                  }}
                  autoCorrect={false}
                />
                <TouchableOpacity style={styles.button} onPress={this.onNickNameDonePress}>
                  <Text style={styles.buttonText}>{I18n.t('button_done')}</Text>
                </TouchableOpacity>
              </KeyboardAwareScrollView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  setNickname(nickname) {
    this.setState({ nickname: nickname });
  }

  onNickNameDonePress() {
    this.sendNickName();
    this.setState({ isNickNameEmpty: false });
  }

  sendNickName() {
    console.log(SEND_NICKNAME_URL, JSON.stringify({
      nickname: this.state.nickname
    }));

    let data = new FormData();

    data.append('nickname', this.state.nickname);

    return fetch(SEND_NICKNAME_URL, {
      method: 'post',
      body: data
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPhotoSlots() {
    let slots = [];
    const { photos } = this.state;

    for (let i = 0; i < PHOTOS_AMOUNT; i++) {
      const photo = photos[i];

      slots.push(<View key={i} style={styles.buttonPhotoHolder}>
        <TouchableOpacity style={styles.flex} onPress={() => this.selectPhoto(i)}>
          <View style={styles.buttonPhotoContent}>
            {
              photo && photo.uri
                ? <Image style={styles.photo} source={{ uri: photo.uri }} />
                : <Image style={styles.addImage} source={{ uri: addImage }} />
            }
          </View>
        </TouchableOpacity>
      </View>);
    }

    return slots;
  }

  selectPhoto(i) {
    ImagePicker.openCamera({
      mediaType: 'photo',
      width: 150,
      height: 150,
      cropping: true,
      cropperCircleOverlay: true,
      cropperToolbarTitle: I18n.t('camera_registry_title')
    })
      .then(image => {
        console.log(image);
        this.setState(prevState => {
          let photos = prevState.photos.concat();

          photos[i] = {
            type: 'image',
            uri: image.path,
          }

          return { photos };
        });
      });
  }

  getFormattedPhotos() {
    const { photos, nickname } = this.state;
    let data = new FormData();

    data.append('nickname', nickname);

    photos.forEach((photo, index) => {
      if (!photo.uri) {
        return;
      }

      data.append(`photo[${index}]`, {
        uri: photo.uri,
        name: `photo-name-${index}.JPG`,
        type: 'multipart/form-data'
      });
    });

    return data;
  }

  sendPhotos() {
    console.log(SEND_PHOTOS_URL, this.getFormattedPhotos());
    return fetch(SEND_PHOTOS_URL, {
      method: 'put',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: this.getFormattedPhotos()
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Register;
