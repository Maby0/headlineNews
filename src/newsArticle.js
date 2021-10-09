class NewsArticle {
  constructor(data) {
    this.headline = data['headline'];
    this.image = data['image'];
    this.body = data['body'];
  }

  getHeadlineText() {
    return this.headline;
  }

  getImage() {
    return this.image;
  }

  getBodyText() {
    return this.body;
  }
}