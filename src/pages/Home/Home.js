import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'actions/posts.actions';
import { getComments } from 'actions/comments.actions';
import { Loader, Container, ErrorInfo, Headline } from 'components';
import { PostSneakPeeks } from 'containers';
import { filterElements } from 'helpers';

const Home = () => {
  const { posts, loading: isPostsLoading, error: isPostsError } = useSelector(
    (state) => state.postsState
  );
  const { comments } = useSelector((state) => state.commentsState);
  const { favoritePosts } = useSelector((state) => state.favoritePostsState);
  const { favoriteComments } = useSelector(
    (state) => state.favoriteCommentsState
  );
  const { searchWord } = useSelector((state) => state.searchWordState);

  const filteredPosts = filterElements(posts, 'title', searchWord);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments());
  }, [dispatch]);

  return isPostsLoading ? (
    <Loader />
  ) : isPostsError ? (
    <ErrorInfo />
  ) : (
    <Container base>
      <Headline big> Najlepsze artykuły!</Headline>
      <PostSneakPeeks
        isHomePage
        posts={filteredPosts}
        initialQuantity={8}
        comments={comments}
        favoriteComments={favoriteComments}
        favoritePosts={favoritePosts}
      />
    </Container>
  );
};

export default Home;
