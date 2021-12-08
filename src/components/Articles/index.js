import Post from '../Post';


const Article = () =>{

    return (
        <section className="container">
            <h4>Article.js </h4>

            <div className=" mt-3 container-post">
                <Post />
                <Post />
                <Post />
            </div>

        </section>
    );
}

export default Article;