/**
 * Blog.
 */
export type Views = {
  /**
   * The number of views.
   */
  views: number
}

/**
 * The likes of blog posts.
 */
export type Likes = {
  /**
   * The likes of blog post.
   */
  likes: number
  /**
   * The current user's like.
   */
  currentUserLikes: number
}

/**
 * Guestbook.
 */
export type Message = {
  /**
   * The id of the message.
   */
  id: number
  /**
   * The body of the message.
   */
  body: string
  /**
   * The image of the message.
   */
  image: string
  /**
   * The creator's name of the message.
   */
  created_by: string
  /**
   * The date the message was last updated.
   */
  updated_at: Date
}

/**
 * YouTube.
 */
export type YouTube = {
  /**
   * The number of subscribers of the channel.
   */
  subscribers: number
  /**
   * The number of views of the channel.
   */
  views: number
}

/**
 * Github.
 */
export type Github = {
  /**
   * The number of stars of the user.
   */
  stars: number
  /**
   * The number of followers of the user.
   */
  followers: number
}

/**
 * Wakatime.
 */
export type Wakatime = {
  /**
   * The total coding time of the user.
   */
  seconds: number
}

/**
 * Umami Analytics.
 */
export type Analytics = {
  /**
   * The number of visitors.
   */
  visitors: number
}

// Strava
/**
 *
 */
export type ActivityTypesCount = Record<string, number>

/**
 *
 */
export type StravaData = {
  /**
   *
   */
  totalActivities: number
  /**
   *
   */
  totalDistance: number
  /**
   *
   */
  totalMovingTime: string
  /**
   *
   */
  totalSteps: string
  /**
   *
   */
  activityTypesCount: ActivityTypesCount
}
// Wakatime
/**
 *
 */
export type WakatimeRes = {
  /**
   *
   */
  data: {
    /**
     *
     */
    decimal: string
    /**
     *
     */
    digital: string
    /**
     *
     */
    is_up_to_date: boolean
    /**
     *
     */
    percent_calculated: number
    /**
     *
     */
    range: {
      /**
       *
       */
      end: string
      /**
       *
       */
      end_date: string
      /**
       *
       */
      end_text: string
      /**
       *
       */
      start: string
      /**
       *
       */
      start_date: string
      /**
       *
       */
      start_text: string
      /**
       *
       */
      timezone: string
      /**
       *
       */
      name: string
      /**
       *
       */
      percent: number
      /**
       *
       */
      color: string
    }
    /**
     *
     */
    text: string
    /**
     *
     */
    timeout: number
    /**
     *
     */
    total_seconds: number
  }
}

/**
 *
 */
export type WakatimeData = {
  /**
   *
   */
  seconds: number
}

/**
 *
 */
export type WakatimeLanguagesData = {
  /**
   *
   */
  data: {
    /**
     *
     */
    languages: Array<{
      /**
       *
       */
      decimal: string
      /**
       *
       */
      digital: string
      /**
       *
       */
      hours: number
      /**
       *
       */
      minutes: number
      /**
       *
       */
      name: string
      /**
       *
       */
      percent: number
      /**
       *
       */
      text: string
      /**
       *
       */
      total_seconds: number
    }>
    /**
     *
     */
    operating_systems: Array<{
      /**
       *
       */
      decimal: string
      /**
       *
       */
      digital: string
      /**
       *
       */
      hours: number
      /**
       *
       */
      minutes: number
      /**
       *
       */
      name: string
      /**
       *
       */
      percent: number
      /**
       *
       */
      text: string
      /**
       *
       */
      total_seconds: number
    }>
  }
}

// Wakatime Languages
/**
 *
 */
export type WakatimeLanguage = {
  /**
   *
   */
  total_seconds: number
  /**
   *
   */
  percent: number
  /**
   *
   */
  name: string
  /**
   *
   */
  text: string
}

// Wakatime Operating Systems
/**
 *
 */
export type WakatimeOperatingSystem = {
  /**
   *
   */
  decimal: string
  /**
   *
   */
  digital: string
  /**
   *
   */
  hours: number
  /**
   *
   */
  minutes: number
  /**
   *
   */
  name: string
  /**
   *
   */
  percent: number
  /**
   *
   */
  text: string
  /**
   *
   */
  total_seconds: number
}

/**
 *
 */
export type CombinedWakatimeData = {
  /**
   *
   */
  seconds: number
  /**
   *
   */
  languages: WakatimeLanguage[]
  /**
   *
   */
  operating_systems: WakatimeOperatingSystem[]
}
