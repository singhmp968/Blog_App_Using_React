// using with custome componenets
import { firestore } from '../firebase';
import { useFormInput } from '../hooks';

function CreatePost() {
  // using custom hooks
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

    firestore.collection('posts').add({
      title: title.value, // getting from hooks i.e useFormInput value={title} onChange={(e) => setTitle(e.target.value)} as in hooks we have value and onChange
      content: content.value,
      subTitle: subTitle.value,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          {/* here ... will be save  */}
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

/* without custom hooks
import { useState } from 'react';
import { firestore } from '../firebase';

function CreatePost() {
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [content, setContent] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

    firestore.collection('posts').add({
      // title: title.value,
      // content: content.value,
      // subTitle: subTitle.value,
      // createdAt: new Date(),
      title,
      content,
      subTitle,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
*/
