import React, { useState, useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroller';
import ReactDOM from 'react-dom';
import PostList from './PostList';

//firstly i would try and update the state searchQuery when you type in the search bar

function Home() {
    const [postData, setPostData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('london');
    const [counter, setCounter] = useState(0);
    const handleChange = event => {
        setSearchQuery(event.target.value); //definition in the form, what you type in = event.target.value
    };
    const handleSubmit = event => {
        event.preventDefault(); //this stops it resetting to the original state - in this case london
        setCounter(counter+1);
    };

    useEffect(() => {
    var url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d560b53b95f87253b6ff64c652583031&format=json&lang?en&safe_search=1&text=${searchQuery}&extras=owner_name,url_s,url_m,url_l,date_taken,description,tags&nojsoncallback=1`
        fetch(url)
            .then(response => response.json())
            .then(data => setPostData(data));
    }, [counter]); //use effect will only be triggered if this variable changes. if nothing in there then it will only 
    //run once. use effect is listening to the searchquery. as soon as thats updated so will this url but it wont
    //be called until the counter changes.

    if (!postData) {
        return <div> Waiting for data!</div>
    }

    else {

        return (

            <div>
                <h1> Flickr Photo Stream </h1>

                <div class='search-bar'>
                    <form class="form-inline my-2 my-lg-0" onSubmit={handleSubmit}> 
                        {/* on submit we want to call our API request function thing */}
                    <input class="form-control mr-sm-2" type="search" placeholder="Search photos" aria-label="Search" onChange={handleChange} />
                    {/* on change we want to set the SearchQuery state to the value of this input */}
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
                    </form>
                </div>
                <div className="postContainer"> {
                    postData.photos.photo.map(postobject => {
                        var tagstring = postobject.tags;
                        var tags = tagstring.replace(' ', ', #');
                        var shorttags = tags.substring(0, 6);
                        var description = postobject.description._content
                        var shortdescription = description.substring(0, 80) + "...";
                        var shorttitle = postobject.title.substring(0, 50);

                        return (
                            <div className="post" key={postobject.id}>
                                <img src={postobject.url_m} alt={postobject.title} width="30" height="23" className="postPic" />
                                <div className="postText">
                                    <h2 className="postTitle"> <a href={'https://www.flickr.com/photos/' + postobject.owner + '/' + postobject.id} target='_blank'>{shorttitle}</a> Posted by <a href={'https://www.flickr.com/photos/' + postobject.owner} target='_blank'>{postobject.ownername}</a></h2>
                                    <h3 className="postDescription">{shortdescription}</h3>
                                    <h4 className="postTags">Tags: #{shorttags} </h4>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>

        )

    }
}

export { Home }