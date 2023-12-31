import { Suspense } from "react";
import { getAllPosts } from "../../utils/FetchData"
import { useLoaderData, defer, Await } from "react-router-dom";
import LoadingSpinner from "../../helper/Spinner";
import PostCard from "../../components/Card";
const DashBoard = () => {
    const albums = useLoaderData();

    return (
        <div>
            <h1>DashBoard <span>/</span> Posts</h1>

            <Suspense fallback={<LoadingSpinner />}>
                <Await resolve={albums.posts}>
                    {(loadedAlbums) => {
                        return (
                            <div className="grid py-8 lg:grid-cols-3 gap-4 justify-center">
                                {loadedAlbums.map((album) => (
                                    <PostCard key={album.id} post={album} />
                                ))}
                            </div>
                            // <PostCard posts={loadedAlbums} />
                        );
                    }
                    }
                </Await>
            </Suspense>
        </div>
    );
}
export default DashBoard

// eslint-disable-next-line react-refresh/only-export-components
export function loader() {

    return defer({
        posts: getAllPosts()
    })
}