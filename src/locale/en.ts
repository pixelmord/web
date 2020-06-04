/* eslint-disable max-len */
import { TranslationFn, TranslationData } from '@zoonk/models';

const translate: TranslationFn = (key, args) => {
  const data: TranslationData = {
    about_me: 'About me',
    about_list: 'List of pages about how Zoonk works',
    about_us: 'About us',
    add_image: 'Add image',
    add: 'Add',
    admin: 'Admin',
    advanced: 'Advanced',
    after: 'After',
    all: 'All',
    already_have_account: 'Already have an account? Sign in',
    already_logged_in: 'You are already logged in.',
    answer_mark: 'Mark as answer',
    answer_question: 'Answer this question',
    answer_unmark: 'Unmark answer',
    answers: 'Answers',
    app: 'App',
    ask_question: 'Ask a question',
    back_to_login: 'Back to the login form',
    before: 'Before',
    beginner: 'Beginner',
    books: 'Books',
    by: 'by',
    cancel: 'Cancel',
    category_change: 'Change category',
    chapter_add: 'Add a new chapter',
    chapter_adding: 'Adding a chapter to this topic...',
    chapter_delete_confirmation:
      'This chapter will be removed from all topics.',
    chapter_edit: 'Edit chapter',
    chapter_first: 'Create the first chapter',
    chapter_invalid_id: 'You cannot create a chapter without a topicId.',
    chapter_removed: 'Chapter removed!',
    chapter_removing: 'Removing chapter...',
    chapter_select_desc: 'You can add an existing chapter to this topic:',
    chapter_select_title: 'Select a chapter',
    chapter: 'Chapter',
    chapters: 'Chapters',
    choose_language: 'Choose a language',
    close: 'Close',
    collapse: 'Collapse',
    comment_leave: 'Leave a comment',
    comment_login_required: 'You need to be logged in to leave a comment.',
    comment_not_found: 'Comment not found.',
    comment_notification: `${args?.name} commented your post.`,
    comments: 'Comments',
    confirm: 'Confirm',
    contact_us: 'Contact us',
    content_changes: 'Content edits',
    content: 'Content',
    courses: 'Courses',
    cover: 'Cover image',
    create: 'Create',
    created_by: 'Created by',
    created: 'created',
    creating_account: 'Creating account...',
    current_item: 'Current item',
    delete_confirmation: 'Would you like to delete this item?',
    delete: 'Delete',
    deleted: 'deleted',
    deleting: 'Deleting...',
    description: 'Description',
    done: 'Done!',
    dont_have_account: "Don't have an account? Sign up!",
    edit_history: 'Edit history',
    edit_not_allowed: 'You are not allowed to edit this content.',
    edit_page: 'Edit this page',
    edit_profile: 'Edit profile',
    edit_topic: 'Edit topic',
    edit: 'Edit',
    editors: 'Editors',
    email: 'Email',
    error_action: 'An error happened. Please, try again.',
    example_share: 'Share a practical example',
    examples: 'Examples',
    expand: 'Expand',
    expert: 'Expert',
    feedback: 'Feedback',
    field_required: 'Field required',
    file_too_big: 'This file is too big. The maximum size is 2MB.',
    follow: 'Follow',
    following_empty: "You're not following anyone yet.",
    following_find: 'Find topics to follow.',
    following: 'Following',
    forgot_password: 'Forgot password?',
    formatting_bold: 'Bold',
    formatting_clean: 'Clean',
    formatting_code_inline: 'Code (inline)',
    formatting_code_multiline: 'Code (multiline)',
    formatting_header: 'Header',
    formatting_image: 'Image',
    formatting_italic: 'Italic',
    formatting_link: 'Link',
    formatting_ol: 'Ordered list',
    formatting_quote: 'Quote',
    formatting_subscript: 'Subscript',
    formatting_superscript: 'Superscript',
    formatting_ul: 'Unordered list',
    formatting_underline: 'Underline',
    go_back: 'Go back',
    go_home: 'Go to the home page.',
    group_create: 'Create group',
    group_edit: 'Edit group',
    group: 'Group',
    groups_about: `Learning groups about ${args?.title}`,
    groups_my: 'My groups',
    groups: 'Groups',
    having_issues:
      'Are you finding this confusing or are you having any issues?',
    hide: 'Hide',
    history: 'History',
    home: 'Home',
    items_empty: 'No items found.',
    join_discussion: 'Join the discussion',
    join: 'Join',
    leaderboard: 'Leaderboard',
    learn_about: `Learn about ${args?.title}`,
    learn: 'Learn',
    leave: 'Leave',
    let_us_know: 'Please, let us know.',
    lessons: 'Lessons',
    level: 'Level',
    like: 'Like',
    liked: 'Liked',
    link_copied: 'Link copied!',
    link_helper: 'Add a link to a reference',
    link_invalid: 'Link invalid',
    link: 'Link',
    load_more: 'Load more',
    login: 'Login',
    login_required: 'You need to be logged in to access this section.',
    logout: 'Log out',
    members: 'Members',
    menu: 'Menu',
    message: 'Message',
    name: 'Name',
    need_to_be_loggedin: 'You need to be logged in to perform this action.',
    next: 'Next',
    no_books: `Have you read an interesting book about ${args?.title}?`,
    no_chapter_examples: `Help others understand why learning about ${args?.title} is important.`,
    no_chapters: `Chapters have lessons for teaching a topic. Help more people learn about ${args?.title}.`,
    no_courses: `Do you know an interesting ${args?.title} course? Then, help others find it.`,
    no_examples: `Why learning about ${args?.title} is important? Be the first to show a practical example about it.`,
    no_lessons: `Help others to learn about ${args?.title}.`,
    no_posts: `Do you have something to teach about ${args?.title}?`,
    no_questions: `Do you have a question about ${args?.title}?`,
    no_references: `Did you find an interesting link or reference about ${args?.title}?`,
    no_user_posts: "This user didn't share any posts yet.",
    notifications: 'Notifications',
    order: 'Order',
    page_edits: 'Page changes',
    page_edits_title: 'Page changes for:',
    page_list: 'Page list',
    password_change: 'Password change',
    password_new: 'New password',
    password_old: 'Current password',
    password: 'Password',
    photo_suggested_size: `Suggested size: ${args?.size}`,
    photo_update: 'Update photo',
    photo_uploaded: 'Uploaded photo',
    photo: 'Photo',
    pin_removed: 'Pin removed!',
    pin_removing: 'Removing pin...',
    post_add: 'Create a post',
    post_adding: 'Adding post to chapter...',
    post_category: 'Select a post category',
    post_delete_confirmation: 'This post will be removed from all chapters.',
    post_edit: 'Edit post',
    post_filter: 'Filter posts by category',
    post_pin: 'Pin post',
    post_pinned: 'Pinned posts',
    post_pinned_add: 'Pin a post',
    post_pinned_desc:
      'Use pinned posts for featuring items on this page as they are always on top.',
    post_removed: 'Post removed!',
    post_removing: 'Removing post...',
    post_select_desc: 'You can add an existing post to this chapter:',
    post_select_title: 'Select a post',
    post_share: 'What did you learn today?',
    post_share_topic: `Share something about ${args?.title}`,
    posts: 'Posts',
    preview: 'Preview',
    preview_quit: 'Back to the editor',
    previous: 'Previous',
    privacy_policy: 'Privacy policy',
    pro: 'Pro',
    profile: 'Profile',
    questions: 'Questions',
    read_wikipedia: 'Read on Wikipedia',
    real_life_examples: 'Real-life examples',
    references_links: 'References & Links',
    references: 'References',
    reorder: 'Reorder',
    replies: 'Replies',
    report: 'Report',
    reports: 'Reports',
    report_confirmation:
      'Please, click on the "confirm" button to report this content and its author. Optionally, you can also add a comment below explaining why this content should not be on Zoonk:',
    report_issue: 'Report an issue',
    report_progress: 'Reporting this user...',
    report_success:
      'Thank you for reporting this issue. You are helping to make a better community for all :)',
    report_tooltip:
      'Report if you think this content does not follow our terms of use.',
    reset_password: 'Reset password',
    reset_password_sending: 'Resetting your password...',
    reset_password_sent: 'A new password was sent to your e-mail address.',
    response_deleted: 'Deleted!',
    revert: 'Revert',
    revert_confirmation: 'Would like to revert to the previous changes?',
    revert_progress: 'Reverting changes...',
    revert_success: 'Changes reverted! Thanks!',
    revert_tooltip: 'Cancel this change and revert it to the previous version.',
    save: 'Save',
    save_changes: 'Save changes',
    saved: 'Saved!',
    saving: 'Saving...',
    search: 'Search',
    search_ph: 'Press Enter to search',
    search_topic: 'Search a topic name',
    search_topic_help:
      'We use Wikipedia as the source for topics. To create a new topic, you need to choose an existing Wikipedia page. You can search for topic names by typing a word and selecting an item in the box below.',
    search_topic_not_found: 'No topics found. Try another word.',
    see_all: 'See all',
    see_all_edits: 'See all edits',
    see_discussion: 'See discussion',
    selected_item: 'Selected item',
    send: 'Send',
    sending: 'Sending...',
    sent: 'Sent!',
    seo_books_desc:
      'The best books online. Learn how to find and share books about any subjects.',
    seo_contact_desc: 'How to contact the Zoonk team.',
    seo_courses_desc:
      'How to find courses about any subjects. The best courses online.',
    seo_edits_desc:
      'See all changes made to Zoonk pages. Navigate the whole edit history, revert and report changes on Zoonk.',
    seo_examples_desc:
      'Find real-life examples about everything. See how things work in everyday life.',
    seo_groups_desc: 'Join learning groups and communities about any subjects.',
    seo_home_desc:
      'Share and find the best learning resources on Zoonk. Share your knowledge with others or learn anything for free online.',
    seo_home_title: 'Zoonk: Learning resources online',
    seo_login_desc: 'How to sign in to my Zoonk account.',
    seo_posts_desc:
      'Find posts and articles about any subject. Learn by reading free posts online.',
    seo_profile_desc: `${args?.name} is learning and teaching on Zoonk. See what ${args?.name} is creating.`,
    seo_questions_desc:
      'Ask questions about any subjects online. Find answers for everything online.',
    seo_refs_desc:
      'Find references and links about any subject. How to find good references online.',
    seo_reset_password_desc: 'How can I recover or reset my Zoonk password?',
    seo_search_desc: `Start learning about ${args?.searchTerm} on Zoonk. How ${args?.searchTerm} works.`,
    seo_search_title: `Learn about ${args?.searchTerm} on Zoonk`,
    seo_settings_desc: 'How to configure and edit my Zoonk profile.',
    seo_signup_desc: 'Create a Zoonk account to learn anything for free.',
    seo_topic_books_desc: `Books about ${args?.title}. Find the best ${args?.title} books online.`,
    seo_topic_books_title: `${args?.title} books`,
    seo_topic_courses_desc: `Courses about ${args?.title}. The best ${args?.title} courses online.`,
    seo_topic_courses_title: `${args?.title} courses`,
    seo_topic_desc: `Learn about ${args?.title}. How to learn about ${args?.title} for free online.`,
    seo_topic_examples_desc: `How does ${args?.title} work in real life. Examples of ${args?.title} in everyday life.`,
    seo_topic_examples_title: `${args?.title} in real life`,
    seo_topic_posts_desc: `Find posts about ${args?.title}. Most interesting articles about ${args?.title} online.`,
    seo_topic_posts_title: `Posts about ${args?.title}`,
    seo_topic_questions_desc: `Ask anything about ${args?.title}. Find every questions and answer about ${args?.title}.`,
    seo_topic_questions_title: `Ask questions about ${args?.title}`,
    seo_topic_ref_desc: `References and links about ${args?.title}. How to find good ${args?.title} sources and references online.`,
    seo_topic_ref_title: `References about ${args?.title}`,
    seo_topics_desc: 'Learn about any topic or subject on Zoonk for free.',
    seo_topics_create_desc: 'How to create a new topic or subject on Zoonk.',
    settings: 'Settings',
    share_it: 'Share it!',
    show: 'Show',
    signin_facebook: 'Sign in with Facebook',
    signin_google: 'Sign in with Google',
    signing_in: 'Signing in...',
    signup: 'Sign up',
    signup_notice: 'By signing up, you agree to our',
    signup_notice_and: 'and the',
    social_description:
      'Zoonk is a social network where you can learn anything for free.',
    social_media: 'Social media',
    stats: 'Stats',
    subtitle: 'Subtitle',
    teach_article_title: 'Write an article',
    teach_book_title: 'Write a book review',
    teach_course_title: 'Share a course',
    teach_example_title: 'Show a practical example',
    teach_lesson_title: 'Create a lesson',
    teach_ref_title: 'Share a reference or link',
    teach_title: 'Share your knowledge',
    teach: 'Teach',
    terms_service: 'Terms of service',
    text: 'Text',
    timeline: 'Timeline',
    title: 'Title',
    title_required: 'Please, fill in the title.',
    topic_create: 'Create topic',
    topic_create_desc: 'Select a topic name:',
    topic_desc_helper:
      'Briefly answer the following questions: What is this topic? How does it work? Why is it important?',
    topic_selector_helper:
      'What subjects are you teaching? (e.g. Chemistry, Star Trek, History, etc.).',
    topics: 'Topics',
    unfollow: 'Unfollow',
    updated: 'edited',
    uploading: 'Uploading...',
    url: 'URL',
    username: 'Username',
    username_exists: 'This username already exists.',
    users: 'Users',
    video: 'Video',
    video_link: 'Video URL',
    view: 'View',
    website: 'Website',
  };

  return data[key] || key;
};

export default translate;
