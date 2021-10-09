'use strict';

const headline = new NewsArticle({ 
  headline: 'This is a headline', 
  image: 'imagePlaceholder', 
  body: 'This is the entire article.'});

it('accesses the headline text stored inside the headline instance', () => {
  expect(headline.getHeadlineText()).toEqual('This is a headline');
})

it('accesses the image stored inside the headline instance', () => {
  expect(headline.getImage()).toEqual('imagePlaceholder');
})

it('accesses the body text', () => {
  expect(headline.getBodyText()).toEqual('This is the entire article.');
})