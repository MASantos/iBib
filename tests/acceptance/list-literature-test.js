import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { visit, currentURL, waitFor, find, click } from '@ember/test-helpers';

module('Acceptance | list literature', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('shows list folders/books?', async function(assert) {
	await visit('/')
	await waitFor('.listing')
	let f = this.element.querySelectorAll('.listing')
	assert.equal(f.length,3,'test 3 books?')
	//assert.ok(find('.listing'),'test 3 books?')
  } )
  test('shows about page?', async function(assert) {
	await visit('/')
	await click('.menu-button-about')
	assert.equal(currentURL(),'/about','should be in about')
  } )
  test('shows details book?', async function(assert) {} )
  test('filters list of books?', async function(assert) {} )
  test('opens pdf?', async function(assert) {} )
  test('shows img of book?', async function(assert) {} )

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });
});
