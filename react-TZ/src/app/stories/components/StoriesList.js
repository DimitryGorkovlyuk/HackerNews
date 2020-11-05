import React, { useEffect } from 'react';
import {
  Grid,
  Typography,
  Box,
  CardContent,
  Link,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { storiesActions } from '../stories.actions';

export const StoriesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storiesActions.fetchStoryIds());
  }, [dispatch]);

  const { storyInfo, authorInfo } = useSelector((state) => state.stories);

  return !!authorInfo.length && (
    <Grid>
        {
            storyInfo.map((story, index) => (
              <Grid item key={story.id} xs={12}>
                <Box boxShadow={3}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {story.title}
                    </Typography>
                    <Typography>
                      <Link href={story.url}>
                        Link
                      </Link>
                    </Typography>
                    <Typography>
                      {new Date(story.time * 1000).toLocaleString()}
                    </Typography>
                    <Typography>
                      Story score:
                      {' '}
                      {story.score}
                    </Typography>
                    <Typography>
                      ID:
                      {' '}
                      {authorInfo[index].id}
                    </Typography>
                    <Typography>
                      Karma score:
                      {' '}
                      {authorInfo[index].karma}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            ))
        }
    </Grid>
  );
};
