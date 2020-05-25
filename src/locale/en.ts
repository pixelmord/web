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
    column: 'Column',
    comment_leave: 'Leave a comment',
    comment_login_required: 'You need to be logged in to leave a comment.',
    comments: 'Comments',
    confirm: 'Confirm',
    contact_us: 'Contact us',
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
    email: 'Email address',
    error_action: 'An error happened. Please, try again.',
    examples: 'Examples',
    expand: 'Expand',
    expert: 'Expert',
    feedback: 'Feedback',
    field_required: 'Field required',
    file_too_big: 'This file is too big. The maximum size is 2MB.',
    forgot_password: 'Forgot password?',
    formatting_bold_example: '**some bold text**',
    formatting_bold: 'Bold',
    formatting_code_inline_example: '`var test = 1`',
    formatting_code_inline: 'Code (inline)',
    formatting_code_multiline_example: '```var test=1;```',
    formatting_code_multiline: 'Code (multiline)',
    formatting_drive_example: '[[ drive id="google-drive-id" ]]',
    formatting_drive: 'Google Drive',
    formatting_header_example: '# Title',
    formatting_header: 'Header',
    formatting_image_example:
      '[[ img src="photo.png" width="200px" height="200px" align="right" alt="text" title="title" ]]',
    formatting_image: 'Image',
    formatting_italic_example: '_italic text_',
    formatting_italic: 'Italic',
    formatting_link_example: '[zoonk](https://en.zoonk.org)',
    formatting_link: 'Link',
    formatting_ol_example: '1. item 1; 2. item 2...',
    formatting_ol: 'Ordered list',
    formatting_pdf_example: '[[ pdf url="https://myaddress.com/file.pdf" ]]',
    formatting_pdf: 'PDF file',
    formatting_quote_example: '> I know that I know nothing.',
    formatting_quote: 'Quote',
    formatting_tips: 'Formatting tips',
    formatting_ul_example: '- some item; - another item...',
    formatting_ul: 'Unordered list',
    formatting_vimeo_example: '[[ vimeo id="video-id" ]]',
    formatting_vimeo: 'Vimeo',
    formatting_youtube_example: '[[ youtube id="video-id" ]]',
    formatting_youtube: 'YouTube',
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
    link_add: 'Add a link',
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
    no_books: `Have you read an interesting book about **${args?.title}**. Then, [share it](/posts/add?category=books&topicId=${args?.topicId}) with others!`,
    no_chapter_examples: `Help others understand why learning about **${args?.title}** is important. [Share a practical example](/posts/add?category=examples&topicId=${args?.topicId}&chapterId=${args?.chapterId}).`,
    no_chapters: `Chapters have lessons for teaching a topic. Help more people learn about **${args?.title}**. [Create the first chapter](/chapters/add?topicId=${args?.id}).`,
    no_courses: `Do you know an interesting **${args?.title}** course? Then, help others find it. [Share it](/posts/add?category=courses&topicId=${args?.topicId})!`,
    no_examples: `Why learning about **${args?.title}** is important? Be the first to [share a practical example](/posts/add?category=examples&topicId=${args?.topicId}).`,
    no_lessons: `Be the first to [create a lesson](/posts/add?category=lessons&topicId=${args?.topicId}&chapterId=${args?.chapterId}) and help others learn about **${args?.title}**.`,
    no_posts: `Do you have any thoughts about **${args?.title}**? Then, [share them](/posts/add?topicId=${args?.topicId})!`,
    no_questions: `Do you have any questions about **${args?.title}**? [Just ask](/posts?category=questions&topicId=${args?.topicId}) and let other people will help you.`,
    no_references: `Did you find an interesting link or reference about **${args?.title}**? Then, [share it](/posts/add?topicId=${args?.topicId}&category=references)!`,
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
    row: 'Row',
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
    teach_article_desc: `A good way to teach something is by sharing personal stories and experiences. Do you have an interesting point of view about ${args?.title}? Then, [share it with other people](/posts/add?category=posts&topicId=${args?.id})! :)`,
    teach_article_title: 'Write an article',
    teach_book_desc: `Did you read an interesting book about ${args?.title}? Don’t keep this finding to yourself. Others might benefit from reading this book too. [Share a brief summary of your book](/posts/add?category=books&topicId=${args?.id}) explaining why it might be interesting for those who are trying to learn more about ${args?.title}.`,
    teach_book_title: 'Write a book review',
    teach_course_desc: `Have you completed a course that helped you learn something? Then, help other people to learn it too! [Share a course about ${args?.title}](/posts/add?category=courses&topicId=${args?.id}).`,
    teach_course_title: 'Share a course',
    teach_example_desc: `In school, we usually memorize information to pass exams. But we learn better when we see practical examples of how things work.\n\nZoonk has a “real-life examples” section where you can show how things work in everyday life. For example, why learning about ${args?.title} is important for them? Help them understand how this subject is relevant in their lives.\n- [Create a real-life example about ${args?.title}](/posts/add?category=examples&topicId=${args?.id})`,
    teach_example_title: 'Show a practical example',
    teach_intro:
      'Zoonk is a free, open-source website because we believe knowledge should be free. When you share your knowledge, you’re improving other people’s lives.\n\nThere are many ways you can teach something on Zoonk: from creating lessons to explain a subject you know to sharing a course or article you found interesting.\n\nSee below how to get started:',
    teach_lesson_desc: `Many people don’t know how to start learning something. Help them by creating lessons. Here are some of the things you can do:\n- Check if other people have created [chapters for ${args?.title}](/topics/${args?.id}). If they haven’t, then start by creating the first chapter yourself. Create an introduction to start teaching your favorite subject.\n- Every chapter supports up to 20 lessons. You can create new lessons or improving the existing ones. Zoonk is collaborative: anyone can improve existing lessons.`,
    teach_lesson_title: 'Create a lesson',
    teach_ref_desc: `Do you remember a cool link or reference someone shared with you? Then, [share it with other people](/posts/add?category=references&topicId=${args?.id}) and help them find the best sources about ${args?.title}.`,
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
