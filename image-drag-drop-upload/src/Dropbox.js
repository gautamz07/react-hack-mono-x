import React, { useCallback, useState, createRef } from 'react'
import {useDropzone} from 'react-dropzone'
import { InboxOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Cropper from 'react-cropper'
import './css/mydropbox.css'


function MyDropzone() {

  // const [myImage , setMyImage] = useState(null)
  const [uploadProductModalIsOpen, setUploadProductModalIsOpen ] = useState(false)
  const [image, setImage] = useState(null);
  const [ imageArray, setImageArray ] = useState([]);
  const cropperRef = createRef();


  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      console.log(file.name)
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = (readerEvent) => {
      // Do whatever you want with the file contents
        console.log('readerEvent.target.result')
        console.log()
        setImage(readerEvent.target.result)
        // const binaryStr = reader.result
        // console.log(binaryStr)
      }
      // reader.readAsArrayBuffer(file)
      reader.readAsDataURL(file)
      // console.log(file.toDataURL())
    })
    
  }, [])


  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const thumb = cropperRef.current?.cropper.getCroppedCanvas().toDataURL()

      const newEntry = {
        id: Math.floor(Math.random() * 2000).toString(),
        name: Math.floor(Math.random() * 2000),
        thumb
      }

      setImageArray([...imageArray, newEntry])
      console.log(imageArray)
      setImage(null)
    }
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(imageArray);
    // console.log('result.source.index')
    // console.log(result.source.index)
    // console.log('result.destination.index')
    // console.log(result.destination.index)
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImageArray(items);
  }


  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className='outer__wrapper'>
      <Button type='primary' style={{ marginTop: '1rem' }}  onClick={() => setUploadProductModalIsOpen(true)}> Add Product</Button>
      <Modal
        open={uploadProductModalIsOpen}
        footer={null}
      >
        <div className='inner__wrapper'>

        {
            imageArray.length ?
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="previewWrapper">
                {(provided) => (
                  <ul className="preview__wrapper" {...provided.droppableProps} ref={provided.innerRef}>
                    {imageArray.map(({id, name, thumb}, index) => {
                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <div className="preview__item">
                                <img src={thumb} alt={`${name} Thumb`} />
                              </div>
                              {/* <p>
                                { name }
                              </p> */}
                            </li>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
            :
            null
          }

          <div {...getRootProps({ className: 'productImgDropzone' })}>
            <input {...getInputProps()} />
            {/* <p style={{
              height: '200px'
            }}>Drag 'n' drop some files here, or click to select files</p>
            { myImage && <img src={myImage} style={{ maxWidth: '400px' }}></img> } */}
            <div className='upload__box'>
              <CloudUploadOutlined 
                style={{
                  display: 'block',
                  fontSize: '2rem',
                  color: '#bababa'
                }}
              />
              <p>Drop an image here to upload</p>
              <Button type='primary'>Upload image</Button>
            </div>
          </div>
        </div>
        {/* {
          imageArray.length ? <div className='preview__wrapper'> { imageArray.map(imgURL => <img src={imgURL} style={{ width: '80px' }} alt='preview' />) }</div> : null
        } */}
      </Modal>

      <Modal
        open={image}
        footer={null}
      >
        <div className='cropbox__wrapper'>
          <Cropper
            ref={cropperRef}
            style={{ height: 400, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            guides={true}
          /> 
          <Button
            type='primary'
            onClick={getCropData}
          >
            Upload image
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default MyDropzone