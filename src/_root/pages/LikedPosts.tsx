import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/tanstack-query/queriesAndMutations";

const LikedPosts = () => {
  const { data: currentUser } = useGetCurrentUser();

  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <div className="p-2 m-4 lg:p-5 lg:m-5">
      <h2 className="h3-bold md:h2-bold w-full mb-3">Liked Posts</h2>
      {currentUser.liked.length === 0 && (
        <p className="text-light-4">No liked posts</p>
      )}

      <GridPostList posts={currentUser.liked} showStats={false} />
    </div>
  );
};

export default LikedPosts;
