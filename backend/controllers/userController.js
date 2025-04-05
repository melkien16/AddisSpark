import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc     Auth user & get token
// @route  POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc     user && get token
// @route  POST /api/users/login
// @access  Public 
const registerUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc    Logout user / clear cookie
// @route  POST /api/users/logout
// @access  Private

const logoutUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc    Get user profile
// @route  GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc    Update user profile
// @route  PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc    Get all users
// @route  GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc    Get user by id
// @route  GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc    Delete user
// @route  DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc    Update user
// @route  PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};