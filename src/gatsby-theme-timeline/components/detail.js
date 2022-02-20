import React from "react"
import {
  TWEET_TYPE_NAME,
  REDDIT_TYPE_NAME,
  POST_TYPE_NAME,
  HN_TYPE_NAME,
  PH_TYPE_NAME,
  REDIRECT_TYPE_NAME,
  YOUTUBE_TYPE_NAME,
  SOCIAL_MEDIA_TYPE_NAME,
  INSTAGRAM_TYPE_NAME,
} from "gatsby-theme-timeline/src/constans"
import PostDetail from "gatsby-theme-timeline/src/components/post/detail"
import TweetDetail from "gatsby-theme-timeline/src/components/tweet/detail"
import RedditDetail from "gatsby-theme-timeline/src/components/reddit/detail"
import HNDetail from "gatsby-theme-timeline/src/components/hn/detail"
import DefaultDetail from "gatsby-theme-timeline/src/components/detail-default"
import PHDetail from "gatsby-theme-timeline/src/components/ph/detail"
import RedirectDetail from "gatsby-theme-timeline/src/components/redirect/detail"
import YoutubeDetail from "gatsby-theme-timeline/src/components/youtube/detail"
import InstagramDetail from "gatsby-theme-timeline/src/components/instagram/detail"
const Detail = props => {
  const { item } = props
  if (item.__typename === SOCIAL_MEDIA_TYPE_NAME) {
    const provider = item.provider
    if (provider === TWEET_TYPE_NAME) {
      return <TweetDetail {...props}></TweetDetail>
    } else if (provider === REDDIT_TYPE_NAME) {
      return <RedditDetail {...props}></RedditDetail>
    } else if (provider === HN_TYPE_NAME) {
      return <HNDetail {...props}></HNDetail>
    } else if (provider === PH_TYPE_NAME) {
      return <PHDetail {...props}></PHDetail>
    } else if (provider === REDIRECT_TYPE_NAME) {
      return <RedirectDetail {...props}></RedirectDetail>
    } else if (provider === YOUTUBE_TYPE_NAME) {
      return <YoutubeDetail {...props}></YoutubeDetail>
    } else if (provider === INSTAGRAM_TYPE_NAME) {
      return <InstagramDetail {...props}></InstagramDetail>
    } else {
      return <DefaultDetail {...props}></DefaultDetail>
    }
  } else if (
    item.__typename === POST_TYPE_NAME ||
    (props.pageContext && props.pageContext.pageType === "page")
  ) {
    return (
      <div style={{ maxWidth: 750 }}>
        <PostDetail {...props}></PostDetail>
      </div>
    )
  } else {
    return <DefaultDetail {...props}></DefaultDetail>
  }
}

export default Detail
