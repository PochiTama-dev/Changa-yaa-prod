import { Advertising } from "./Advertising.js";
import { Budget } from "./Budget.js";
import { Card } from "./Card.js";
import { Category } from "./Category.js";
import { Certificate } from "./Certificate.js";
import { Chat } from "./Chats.js";
import { CriminalRecord } from "./CriminalRecord.js";
import { Network } from "./Network.js";
import { Notification } from "./Notification.js";
import { PaymentPlan } from "./PaymentPlan.js";
import { Post } from "./Post.js";
import { PostImage } from "./PostImage.js";
import { PostPostulate } from "./PostPostulate.js";
import { Product } from "./Product.js";
import { Profession } from "./Profession.js";
import { ProductImage } from "./ProductImage.js";
import { Rank } from "./Rank.js";
import { Rating } from "./Rating.js";
import { RatingsTask } from "./RatingsTask.js";
import { Reason } from "./Reason.js";
import { Request } from "./Request.js";
import { RequestsImage } from "./RequestsImage.js";
import { Role } from "./Roles.js";
import { Scribbler } from "./Scribbler.js";
import { ScribblerImage } from "./ScribblerImage.js";
import { Subscription } from "./Subscription.js";
import { Task } from "./Task.js";
import { User } from "./User.js";
import { UsersCategory } from "./UsersCategory.js";
import { UsersNetwork } from "./UsersNetwork.js";
import { UsersNotification } from "./UsersNotification.js";
import { UsersProfession } from "./UsersProfession.js";
import { UsersRank } from "./UsersRank.js";
import { UsersSubscription } from "./UsersSubscription.js";


// Budget - User y Product
Budget.belongsTo(User, { as: "buyer", foreignKey: "id_buyer" });
Budget.belongsTo(User, { as: "seller", foreignKey: "id_seller" });
Budget.belongsTo(Product, { foreignKey: "id_product" });

User.hasMany(Budget, { as: "buyerBudgets", foreignKey: "id_buyer" });
User.hasMany(Budget, { as: "sellerBudgets", foreignKey: "id_seller" });
Product.hasMany(Budget, { foreignKey: "id_product" });

// Card - User
Card.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(Card, { foreignKey: "id_user" });

// Certificate - User
Certificate.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(Certificate, { foreignKey: "id_user" });

// Chat - User
Chat.belongsTo(User, { as: "sender", foreignKey: "id_sender_user" });
Chat.belongsTo(User, { as: "receiver", foreignKey: "id_receiver_user" });

User.hasMany(Chat, { as: "sentMessages", foreignKey: "id_sender_user" });
User.hasMany(Chat, { as: "receivedMessages", foreignKey: "id_receiver_user" });

// CriminalRecord - User
CriminalRecord.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(CriminalRecord, { foreignKey: "id_user" });

// Post - User y Profession
Post.belongsTo(User, { foreignKey: "id_user" });
Post.belongsTo(Profession, { foreignKey: "id_profession" });

User.hasMany(Post, { foreignKey: "id_user" });
Profession.hasMany(Post, { foreignKey: "id_profession" });

// PostImage - Post
PostImage.belongsTo(Post, { foreignKey: "id_post" });
Post.hasMany(PostImage, { foreignKey: "id_post" });

// PostPostulate - Scribbler y User
PostPostulate.belongsTo(Scribbler, { foreignKey: "id_post" });
PostPostulate.belongsTo(User, { foreignKey: "id_postulate" });

Scribbler.hasMany(PostPostulate, { foreignKey: "id_post" });
User.hasMany(PostPostulate, { foreignKey: "id_postulate" });

// Product - User
Product.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(Product, { foreignKey: "id_user" });

// Product - ProductImage
ProductImage.belongsTo(Product, { foreignKey: "id_product" });
Product.hasMany(ProductImage, { foreignKey: "id_product" });

// Profession - Category
Profession.belongsTo(Category, { foreignKey: "id_category" });
Category.hasMany(Profession, { foreignKey: "id_category" });

// Rating - User
Rating.belongsTo(User, {
  as: "contractingUser",
  foreignKey: "id_contracting_user",
});
Rating.belongsTo(User, {
  as: "contractedUser",
  foreignKey: "id_contracted_user",
});
Rating.belongsTo(Reason, { foreignKey: "id_reason" });
Rating.belongsTo(Scribbler, { foreignKey: 'id_scribbler' });

Reason.hasMany(Rating, { foreignKey: "id_reason" });
User.hasMany(Rating, {
  as: "contractingRatings",
  foreignKey: "id_contracting_user",
});
User.hasMany(Rating, {
  as: "contractedRatings",
  foreignKey: "id_contracted_user",
});
Scribbler.hasMany(Rating, { foreignKey: 'id_scribbler' });

// RatingsTask - Task
RatingsTask.belongsTo(Task, { foreignKey: "id_task" });
Task.hasMany(RatingsTask, { foreignKey: "id_task" });

// Request - User, Scribbler y  Profession
Request.belongsTo(User, {
  as: "contractingUser",
  foreignKey: "id_contracting_user",
});
Request.belongsTo(User, {
  as: "contractedUser",
  foreignKey: "id_contracted_user",
});
Request.belongsTo(Scribbler, { foreignKey: "id_post" });
Request.belongsTo(Profession, { foreignKey: "id_profession" });

User.hasMany(Request, {
  as: "contractingRequests",
  foreignKey: "id_contracting_user",
});
User.hasMany(Request, {
  as: "contractedRequests",
  foreignKey: "id_contracted_user",
});
Scribbler.hasMany(Request, { foreignKey: "id_post" });
Profession.hasMany(Request, { foreignKey: "id_profession" });

// RequestsImage - Request y User
RequestsImage.belongsTo(Request, { foreignKey: "id_request" });
RequestsImage.belongsTo(User, { foreignKey: "id_user" });

Request.hasMany(RequestsImage, { foreignKey: "id_request" });
User.hasMany(RequestsImage, { foreignKey: "id_user" });

// Scribbler - User y Profession
Scribbler.belongsTo(User, { foreignKey: "id_user" });
Scribbler.belongsTo(Profession, { foreignKey: "id_profession" });

User.hasMany(Scribbler, { foreignKey: "id_user" });
Profession.hasMany(Scribbler, { foreignKey: "id_profession" });

// ScribblerImage - Scribbler
ScribblerImage.belongsTo(Scribbler, { foreignKey: "id_scribbler" });
Scribbler.hasMany(ScribblerImage, { foreignKey: "id_scribbler" });

// Task - Request
Task.belongsTo(Request, { foreignKey: "id_request" });
Request.hasMany(Task, { foreignKey: "id_request" });

// User - Role
User.belongsTo(Role, { foreignKey: "id_role" });
Role.hasMany(User, { foreignKey: "id_role" });

// User - UsersCategory

User.hasMany(UsersCategory, { foreignKey: 'id_user' });
UsersCategory.belongsTo(User, { foreignKey: 'id_user' });
Category.hasMany(UsersCategory, { foreignKey: 'id_category' });
UsersCategory.belongsTo(Category, { foreignKey: 'id_category' });

// UsersNetwork - User y Network
UsersNetwork.belongsTo(User, { foreignKey: "id_user" });
UsersNetwork.belongsTo(Network, { foreignKey: "id_network" });

User.hasMany(UsersNetwork, { foreignKey: "id_user" });
Network.hasMany(UsersNetwork, { foreignKey: "id_network" });

// UsersNotification - User y Notification
UsersNotification.belongsTo(User, {
  as: "User",
  foreignKey: "id_user",
});
UsersNotification.belongsTo(User, {
  as: "UserRelated",
  foreignKey: "id_user_related",
});
UsersNotification.belongsTo(Notification, { foreignKey: "id_notification" });
UsersNotification.belongsTo(Scribbler, { foreignKey: "id_post" });

User.hasMany(UsersNotification, {
  as: "User",
  foreignKey: "id_user",
});
User.hasMany(UsersNotification, {
  as: "UserRelated",
  foreignKey: "id_user_related",
});
Notification.hasMany(UsersNotification, { foreignKey: "id_notification" });
Scribbler.hasMany(UsersNotification, { foreignKey: "id_post" });

// User - UsersProfession
User.hasMany(UsersProfession, { foreignKey: 'id_user' });
UsersProfession.belongsTo(User, { foreignKey: 'id_user' });
Profession.hasMany(UsersProfession, { foreignKey: 'id_profession' });
UsersProfession.belongsTo(Profession, { foreignKey: 'id_profession' });

// UsersRank - User y Rank
UsersRank.belongsTo(User, { foreignKey: 'id_user' });
UsersRank.belongsTo(Rank, { foreignKey: 'id_rank' });

User.hasMany(UsersRank, { foreignKey: 'id_user' });
Rank.hasMany(UsersRank, { foreignKey: 'id_rank' });

// UsersSubscription - User y Subscription
UsersSubscription.belongsTo(User, { foreignKey: 'id_user' });
UsersSubscription.belongsTo(Subscription, { foreignKey: 'id_subscription' });

User.hasMany(UsersSubscription, { foreignKey: 'id_user' });
Subscription.hasMany(UsersSubscription, { foreignKey: 'id_subscription' });

// User - Advertising
User.hasMany(Advertising, { foreignKey: 'id_user' });
Advertising.belongsTo(User, { foreignKey: 'id_user' });

// PaymentPlan - Advertising
PaymentPlan.hasMany(Advertising, { foreignKey: 'id_payment' });
Advertising.belongsTo(PaymentPlan, { foreignKey: 'id_payment' });

// Advertising - Role - Category - Profession
Role.hasMany(Advertising, { foreignKey: 'id_role' });
Advertising.belongsTo(Role, { foreignKey: 'id_role' });

Category.hasMany(Advertising, { foreignKey: 'id_category' });
Advertising.belongsTo(Category, { foreignKey: 'id_category' });

Profession.hasMany(Advertising, { foreignKey: 'id_profession' });
Advertising.belongsTo(Profession, { foreignKey: 'id_profession' });

export {
  Advertising,
  Budget,
  Card,
  Category,
  Certificate,
  Chat,
  CriminalRecord,
  Network,
  Notification,
  PaymentPlan,
  Post,
  PostImage,
  PostPostulate,
  Product,
  ProductImage,
  Profession,
  Rank,
  Rating,
  RatingsTask,
  Reason,
  Request,
  RequestsImage,
  Role,
  Scribbler,
  ScribblerImage,
  Subscription,
  Task,
  User,
  UsersCategory,
  UsersNetwork,
  UsersNotification,
  UsersProfession,
  UsersRank,
  UsersSubscription,
};
