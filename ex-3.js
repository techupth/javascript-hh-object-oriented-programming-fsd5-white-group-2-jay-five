//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class postList {
  constructor(post) {
    this.post = post;
  }

  addPost() {
    return this.post.push();
  }

  sharePost() {
    console.log(`You've shared post ${this.post.title} to your friend.`);
  }
}

class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment;
  }

  addComment() {
    return this.comment.push();
  }
}

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = like;
  }

  addLike() {
    return (this.like += 1);
  }
}

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList;
    this.pageList = pageList;
  }
  addGroup() {
    return this.groupList.push();
  }

  addPage() {
    return this.pageList.push();
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }

  send() {
    console.log(
      `Notification: ${this.id.createdBy} has just commented on this post—${this.id.title}`
    );
  }
}
