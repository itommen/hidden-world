import React, { Component } from 'react';

import { readAsDataURL } from 'promise-file-reader';
import ImageGallery from 'react-image-gallery';

export default class LocalFilesImageGallery extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      savedImages: []
    };

    this.updateGalleryItems = this.updateGalleryItems.bind(this);
  }


  componentDidMount() {
    const { savedImages = [] } = this.props;

    this.setState(state => ({
      ...state,
      savedImages: savedImages.map(x => ({
        original: `/uploads/${x}`,
        thumbnail: `/uploads/${x}`
      }))
    }));

    this.updateGalleryItems();
  }

  componentDidUpdate({ files }) {
    if (files !== this.props.files) {
      this.updateGalleryItems();
    }
  }

  updateGalleryItems() {
    const { files = [] } = this.props;

    if (files && files.length) {
      Promise.all([...files].map(readAsDataURL))
        .then(images => this.setState(state => ({
          ...state,
          images: images.map(x => ({
            original: x,
            thumbnail: x
          }))
        })));
    }
  }

  render() {
    const { images, savedImages } = this.state;

    const items = [...images, ...savedImages];
    return items.length
      ? <ImageGallery
        items={items}
        showPlayButton={false}
        showIndex={true} />
      : null;
  }
}
