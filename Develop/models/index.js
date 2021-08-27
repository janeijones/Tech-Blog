const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
//relationships for models
Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
}); 

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDeleete: 'CASCADE'
});

module.exports = {
    Comment,
    User,
    Post
};