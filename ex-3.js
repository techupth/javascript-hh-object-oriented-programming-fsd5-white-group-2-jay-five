//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
class PostList {
  constructor9(posts) {
    this.posts = [];
  }
  addPost(post) {
    return this.posts.push(post);
  }
  sharePost(postTitle) {
    console.log(`You've shared post ${postTitle} to your friend.`);
  }
}
class Post {
  constructor(id, title, content, commet) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.commet = [];
  }
  addCommet(newCommet) {
    return this.commet.push(newCommet);
  }
}

class Commet {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
  addLike() {
    return (this.like += 1);
  }
}
class Facebook {
  constructor(groupList, grouppage) {
    this.groupList = [];
    this.grouppage = [];
  }
  addGroup(newGroup) {
    this.groupList.push(newGroup);
  }
  addPage(newPage){
    this.grouppage.push(newPage)
  }
}
// const testFacebook = new Facebook()
// testFacebook.addGroup("test")
// console.log(testFacebook)
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
    console.log(`Notification: ${Commet.createdBy} has just commented on this post—${Post.postTitle}`);
  }
}
