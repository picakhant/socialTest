import axios from "axios";
import apiServices from "./apiservice";

const authBaseUrl = "/auth";

const register = async (userData) => {
  try {
    const response = await apiServices.post(
      `${authBaseUrl}/register`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const login = async (userData) => {
  try {
    const response = await apiServices.post(`${authBaseUrl}/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    const response = await apiServices.get(`${authBaseUrl}/logout`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const forgotPassword = async (email) => {
  try {
    const response = await apiServices.post(`${authBaseUrl}/forgotpassword`, {
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const resetPassword = async (resetToken, newPassword) => {
  try {
    const response = await apiServices.patch(
      `${authBaseUrl}/resetpassword/${resetToken}`,
      { newPassword }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const changePassword = async (passwordData) => {
  try {
    const response = await apiServices.patch(
      `${authBaseUrl}/changepassword`,
      passwordData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logoutAllDevices = async () => {
  try {
    const response = await apiServices.get(`${authBaseUrl}/logoutalldevices`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const verifyEmail = async (token) => {
  try {
    const response = await apiServices.get(
      `${authBaseUrl}/verifyemail/${token}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  changePassword,
  logoutAllDevices,
  verifyEmail,
};
