// 1. import mongoose
const mongoose = require("mongoose");

// 2. connect mongoDB atlas
mongoose
  .connect("mongodb+srv://yating:Zgng1991atlas@cluster0.g7mqkbi.mongodb.net/")
  .then(() => {
    console.log("database connected successfully!");
  })
  .catch((error) => {
    console.log(error);
  });

// 3. create new Schema
const userSchema = new mongoose.Schema({
  name: String, //is short-hand for name:{type:String}
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createAt: { type: Date, default: Date.now },
});

// 4. create user model
const User = mongoose.model("User", userSchema);
//mongoose.model("theCollectionName", theSchema);

// 5. Query example
async function runQueryExample() {
  try {
    // 5.1 create new Document-1st approach
    //const newUser = await User.create({
    //  name: "Example Name",
    //  email: "example@gmail.com",
    //  age: 100,
    //  isActive: false,
    //  tags: ["developer"],
    //});
    //console.log("user is created successfully->", newUser);

    // 5.2 create new Document-2nd approach
    //const secondNewUser = new User({
    //  name: "TingTing",
    //  email: "String@gmail.com",
    //  age: 40,
    //  isActive: true,
    //  tags: ["developer", "director"],
    //});
    //secondNewUser.save();

    //console.log("second user is created successfully->", secondNewUser);

    // 5.3 Query all users
    //const allUser = await User.find({});
    //console.log(allUser);

    // 5.4 Query Active Users Only
    //const getActiveUsers = await User.find({
    //  isActive: true,
    //});
    //console.log(getActiveUsers);

    // 5.5 Find ONE document (when multiple records exist, only return the first one)
    //const getUserTing = await User.findOne({
    //  name: "Ting",
    //});
    //console.log("find one doc", getUserTing);

    // 5.6 Get the Specific ONE document by _id
    //const specificOneById = await User.findById("6875fa194f5834228160af3f");
    ////const specificOneById = await User.findById(newUser._id);
    //console.log("Get Specific ONE document by _id", specificOneById);

    // 5.7 Display some of the property using select()
    const displaySomeProperty = await User.find().select("name email -_id"); //display name and email only
    const doNotDisplaySomeProperty = await User.find().select(
      "-_id -name -email -age"
    ); //donot display id, name, email and age
    console.log("displaySomeProperty", displaySomeProperty);
    console.log("doNotDisplaySomeProperty", doNotDisplaySomeProperty);

    //5.8 Display FIVE users only, and skip the first user
    const limitedUser = await User.find().limit(5).skip(1);
    console.log("limitedUser", limitedUser);

    //5.9 Sort Results
    const sortedUsersDec = await User.find().sort({ age: -1 }); // -1 means decending order
    console.log("sortedUsersDec", sortedUsersDec);
    const sortedUsersAsc = await User.find().sort({ age: 1 }); // 1 means ascending order
    console.log("sortedUsersAsc", sortedUsersAsc);

    //5.10 Count documents, return the number of the documents
    const countDoc = await User.countDocuments({ isActive: true });
    console.log("countDoc", countDoc);

    //5.11 Delete User
    const deletedUser = await User.findByIdAndDelete(
      "68779365b6401d4f9ad924be"
    );
    //const deletedUser = await User.findByIdAndDelete(newUser._id);
    console.log("deletedUser", deletedUser);

    // 5.12 Update User
    const updatedUser = await User.findByIdAndUpdate(
      "68779536cf005d838e417e15",
      { $set: { age: 18 }, $push: { tags: "updated" } },
      { new: true }
    );
    // Model.findByIdAndUpdate(id, update operations, options); $set update a field; $push add a new item into array; { new: true } to return the updated document instead of the old one
    console.log("updatedUser", updatedUser);
  } catch (e) {
    console.log("error->", e);
  }
}
runQueryExample();
