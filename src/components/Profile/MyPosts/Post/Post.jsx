import React from 'react';
import s from './Post.module.css';

const Post = ({likesCount, message}) => {
  return (
    <div className={s.item}>
      <img src='https://im0-tub-ru.yandex.net/i?id=013a4c205e45603b47513dc06362392d&n=13&exp=1' />
        {message}
      <div><span>like</span> {likesCount}</div>
    </div>
  )
}

export default Post;