describe('Verify the Saplings Content Types recipe applied properly.', () => {

  /**************************************************************
   * Module install and verification section.
   *************************************************************/
  it('Verify all core modules were installed and enabled.', () => {
    // Login and visit the extend/modules page.
    cy.login()
    cy.visit('/admin/modules')
    // Verify CKEditor5 module was installed and enabled.
    cy.get('#edit-modules-ckeditor5-enable').should('be.checked')
    // Verify Text Editor module was installed and enabled.
    cy.get('#edit-modules-editor-enable').should('be.checked')
    // Verify Media module was installed and enabled.
    cy.get('#edit-modules-media-enable').should('be.checked')
    // Verify Node module was installed and enabled.
    cy.get('#edit-modules-node-enable').should('be.checked')
  })

  it('Verify all contrib modules were installed and enabled.', () => {
    // Login and visit the extend/modules page.
    cy.login()
    cy.visit('/admin/modules')
    // Verify Access Unpublished module was installed and enabled.
    cy.get('#edit-modules-access-unpublished-enable').should('be.checked')
    // Verify Editor Advanced Link module was installed and enabled.
    cy.get('#edit-modules-editor-advanced-link-enable').should('be.checked')
    // Verify Linkit module was installed and enabled.
    cy.get('#edit-modules-linkit-enable').should('be.checked')
    // Verify No Markup module was installed and enabled.
    cy.get('#edit-modules-nomarkup-enable').should('be.checked')
    // Verify Quick Node Clone module was installed and enabled.
    cy.get('#edit-modules-quick-node-clone-enable').should('be.checked')
    // Verify Responsive Tables Filter module was installed and enabled.
    cy.get('#edit-modules-responsive-tables-filter-enable').should('be.checked')
    // Verify View Unpublished module was installed and enabled.
    cy.get('#edit-modules-view-unpublished-enable').should('be.checked')
  })

  /*********************************************************
   * Configuration Import verification section.
   ********************************************************/
  it('Verify CKEditor Full HTML configuration.', () => {
    cy.login()
    cy.visit('/admin/config/content/formats/manage/full_html?destination=/admin/config/content/formats')
    cy.get('#edit-roles-anonymous').should('not.be.checked')
    cy.get('#edit-roles-authenticated').should('not.be.checked')
    cy.get('#edit-roles-content-editor').should('be.checked')
    cy.get('#edit-roles-administrator').should('be.checked')
    cy.get('#edit-editor-editor').should('have.value', 'ckeditor5')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-undo').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-redo').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-heading').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-style').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-bold').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-underline').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-italic').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-strikethrough').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-code').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-subscript').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-superscript').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-blockQuote').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-link').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-indent').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-outdent').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-bulletedList').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-numberedList').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-alignment').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-removeFormat').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-insertTable').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-drupalMedia').should('exist')
    cy.get('.ckeditor5-toolbar-active').find('.ckeditor5-toolbar-button-sourceEditing').should('exist')
    cy.get('#edit-editor-settings-plugins-ckeditor5-heading-enabled-headings-heading1').should('not.be.checked')
    cy.get('#edit-editor-settings-plugins-ckeditor5-heading-enabled-headings-heading2').should('be.checked')
    cy.get('#edit-editor-settings-plugins-ckeditor5-heading-enabled-headings-heading3').should('be.checked')
    cy.get('#edit-editor-settings-plugins-ckeditor5-heading-enabled-headings-heading4').should('be.checked')
    cy.get('#edit-editor-settings-plugins-ckeditor5-heading-enabled-headings-heading5').should('be.checked')
    cy.get('#edit-editor-settings-plugins-ckeditor5-heading-enabled-headings-heading6').should('be.checked')
    cy.get('.vertical-tabs__menu').contains('Style').click()
    cy.get('#edit-editor-settings-plugins-ckeditor5-style-styles').should('contain.text', 'a.btn.btn-primary|Primary Button')
    cy.get('#edit-editor-settings-plugins-ckeditor5-style-styles').should('contain.text', 'a.btn.btn-secondary|Secondary Button')
    cy.get('#edit-editor-settings-plugins-ckeditor5-style-styles').should('contain.text', 'blockquote.blockquote|Blockquote')
    cy.get('#edit-editor-settings-plugins-ckeditor5-style-styles').should('contain.text', 'p.author|Blockquote Author')
    cy.get('#edit-editor-settings-plugins-ckeditor5-style-styles').should('contain.text', 'p.aside|Aside')
    cy.get('.vertical-tabs__menu').contains('List').click()
    cy.get('#edit-editor-settings-plugins-ckeditor5-list-reversed').should('be.checked')
    cy.get('#edit-editor-settings-plugins-ckeditor5-list-startindex').should('be.checked')
    cy.get('#edit-editor-settings-plugins-ckeditor5-list-multiblock').should('be.checked')
    cy.get('.vertical-tabs__menu').contains('Alignment').click()
    cy.get('#edit-editor-settings-plugins-ckeditor5-alignment-enabled-alignments-left').should('be.checked')
    cy.get('#edit-editor-settings-plugins-ckeditor5-alignment-enabled-alignments-center').should('be.checked')
    cy.get('#edit-editor-settings-plugins-ckeditor5-alignment-enabled-alignments-right').should('be.checked')
    cy.get('#edit-editor-settings-plugins-ckeditor5-alignment-enabled-alignments-justify').should('be.checked')
    cy.get('.vertical-tabs__menu').contains('Media').click()
    cy.get('.vertical-tabs__menu').contains('Advanced links').click()
    cy.get('#edit-editor-settings-plugins-editor-advanced-link-link-enabled-attributes-aria-label').should('not.be.checked')
    cy.get('#edit-editor-settings-plugins-editor-advanced-link-link-enabled-attributes-title').should('be.checked')
    cy.get('#edit-editor-settings-plugins-editor-advanced-link-link-enabled-attributes-class').should('be.checked')
    cy.get('#edit-editor-settings-plugins-editor-advanced-link-link-enabled-attributes-id').should('not.be.checked')
    cy.get('#edit-editor-settings-plugins-editor-advanced-link-link-enabled-attributes-target').should('be.checked')
    cy.get('#edit-editor-settings-plugins-editor-advanced-link-link-enabled-attributes-rel').should('not.be.checked')
    cy.get('.vertical-tabs__menu').contains('Linkit').click()
    cy.get('#edit-editor-settings-plugins-linkit-extension-linkit-profile').should('have.value', '')
    cy.get('#edit-filters-filter-html-status').should('be.checked')
    cy.get('#edit-filters-filter-html-escape-status').should('not.be.checked')
    cy.get('#edit-filters-filter-align-status').should('be.checked')
    cy.get('#edit-filters-filter-autop-status').should('be.checked')
    cy.get('#edit-filters-filter-url-status').should('be.checked')
    cy.get('#edit-filters-linkit-status').should('be.checked')
    cy.get('#edit-filters-filter-responsive-tables-filter-status').should('be.checked')
    cy.get('#edit-filters-editor-file-reference-status').should('not.be.checked')
    cy.get('#edit-filters-filter-caption-status').should('not.be.checked')
    cy.get('#edit-filters-filter-html-image-secure-status').should('be.checked')
    cy.get('#edit-filters-filter-htmlcorrector-status').should('not.be.checked')
    cy.get('#edit-filters-filter-image-lazy-load-status').should('be.checked')
    cy.get('#edit-filters-media-embed-status').should('be.checked')
    const allowedHTMLTags = '<br> <p class="author aside text-align-left text-align-center text-align-right text-align-justify"> <h2 class="text-align-left text-align-center text-align-right text-align-justify"> <h3 class="text-align-left text-align-center text-align-right text-align-justify"> <h4 class="text-align-left text-align-center text-align-right text-align-justify"> <h5 class="text-align-left text-align-center text-align-right text-align-justify"> <h6 class="text-align-left text-align-center text-align-right text-align-justify"> <a class href title target="_blank" data-entity-type data-entity-uuid data-entity-substitution> <ul class="list-nav two-col"> <blockquote class="blockquote"> <strong> <em> <u> <code> <s> <sub> <sup> <ol reversed start> <li> <table> <tr> <td rowspan colspan> <th rowspan colspan> <thead> <tbody> <tfoot> <caption> <drupal-media data-entity-type data-entity-uuid alt data-view-mode data-align>'
    cy.get('#edit-filters-filter-html-settings-allowed-html').should('have.text', allowedHTMLTags)
    cy.get('#edit-filters-filter-html-settings-filter-html-help').should('be.checked')
    cy.get('#edit-filters-filter-html-settings-filter-html-nofollow').should('not.be.checked')
    cy.get('.vertical-tabs__menu').contains('Convert URLs into links').click()
    cy.get('#edit-filters-filter-url-settings-filter-url-length').should('have.value', '72')
    cy.get('.vertical-tabs__menu').contains('Linkit URL converter').click()
    cy.get('#edit-filters-linkit-settings-title').should('be.checked')
    cy.get('.vertical-tabs__menu').contains('Apply responsive behavior to HTML tables').click()
    cy.get('#edit-filters-filter-responsive-tables-filter-settings-tablesaw-type').should('have.value', 'stack')
    cy.get('#edit-filters-filter-responsive-tables-filter-settings-tablesaw-persist').should('be.checked')
    cy.get('.vertical-tabs__menu').contains('Embed media').click()
    cy.get('#edit-filters-media-embed-settings-default-view-mode').should('have.value', 'default')
    cy.get('#edit-filters-media-embed-settings-allowed-media-types-document').should('not.be.checked')
    cy.get('#edit-filters-media-embed-settings-allowed-media-types-image').should('not.be.checked')
    cy.get('#edit-filters-media-embed-settings-allowed-media-types-remote-video').should('not.be.checked')
    cy.get('#edit-filters-media-embed-settings-allowed-media-types-video').should('not.be.checked')
    cy.get('#edit-filters-media-embed-settings-allowed-view-modes-default').should('be.checked')
    cy.get('#edit-filters-media-embed-settings-allowed-view-modes-full').should('not.be.checked')
    cy.get('#edit-filters-media-embed-settings-allowed-view-modes-media-library').should('not.be.checked')
    cy.get('#edit-filters-media-embed-settings-allowed-view-modes-sa-16-3').should('not.be.checked')
  })
  it('Verify linkit profile configuration.', () => {
    cy.login()
    cy.visit('/admin/config/content/linkit/manage/saplings_default?destination=/admin/config/content/linkit')
    cy.get('#edit-label').should('have.value', 'Saplings Linkit default')
    cy.get('#edit-description').should('have.text', 'A default Linkit profile')
    cy.visit('/admin/config/content/linkit/manage/saplings_default/matchers/9e9c3670-8480-4b0f-aaf6-bdecf4a36ed7')
    cy.get('#edit-metadata--2').should('have.value', '[node:content-type:name] #[node:nid] | [node:created:medium] by [node:author]')
    cy.get('#edit-bundles-sa-page').should('not.be.checked')
    cy.get('#edit-bundles-sa-post').should('not.be.checked')
    cy.get('#edit-group-by-bundle').should('not.be.checked')
    cy.get('#edit-limit--2').should('have.value', '100')
    cy.get('#edit-include-unpublished').should('not.be.checked')
  })
  it('Verify Administrator and Content editor roles.', () => {
    cy.login()
    cy.visit('/admin/people/roles/manage/administrator')
    cy.get('#edit-label').should('have.value', 'Administrator')
    cy.visit('/admin/people/roles/manage/content_editor')
    cy.get('#edit-label').should('have.value', 'Content editor')
    cy.visit('/admin/people/permissions/content_editor')
    cy.get('#edit-content-editor-access-administration-pages').should('be.checked')
    cy.get('#edit-content-editor-administer-account-settings').should('not.be.checked')
    cy.get('#edit-content-editor-view-the-administration-theme').should('be.checked')
    cy.get('#edit-content-editor-administer-permissions').should('not.be.checked')
    cy.get('#edit-content-editor-administer-users').should('not.be.checked')
  })
})
