import React, { useState } from "react";

interface UserType {
  profileImg: string;
  name: string;
}

interface PhotoType {
  img: string;
  date: string;
}

interface Props {
  user: UserType;
  photo: PhotoType;
}

/**
 * 사진 상세보기 특징 컴포넌트
 */

const PhotoFeatures = ({ user, photo }: Props): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  /**
   * 좋아요 기능 추후 추가
   */
  const select = () => {
    if (isActive == false) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  /**
   * 투표 완료 기능 추후 추가
   */

  return (
    <div className="w-11/12 h-full flex justify-between">
      <div className="w-40 flex justify-between items-center">
        <img
          src={user.profileImg}
          alt="profile"
          className="w-10 h-10 rounded-xl"
        />
        <div className="flex flex-col">
          <span className="text-2xl">{user.name}</span>
          <span className="text-xs">{photo.date}</span>
        </div>
      </div>
      <div className="w-20 flex justify-between items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isActive ? "pink" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={isActive ? "pink" : "currentColor"}
            className="w-8 h-8"
            onClick={select}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PhotoFeatures;
