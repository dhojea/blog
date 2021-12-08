
const Post = () => {
    return(
        <div className="post border">
            <div className="img-post"></div>

            <h5 className="categories-post mb-1">Categories</h5>

            <h4 className="title-post mb-2">The guide of the blog.</h4>

            <p>Lorem Lorem ipsum dolor sit met </p>

            <div className="flex pt-2">

                <div className="img-profile "></div>

                <div className="info-profile ml-2 mt-1"> 
                    <h6 className="color-purple ">Diego Ojea</h6>
                    <p>Jul 11, 1998 - 7 min read</p>
                </div>

            </div>    
        </div>
    );
}

export default Post;