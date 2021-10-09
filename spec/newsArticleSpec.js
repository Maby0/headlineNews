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

// it('test stub', () => {
//   let s = stub().of("getHeadlineText");
//   s.getHeadlineText("this is a fake headline",8)
//   expect(headline.getHeadlineText().calls[0][0]).toEqual("this is a fake headline");
// })


// var proxyquire = require("proxyquire").noPreserveCache();

// describe("guardianGetRequest", function() {
//   it("should throw if no URL passed", function() {
//     expect(function() {
//       require("../../guardian-get-request")();
//     }).toThrow("Need an API request URL");
//   });

//   it("should throw if request not to Guardian API domain", function() {
//     expect(function() {
//       require("../../guardian-get-request")("http://somewhereelse.com");
//     }).toThrow("apiRequestUrl must start with http://content.guardianapis.com");
//   });

//   it("should make get request to guardian URL with API key", function() {
//     var requestMock = jasmine.createSpyObj("request", ["get"]);

//     var credentialsMock = {
//       guardian: createSpy("guardian").andReturn({ key: "key" })
//     };

//     var guardianGetRequest = proxyquire("../../guardian-get-request", {
//       "request": requestMock,
//       "./credentials": credentialsMock
//     });

//     guardianGetRequest("http://content.guardianapis.com/alex?show-fields=body");

//     expect(requestMock.get)
//       .toHaveBeenCalledWith("http://content.guardianapis.com/alex?show-fields=body&api-key=key");
//   });