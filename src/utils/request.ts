import axios from "axios";
import { ElMessage } from "element-plus";

axios.defaults.timeout = 10000000; // Timeout duration
axios.defaults.baseURL = "http://10.249.45.133:8080/"; // Base URL

// Data format conversion
axios.defaults.transformRequest = function (data) {
  data = JSON.stringify(data);
  return data;
};

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    try {
      // Set front-end token
      const token = localStorage.getItem("token");
      if (token && token !== "") {
        config.headers["token"] = token;
      }
    } catch {
      console.log("Failed to set token");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    console.log(response, "sss");
    if (response.data.code !== 0) {
      ElMessage({
        showClose: true,
        message: response.data.msg,
        type: "error",
      });
    } else {
      return response.data;
    }
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          error.message = `Bad request`;
          break;
        case 401:
          error.message = `Unauthorized, please log in again`;
          break;
      }
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
    ElMessage({
      showClose: true,
      message: error.message,
      type: "error",
    });
    return Promise.reject(error.response); // Return the error information returned by the interface
  }
);

export default axios;
