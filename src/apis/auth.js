// src/apis/auth.js
import axios from "axios";
import { useAuthStore } from "@/stores/auth";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_MAIN_API_SERVER_URL, // API의 기본 URL을 설정하세요.
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

// API 정의 부분

// 회원가입
export const postRegister = async (data) => {
  try {
    const response = await apiClient.post(import.meta.env.VITE_USERS, data);
    return response.data;
  } catch (error) {
    console.log("API 요청 에러:", error);
    throw error;
  }
};

// 로그인
export const postSignIn = async (data) => {
  try {
    const response = await apiClient.post(
      import.meta.env.VITE_USERS + import.meta.env.VITE_SIGNIN,
      data,
    );
    return response;
  } catch (error) {
    console.log("API 요청 에러:", error);
    throw error;
  }
};

// 회원 정보 조회
export const getUserData = async (id) => {
  try {
    const authStore = useAuthStore();
    const token = authStore.token;
    if (!id) {
      const response = await apiClient.get(import.meta.env.VITE_USERS, {
        headers: {
          "access-token": token, // 헤더에 토큰 추가
        },
      });

      return response.data;
    } else {
      const response = await apiClient.get(
        import.meta.env.VITE_USERS + `/${id}`,
        {
          headers: {
            "access-token": token, // 헤더에 토큰 추가
          },
        },
      );
      return response.data;
    }
  } catch (error) {
    console.log("API 요청 에러:", error);
    throw error;
  }
};

// 이메일 검증 코드 요청
export const postEmailVerificationCode = async (data) => {
  try {
    const response = await apiClient.post(
      import.meta.env.VITE_USERS +
        import.meta.env.VITE_SEND_EMAIL_VERIFICATION_CODE,
      data,
    );
    return response.data;
  } catch (error) {
    console.log("API 요청 에러:", error);
    throw error;
  }
};

// 이메일 검증
export const postEmailVerification = async (data) => {
  try {
    const response = await apiClient.post(
      import.meta.env.VITE_USERS + import.meta.env.VITE_EMAIL_VERIFY,
      data,
    );
    return response.data;
  } catch (error) {
    console.log("API 요청 에러:", error);
    throw error;
  }
};

// README.md 수정
export const modifyReadme = async (data) => {
  try {
    const authStore = useAuthStore();
    const token = authStore.token;

    const response = await apiClient.post(
      import.meta.env.VITE_USERS + import.meta.env.VITE_MODIFY_README,
      data,
      {
        headers: {
          "access-token": token, // 헤더에 토큰 추가
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log("API 요청 에러:", error);
    throw error;
  }
};

// 회원정보 수정
export const modifyUserData = async (data) => {
  try {
    const authStore = useAuthStore();
    const token = authStore.token;

    const response = await apiClient.patch(import.meta.env.VITE_USERS, data, {
      headers: {
        "access-token": token, // 헤더에 토큰 추가
      },
    });
    return response.data;
  } catch (error) {
    console.log("API 요청 에러:", error);
    throw error;
  }
};

// 비밀번호 수정
export const modifyUserPassword = async (data) => {
  try {
    const authStore = useAuthStore();
    const token = authStore.token;

    const response = await apiClient.post(
      import.meta.env.VITE_USERS + import.meta.env.VITE_MODIFY_PASSWORD,
      data,
      {
        headers: {
          "access-token": token, // 헤더에 토큰 추가
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log("API 요청 에러:", error);
    throw error;
  }
};

// 비밀번호 수정 이메일 인증 요청
export const postEmailVerificationCodeForPassword = async (data) => {
  try {
    const response = await apiClient.post(
      import.meta.env.VITE_USERS +
        import.meta.env.VITE_SEND_EMAIL_VERIFICATION_CODE_PASSWORD,
      data,
    );
    return response.data;
  } catch (error) {
    console.log("API 요청 에러:", error);
    throw error;
  }
};

// 익명채팅 닉네임 변경
export const postChattingNickname = async (nickname) => {
  try {
    const authStore = useAuthStore();
    const token = authStore.token;

    const response = await apiClient.post(
      import.meta.env.VITE_USERS + import.meta.env.VITE_CHATTING_NICKNAME,
      {
        nickname: nickname,
      },
      {
        headers: {
          "access-token": token, // 헤더에 토큰 추가
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log("API 요청 에러:", error);
    throw error;
  }
};

// 이전 채팅
export const chattingData = async (id) => {
  try {
    const authStore = useAuthStore();
    const token = authStore.token;

    const response = await apiClient.get(
      import.meta.env.VITE_CHATTING_BEFORE + id,
      {
        headers: {
          "access-token": token, // 헤더에 토큰 추가
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log("API 요청 에러:", error);
    throw error;
  }
};
