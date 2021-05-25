import React, { useState, useEffect } from 'react';
var $ = require("jquery");

function Home() {
    const [postData, setPostData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('london');
    const [loadMore, setLoadMore] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getData(loadMore);
    }, [loadMore]);


    const getData = (load) => {
        if (load) {
            fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&format=json&page=${pageNumber}&lang?en&safe_search=1&text=${searchQuery}&extras=owner_name,url_s,url_m,url_l,date_taken,description,tags&nojsoncallback=1`)
                .then(response => response.json())
                .then(setPageNumber(pageNumber + 1))
                .then(response => handlePostData(response))
                .then(setLoading(false));
        }
    };

    function handlePostData(response) {
        if (postData == null) {
            setPostData(response.photos.photo);
        }
        else {
            setPostData([...postData, ...response.photos.photo]);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (($(window).scrollTop() + $(window).height() > $(document).height() - 600) && (loading === false)) {
                setLoadMore(loadMore + 1)
            }
        }
        window.addEventListener('scroll', handleScroll);

    }, [postData]);

    const handleChange = event => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setPostData(null);
        setPageNumber(1);
        setLoadMore(loadMore + 1);
    };

    if (!postData) {
        return <div> Waiting for data!</div>
    }

    else {
        return (
            <div data-testid='content'>
                <h1> Flickr Photo Stream </h1>
                <div class='search-bar'>
                    <form onSubmit={handleSubmit}>
                        <input type="search" data-testid='search-bar-input' placeholder="Search photos" aria-label="Search" onChange={handleChange} />
                        <button type="submit" >Search</button>
                    </form>
                </div>
                <div className="grid-container"> {
                    postData.map(postobject => {
                        var tagstring = postobject.tags;
                        var tags = tagstring.replaceAll(' ', ' #');
                        var shorttags = tags.substring(0, 50);
                        var description = postobject.description._content
                        var shortdescription = description.substring(0, 110) + "...";
                        var shorttitle = postobject.title.substring(0, 50);

                        return (
                            <div className="post" data-testid='post' key={postobject.id}>
                                <img src={postobject.url_m} alt={postobject.title} width="30" height="23" className="postPic" />
                                <div className="postText">
                                    <h2 className="postTitle"> <a href={'https://www.flickr.com/photos/' + postobject.owner + '/' + postobject.id} target='_blank'>{shorttitle}</a> Posted by <a href={'https://www.flickr.com/photos/' + postobject.owner} target='_blank'>{postobject.ownername}</a></h2>
                                    <p className="postDescription">{shortdescription}</p>
                                    <h4 className="postTags">Tags: #{shorttags}</h4>
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