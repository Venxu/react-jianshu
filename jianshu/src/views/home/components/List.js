import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'

class List extends Component {
    render() {
        return (
            <div>
          <ListItem>
              <img className='ListPic' src="https://upload-images.jianshu.io/upload_images/9073718-961643f4ce827225.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
              <ListInfo>
                <h3 className='title'>读《林徽因：人生不过一场绚烂诗事》</h3>
                <p className='desc'>每逢四月，总会想起林徽因的现代诗《你是人间四月天》，这首诗一是为悼念徐志摩，二是为喜迎儿子梁从诫的出生所作。林徽因，比张爱玲大16岁，同为民国奇...</p>
              </ListInfo>
          </ListItem>
         </div>
        )
    }
}
export default List