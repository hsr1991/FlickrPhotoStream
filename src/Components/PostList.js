// const PostList = (props) => { 
// const posts = props.postData.photos.photo;


//     return (
 
//     <div>
//         <h1> Flickr Photo Stream </h1>
//         {/* <div className="ui search"></div>
//         <input type="text" placeholder="Search" className="prompt" onChange={event => setSearch(event.target.value)} />
//         <i className="search icon"></i>
//         {filteredPosts.map((post, i) => (
//             <Photo key={i} {...post} />
//         ))} */}
//         <div className="postContainer"> {
//             posts.map(postobject => {
//                 var tagstring = postobject.tags;
//                 var tags = tagstring.replace(' ', ', #');
//                 var shorttags = tags.substring(0, 6);
//                 var description = postobject.description._content
//                 var shortdescription = description.substring(0, 80) + "...";
//                 var shorttitle = postobject.title.substring(0, 50);

//                 return (
//                     <div className="post" key={postobject.id}>
//                         <img src={postobject.url_m} alt={postobject.title} width="30" height="23" className="postPic" />
//                         <div className="postText">
//                             <h2 className="postTitle"> <a href={'https://www.flickr.com/photos/' + postobject.owner + '/' + postobject.id} target='_blank'>{shorttitle}</a> Posted by <a href={'https://www.flickr.com/photos/' + postobject.owner} target='_blank'>{postobject.ownername}</a></h2>
//                             <h3 className="postDescription">{shortdescription}</h3>
//                             <h4 className="postTags">Tags: #{shorttags} </h4>
//                         </div>
//                     </div>
//                 )
//             })
//         }
//         </div>
//     </div>
  
// )

// }

// export default { PostList }