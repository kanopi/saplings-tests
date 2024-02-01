describe('Verify the Saplings Content Types recipe applied properly.', () => {

  /**************************************************************
   * Module install and verification section.
   *************************************************************/
  it('Verify all core modules were installed and enabled.', () => {
    // Login and visit the extend/modules page.
    cy.login()
    cy.visit('/admin/modules')
    // Verify Menu UI module was installed and enabled.
    cy.get('#edit-modules-menu-ui-enable').should('be.checked')
  })

  it('Verify all contrib modules were installed and enabled.', () => {
    // Login and visit the extend/modules page.
    cy.login()
    cy.visit('/admin/modules')
    // Verify Access Unpublished module was installed and enabled.
    cy.get('#edit-modules-access-unpublished-enable').should('be.checked')
    // Verify Field Group module was installed and enabled.
    cy.get('#edit-modules-field-group-enable').should('be.checked')
    // Verify Metatag: Open Graph module was installed and enabled.
    cy.get('#edit-modules-metatag-open-graph-enable').should('be.checked')
    // Verify Metatag: Twitter Cards module was installed and enabled.
    cy.get('#edit-modules-metatag-twitter-cards-enable').should('be.checked')
    // Verify Pathauto module was installed and enabled.
    cy.get('#edit-modules-pathauto-enable').should('be.checked')
    // Verify Publication Date module was installed and enabled.
    cy.get('#edit-modules-publication-date-enable').should('be.checked')
    // Verify Scheduler module was installed and enabled.
    cy.get('#edit-modules-scheduler-enable').should('be.checked')
    // Verify Scheduler Content Mederation Integration module was installed and enabled.
    cy.get('#edit-modules-scheduler-content-moderation-integration-enable').should('be.checked')
    // Verify Schema.org Article module was installed and enabled.
    cy.get('#edit-modules-schema-article-enable').should('be.checked')
    // Verify Simple Sitemap module was installed and enabled.
    cy.get('#edit-modules-simple-sitemap-enable').should('be.checked')
    // Verify Token Or module was installed and enabled.
    cy.get('#edit-modules-token-or-enable').should('be.checked')
  })

  /*********************************************************
   * Configuration Import verification section.
   ********************************************************/
  it('Verify Content: Page and Content: Post default metatags are configured.', () => {
    cy.login()
    // Verify Page default metatags
    cy.visit('/admin/config/search/metatag/node__sa_page?destination=/admin/config/search/metatag')
    cy.get('#edit-title').should('have.value', '[node:sa_seo_page_title|node:title] | [site:name]')
    cy.get('#edit-description').should('contain.text', '[node:sa_description|node:sa_seo_description]')
    cy.get('#edit-canonical-url').should('have.value', '[current-page:url:absolute]')
    cy.get('#edit-image-src').should('have.value', '[node:sa_featured_image:entity:field_media_image:sa_social_media_facebook]')
    cy.get('#edit-rights').should('have.value', 'Copyright ©[date:html_year] All rights reserved.')
    cy.get('#edit-og-site-name').should('have.value', '[site:name]')
    cy.get('#edit-og-type').should('have.value', 'website')
    cy.get('#edit-og-url').should('have.value', '[current-page:url:absolute]')
    cy.get('#edit-og-title').should('have.value', '[node:sa_seo_page_title|node:title]')
    cy.get('#edit-og-description').should('contain.text', '[node:sa_description|node:sa_seo_description]')
    cy.get('#edit-og-image').should('have.value', '[node:sa_featured_image:entity:field_media_image:sa_social_media_facebook]')
    cy.get('#edit-og-image-type').should('have.value', '[node:sa_featured_image:entity:field_media_image:sa_social_media_facebook:mimetype]')
    cy.get('#edit-og-image-width').should('have.value', '[node:sa_featured_image:entity:field_media_image:sa_social_media_facebook:width]')
    cy.get('#edit-og-image-height').should('have.value', '[node:sa_featured_image:entity:field_media_image:sa_social_media_facebook:height]')
    cy.get('#edit-og-image-alt').should('have.value', '[node:sa_featured_image:entity:field_media_image:alt]')
    cy.get('#edit-og-updated-time').should('have.value', '[node:changed:custom:c]')
    cy.get('#edit-og-locale').should('have.value', 'en_US')
    cy.get('#edit-twitter-cards-type').should('have.value', 'summary_large_image')
    cy.get('#edit-twitter-cards-description').should('have.value', '[node:sa_description|node:sa_seo_description]')
    cy.get('#edit-twitter-cards-title').should('have.value', '[node:sa_seo_page_title|node:title]')
    cy.get('#edit-twitter-cards-image').should('have.value', '[node:sa_featured_image:entity:field_media_image:sa_social_media_x:url]')
    cy.get('#edit-twitter-cards-image-alt').should('have.value', '[node:sa_featured_image:entity:field_media_image:alt]')
    // Verify Post default metatags
    cy.visit('/admin/config/search/metatag/node__sa_post?destination=/admin/config/search/metatag')
    cy.get('#edit-title').should('have.value', '[node:sa_seo_page_title|node:title] | [site:name]')
    cy.get('#edit-description').should('contain.text', '[node:sa_description|node:sa_seo_description]')
    cy.get('#edit-canonical-url').should('have.value', '[current-page:url:absolute]')
    cy.get('#edit-image-src').should('have.value', '[node:sa_featured_image:entity:field_media_image:sa_social_media_facebook]')
    cy.get('#edit-rights').should('have.value', 'Copyright ©[date:html_year] All rights reserved.')
    cy.get('#edit-og-site-name').should('have.value', '[site:name]')
    cy.get('#edit-og-type').should('have.value', 'article')
    cy.get('#edit-og-url').should('have.value', '[current-page:url:absolute]')
    cy.get('#edit-og-title').should('have.value', '[node:sa_seo_page_title|node:title]')
    cy.get('#edit-og-description').should('contain.text', '[node:sa_description|node:sa_seo_description]')
    cy.get('#edit-og-image').should('have.value', '[node:sa_featured_image:entity:field_media_image:sa_social_media_facebook]')
    cy.get('#edit-og-image-type').should('have.value', '[node:sa_featured_image:entity:field_media_image:sa_social_media_facebook:mimetype]')
    cy.get('#edit-og-image-width').should('have.value', '[node:sa_featured_image:entity:field_media_image:sa_social_media_facebook:width]')
    cy.get('#edit-og-image-height').should('have.value', '[node:sa_featured_image:entity:field_media_image:sa_social_media_facebook:height]')
    cy.get('#edit-og-image-alt').should('have.value', '[node:sa_featured_image:entity:field_media_image:alt]')
    cy.get('#edit-og-updated-time').should('have.value', '[node:changed:custom:c]')
    cy.get('#edit-og-locale').should('have.value', 'en_US')
    cy.get('#edit-twitter-cards-type').should('have.value', 'summary_large_image')
    cy.get('#edit-twitter-cards-description').should('have.value', '[node:sa_description|node:sa_seo_description]')
    cy.get('#edit-twitter-cards-title').should('have.value', '[node:sa_seo_page_title|node:title]')
    cy.get('#edit-twitter-cards-image').should('have.value', '[node:sa_featured_image:entity:field_media_image:sa_social_media_x:url]')
    cy.get('#edit-twitter-cards-image-alt').should('have.value', '[node:sa_featured_image:entity:field_media_image:alt]')
  })
  it('Verify Pathauto pattern for Page and Post path is set.', () => {
    cy.login()
    cy.visit('/admin/config/search/path/patterns')
    cy.get('[data-drupal-selector="edit-entities-sa-page"]').should('contain.text', '[node:menu-link:parents:join-path]/[node:title]')
    cy.get('[data-drupal-selector="edit-entities-sa-post"]').should('contain.text', '[node:content-type]/[node:sa_type]/[node:title]')
  })
  it('Verify Simple Sitemap Page and Post settings are set.', () => {
    cy.login()
    cy.visit('/admin/config/search/simplesitemap/entities/node?destination=/admin/config/search/simplesitemap/entities')
    // Verify Page Sitemap settings.
    cy.get('#edit-bundles-sa-page-default-index-1').should('be.checked')
    cy.get('#edit-bundles-sa-page-default-priority').should('have.value', '0.8')
    cy.get('#edit-bundles-sa-page-default-changefreq').should('have.value', '')
    cy.get('#edit-bundles-sa-page-default-include-images').should('have.value', '0')
    // Verify Post Sitemap settings.
    cy.get('#edit-bundles-sa-post-default-index-1').should('be.checked')
    cy.get('#edit-bundles-sa-post-default-priority').should('have.value', '0.5')
    cy.get('#edit-bundles-sa-post-default-changefreq').should('have.value', '')
    cy.get('#edit-bundles-sa-post-default-include-images').should('have.value', '0')
  })
  it('Verify Page and Post content type edit settings.', () => {
    cy.login()
    // Verify Page content type edit settings.
    cy.visit('/admin/structure/types/manage/sa_page?destination=/admin/structure/types')
    cy.get('#edit-name').should('have.value', 'Page')
    cy.get('#edit-description').should('contain.text', "Used for the primary pages of the site like the homepage and other pages that are in the site's menus.")
    cy.get('#edit-title-label').should('have.value', 'Title')
    cy.get('#edit-preview-mode-1').should('be.checked')
    cy.get('#edit-help').should('contain.text', '')
    cy.get('#edit-options-status').should('not.be.checked')
    cy.get('#edit-options-promote').should('not.be.checked')
    cy.get('#edit-options-sticky').should('not.be.checked')
    cy.get('#edit-options-revision').should('be.checked')
    cy.get('#edit-display-submitted').should('not.be.checked')
    cy.get('#edit-menu-options-admin').should('not.be.checked')
    cy.get('#edit-menu-options-footer').should('not.be.checked')
    cy.get('#edit-menu-options-main').should('be.checked')
    cy.get('#edit-menu-options-tools').should('not.be.checked')
    cy.get('#edit-menu-options-account').should('not.be.checked')
    cy.get('#edit-menu-parent').should('have.value', 'main:')
    cy.get('#edit-scheduler-publish-enable').should('be.checked')
    cy.get('#edit-scheduler-publish-touch').should('be.checked')
    cy.get('#edit-scheduler-publish-required').should('not.be.checked')
    cy.get('#edit-scheduler-publish-revision').should('not.be.checked')
    cy.get('#edit-scheduler-publish-past-date-publish').should('be.checked')
    cy.get('#edit-scheduler-unpublish-enable').should('not.be.checked')
    cy.get('#edit-scheduler-fields-display-mode-vertical-tab').should('be.checked')
    cy.get('#edit-scheduler-expand-fieldset-when-required').should('be.checked')
    cy.get('#edit-scheduler-show-message-after-update').should('be.checked')
    // Verify Post content type edit settings.
    cy.visit('/admin/structure/types/manage/sa_post?destination=/admin/structure/types')
    cy.get('#edit-name').should('have.value', 'Post')
    cy.get('#edit-description').should('contain.text', "Used for filterable pieces of content like articles, news, press releases, etc.  Can be categorized, and then filtered using the Post Type and Category taxonomies.")
    cy.get('#edit-title-label').should('have.value', 'Title')
    cy.get('#edit-preview-mode-1').should('be.checked')
    cy.get('#edit-help').should('contain.text', '')
    cy.get('#edit-options-status').should('not.be.checked')
    cy.get('#edit-options-promote').should('not.be.checked')
    cy.get('#edit-options-sticky').should('not.be.checked')
    cy.get('#edit-options-revision').should('be.checked')
    cy.get('#edit-display-submitted').should('not.be.checked')
    cy.get('#edit-menu-options-admin').should('not.be.checked')
    cy.get('#edit-menu-options-footer').should('not.be.checked')
    cy.get('#edit-menu-options-main').should('not.be.checked')
    cy.get('#edit-menu-options-tools').should('not.be.checked')
    cy.get('#edit-menu-options-account').should('not.be.checked')
    cy.get('#edit-scheduler-publish-enable').should('be.checked')
    cy.get('#edit-scheduler-publish-touch').should('be.checked')
    cy.get('#edit-scheduler-publish-required').should('not.be.checked')
    cy.get('#edit-scheduler-publish-revision').should('not.be.checked')
    cy.get('#edit-scheduler-publish-past-date-publish').should('be.checked')
    cy.get('#edit-scheduler-unpublish-enable').should('not.be.checked')
    cy.get('#edit-scheduler-fields-display-mode-vertical-tab').should('be.checked')
    cy.get('#edit-scheduler-expand-fieldset-when-required').should('be.checked')
    cy.get('#edit-scheduler-show-message-after-update').should('be.checked')
  })
  it('Verify Page and Post content types contain all the correct fields', () => {
      cy.login()
      // Verify the Page content type fields all exist.
      cy.visit('/admin/structure/types/manage/sa_page/fields')
      cy.get('#sa-components').should('exist')
      cy.get('#sa-description').should('exist')
      cy.get('#sa-featured-image').should('exist')
      cy.get('#sa-robots').should('exist')
      cy.get('#sa-seo-description').should('exist')
      cy.get('#sa-seo-image').should('exist')
      cy.get('#sa-seo-page-title').should('exist')
      // Verify the Post content type fields all exist.
      cy.visit('/admin/structure/types/manage/sa_post/fields')
      cy.get('#sa-author').should('exist')
      cy.get('#sa-author-url').should('exist')
      cy.get('#sa-body').should('exist')
      cy.get('#sa-category').should('exist')
      cy.get('#sa-description').should('exist')
      cy.get('#sa-external-source').should('exist')
      cy.get('#sa-featured-image').should('exist')
      cy.get('#sa-related-posts').should('exist')
      cy.get('#sa-robots').should('exist')
      cy.get('#sa-seo-description').should('exist')
      cy.get('#sa-seo-image').should('exist')
      cy.get('#sa-seo-page-title').should('exist')
      cy.get('#sa-type').should('exist')
    })
})
