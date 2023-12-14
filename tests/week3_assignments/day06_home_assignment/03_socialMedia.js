"use strict";
/**
 * TypeScript Assignments
### Assignment 3: Social Media Platform Features (TypeScript)
 
Objective:
Practice using interfaces with multiple implementation
 
Instructions:
1. create an interface `SocialMediaFeature` with a method `sharePost()`.
2. Export the both SocialMediaFeature and UIComponent (From Assignment2)
2. Create `Post`, `Comment`, and `Like` classes and implement the `SocialMediaFeature` interface
   and UIcomponent
4. Create instances of `Post`, `Comment`, and `Like` and Call the methods to render, handle events,
   and share posts in a social media platform application.
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.render = function () {
        console.log("Post is rendered");
    };
    Post.prototype.handleEvent = function () {
        console.log("Post event is handled");
    };
    Post.prototype.sharePost = function () {
        console.log("Post is shared");
    };
    return Post;
}());
var Comment = /** @class */ (function () {
    function Comment() {
    }
    Comment.prototype.render = function () {
        console.log("Comment is rendered");
    };
    Comment.prototype.handleEvent = function () {
        console.log("Comment event is handled");
    };
    Comment.prototype.sharePost = function () {
        console.log("Comment is shared");
    };
    return Comment;
}());
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.prototype.render = function () {
        console.log("Like is rendered");
    };
    Like.prototype.handleEvent = function () {
        console.log("Like event is handled");
    };
    Like.prototype.sharePost = function () {
        console.log("Like is shared");
    };
    return Like;
}());
var myPost = new Post();
myPost.render();
myPost.handleEvent();
myPost.sharePost();
var myComment = new Comment();
myComment.render();
myComment.handleEvent();
myComment.sharePost();
var myLike = new Like();
myLike.render();
myLike.handleEvent();
myLike.sharePost();
