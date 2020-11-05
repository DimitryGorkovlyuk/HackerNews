import { http } from '../../core';

export const storiesApi = {

  getStoryIds() {
    return http.get('topstories.json');
  },

  getStoryInfo: async (storyIds) => {
    const result = [];
    for (let i = 0; i < storyIds.length; i++) {
      result.push(await http.get(`item/${storyIds[i]}.json`));
    }
    return result;
  },

  getAuthorInfo: async (storyInfo) => {
    const result = [];
    for (let i = 0; i < storyInfo.length; i++) {
      result.push(await http.get(`user/${storyInfo[i].by}.json`));
    }
    return result;
  },
};
