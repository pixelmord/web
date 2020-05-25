import { Dictionary } from './misc';

export type UILanguage = 'en' | 'pt';

export type TranslationKeys =
  | 'about_list'
  | 'about_me'
  | 'about_us'
  | 'add_image'
  | 'add'
  | 'admin'
  | 'advanced'
  | 'after'
  | 'all'
  | 'already_have_account'
  | 'already_logged_in'
  | 'ask_question'
  | 'back_to_login'
  | 'before'
  | 'beginner'
  | 'books'
  | 'by'
  | 'cancel'
  | 'category_change'
  | 'chapter_add'
  | 'chapter_adding'
  | 'chapter_delete_confirmation'
  | 'chapter_edit'
  | 'chapter_invalid_id'
  | 'chapter_removed'
  | 'chapter_removing'
  | 'chapter_select_desc'
  | 'chapter_select_title'
  | 'chapter'
  | 'chapters'
  | 'choose_language'
  | 'close'
  | 'collapse'
  | 'comment_leave'
  | 'comment_login_required'
  | 'comments'
  | 'confirm'
  | 'contact_us'
  | 'content'
  | 'courses'
  | 'cover'
  | 'create'
  | 'created_by'
  | 'created'
  | 'creating_account'
  | 'current_item'
  | 'delete_confirmation'
  | 'delete'
  | 'deleted'
  | 'deleting'
  | 'description'
  | 'done'
  | 'dont_have_account'
  | 'edit_history'
  | 'edit_not_allowed'
  | 'edit_page'
  | 'edit_profile'
  | 'edit_topic'
  | 'edit'
  | 'editors'
  | 'email'
  | 'error_action'
  | 'examples'
  | 'expand'
  | 'expert'
  | 'feedback'
  | 'field_required'
  | 'file_too_big'
  | 'forgot_password'
  | 'formatting_bold_example'
  | 'formatting_bold'
  | 'formatting_code_inline_example'
  | 'formatting_code_inline'
  | 'formatting_code_multiline_example'
  | 'formatting_code_multiline'
  | 'formatting_drive_example'
  | 'formatting_drive'
  | 'formatting_header_example'
  | 'formatting_header'
  | 'formatting_image_example'
  | 'formatting_image'
  | 'formatting_italic_example'
  | 'formatting_italic'
  | 'formatting_link_example'
  | 'formatting_link'
  | 'formatting_ol_example'
  | 'formatting_ol'
  | 'formatting_pdf_example'
  | 'formatting_pdf'
  | 'formatting_quote_example'
  | 'formatting_quote'
  | 'formatting_tips'
  | 'formatting_ul_example'
  | 'formatting_ul'
  | 'formatting_vimeo_example'
  | 'formatting_vimeo'
  | 'formatting_youtube_example'
  | 'formatting_youtube'
  | 'go_back'
  | 'go_home'
  | 'group_create'
  | 'group_edit'
  | 'group'
  | 'groups_about'
  | 'groups_my'
  | 'groups'
  | 'having_issues'
  | 'history'
  | 'home'
  | 'items_empty'
  | 'join_discussion'
  | 'join'
  | 'leaderboard'
  | 'learn_about'
  | 'learn'
  | 'leave'
  | 'let_us_know'
  | 'lessons'
  | 'level'
  | 'like'
  | 'liked'
  | 'link_add'
  | 'link_copied'
  | 'link_helper'
  | 'link_invalid'
  | 'link'
  | 'load_more'
  | 'login_required'
  | 'login'
  | 'logout'
  | 'members'
  | 'menu'
  | 'message'
  | 'name'
  | 'need_to_be_loggedin'
  | 'next'
  | 'no_books'
  | 'no_chapter_examples'
  | 'no_chapters'
  | 'no_courses'
  | 'no_examples'
  | 'no_lessons'
  | 'no_posts'
  | 'no_questions'
  | 'no_references'
  | 'no_user_posts'
  | 'notifications'
  | 'order'
  | 'page_edits_title'
  | 'page_edits'
  | 'page_list'
  | 'password_change'
  | 'password_new'
  | 'password_old'
  | 'password'
  | 'photo_suggested_size'
  | 'photo_update'
  | 'photo_uploaded'
  | 'photo'
  | 'pin_removed'
  | 'pin_removing'
  | 'post_add'
  | 'post_adding'
  | 'post_category'
  | 'post_delete_confirmation'
  | 'post_edit'
  | 'post_filter'
  | 'post_pin'
  | 'post_pinned'
  | 'post_pinned_add'
  | 'post_pinned_desc'
  | 'post_removed'
  | 'post_removing'
  | 'post_select_desc'
  | 'post_select_title'
  | 'post_share'
  | 'post_share_topic'
  | 'posts'
  | 'preview'
  | 'preview_quit'
  | 'previous'
  | 'privacy_policy'
  | 'pro'
  | 'profile'
  | 'questions'
  | 'read_wikipedia'
  | 'real_life_examples'
  | 'references_links'
  | 'references'
  | 'reorder'
  | 'replies'
  | 'report_confirmation'
  | 'report_issue'
  | 'report_progress'
  | 'report_success'
  | 'report_tooltip'
  | 'report'
  | 'reports'
  | 'reset_password_sending'
  | 'reset_password_sent'
  | 'reset_password'
  | 'response_deleted'
  | 'revert_confirmation'
  | 'revert_progress'
  | 'revert_success'
  | 'revert_tooltip'
  | 'revert'
  | 'save_changes'
  | 'save'
  | 'saved'
  | 'saving'
  | 'search_ph'
  | 'search_topic_help'
  | 'search_topic_not_found'
  | 'search_topic'
  | 'search'
  | 'see_all_edits'
  | 'see_all'
  | 'see_discussion'
  | 'selected_item'
  | 'send'
  | 'sending'
  | 'sent'
  | 'seo_books_desc'
  | 'seo_contact_desc'
  | 'seo_courses_desc'
  | 'seo_edits_desc'
  | 'seo_examples_desc'
  | 'seo_groups_desc'
  | 'seo_home_desc'
  | 'seo_home_title'
  | 'seo_login_desc'
  | 'seo_posts_desc'
  | 'seo_profile_desc'
  | 'seo_questions_desc'
  | 'seo_refs_desc'
  | 'seo_reset_password_desc'
  | 'seo_search_desc'
  | 'seo_search_title'
  | 'seo_settings_desc'
  | 'seo_signup_desc'
  | 'seo_topic_books_desc'
  | 'seo_topic_books_title'
  | 'seo_topic_courses_desc'
  | 'seo_topic_courses_title'
  | 'seo_topic_desc'
  | 'seo_topic_examples_desc'
  | 'seo_topic_examples_title'
  | 'seo_topic_posts_desc'
  | 'seo_topic_posts_title'
  | 'seo_topic_questions_desc'
  | 'seo_topic_questions_title'
  | 'seo_topic_ref_desc'
  | 'seo_topic_ref_title'
  | 'seo_topics_create_desc'
  | 'seo_topics_desc'
  | 'settings'
  | 'signin_facebook'
  | 'signin_google'
  | 'signing_in'
  | 'signup_notice_and'
  | 'signup_notice'
  | 'signup'
  | 'social_description'
  | 'social_media'
  | 'stats'
  | 'subtitle'
  | 'teach_article_desc'
  | 'teach_article_title'
  | 'teach_book_desc'
  | 'teach_book_title'
  | 'teach_course_desc'
  | 'teach_course_title'
  | 'teach_example_desc'
  | 'teach_example_title'
  | 'teach_intro'
  | 'teach_lesson_desc'
  | 'teach_lesson_title'
  | 'teach_ref_desc'
  | 'teach_ref_title'
  | 'teach_title'
  | 'teach'
  | 'terms_service'
  | 'text'
  | 'timeline'
  | 'title_required'
  | 'title'
  | 'topic_create_desc'
  | 'topic_create'
  | 'topic_desc_helper'
  | 'topic_selector_helper'
  | 'topics'
  | 'updated'
  | 'uploading'
  | 'url'
  | 'username_exists'
  | 'username'
  | 'users'
  | 'video'
  | 'video_link'
  | 'view'
  | 'website';

export type TranslationData = {
  [key in TranslationKeys]: string;
};

export type TranslationFn = (
  key: TranslationKeys,
  args?: Dictionary<string | number>,
) => string;
