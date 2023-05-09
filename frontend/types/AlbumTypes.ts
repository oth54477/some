export interface CurrentAlbumType {
  id: number;
  img: string;
  name: string;
  count: number;
}

export interface FavoriteAlbumType {
  album_id: number;
  thumbnail_photo_url: string;
  album_name: string;
  album_created_date: string;
}

export interface TotalAlbumType {
  album_id: number;
  thumbnail_photo_url: string;
  album_name: string;
  album_created_date: string;
  isAlbumFav: boolean;
}

interface MemberType {
  id: number;
  profile_img_url: string;
}

export interface previewPhotoType {
  id: number;
  img: string;
}

// TODO : API 명세서 보고 Type 만들기
/**
 * [GET] 사진 정보
 * @returns
 */
export interface requestPhotosType {
  albumId: number;
  categoryId: number;
  userId: string;
}

export interface AlbumInfoType {
  album_id: number;
  album_name: string;
  members: MemberType[];
  isAlbumFav: boolean;
  album_created_date: string;
}

export interface PhotosType {
  totalPhotoCnt: number;
  totalPhotoId: number[];
  albumPhotoList: PhotoType[];
}
export interface PhotoType {
  albumId: number;
  categoryId: number[];
  gpsLatitude: string | null;
  gpsLongitude: string | null;
  likeStatus: string;
  photoId: number;
  s3Url: string;
  shootDate: string;
  uploadedDate: string;
  userId: string;
  userName: string;
  userProfileImg: string;
}

export interface photosRequest {
  albumId: number;
  categoryId: number;
  userId: number[];
}

export interface requestPartType {
  albumId: number;
  formData: FormData;
}

export interface usePutAlbumNameType {
  album_id: number;
  new_album_name: string;
}

export interface AlbumPhotosType {
  status_code: number;
  message: string;
  data: {
    albumPhotoList: {
      content: {
        photoId: number;
        uploadedDate: string;
        s3Url: string;
        categoryId: number[];
        userId: string;
        albumId: number;
      }[];
      pageable: {
        sort: {
          empty: boolean;
          sorted: boolean;
          unsorted: boolean;
        };
        offset: 1;
        pageNumber: 1;
        pageSize: 1;
        paged: true;
        unpaged: false;
      };
      totalPages: 2;
      totalElements: 2;
      last: true;
      size: 1;
      number: 1;
      sort: {
        empty: true;
        sorted: false;
        unsorted: true;
      };
      numberOfElements: 1;
      first: false;
      empty: false;
    };
  };
}

export interface PhotoPageType {
  is_last: boolean;
  total_page: number;
  is_first: boolean;
  now_page: number;
  albumPhotoList: {
    photoId: number;
    uploadedDate: string;
    s3Url: string;
    categoryId: number[];
    userId: string;
    albumId: number;
  }[];
}